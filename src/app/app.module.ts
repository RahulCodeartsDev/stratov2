import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LoginUsernameComponent } from './components/login/login-username/login-username.component';
import { LoginSeedPhraseComponent } from './components/login/login-seed-phrase/login-seed-phrase.component';
import { InfoComponent } from './components/info/info.component';
import { InfoStep1Component } from './components/info/info-step1/info-step1.component';
import { InfoStep2Component } from './components/info/info-step2/info-step2.component';
import { InfoStep3Component } from './components/info/info-step3/info-step3.component';
import { InfoStep4Component } from './components/info/info-step4/info-step4.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MaterialModuleModule } from './material-module/material-module.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginUsernameComponent,
    LoginSeedPhraseComponent,
    InfoComponent,
    InfoStep1Component,
    InfoStep2Component,
    InfoStep3Component,
    InfoStep4Component,
    WildcardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
