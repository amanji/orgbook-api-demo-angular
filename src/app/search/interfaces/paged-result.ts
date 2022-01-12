export interface PagedResult<T> {
  total: number;
  page_size: number;
  page: number;
  first_index: number;
  last_index: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
