import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {UserDataService} from "./services/user-data/user-data.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { UserComponent } from './components/user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(UserDataService),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
