export type TypeStockResponse = {
  id: number,
  name: string,
  number_present: number,
  number_days_take_present: number,
  number_days_receive_present: number,
  description: string,
  numbers_cards: string,
  present_id: number,
};

export type TypeStocksAndMessageResponse = {
  message: string,
  stocks: TypeStockResponse[],
};