import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        agents: [],
    },
    reducers: {
        setAgents: (state, action) => {
            // console.log('setAgents', action.payload);
            state.agents = action.payload;
        },
        clearAgents: (state, action) => {
            // console.log('setAgents', action.payload);
            state.agents = [];
        },
    },
});

//actions
export const { clearAgents, setAgents } = homeSlice.actions;

//api calls


export default homeSlice.reducer;
