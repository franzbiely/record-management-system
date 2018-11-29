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
import { MatTabsModule, MatRadioModule, MatCheckboxModule, MatTableModule, MatSliderModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
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
import { SearchComponent } from './components/search/search.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { DocumentationBookmarkComponent } from './components/documentation-bookmark/documentation-bookmark.component';
import { DocumentationBookmarkScreensComponent } from './screens/documentation-bookmark-screens/documentation-bookmark-screens.component';
import { CreateNewHouseholdComponent } from './components/create-new-household/create-new-household.component';
import { ViewAddGraphsComponent } from './components/view-add-graphs/view-add-graphs.component';
import { AdviserSearchPopupComponent } from './components/adviser-search-popup/adviser-search-popup.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ErrorLineComponent } from './components/error-line/error-line.component';
import { PopupSendDocumentsComponent } from './components/popup-send-documents/popup-send-documents.component';
import { DashBoxComponent } from './components/dash-box/dash-box.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { NotificationComponentComponent } from './components/notification-component/notification-component.component';
import { SimulationScreenComponent } from './screens/simulation-screen/simulation-screen.component';
import { SimulationCurrentComponent } from './components/simulation-current/simulation-current.component';
import { SimulationCurrentScreenComponent } from './screens/simulation-current-screen/simulation-current-screen.component';
import { PopUpRotateComponent } from './components/pop-up-rotate/pop-up-rotate.component';
import { PopUpRotateScreenComponent } from './screens/pop-up-rotate-screen/pop-up-rotate-screen.component';
import { HouseholdListComponent } from './components/household-list/household-list.component';
import { HouseholdListScreenComponent } from './screens/household-list-screen/household-list-screen.component';
import { HouseholdMemberComponent } from './components/household-member/household-member.component';
import { HouseholdMemberScreenComponent } from './screens/household-member-screen/household-member-screen.component';
import { CreateHouseholdScreenComponent } from './screens/create-household-screen/create-household-screen.component';
import { ActiveArchiveComponent } from './components/active-archive/active-archive.component';
import { CalendarModalComponent } from './components/calendar-modal/calendar-modal.component';
import { CalendarModalScreenComponent } from './screens/calendar-modal-screen/calendar-modal-screen.component';
import { AllocationDetailsComponent } from './components/allocation-details/allocation-details.component';
import { AllocationDetailsScreenComponent } from './screens/allocation-details-screen/allocation-details-screen.component';
import { NewProposalScreenComponent } from './screens/new-proposal-screen/new-proposal-screen.component';
import { DropdownUpdateAccountComponent } from './components/dropdown-update-account/dropdown-update-account.component';
import { AssetClassComponent } from './components/asset-class/asset-class.component';
import { AssetClassScreenComponent } from './screens/asset-class-screen/asset-class-screen.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountDetailsScreenComponent } from './screens/account-details-screen/account-details-screen.component';
import { ImportAccountsComponent } from './components/import-accounts/import-accounts.component';
import { ImportAccountsScreenComponent } from './screens/import-accounts-screen/import-accounts-screen.component';
import { AccountSavedComponent } from './components/account-saved/account-saved.component';
import { AccountSelectModalComponent } from './components/account-select-modal/account-select-modal.component';
import { AccountSelectModalScreenComponent } from './screens/account-select-modal-screen/account-select-modal-screen.component';
import { AddAccountModalComponent } from './components/add-account-modal/add-account-modal.component';
import { AddAccountScreenComponent } from './screens/add-account-screen/add-account-screen.component';
import { PopupCustomAssetClassComponent } from './components/popup-custom-asset-class/popup-custom-asset-class.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { ProfileNotificationComponent } from './components/profile-notification/profile-notification.component';
import { RiskAssessmentQuestionnaireComponent } from './components/risk-assessment-questionnaire/risk-assessment-questionnaire.component';
import { MenuSearchbarComponent } from './components/menu-searchbar/menu-searchbar.component';
import { QuestionnaireModalComponent } from './components/questionnaire-modal/questionnaire-modal.component';
import { QuestionnaireScreenComponent } from './screens/questionnaire-screen/questionnaire-screen.component';
import { GraphProposalsComponent } from './components/graph-proposals/graph-proposals.component';

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
    CancelSaveComponent,
    SearchComponent,
    DisclaimerComponent,
    DocumentationBookmarkComponent,
    DocumentationBookmarkScreensComponent,
    CreateNewHouseholdComponent,
    ViewAddGraphsComponent,
    AdviserSearchPopupComponent,
    DropdownComponent,
    ErrorLineComponent,
    PopupSendDocumentsComponent,
    DashBoxComponent,
    SimulationComponent,
    SimulationScreenComponent,
    SimulationCurrentComponent,
    SimulationCurrentScreenComponent,
    DropdownComponent,
    ErrorLineComponent,
    NotificationComponentComponent,
    PopUpRotateComponent,
    PopUpRotateScreenComponent,
    HouseholdListComponent,
    HouseholdListScreenComponent,
    HouseholdMemberComponent,
    HouseholdMemberScreenComponent,
    CreateHouseholdScreenComponent,
    ActiveArchiveComponent,
    CalendarModalComponent,
    CalendarModalScreenComponent,
    AllocationDetailsComponent,
    AllocationDetailsScreenComponent,
    NewProposalScreenComponent,
    DropdownUpdateAccountComponent,
    AssetClassComponent,
    AssetClassScreenComponent,
    AccountDetailsComponent,
    AccountDetailsScreenComponent,
    ImportAccountsComponent,
    ImportAccountsScreenComponent,
    AccountSavedComponent,
    AccountSavedComponent,
    NewProposalScreenComponent,
    AccountSelectModalComponent,
    AccountSelectModalScreenComponent,
    AddAccountModalComponent,
    AddAccountScreenComponent,
    PopupCustomAssetClassComponent,
    DropdownFilterComponent,
    ProfileNotificationComponent,
    RiskAssessmentQuestionnaireComponent,
    MenuSearchbarComponent,
    QuestionnaireModalComponent,
    QuestionnaireScreenComponent,
    GraphProposalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatSliderModule,
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
