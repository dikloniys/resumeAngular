import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/page/home/home.component';
import { AboutComponent } from './pages/page/about/about.component';
import { AbilityComponent } from './pages/page/ability/ability.component';
import { PortfolioComponent } from './pages/page/portfolio/portfolio.component';
import { ContactsComponent } from './pages/page/contacts/contacts.component';
import { ErrorComponent } from './pages/page/error/error.component';

import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'add-user', component:AddUserComponent},
  {path:'view', component:ViewUserComponent},
  {path:'delete', component:DeleteUserComponent},
  {path:'update', component:UpdateUserComponent},

  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent, },
  {path:'ability',component:AbilityComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'**', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
