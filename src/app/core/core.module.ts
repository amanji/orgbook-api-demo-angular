import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';

import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  imports: [HttpClientModule, MaterialModule],
  providers: [httpInterceptorProviders],
})
export class CoreModule {}
