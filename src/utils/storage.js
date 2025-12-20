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
    // Try full save with detailed answer breakdown
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
        // If answers column is missing (old schema), use fallback
        if (error.message.includes('column "answers"') || error.code === '42703') {
            const { error: fallbackError } = await supabase
                .from('results')
                .insert([{
                    student_name: result.studentName,
                    score: result.score,
                    total: result.total,
                    rank: result.rank
                }]);

            if (fallbackError) {
                console.error('Critical: Storage fallback failed:', fallbackError.message);
            } else {
                console.log('Result saved successfully (Compatibility Mode: No detailed answers stored).');
            }
        } else {
            console.error('Supabase Save Error:', error.message);
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

    // For this environment where I cannot easily run SQL migrations:
    localStorage.setItem(`avatar_${username}`, avatarId);
    return { success: true };
};

export const getAvatar = (username) => {
    return localStorage.getItem(`avatar_${username}`) || '🧑‍💻';
};

// --- Achievements ---

export const ACHIEVEMENTS = {
    MASTER_CODER: { id: 'master_coder', icon: '🏆', title: 'Master Coder', description: 'Score 100% on any quiz.' },
    SPEED_DEMON: { id: 'speed_demon', icon: '⚡', title: 'Speed Demon', description: 'Complete a quiz in under 60 seconds.' },
    NIGHT_OWL: { id: 'night_owl', icon: '🦉', title: 'Night Owl', description: 'Complete a quiz after 10 PM.' },
    FIRST_BLOOD: { id: 'first_blood', icon: '🩸', title: 'First Blood', description: 'Complete your first quiz.' },
    SURVIVOR: { id: 'survivor', icon: '🛡️', title: 'Survivor', description: 'Complete a quiz with a score above 60%.' }
};

export const unlockAchievement = (username, achievementId) => {
    const key = `achievements_${username}`;
    const earned = JSON.parse(localStorage.getItem(key) || '[]');
    if (!earned.includes(achievementId)) {
        earned.push(achievementId);
        localStorage.setItem(key, JSON.stringify(earned));
        return true; // Newly unlocked
    }
    return false; // Already unlocked
};

export const getEarnedAchievements = (username) => {
    const key = `achievements_${username}`;
    return JSON.parse(localStorage.getItem(key) || '[]');
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
