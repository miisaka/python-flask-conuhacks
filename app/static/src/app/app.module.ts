import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

// chat
import { ChatModule } from './chat/chat.module';
import { ChatPageComponent } from './chat/components/chat-page/chat-page.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: ChatPageComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
