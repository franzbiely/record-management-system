import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViewScreenComponent } from './screens/list-view-screen/list-view-screen.component';
import { SettingsScreenComponent } from './screens/settings-screen/settings-screen.component';
import { SupportScreenComponent } from './screens/support-screen/support-screen.component';
import { PortfolioAdminScreenComponent } from './screens/portfolio-admin-screen/portfolio-admin-screen.component';
import { AdviserSearchScreenComponent } from './screens/adviser-search-screen/adviser-search-screen.component';
import { InformationScreenComponent } from './screens/information-screen/information-screen.component';
import { AssumptionScreenComponent } from './screens/assumption-screen/assumption-screen.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { FirmInformationScreenComponent } from './screens/firm-information-screen/firm-information-screen.component';
import { DocumentPreviewComponent } from './components/document-preview/document-preview.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { CreateHouseholdScreenComponent } from './screens/create-household-screen/create-household-screen.component';
import { NotificationComponentComponent } from './components/notification-component/notification-component.component';
import { ProfileNotificationComponent } from './components/profile-notification/profile-notification.component';
import { NewProposalScreenComponent } from './screens/new-proposal-screen/new-proposal-screen.component';
import { PrintPreviewComponent } from './screens/print-preview/print-preview.component';
import { FrontpageComponent } from './screens/frontpage/frontpage.component';
const routes: Routes = [
  {
    path: '',
    component: FirmInformationScreenComponent
  },
  {
    path: 'dashboard',
    component: FrontpageComponent
  },
  {
    path: 'proposal',
    component: NewProposalScreenComponent
  },
  {
    path: 'list-view',
    component: ListViewScreenComponent
  },
  {
    path: 'settings',
    component: SettingsScreenComponent
  },
  {
    path: 'support',
    component: SupportScreenComponent
  },
  {
    path: 'portfolio',
    component: PortfolioAdminScreenComponent
  },
  {
    path: 'adviser-search',
    component: AdviserSearchScreenComponent
  },
  {
    path: 'information',
    component: InformationScreenComponent
  },
  {
    path: 'assumption',
    component: AssumptionScreenComponent
  },
  {
    path: 'document-preview',
    component: DocumentPreviewComponent
  },
  {
    path: 'filter-dropdown',
    component: FilterDropdownComponent
  },
  {
    path: 'firm-information',
    component: FirmInformationScreenComponent
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent
  },
  {
    path: 'create-household',
    component: CreateHouseholdScreenComponent

  },
  {
    path: 'notification-component',
    component: NotificationComponentComponent
  },
  {
    path: 'profile-notification',
    component: ProfileNotificationComponent
  },
  {
    path: 'print-preview',
    component: PrintPreviewComponent
  },
  {
      path: 'frontpage',
      component: FrontpageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
