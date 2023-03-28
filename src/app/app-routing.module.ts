import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PlaylistComponent } from './components/playlist/playlist/playlist.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'perfil', component: PerfilComponent },
  { path: 'playlists', component: PlaylistComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
