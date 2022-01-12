import { Component, EventEmitter, Output, Input } from '@angular/core';

import { combineLatest, BehaviorSubject, merge, of } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  filter,
  startWith,
} from 'rxjs/operators';

import { AggregateAutocomplete } from '../../interfaces/aggregate-autocomplete';
import { PagedResult } from '../../interfaces/paged-result';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'ob-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  @Input() set term(q: string) {
    this.onAutocomplete(q);
  }

  @Output() search = new EventEmitter<any>();
  @Output() clear = new EventEmitter<void>();

  private autocompleteLoadingSubject$ = new BehaviorSubject<boolean>(false);
  private autocompleteTermSubject$ = new BehaviorSubject<string>('');
  private autocompleteSearchSubject$ = new BehaviorSubject<string>('');

  private autocompleteLoading$ =
    this.autocompleteLoadingSubject$.asObservable();
  private autocompleteTerm$ = this.autocompleteTermSubject$.asObservable();
  private autocompleteResponse$ = merge(
    this.autocompleteTermSubject$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.autocompleteLoadingSubject$.next(true)),
      switchMap((q) => {
        if (!q) {
          return of({} as PagedResult<AggregateAutocomplete>);
        }
        return this.searchService.getAggregateAutocomplete(q);
      }),
      tap(() => this.autocompleteLoadingSubject$.next(false))
    )
  );
  private autocompleteSearch$ = this.autocompleteSearchSubject$.pipe(
    filter((q) => !!q),
    tap((name) => this.search.emit({ name }))
  );

  label = 'Registered BC Corporation Search';
  placeholder = 'Start typing to search the OrgBook database';

  vm$ = combineLatest([
    this.autocompleteLoading$,
    this.autocompleteTerm$.pipe(startWith('')),
    this.autocompleteResponse$.pipe(
      startWith({} as PagedResult<AggregateAutocomplete>)
    ),
    this.autocompleteSearch$.pipe(startWith('')),
  ]).pipe(
    map(([loading, autocompleteTerm, autocompleteResponse]) => ({
      loading,
      autocompleteTerm,
      autocompleteResponse,
    }))
  );

  constructor(private searchService: SearchService) {}

  onAutocomplete(q: string): void {
    this.autocompleteTermSubject$.next(q);
  }

  onSearch(term: string): void {
    this.autocompleteSearchSubject$.next(term);
  }

  onClear(): void {
    this.term = '';
    this.clear.emit();
  }
}
