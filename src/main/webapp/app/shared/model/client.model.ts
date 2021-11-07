export interface IClient {
  id?: number;
  idC?: number | null;
  firstNameC?: string | null;
  lastNameC?: string | null;
  email?: string | null;
  phoneNumberC?: number | null;
}

export const defaultValue: Readonly<IClient> = {};
