import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Playlists } from '../mocks/Mock';
import { Playlist } from '../models/playlist';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {

  constructor() {}
  
  getPlaylists(): Observable<Playlist[]> {
    const musics = of(Playlists);
    return musics;
  }
}
