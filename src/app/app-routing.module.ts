import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoStep1Component } from './components/info/info-step1/info-step1.component';
import { InfoStep2Component } from './components/info/info-step2/info-step2.component';
import { InfoStep3Component } from './components/info/info-step3/info-step3.component';
import { InfoStep4Component } from './components/info/info-step4/info-step4.component';
import { InfoComponent } from './components/info/info.component';
import { LoginSeedPhraseComponent } from './components/login/login-seed-phrase/login-seed-phrase.component';
import { LoginUsernameComponent } from './components/login/login-username/login-username.component';
import { LoginComponent } from './components/login/login.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';


const routes: Routes = [
  
  {
    path: "", component: LoginComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "login-username", component: LoginUsernameComponent
  },
  {
    path: "login-sedd-phrase", component: LoginSeedPhraseComponent
  },
  {
    path: "info", component: InfoComponent
  },
  {
    path: "info-step1", component: InfoStep1Component
  },
  {
    path: "info-step2", component: InfoStep2Component
  },
  {
    path: "info-step3", component: InfoStep3Component
  },
  {
    path: "info-step4", component: InfoStep4Component
  },
  {
    path: "**", component: WildcardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
