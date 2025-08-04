import { createSlice , PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode ='light' | 'dark';

interface ThemeState {
    mode: ThemeMode
}
const getinitialstate =():ThemeMode=>{
    if(typeof window !== 'undefined'){
        const storedtheme = localStorage.getItem('theme') as ThemeMode | null;
        if(storedtheme) return storedtheme

        const prefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
        return prefersDark ? "dark" :'light'
    }
    return 'light';
}
const initialState :ThemeState={
    mode:getinitialstate()
}

const themeslice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme:(state)=>{
            state.mode = state.mode === 'light' ? 'dark' :'light'
        },
        settheme :(state ,action: PayloadAction<ThemeMode>)=>{
            state.mode = action.payload
        }
    }
})

export const {toggleTheme,settheme} =themeslice.actions;
export default themeslice.reducer;