import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'header',
    loadChildren: () => import('./shared/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./shared/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./shared/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./shared/disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'estrategia-i',
    loadChildren: () => import('./paginas/estrategia-i/estrategia-i.module').then( m => m.EstrategiaIPageModule)
  },
  {
    path: 'entrenamiento-i',
    loadChildren: () => import('./paginas/entrenamiento-i/entrenamiento-i.module').then( m => m.EntrenamientoIPageModule)
  },
  {
    path: 'trader-call-i',
    loadChildren: () => import('./paginas/trader-call-i/trader-call-i.module').then( m => m.TraderCallIPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./paginas/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'quien-soy',
    loadChildren: () => import('./quien-soy/quien-soy.module').then( m => m.QuienSoyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
