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
    const { error } = await supabase
        .from('results')
        .insert([{
            student_name: result.studentName,
            score: result.score,
            total: result.total,
            rank: result.rank
        }]);

    if (error) console.error('Error saving result:', error);
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
