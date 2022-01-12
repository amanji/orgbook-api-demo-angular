import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BaseService } from '../../shared/services/base.service';
import { PagedResult } from '../interfaces/paged-result';
import { AggregateAutocomplete } from '../interfaces/aggregate-autocomplete';
import { SearchTopic } from '../interfaces/search-topic';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends BaseService {
  public defaultQueryParameters = {
    inactive: '',
    latest: 'true',
    revoked: 'false',
    issuer_id: '',
    credential_type_id: '',
  };

  constructor(private http: HttpClient) {
    super();
  }

  /**
   *
   */
  public extendDefault(options: any = {}): any {
    return { ...this.defaultQueryParameters, ...options };
  }

  /**
   * getAggregateAutocomplete
   */
  public getAggregateAutocomplete(
    q: string
  ): Observable<PagedResult<AggregateAutocomplete>> {
    const queryParams = new HttpParams({
      fromObject: this.extendDefault({ q }),
    });
    const options = { params: queryParams };
    return this.http
      .get<PagedResult<AggregateAutocomplete>>('/search/autocomplete', options)
      .pipe(
        catchError(
          this.handleError<PagedResult<AggregateAutocomplete>>(
            'getAggregateAutocomplete',
            {} as PagedResult<AggregateAutocomplete>
          )
        )
      );
  }

  /**
   * getTopicFacetsPage
   */
  public getTopicFacetsPage(url: string): Observable<SearchTopic> {
    return this.http
      .get<SearchTopic>(url)
      .pipe(
        catchError(
          this.handleError<SearchTopic>('getTopicFacetsPage', {} as SearchTopic)
        )
      );
  }
}
