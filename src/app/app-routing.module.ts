import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './collection/biography/biography.component';
import { CollectionHomeComponent } from './collection/collection-home/collection-home.component';
import { CompaniesComponent } from './collection/companies/companies.component';
import { PartnersComponent } from './collection/partners/partners.component';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { HomeComponent } from './home/home.component';
import { ModalHomeComponent } from './mods/modal-home/modal-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';

const routes: Routes = [
  { path: 'mods', component: ModalHomeComponent },
  { path: 'views', component: ViewHomeComponent },
  { path: 'elements', component: ElementsHomeComponent },

  {
    path: 'collection',
    component: CollectionHomeComponent,
    children: [
      {
        path: '',
        component: BiographyComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'partners',
        component: PartnersComponent,
      },
    ],
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
