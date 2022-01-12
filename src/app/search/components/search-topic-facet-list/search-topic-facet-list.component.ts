import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProcessedSearchFacetField } from '../../interfaces/processed-search-facet-field';

@Component({
  selector: 'ob-search-topic-facet-list',
  templateUrl: './search-topic-facet-list.component.html',
  styleUrls: ['./search-topic-facet-list.component.css'],
})
export class SearchTopicFacetListComponent {
  @Input() facets: Record<string, ProcessedSearchFacetField>;

  @Output() facet = new EventEmitter<any>();

  /**
   * onFacetSelected
   */
  public onFacet(query): void {
    this.facet.emit(query);
  }
}
