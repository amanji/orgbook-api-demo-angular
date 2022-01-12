import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './components/search/search.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchTopicListComponent } from './components/search-topic-list/search-topic-list.component';
import { SearchTopicNotFoundComponent } from './components/search-topic-not-found/search-topic-not-found.component';
import { SearchTopicComponent } from './components/search-topic/search-topic.component';
import { SearchTopicFacetListComponent } from './components/search-topic-facet-list/search-topic-facet-list.component';
import { SearchTopicFacetComponent } from './components/search-topic-facet/search-topic-facet.component';
import { SearchTopicListNavComponent } from './components/search-topic-list-nav/search-topic-list-nav.component';

import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';

import { SearchRoutingModule } from './search-routing.module';

import { CredentialAttributeTagPipe } from './pipes/credential-attribute-tag.pipe';
import { CredentialAttributeValuePipe } from './pipes/credential-attribute-value.pipe';

@NgModule({
  imports: [CommonModule, MaterialModule, TranslateModule, SearchRoutingModule],
  declarations: [
    SearchComponent,
    SearchInputComponent,
    SearchResultComponent,
    SearchTopicListComponent,
    SearchTopicNotFoundComponent,
    SearchTopicComponent,
    SearchTopicFacetListComponent,
    SearchTopicFacetComponent,
    SearchTopicListNavComponent,
    CredentialAttributeTagPipe,
    CredentialAttributeValuePipe,
  ],
})
export class SearchModule {}
