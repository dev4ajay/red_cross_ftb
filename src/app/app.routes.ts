import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MissionComponent } from './pages/mission/mission.component';
import { VisionComponent } from './pages/vision/vision.component';
import { WhoIsWhoComponent } from './pages/who-is-who/who-is-who.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { ActivityDetailsComponent } from './pages/activity-details/activity-details.component';

import { JoinNowComponent } from './pages/join-now/join-now.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
    // { path: '*', redirectTo: 'home' , }, 

  { path: 'about', component: AboutComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'who-is-who', component: WhoIsWhoComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'join-now', component: JoinNowComponent },
  // { path: 'hero', component: HeroSectionComponent },


  { path: 'service-details/:name', component: ServiceDetailsComponent },
  
  // {path:'' ,component:ActivitiesComponent},
  // {path:'' ,component:OurServicesComponent},
  { path: 'activity-details/:title', component: ActivityDetailsComponent },






  // { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
];
