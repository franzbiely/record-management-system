import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ListViewScreenComponent } from './screens/list-view-screen/list-view-screen.component';
import { AccountScreenComponent } from './screens/account-screen/account-screen.component';
import { DocumentationScreenComponent } from './screens/documentation-screen/documentation-screen.component';
import { SettingsScreenComponent } from './screens/settings-screen/settings-screen.component';
import { SupportScreenComponent } from './screens/support-screen/support-screen.component';
import { PortfolioAdminScreenComponent } from './screens/portfolio-admin-screen/portfolio-admin-screen.component';
import { HouseholdScreenComponent } from './screens/household-screen/household-screen.component';
import { AdviserSearchScreenComponent } from './screens/adviser-search-screen/adviser-search-screen.component';
import { InformationScreenComponent } from './screens/information-screen/information-screen.component';
import { AssumptionScreenComponent } from './screens/assumption-screen/assumption-screen.component';
import { BookmarksScreenComponent } from './screens/bookmarks-screen/bookmarks-screen.component';
import { AddHouseholdScreenComponent } from './screens/add-household-screen/add-household-screen.component';
import { HomeAddHouseholdScreenComponent } from './screens/home-add-household-screen/home-add-household-screen.component';
import { FirmInformationScreenComponent } from './screens/firm-information-screen/firm-information-screen.component';
import { DocumentPreviewComponent } from './components/document-preview/document-preview.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { DocumentationBookmarkScreensComponent } from './screens/documentation-bookmark-screens/documentation-bookmark-screens.component';
import { CreateNewHouseholdComponent } from './components/create-new-household/create-new-household.component';
import { TestScreenComponent } from './screens/test-screen/test-screen.component';
const routes: Routes = [
{
    path: 'dashboard',
    component: HomeScreenComponent
  },
  {
    path: '',
    component: FirmInformationScreenComponent
  },
  
  {
    path: 'list-view',
    component: ListViewScreenComponent
  },
  {
    path: 'accounts',
    component: AccountScreenComponent
  }
  ,
  {
    path: 'documentation',
    component: DocumentationScreenComponent
  }
  ,
  {
    path: 'settings',
    component: SettingsScreenComponent
  }
  ,
  {
    path: 'support',
    component: SupportScreenComponent
  }
  ,
  {
    path: 'portfolio',
    component: PortfolioAdminScreenComponent
  }
  ,
  {
    path: 'household',
    component: HouseholdScreenComponent
  }
  ,
  {
    path: 'adviser-search',
    component: AdviserSearchScreenComponent
  }
  ,
  {
    path: 'information',
    component: InformationScreenComponent
  }
  ,
  {
    path: 'assumption',
    component: AssumptionScreenComponent
  }
  ,
  {
    path: 'bookmarks',
    component: BookmarksScreenComponent
  }
  ,
  {
    path: 'listview-add-household',
    component: AddHouseholdScreenComponent
  }
  ,
  {
    path: 'home-add-household',
    component: HomeAddHouseholdScreenComponent
  }
  ,
  {
    path: 'document-preview',
    component: DocumentPreviewComponent
  },
  {
    path: 'laboratory',
    component: TestScreenComponent
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent
  },
  {
    path: 'documentation-bookmarks',
    component: DocumentationBookmarkScreensComponent
  },{
    path: 'create-household',
    component: CreateNewHouseholdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
