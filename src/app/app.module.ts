import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionHomeComponent } from './collection/collection-home/collection-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimeDirective } from './time.directive';
import { DividerComponent } from './divider/divider.component';
import { SegmentComponent } from './elements/segment/segment.component';
import { TableComponent } from './collection/table/table.component';
import { PartnersComponent } from './collection/partners/partners.component';
import { CompaniesComponent } from './collection/companies/companies.component';
import { BiographyComponent } from './collection/biography/biography.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { ItemListComponent } from './views/item-list/item-list.component';
import { ModalHomeComponent } from './mods/modal-home/modal-home.component';
import { ModalComponent } from './mods/modal/modal.component';
import { AccordianComponent } from './mods/accordian/accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsHomeComponent,
    CollectionHomeComponent,
    HomeComponent,
    NotFoundComponent,
    PlaceholderComponent,
    TimeDirective,
    DividerComponent,
    SegmentComponent,
    TableComponent,
    PartnersComponent,
    CompaniesComponent,
    BiographyComponent,
    ViewHomeComponent,
    StatisticsComponent,
    ItemListComponent,
    ModalHomeComponent,
    ModalComponent,
    AccordianComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
