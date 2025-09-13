import { create } from "zustand"

export const useThemeStore = create((set) => ({
    websiteTheme: localStorage.getItem("chat-theme") || "night",

    setWebsiteTheme: (theme) => {
        localStorage.setItem("chat-theme", theme)
        set({ websiteTheme: theme })
    }
}))