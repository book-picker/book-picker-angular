import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { SelectGenreComponent } from 'src/app/select-genre/select-genre.component';
import { LogInComponent } from 'src/app/log-in/log-in.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { BookInfoComponent } from 'src/app/book-info/book-info.component';
import { ProfilePageComponent} from 'src/app/profile-page/profile-page.component';
import { AddBookToLibraryComponent} from 'src/app/add-book-to-library/add-book-to-library.component';
import { FPassComponent } from './f-pass/f-pass.component';
import { CPassComponent } from './c-pass/c-pass.component';


const routes: Routes = [
  { path: 'log-in' , component: LogInComponent},
  { path: 'select-genre' , component: SelectGenreComponent},
  { path: 'homepage' , component: HomepageComponent},
  { path: 'book-info' , component: BookInfoComponent},
  { path: 'profile-page' , component: ProfilePageComponent},
  { path: 'add-book-to-library', component: AddBookToLibraryComponent},
  { path: 'forgot-password', component: FPassComponent},
  { path: 'confirm-password', component: CPassComponent},
  { path: 'notifications', component: NotificationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
