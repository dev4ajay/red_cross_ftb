import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MissionComponent } from './pages/mission/mission.component';
import { VisionComponent } from './pages/vision/vision.component';
import { WhoIsWhoComponent } from './pages/who-is-who/who-is-who.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'who-is-who', component: WhoIsWhoComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];
