import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bienestar',
    loadChildren: () => import('./bienestar/bienestar.module').then( m => m.BienestarPageModule)
  },
  {
    path: 'calentamiento',
    loadChildren: () => import('./calentamiento/calentamiento.module').then( m => m.CalentamientoPageModule)
  },
  {
    path: 'resistencia',
    loadChildren: () => import('./resistencia/resistencia.module').then( m => m.ResistenciaPageModule)
  },
  {
    path: 'musculos',
    loadChildren: () => import('./musculos/musculos.module').then( m => m.MusculosPageModule)
  },
  {
    path: 'enfriamiento',
    loadChildren: () => import('./enfriamiento/enfriamiento.module').then( m => m.EnfriamientoPageModule)
  },
  {
    path: 'personalizado',
    loadChildren: () => import('./personalizado/personalizado.module').then( m => m.PersonalizadoPageModule)
  },
  {
    path: 'rutinas',
    loadChildren: () => import('./rutinas/rutinas.module').then( m => m.RutinasPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
