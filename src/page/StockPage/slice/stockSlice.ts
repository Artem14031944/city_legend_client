import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const name = 'stockSlice' as 'stockSlice';

export type InitialStockSlice = {
    name: string,
}

const initialState: InitialStockSlice = {
    name: '',
}

const stockSlice = createSlice({
    name,
    initialState,
    reducers: {  
        setSearchMember: (state, action: PayloadAction<InitialStockSlice['name']>) => {
            state.name = action.payload;
        },  
    },
});

const getState = (state: any) => state[name] as InitialStockSlice;

export default {
    ...stockSlice,
    selectors: {
        getState,
    }
}