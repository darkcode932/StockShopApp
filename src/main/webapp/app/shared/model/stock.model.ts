import dayjs from 'dayjs';

export interface IStock {
  id?: number;
  idP?: number | null;
  productName?: string | null;
  entryDate?: string | null;
  releaseDate?: string | null;
}

export const defaultValue: Readonly<IStock> = {};
