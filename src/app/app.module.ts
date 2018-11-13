import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ListViewScreenComponent } from './screens/list-view-screen/list-view-screen.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { AccountScreenComponent } from './screens/account-screen/account-screen.component';
import { RiskAssessmentComponent } from './components/risk-assessment/risk-assessment.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { DocumentationScreenComponent } from './screens/documentation-screen/documentation-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AccountComponent,
    HomeComponent,
    HomeScreenComponent,
    ListViewScreenComponent,
    ListViewComponent,
    AccountScreenComponent,
    RiskAssessmentComponent,
    ProposalComponent,
    PortfolioComponent,
    DocumentationComponent,
    DocumentationScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
