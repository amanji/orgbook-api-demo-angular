import { Component, Input } from '@angular/core';

@Component({
  selector: 'ob-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  @Input() loading = false;
}
