import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
     { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'portfolio', component: PortfolioComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'contact', component: ContactComponent },
        { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })], // Enable router logging
  exports: [RouterModule]
})
export class AppRoutingModule { }