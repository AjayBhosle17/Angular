import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './Task/crud/crud.component';

const routes: Routes = [

  {path:'' , redirectTo:'category' , pathMatch:'full'},
  {path:'category',component:CrudComponent},
  {path:'**',component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
