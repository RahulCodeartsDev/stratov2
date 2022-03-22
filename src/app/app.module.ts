import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WildcardComponent } from './components/wildcard/wildcard.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MaterialModuleModule } from './material-module/material-module.module';

import { LoginFooterComponent } from './components/client/login/login-footer/login-footer.component';
import { LoginSeedPhraseComponent } from './components/client/login/login-seed-phrase/login-seed-phrase.component';
import { LoginUsernameComponent } from './components/client/login/login-username/login-username.component';
import { LoginComponent } from './components/client/login/login.component';
import { CardsComponent } from './components/node/dashboard-network/cards/cards.component';
import { DashboardComponent } from './components/node/dashboard-network/dashboard/dashboard.component';
import { HostingComponent } from './components/node/dashboard-network/hosting/hosting.component';
import { NetworkComponent } from './components/node/dashboard-network/network/network.component';
import { TopDetailsComponent } from './components/node/dashboard-network/top-details/top-details.component';
import { EntryPointComponent } from './components/entry-point/entry-point.component';
import { NodeLoginComponent } from './components/node/node-login/node-login.component';
import { AppServicesService } from './app-services/app-services.service';
import { CountdownModule } from 'ngx-countdown';
import { InfoComponent } from './components/client/info/info/info.component';
import { InfoStep2Component } from './components/client/info/info/info-step2/info-step2.component';
import { InfoStep1Component } from './components/client/info/info/info-step1/info-step1.component';
import { InfoStep3Component } from './components/client/info/info/info-step3/info-step3.component';
import { InfoStep4Component } from './components/client/info/info/info-step4/info-step4.component';



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
    FooterComponent,
    LoginFooterComponent,
    DashboardComponent,
    NetworkComponent,
    HostingComponent,
    TopDetailsComponent,
    CardsComponent,
    EntryPointComponent,
    NodeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    CountdownModule
  ],
  providers: [
    AppServicesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
