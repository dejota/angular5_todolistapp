import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* instala npm install firebase angularfire2 --save y los importa */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
/* trae la configuracion de firebase de environment */
import { environment } from './../environments/environment';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    /* inicia el modulo con la configuracion de firebase */
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
