import { supabase } from './supabase';

const CURRENT_USER_KEY = 'quiz_current_user';

// Keep user session in localStorage for persistence across reloads
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
};

export const logoutUser = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
};

// --- Async Supabase Functions ---

export const loginUser = async (username, password) => {
    // For simplicity, we will still use a hardcoded admin check
    // But for students, we will check the 'users' table in Supabase

    if (username === 'admin' && password === '8581319') {
        const adminUser = { username: 'admin', role: 'admin', name: 'Admin User' };
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(adminUser));
        return { success: true, user: adminUser };
    }

    // Check Supabase for student
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();

    if (error || !data) {
        return { success: false, message: 'Invalid credentials' };
    }

    const user = { ...data, role: 'student' };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    return { success: true, user };
};

export const registerUser = async (name, username, password) => {
    // Check if user exists
    const { data: existing } = await supabase
        .from('users')
        .select('username')
        .eq('username', username)
        .single();

    if (existing) {
        return { success: false, message: 'Username already exists' };
    }

    // Insert new user
    const { data, error } = await supabase
        .from('users')
        .insert([{ name, username, password }])
        .select()
        .single();

    if (error) {
        return { success: false, message: 'Registration failed: ' + error.message };
    }

    const newUser = { ...data, role: 'student' };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    return { success: true, user: newUser };
};

export const saveResult = async (result) => {
    // Try full save with new features
    const { error } = await supabase
        .from('results')
        .insert([{
            student_name: result.studentName,
            score: result.score,
            total: result.total,
            rank: result.rank,
            answers: JSON.stringify(result.answers || []),
            category: result.category || null
        }]);

    if (error) {
        console.warn('Full save failed, attempting fallback (simple save):', error.message);

        // Fallback: Simple save without newer columns (compat for old schema)
        const { error: fallbackError } = await supabase
            .from('results')
            .insert([{
                student_name: result.studentName,
                score: result.score,
                total: result.total,
                rank: result.rank
            }]);

        if (fallbackError) {
            console.error('Critical error saving result (fallback also failed):', fallbackError.message);
        } else {
            console.log('Result saved successfully using fallback mode.');
        }
    }
};

export const getResults = async () => {
    const { data, error } = await supabase
        .from('results')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching results:', error);
        return [];
    }
    return data;
};

export const getLeaderboard = async () => {
    // Fetch all results
    const { data, error } = await supabase
        .from('results')
        .select('*');

    if (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
    }

    // Aggregate scores by student
    const leaderboard = {};
    data.forEach(result => {
        if (!leaderboard[result.student_name]) {
            leaderboard[result.student_name] = {
                name: result.student_name,
                totalScore: 0,
                missions: 0,
                sRank: 0
            };
        }
        leaderboard[result.student_name].totalScore += result.score;
        leaderboard[result.student_name].missions += 1;
        if (result.rank === 'S') leaderboard[result.student_name].sRank += 1;
    });

    // Convert to array and sort by total score
    return Object.values(leaderboard).sort((a, b) => b.totalScore - a.totalScore);
};

export const updateAvatar = async (username, avatarId) => {
    // In a real app with a proper users table schema update, we would update the user row.
    // For now, since we might not have an avatar column, we'll just store it in local storage 
    // or assume the users table has a 'metadata' or 'avatar' column.
    // Let's try to update the 'users' table assuming we can add a column or it exists.
    // If not, we will fallback to localStorage for this demo to ensure it works without DB migration scripts.

    // Ideally:
    /*
    const { error } = await supabase
        .from('users')
        .update({ avatar: avatarId })
        .eq('username', username);
    */

    // For this environment where I cannot easily run SQL migrations:
    localStorage.setItem(`avatar_${username}`, avatarId);
    return { success: true };
};

export const getAvatar = (username) => {
    return localStorage.getItem(`avatar_${username}`) || '🧑‍💻';
};

export const getUsers = async () => {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .neq('username', 'admin');

    if (error) {
        console.error('Error fetching users:', error);
        return [];
    }
    return data;
};

export const updateUser = async (currentUsername, updates) => {
    // Update in Supabase
    const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('username', currentUsername)
        .select()
        .single();

    if (error) {
        return { success: false, message: error.message };
    }

    // Update local session if username changed or just to sync
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.username === currentUsername) {
        const updatedUser = { ...currentUser, ...data };
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
        return { success: true, user: updatedUser };
    }

    return { success: true, user: { ...data, role: 'student' } };
};
