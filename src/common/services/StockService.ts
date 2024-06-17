import { TypeStockResponse, TypeStocksAndMessageResponse } from "../models/response/StockResponse";
import { AxiosResponse } from "axios";
import $api from "../http";

export default class StockService {
    static async getAll(): Promise<AxiosResponse<TypeStockResponse[]>> {
        return $api.get<TypeStockResponse[]>('/stock/get_stocks');
    };

    static async update(id: number, stock: TypeStockResponse): Promise<AxiosResponse<TypeStocksAndMessageResponse>> {
        return $api.patch<TypeStocksAndMessageResponse>(`/stock/update/${id}`, { stock });
    };

    static async create(stock: TypeStockResponse): Promise<AxiosResponse<TypeStocksAndMessageResponse>> {
        return $api.post<TypeStocksAndMessageResponse>('/stock/create', { stock });
    };

    static async delete(id: number): Promise<AxiosResponse<TypeStocksAndMessageResponse>> {
        return $api.delete<TypeStocksAndMessageResponse>(`/stock/delete/${id}`);
    };
};