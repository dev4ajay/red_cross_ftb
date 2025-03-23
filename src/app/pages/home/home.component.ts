import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/image-carousel/image-carousel.component';
import { AboutRedComponent } from '../../components/about-red/about-red.component';
import { RedCrossPrinciplesComponent } from "../../components/red-cross-principles/red-cross-principles.component";
import { WhoIsWhoComponent } from "../who-is-who/who-is-who.component";
import { MissionStatsComponent } from "../../components/mission-stats/mission-stats.component";
import { ActivitiesComponent } from "../../components/activities/activities.component";
import { OurServicesComponent } from "../../components/our-services/our-services.component";
import { MissionComponent } from "../mission/mission.component";

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, AboutRedComponent, RedCrossPrinciplesComponent, WhoIsWhoComponent, MissionStatsComponent, ActivitiesComponent, OurServicesComponent, MissionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
