import React from 'react';
import { Box } from '@mui/material';
import ResponsiveAppBar from './components/AppBar';
import MyToastr from './common/components/MyToast';
import TableStocks from './page/StockPage';

export default function App() {
  return (
    <Box>
      <ResponsiveAppBar/>
      <TableStocks/>
      <MyToastr/>
    </Box>
  );
};