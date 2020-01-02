import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { EditComponent } from './modules/edit/edit.component';
import { InsertComponent } from './modules/insert/insert.component';
import { FullwidthComponent } from './layout/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: HomeComponent,
    }, {
    path: 'edit',
    component: EditComponent
  }, {
path: 'insert',
component: InsertComponent
  }, {
    path: 'login',
    component: LoginComponent
  }
]}
  // , {
  //   path: '',
  //   component: FullwidthComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
