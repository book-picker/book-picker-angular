import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CookieModule } from 'ngx-cookie';

import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ImgLeftComponent } from './log-in/img-left/img-left.component';
import { SignInComponent } from './log-in/sign-in/sign-in.component';
import { SignUpComponent } from './log-in/sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddBookToLibraryComponent } from './add-book-to-library/add-book-to-library.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { CPassComponent } from './c-pass/c-pass.component';
import { FPassComponent } from './f-pass/f-pass.component';
import { NavComponent } from './nav/nav.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SelectGenreComponent } from './select-genre/select-genre.component';
import { ProfileNameCoverComponent } from './profile-page/profile-name-cover/profile-name-cover.component';
import { UserInfoComponent } from './profile-page/user-info/user-info.component';
import { UserLibraryComponent } from './profile-page/user-library/user-library.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ImgLeftComponent,
    SignInComponent,
    SignUpComponent,
    HomepageComponent,
    AddBookToLibraryComponent,
    BookInfoComponent,
    CPassComponent,
    FPassComponent,
    NavComponent,
    ProfilePageComponent,
    SelectGenreComponent,
    ProfileNameCoverComponent,
    UserInfoComponent,
    UserLibraryComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CookieModule.forRoot(),
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
