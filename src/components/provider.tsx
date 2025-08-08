"use client";

import { store } from "@/store/store";
import { setTheme } from "@/store/themeslicer";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";


export default function Providers({ children }: { children: ReactNode }) {
  // Initialize theme on client side
  useEffect(() => {
    const handleTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      const initialTheme = storedTheme 
        ? storedTheme as 'light' | 'dark'
        : prefersDark ? 'dark' : 'light';
      
      // Apply to HTML element
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(initialTheme);
      
      // Update Redux store
      store.dispatch(setTheme(initialTheme));
    };

    handleTheme();

    // Watch for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleTheme);

    return () => mediaQuery.removeEventListener("change", handleTheme);
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}