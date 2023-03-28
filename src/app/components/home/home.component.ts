import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { faCoffee, faSearch,faPlus,faPlusCircle, faPlay} from '@fortawesome/free-solid-svg-icons';

import { Musica } from 'src/app/models/musica';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    public sanitizer: DomSanitizer,
    public musicService: MusicService
  ) {}

  mostrarPlayerPadrao: boolean = true;

  border = 'border-style: solid;';;
  faCoffee = faCoffee;
  faSearch = faSearch;
  faPlus = faPlus;
  faPlusCircle = faPlusCircle;
  faPlay = faPlay;

  musics: Musica[] = [];

  public filteredMusics: Musica[] = [];
  private _filterList: string = '';

  public get filterList() {
    return this._filterList;
  }

  public set filterList(value: string) {
    this._filterList = value;
    this.filteredMusics = this.filterList
      ? this.filterMusics(this.filterList)
      : this.musics;
  }

  filterMusics(filterParam: string) {
    return this.musics.filter(
      (music) =>
        music.tags.toUpperCase().indexOf(filterParam.toUpperCase()) !== -1
    );
  }

  ngOnInit() {
    this.getMusics();
  }

  getMusics(): void {
    this.musicService.getMusics().subscribe((response) => {
      response.forEach((element) => {
        element.youtube = this.sanitizer.bypassSecurityTrustResourceUrl(
          element.youtube.toString()
        );
      });
      this.musics = response;
      this.filteredMusics = response;
    });
  }

  mostrarPlayerYoutube() {
    this.mostrarPlayerPadrao = false;
  }
}
