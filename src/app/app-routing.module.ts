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
import { CreateHouseholdScreenComponent } from './screens/create-household-screen/create-household-screen.component';
import { NotificationComponentComponent } from './components/notification-component/notification-component.component';
import { TestScreenComponent } from './screens/test-screen/test-screen.component';
import { SimulationScreenComponent } from './screens/simulation-screen/simulation-screen.component';
import { SimulationCurrentScreenComponent } from './screens/simulation-current-screen/simulation-current-screen.component';
import { PopUpRotateScreenComponent } from './screens/pop-up-rotate-screen/pop-up-rotate-screen.component';
import { HouseholdListScreenComponent } from './screens/household-list-screen/household-list-screen.component';
import { HouseholdMemberScreenComponent } from './screens/household-member-screen/household-member-screen.component';
import { CalendarModalScreenComponent } from './screens/calendar-modal-screen/calendar-modal-screen.component';
const routes: Routes = [
  
  {
    path: '',
    component: FirmInformationScreenComponent
  },
  {
    path: 'dashboard',
    component: HomeScreenComponent
  },
  {
    
    path: 'list-view',
    component: ListViewScreenComponent
    // path: 'listview-add-household',
    // component: AddHouseholdScreenComponent
  },
  // {
  //   path: 'list-view',
  //   component: ListViewScreenComponent
  // },
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
    component: CreateHouseholdScreenComponent
  },
  {
    path: 'notification-component',
    component: NotificationComponentComponent
  },{
    path: 'simulation',
    component: SimulationScreenComponent
  },
  {
    path: 'simulation-current',
    component: SimulationCurrentScreenComponent
  },
  {
    path: 'pop-up-rotate',
    component: PopUpRotateScreenComponent 
  }
  ,
  {
    path: 'household-list',
    component: HouseholdListScreenComponent 
  },
  {
    path: 'household-member',
    component: HouseholdMemberScreenComponent 
  },
  {
    path: 'calendar-modal',
    component: CalendarModalScreenComponent 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
