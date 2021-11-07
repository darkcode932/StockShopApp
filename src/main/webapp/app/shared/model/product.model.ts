import dayjs from 'dayjs';

export interface IProduct {
  id?: number;
  idP?: string | null;
  title?: string | null;
  type?: string | null;
  retentionDate?: string | null;
  description?: string | null;
}

export const defaultValue: Readonly<IProduct> = {};
