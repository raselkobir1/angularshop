import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { AdminListComponent} from './admin-list/admin-list.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'admin-list', component: AdminListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
