import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false,
    numerator: 4,
    denominator: 4, 
    bpm: 120,
}
const TempoSlice = createSlice({
    name: "tempo",
    initialState,
    reducers: {
        assignActive: (state,action) => { state.active = action.payload},
        assignNumerator: (state, action) => {state.numerator = action.payload;},
        assignDenominator: (state, action) => {state.denominator = action.payload;},
        assignBpm: (state, action) => { state.bpm = action.payload;},
    }
});


export const {assignActive, assignNumerator,assignDenominator, assignBpm} = TempoSlice.actions;
export default TempoSlice.reducer;