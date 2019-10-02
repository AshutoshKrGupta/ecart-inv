import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdInsertComponent } from './prod-insert/prod-insert.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
{
    path: 'AddProduct',
    component: ProdInsertComponent,
},
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
