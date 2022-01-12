import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PagedResult } from '../../interfaces/paged-result';

import { Topic } from '../../interfaces/topic';

@Component({
  selector: 'ob-search-topic-list',
  templateUrl: './search-topic-list.component.html',
  styleUrls: ['./search-topic-list.component.css'],
})
export class SearchTopicListComponent {
  @Input() loading = false;
  @Input() topicResponse: PagedResult<Topic>;

  @Output() page = new EventEmitter<string>();

  onPage(url: string): void {
    this.page.emit(url);
  }
}
