import { useEffect, useState } from 'react';
import { TypePresents, TypeStockResponse } from '../../common/models/response/StockResponse';
import { Box } from '@mui/material';
import { format } from 'date-fns';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import EditIcon from '@mui/icons-material/Edit';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import styles from './style.module.css';
import StockService from '../../common/services/StockService';
import toast from 'react-hot-toast';

const columns = [
    { id: 1, title: 'Название рассылки' },
    { id: 2, title: 'Дата рассылки' },
    { id: 3, title: 'Кол-во отправленных подарков' },
    { id: 4, title: 'Действия' },
];

export default function TableStocks() {
  const [stocks, setStocks] = useState<TypeStockResponse[]>([]);
  const [presents, setPresents] = useState<TypePresents[]>([]);
  const [isOpenCreateOrUpdateModal, setOpenCreateOrUpdateModal] = useState<boolean>(false);
  const handleOpen = () => () => setOpenCreateOrUpdateModal(true);

  useEffect(() => {
    StockService.getAll()
    .then(({ data }) => {
        setPresents(data.presents ?? []);
        setStocks(data.stocks.rows ?? []);
    } )
    .catch(err => toast.error(err))
  }, []);

  return (
    <Box className={styles.wrapper}>
      <TableContainer component={Paper}sx={{ minWidth: 650, maxWidth: 1200, maxHeight: 650 }}>
        <Table aria-label="simple table">
        <TableHead>
            <TableRow>
                {columns.map(col => <TableCell key={col.id}>{col.title}</TableCell>)}
            </TableRow>
        </TableHead>
        <TableBody>
            {stocks?.map((stock) => (
            <TableRow key={stock.id} sx={{ '&:last-child td, &:last-child th':{ border: 0 } }}>
                <TableCell className={styles.row_text_hiden} align="left"><p>{stock.name}</p></TableCell>
                <TableCell align="left">{format(stock.createdAt, 'dd.MM.yyyy')}</TableCell>
                <TableCell align="left">{stock.number_present}</TableCell>
                <TableCell align="left" >
                    <EditIcon sx={{ cursor: 'pointer' }}/>
                    <DeleteForeverIcon sx={{ cursor: 'pointer' }}/>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
      </TableContainer>
      {/* {isOpenCreateOrUpdateModal && 
       <ShowMoreInfoModal
        isOpen={isOpenCreateOrUpdateModal} 
        setOpen={setOpenCreateOrUpdateModal} 
      />} */}
    </Box>
  );
};