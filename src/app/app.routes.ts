import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
	{
		path: 'profile',
		loadChildren: () => import('./pages/publicprofiles/profiles/profile.module').then(m => m.ProfileModule)
	  },
	{ path: '', component: IndexComponent, pathMatch: 'full' },
];

