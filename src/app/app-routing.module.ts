import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ListViewScreenComponent } from './screens/list-view-screen/list-view-screen.component';
import { AccountScreenComponent } from './screens/account-screen/account-screen.component';
import { DocumentationScreenComponent } from './screens/documentation-screen/documentation-screen.component';
const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'list-view',
    component: ListViewScreenComponent
  },
  {
    path: 'accounts',
    component: AccountScreenComponent
  }
  ,
  {
    path: 'documentation',
    component: DocumentationScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
