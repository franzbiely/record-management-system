import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';
import { OrderModule } from 'ngx-order-pipe';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MatTabsModule, MatRadioModule, MatCheckboxModule,
        MatTableModule, MatSliderModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountComponent } from './components/account/account.component';
import { ListViewScreenComponent } from './screens/list-view-screen/list-view-screen.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { RiskAssessmentComponent } from './components/risk-assessment/risk-assessment.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SupportScreenComponent } from './screens/support-screen/support-screen.component';
import { SupportComponent } from './components/support/support.component';
import { SettingComponent } from './components/setting/setting.component';
import { SettingsScreenComponent } from './screens/settings-screen/settings-screen.component';
import { PortfolioAdminComponent } from './components/portfolio-admin/portfolio-admin.component';
import { PortfolioAdminScreenComponent } from './screens/portfolio-admin-screen/portfolio-admin-screen.component';
import { HouseholdComponent } from './components/household/household.component';
import { AdviserSearchComponent } from './components/adviser-search/adviser-search.component';
import { AdviserSearchScreenComponent } from './screens/adviser-search-screen/adviser-search-screen.component';
import { InformationComponent } from './components/information/information.component';
import { InformationScreenComponent } from './screens/information-screen/information-screen.component';
import { AssumptionComponent } from './components/assumption/assumption.component';
import { AssumptionScreenComponent } from './screens/assumption-screen/assumption-screen.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { AddHouseholdComponent } from './components/add-household/add-household.component';
import { HomeAddHouseholdComponent } from './components/home-add-household/home-add-household.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { FirmInformationComponent } from './components/firm-information/firm-information.component';
import { FirmInformationScreenComponent } from './screens/firm-information-screen/firm-information-screen.component';
import { DocumentPreviewComponent } from './components/document-preview/document-preview.component';
import { DropdownActionsComponent } from './components/dropdown-actions/dropdown-actions.component';
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
import { CreateNewHouseholdComponent } from './components/create-new-household/create-new-household.component';
import { ViewAddGraphsComponent } from './components/view-add-graphs/view-add-graphs.component';
import { AdviserSearchPopupComponent } from './components/adviser-search-popup/adviser-search-popup.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ErrorLineComponent } from './components/error-line/error-line.component';
import { PopupSendDocumentsComponent } from './components/popup-send-documents/popup-send-documents.component';
import { DashBoxComponent } from './components/dash-box/dash-box.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { NotificationComponentComponent } from './components/notification-component/notification-component.component';
import { SimulationCurrentComponent } from './components/simulation-current/simulation-current.component';
import { PopUpRotateComponent } from './components/pop-up-rotate/pop-up-rotate.component';
import { HouseholdListComponent } from './components/household-list/household-list.component';
import { HouseholdMemberComponent } from './components/household-member/household-member.component';
import { CreateHouseholdScreenComponent } from './screens/create-household-screen/create-household-screen.component';
import { ActiveArchiveComponent } from './components/active-archive/active-archive.component';
import { CalendarModalComponent } from './components/calendar-modal/calendar-modal.component';
import { AllocationDetailsComponent } from './components/allocation-details/allocation-details.component';
import { NewProposalScreenComponent } from './screens/new-proposal-screen/new-proposal-screen.component';
import { DropdownUpdateAccountComponent } from './components/dropdown-update-account/dropdown-update-account.component';
import { AssetClassComponent } from './components/asset-class/asset-class.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ImportAccountsComponent } from './components/import-accounts/import-accounts.component';
import { AccountSavedComponent } from './components/account-saved/account-saved.component';
import { AccountSelectModalComponent } from './components/account-select-modal/account-select-modal.component';
import { AddAccountModalComponent } from './components/add-account-modal/add-account-modal.component';
import { PopupCustomAssetClassComponent } from './components/popup-custom-asset-class/popup-custom-asset-class.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';
import { ProfileNotificationComponent } from './components/profile-notification/profile-notification.component';
import { RiskAssessmentQuestionnaireComponent } from './components/risk-assessment-questionnaire/risk-assessment-questionnaire.component';
import { MenuSearchbarComponent } from './components/menu-searchbar/menu-searchbar.component';
import { QuestionnaireModalComponent } from './components/questionnaire-modal/questionnaire-modal.component';
import { GraphProposalsComponent } from './components/graph-proposals/graph-proposals.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { PrintPreviewComponent } from './screens/print-preview/print-preview.component';
import { FrontpageComponent } from './screens/frontpage/frontpage.component';
import { DomforDirective } from './directives/domfor.directive';
import { DropdownFilterPortfolioComponent } from './components/dropdown-filter-portfolio/dropdown-filter-portfolio.component';
import { DropdownCheckboxComponent } from './components/dropdown-checkbox/dropdown-checkbox.component';
import { DropdownFilterListviewComponent } from './components/dropdown-filter-listview/dropdown-filter-listview.component';
import { PopupDocumentSentComponent } from './components/popup-document-sent/popup-document-sent.component';
import { PopupLandingPageComponent } from './components/popup-landing-page/popup-landing-page.component';
import { PopupEmailLanguageComponent } from './components/popup-email-language/popup-email-language.component';
import { PopupDocumentLanguageComponent } from './components/popup-document-language/popup-document-language.component';
import { DropdownActionsListviewComponent } from './components/dropdown-actions-listview/dropdown-actions-listview.component';
import { DropdownActionsPortfolioComponent } from './components/dropdown-actions-portfolio/dropdown-actions-portfolio.component';
import { DropdownCapitalAppreciationComponent } from './components/dropdown-capital-appreciation/dropdown-capital-appreciation.component';
import { SecurityDropdownAutocompleteComponent } from './components/security-dropdown-autocomplete/security-dropdown-autocomplete.component';
import { DropdownActionSimulationComponent } from './components/dropdown-action-simulation/dropdown-action-simulation.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
 // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
  addRemoveLinks : true,
  maxFiles : 1,
  init : function() {
    var prevFile;
    this.on('addedfile', function() {
        if (typeof prevFile !== "undefined") {
            this.removeFile(prevFile);
        }
    });
    this.on('success', function(file, responseText) {
        prevFile = file;
    });
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AccountComponent,
    ListViewScreenComponent,
    ListViewComponent,
    RiskAssessmentComponent,
    ProposalComponent,
    PortfolioComponent,
    DocumentationComponent,
    SupportScreenComponent,
    SupportComponent,
    SettingComponent,
    SettingsScreenComponent,
    PortfolioAdminComponent,
    PortfolioAdminScreenComponent,
    HouseholdComponent,
    AdviserSearchComponent,
    AdviserSearchScreenComponent,
    InformationComponent,
    InformationScreenComponent,
    AssumptionComponent,
    AssumptionScreenComponent,
    BookmarksComponent,
    AddHouseholdComponent,
    HomeAddHouseholdComponent,
    FilterDropdownComponent,
    FirmInformationComponent,
    FirmInformationScreenComponent,
    DocumentPreviewComponent,
    DropdownActionsComponent,
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
    CreateNewHouseholdComponent,
    ViewAddGraphsComponent,
    AdviserSearchPopupComponent,
    DropdownComponent,
    ErrorLineComponent,
    PopupSendDocumentsComponent,
    DashBoxComponent,
    SimulationComponent,
    SimulationCurrentComponent,
    DropdownComponent,
    ErrorLineComponent,
    NotificationComponentComponent,
    PopUpRotateComponent,
    HouseholdListComponent,
    HouseholdMemberComponent,
    CreateHouseholdScreenComponent,
    ActiveArchiveComponent,
    CalendarModalComponent,
    AllocationDetailsComponent,
    NewProposalScreenComponent,
    DropdownUpdateAccountComponent,
    AssetClassComponent,
    AccountDetailsComponent,
    ImportAccountsComponent,
    AccountSavedComponent,
    AccountSavedComponent,
    NewProposalScreenComponent,
    AccountSelectModalComponent,
    AddAccountModalComponent,
    PopupCustomAssetClassComponent,
    DropdownFilterComponent,
    ProfileNotificationComponent,
    RiskAssessmentQuestionnaireComponent,
    MenuSearchbarComponent,
    QuestionnaireModalComponent,
    GraphProposalsComponent,
    TooltipComponent,
    PrintPreviewComponent,
    FrontpageComponent,
    DomforDirective,
    DropdownFilterPortfolioComponent,
    DropdownCheckboxComponent,
    DropdownFilterListviewComponent,
    PopupDocumentSentComponent,
    PopupLandingPageComponent,
    PopupEmailLanguageComponent,
    PopupDocumentLanguageComponent,
    DropdownActionsListviewComponent,
    DropdownActionsPortfolioComponent,
    DropdownCapitalAppreciationComponent,
    SecurityDropdownAutocompleteComponent,
    DropdownActionSimulationComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    OrderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    SortablejsModule,
    SortablejsModule.forRoot({
      animation: 200,
    }),
    DropzoneModule
  ],
  entryComponents: [
    GraphProposalsComponent
  ],
  providers: [{
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
