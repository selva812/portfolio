import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = 'light' | 'dark';

interface ThemeState {
    mode: ThemeMode
}

const getInitialState = (): ThemeMode => {
    // if (typeof window !== 'undefined') {
    //     const storedTheme = localStorage.getItem('theme') as ThemeMode | null;
    //     if (storedTheme) return storedTheme;

    //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //     return prefersDark ? "dark" : "light";
    // }
    return 'light';
}

const initialState: ThemeState = {
    mode: getInitialState()
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            const newMode = state.mode === 'light' ? 'dark' : 'light';
            state.mode = newMode;
            // Persist to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', newMode);
            }
        },
        setTheme: (state, action: PayloadAction<ThemeMode>) => {
            state.mode = action.payload;
            // Persist to localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', action.payload);
            }
        }
    }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;