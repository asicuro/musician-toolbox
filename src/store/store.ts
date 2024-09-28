import { configureStore } from "@reduxjs/toolkit";
import TempoSlice from './reducers/tempoSlice';

const store = configureStore({
    reducer:{
        tempo: TempoSlice,
    },
});
export default store;