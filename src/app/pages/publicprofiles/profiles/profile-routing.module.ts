// profile-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles.component';
const routes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
    children: [
      {
        path: 'default',
        loadComponent: () =>
          import('./default/default.component').then((m) => m.DefaultComponent),
      },
      {
        path: 'creator',
        loadComponent: () =>
          import('./creator/creator.component').then((m) => m.CreatorComponent),
      },
      {
        path: 'company',
        loadComponent: () =>
          import('./company/company.component').then((m) => m.CompanyComponent),
      },
      {
        path: 'nft',
        loadComponent: () =>
          import('./nft/nft.component').then((m) => m.NftComponent),
      },
      {
        path: 'blogger',
        loadComponent: () =>
          import('./blogger/blogger.component').then((m) => m.BloggerComponent),
      },
      {
        path: 'crm',
        loadComponent: () =>
          import('./crm/crm.component').then((m) => m.CrmComponent),
      },
      { path: '', redirectTo: 'default', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
