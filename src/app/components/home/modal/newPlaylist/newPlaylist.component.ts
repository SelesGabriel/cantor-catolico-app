import {
  faCoffee,
  faSearch,
  faPlus,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, TemplateRef,Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Musica } from 'src/app/models/musica';
import { Playlist } from 'src/app/models/playlist';
import { PlaylistService } from 'src/app/services/playlist.service';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newPlaylist',
  templateUrl: './newPlaylist.component.html',
  styleUrls: ['./newPlaylist.component.css'],
})
export class NewPlaylistComponent implements OnInit {
  constructor(
    private modalService: BsModalService,
    public playlistService: PlaylistService,
    private toastr: ToastrService
  ) {}

  faPlusCircle = faPlusCircle;
  modalRef?: BsModalRef;
  playlists: Playlist[] = [];

  public myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.getPlaylists();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  getPlaylists(): void {
    this.playlistService.getPlaylists().subscribe((result) => {
      this.playlists = result;
    });
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  @Input() musica: Musica = new Musica(1, '', '', [''], '', '', '', '');
}
