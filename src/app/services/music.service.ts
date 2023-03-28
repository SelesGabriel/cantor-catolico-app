import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Musicas } from '../mocks/Mock';
import { Musica } from '../models/musica';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getMusics(): Observable<Musica[]>{
    const musics = of(Musicas);
    return musics;
  }

}
