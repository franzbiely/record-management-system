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
import { SupportScreenComponent } from './screens/support-screen/support-screen.component';
import { SupportComponent } from './components/support/support.component';
import { SettingComponent } from './components/setting/setting.component';
import { SettingsScreenComponent } from './screens/settings-screen/settings-screen.component';
import { PortfolioAdminComponent } from './components/portfolio-admin/portfolio-admin.component';
import { PortfolioAdminScreenComponent } from './screens/portfolio-admin-screen/portfolio-admin-screen.component';
import { HouseholdComponent } from './components/household/household.component';
import { HouseholdScreenComponent } from './screens/household-screen/household-screen.component';
import { AdviserSearchComponent } from './components/adviser-search/adviser-search.component';
import { AdviserSearchScreenComponent } from './screens/adviser-search-screen/adviser-search-screen.component';
import { InformationComponent } from './components/information/information.component';
import { InformationScreenComponent } from './screens/information-screen/information-screen.component';
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
    DocumentationScreenComponent,
    SupportScreenComponent,
    SupportComponent,
    SettingComponent,
    SettingsScreenComponent,
    PortfolioAdminComponent,
    PortfolioAdminScreenComponent,
    HouseholdComponent,
    HouseholdScreenComponent,
    AdviserSearchComponent,
    AdviserSearchScreenComponent,
    InformationComponent,
    InformationScreenComponent
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
