import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PageComponent } from './pages/page/page.component';
import { HomeComponent } from './pages/page/home/home.component';
import { AboutComponent } from './pages/page/about/about.component';
import { AbilityComponent } from './pages/page/ability/ability.component';
import { PortfolioComponent } from './pages/page/portfolio/portfolio.component';
import { ContactsComponent } from './pages/page/contacts/contacts.component';
import { ErrorComponent } from './pages/page/error/error.component';
import { MenuService } from './service/menu.service';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageComponent,
    HomeComponent,
    AboutComponent,
    AbilityComponent,
    PortfolioComponent,
    ContactsComponent,
    ErrorComponent,
    RootNavComponent,
    AddUserComponent,
    ViewUserComponent,
    DeleteUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [MenuService,importProvidersFrom([BrowserAnimationsModule])],
  bootstrap: [AppComponent]
})
export class AppModule { }
