import { Routes, RouterModule } from '@angular/router';
import { HomeownerComponent } from './homeowner';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeownerComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'homeowner',  component: HomeownerComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
      .then((comp: any) => comp.default),
  },
  { path: '**',    component: NoContentComponent },
];
