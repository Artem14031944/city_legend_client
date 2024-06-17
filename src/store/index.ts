import { configureStore } from '@reduxjs/toolkit';
import stockSlice, { InitialStockSlice } from '../page/StockPage/slice/stockSlice';

export type RootState = {
    stockSlice: InitialStockSlice,  
};

export default configureStore({
    reducer: { stocklice: stockSlice.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});