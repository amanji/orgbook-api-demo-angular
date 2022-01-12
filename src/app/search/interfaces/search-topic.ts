export interface SearchTopic {}

import { PagedResult } from './paged-result';
import { SearchFacetField } from './search-facet-field';
import { Topic } from './topic';

export interface SearchTopic {
  facets: Record<string, Record<string, Record<string, SearchFacetField[]>>>;
  objects: PagedResult<Topic>;
}
