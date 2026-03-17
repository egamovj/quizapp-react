import { db } from './firebase';
import { 
    collection, 
    addDoc, 
    getDocs, 
    query, 
    where, 
    limit, 
    orderBy, 
    updateDoc, 
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

const CURRENT_USER_KEY = 'quiz_current_user';

// Keep user session in localStorage for persistence across reloads
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
};

export const logoutUser = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
};

// --- Async Firebase Functions ---

export const loginUser = async (username, password) => {

    if (username === 'admin' && password === '8581319') {
        const adminUser = { username: 'admin', role: 'admin', name: 'Admin User' };
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(adminUser));
        return { success: true, user: adminUser };
    }

    // Check Firestore for student
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", username), where("password", "==", password), limit(1));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return { success: false, message: 'Invalid credentials' };
        }

        const userData = querySnapshot.docs[0].data();
        const userId = querySnapshot.docs[0].id;
        const user = { ...userData, id: userId, role: 'student' };
        
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        return { success: true, user };
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, message: 'Login failed: ' + error.message };
    }
};

export const registerUser = async (name, username, password) => {
    try {
        // Check if user exists
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", username), limit(1));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            return { success: false, message: 'Username already exists' };
        }

        // Insert new user
        const docRef = await addDoc(collection(db, "users"), {
            name,
            username,
            password,
            createdAt: new Date().toISOString()
        });

        const newUser = { id: docRef.id, name, username, password, role: 'student' };
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
        return { success: true, user: newUser };
    } catch (error) {
        console.error("Registration error:", error);
        return { success: false, message: 'Registration failed: ' + error.message };
    }
};

export const saveResult = async (result) => {
    try {
        await addDoc(collection(db, "results"), {
            student_name: result.studentName,
            score: result.score,
            total: result.total,
            rank: result.rank,
            answers: result.answers || [],
            category: result.category || null,
            created_at: new Date().toISOString()
        });
        console.log('Result saved successfully to Firebase.');
    } catch (error) {
        console.error('Firebase Save Error:', error.message);
    }
};

export const getResults = async () => {
    try {
        const resultsRef = collection(db, "results");
        const q = query(resultsRef, orderBy("created_at", "desc"));
        const querySnapshot = await getDocs(q);
        
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error fetching results:', error);
        return [];
    }
};

export const getLeaderboard = async () => {
    try {
        // Fetch all results
        const resultsRef = collection(db, "results");
        const querySnapshot = await getDocs(resultsRef);
        
        const data = querySnapshot.docs.map(doc => doc.data());

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
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
    }
};

export const updateAvatar = async (username, avatarId) => {
    // Keep local for now as per original code
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
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "!=", "admin"));
        const querySnapshot = await getDocs(q);
        
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

export const updateUser = async (currentUsername, updates) => {
    try {
        // Find document ID for currentUsername
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("username", "==", currentUsername), limit(1));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return { success: false, message: 'User not found' };
        }

        const userDoc = querySnapshot.docs[0];
        await updateDoc(doc(db, "users", userDoc.id), updates);

        const updatedData = { ...userDoc.data(), ...updates };

        // Update local session if username changed or just to sync
        const currentUser = getCurrentUser();
        if (currentUser && currentUser.username === currentUsername) {
            const updatedUser = { ...currentUser, ...updatedData, id: userDoc.id };
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
            return { success: true, user: updatedUser };
        }

        return { success: true, user: { ...updatedData, id: userDoc.id, role: 'student' } };
    } catch (error) {
        console.error("Update user error:", error);
        return { success: false, message: error.message };
    }
};
