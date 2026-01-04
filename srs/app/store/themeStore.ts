import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "dark", // dark | neon | cosmic

  setTheme: (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },
}));
