import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  
  {path:'', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home',component: HomeComponent},
  {path: 'About',component: AboutComponent},
  {path: 'Services',component: ServicesComponent},
  {path: 'Portfolio',component: PortfolioComponent},
  {path: 'Team',component: TeamComponent},
  {path: 'Contact',component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
