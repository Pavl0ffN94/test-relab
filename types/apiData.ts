export interface IPaginatedResponse<T> {
  total: number;
  per_page: number;
  page: number;
  limit: number;
  offset: number;
  items: T[];
}
