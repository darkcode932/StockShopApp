import dayjs from 'dayjs';

export interface IAdministrator {
  id?: number;
  idA?: number | null;
  firstNameA?: string | null;
  lastNameA?: string | null;
  birthdayA?: string | null;
}

export const defaultValue: Readonly<IAdministrator> = {};
