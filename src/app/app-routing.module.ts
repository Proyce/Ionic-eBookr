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
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./places/discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./places/offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'new-offer',
    loadChildren: () => import('./places/offers/new-offer/new-offer.module').then( m => m.NewOfferPageModule)
  },
  {
    path: 'edit-0ffer',
    loadChildren: () => import('./places/offers/edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./places/discover/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  },
  {
    path: 'offer-bookings',
    loadChildren: () => import('./places/offers/offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
