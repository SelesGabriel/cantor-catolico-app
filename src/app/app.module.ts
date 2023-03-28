import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/nav/nav.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPlaylistComponent } from './components/home/modal/newPlaylist/newPlaylist.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ToastrModule } from 'ngx-toastr';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PlaylistComponent } from './components/playlist/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    NewPlaylistComponent,
    PerfilComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ModalModule.forRoot(),
    MatRadioModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
