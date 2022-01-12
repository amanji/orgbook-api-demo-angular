import { SearchFacetField } from './search-facet-field';

export interface ProcessedSearchFacetField extends SearchFacetField {
  tag: string;
  queryParam: any;
}
