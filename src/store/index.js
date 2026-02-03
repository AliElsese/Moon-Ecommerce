import { create } from "zustand";

export const useAuthStore = create((set) => ({
    token: null,
    userData: null,
    isAuthenticated: false,

    login: (token, userData) => {
        set({
            token,
            userData,
            isAuthenticated: true
        })
    }
}))