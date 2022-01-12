import { Component, Input } from '@angular/core';

import { Topic } from '../../interfaces/topic';

@Component({
  selector: 'ob-search-topic',
  templateUrl: './search-topic.component.html',
  styleUrls: ['./search-topic.component.css'],
})
export class SearchTopicComponent {
  @Input() topic: Topic;
}
