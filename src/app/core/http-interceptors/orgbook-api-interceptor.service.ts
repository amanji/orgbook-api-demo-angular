import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { ORGBOOK_URL } from '../../search/services/url.service';

@Injectable()
export class OrgbookApiInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const orgbookApiReq = req.clone({
      url:
        (req.url.includes('/assets/i18n') ? '' : ORGBOOK_URL) +
        req.url.replace(ORGBOOK_URL, ''),
    });

    return next.handle(orgbookApiReq);
  }
}
