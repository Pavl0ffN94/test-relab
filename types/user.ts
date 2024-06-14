export interface IUser {
  id: number;
  name: string;
  role: string;
  ctime: number;
}

export interface GetUsersResponse {
  items: IUser[];
  total: number;
}
