const USERS_KEY = 'quiz_users';
const RESULTS_KEY = 'quiz_results';
const CURRENT_USER_KEY = 'quiz_current_user';

// Initialize storage if empty
if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify([
        { username: 'admin', password: '123', role: 'admin', name: 'Admin User' }
    ]));
}
if (!localStorage.getItem(RESULTS_KEY)) {
    localStorage.setItem(RESULTS_KEY, JSON.stringify([]));
}

export const loginUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY));
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        return { success: true, user };
    }
    return { success: false, message: 'Invalid credentials' };
};

export const registerUser = (name, username, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY));
    if (users.find(u => u.username === username)) {
        return { success: false, message: 'Username already exists' };
    }
    const newUser = { username, password, role: 'student', name };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    return { success: true, user: newUser };
};

export const logoutUser = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
};

export const saveResult = (result) => {
    const results = JSON.parse(localStorage.getItem(RESULTS_KEY));
    results.push({
        ...result,
        date: new Date().toISOString()
    });
    localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
};

export const getResults = () => {
    return JSON.parse(localStorage.getItem(RESULTS_KEY));
};
