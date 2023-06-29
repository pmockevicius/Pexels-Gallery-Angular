import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages-components/home-page/home-page.component';
import { Gallery1Component } from './components/pages-components/gallery1/gallery1.component';
import { Gallery2Component } from './components/pages-components/gallery2/gallery2.component';
import { Gallery3Component } from './components/pages-components/gallery3/gallery3.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'gallery-1', component: Gallery1Component },
  { path: 'gallery-2', component: Gallery2Component },
  { path: 'gallery-3', component: Gallery3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
