import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BannerInlineComponent} from './banner-inline.component';
import { BannerComponent } from './banner.component';
import { WelcomeComponent } from './welcome.component';
import { UserService } from "./user.service";

@NgModule({
    declarations: [
        AppComponent,
        BannerInlineComponent,
        BannerComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ UserService ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
