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
import { MatTabsModule, MatRadioModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { MatIconModule  } from '@angular/material/icon';
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
import { AssumptionComponent } from './components/assumption/assumption.component';
import { AssumptionScreenComponent } from './screens/assumption-screen/assumption-screen.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BookmarksScreenComponent } from './screens/bookmarks-screen/bookmarks-screen.component';
import { AddHouseholdComponent } from './components/add-household/add-household.component';
import { AddHouseholdScreenComponent } from './screens/add-household-screen/add-household-screen.component';
import { HomeAddHouseholdComponent } from './components/home-add-household/home-add-household.component';
import { HomeAddHouseholdScreenComponent } from './screens/home-add-household-screen/home-add-household-screen.component';
import { FirmInformationComponent } from './components/firm-information/firm-information.component';
import { FirmInformationScreenComponent } from './screens/firm-information-screen/firm-information-screen.component';
import { DocumentPreviewComponent } from './components/document-preview/document-preview.component';
import { DropdownActionsComponent } from './components/dropdown-actions/dropdown-actions.component';
import { TestScreenComponent } from './screens/test-screen/test-screen.component';
import { InputPercentComponent } from './components/input-percent/input-percent.component';
import { PopupCreatePortfolioComponent } from './components/popup-create-portfolio/popup-create-portfolio.component';
import { PortfolioRiskScoreComponent } from './components/portfolio-risk-score/portfolio-risk-score.component';
import { TargetAssetAllocationComponent } from './components/target-asset-allocation/target-asset-allocation.component';
import { QuickAddComponent } from './components/quick-add/quick-add.component';
import { AddSecurityComponent } from './components/add-security/add-security.component';
import { CancelSaveComponent } from './components/cancel-save/cancel-save.component';

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
    InformationScreenComponent,
    AssumptionComponent,
    AssumptionScreenComponent,
    BookmarksComponent,
    BookmarksScreenComponent,
    AddHouseholdComponent,
    AddHouseholdScreenComponent,
    HomeAddHouseholdComponent,
    HomeAddHouseholdScreenComponent,
    FirmInformationComponent,
    FirmInformationScreenComponent,
    DocumentPreviewComponent,
    DropdownActionsComponent,
    TestScreenComponent,
    InputPercentComponent,
    PopupCreatePortfolioComponent,
    PortfolioRiskScoreComponent,
    TargetAssetAllocationComponent,
    QuickAddComponent,
    AddSecurityComponent,
    CancelSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
