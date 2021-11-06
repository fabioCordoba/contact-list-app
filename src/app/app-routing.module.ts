import { ListContactComponent } from './components/schedule/list-contact/list-contact.component';
import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'add-contact', component: AddContactComponent},
  {path: 'list-contacts', component: ListContactComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'list-contacts'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
