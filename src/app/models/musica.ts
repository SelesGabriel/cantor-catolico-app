import { SafeResourceUrl } from '@angular/platform-browser';

export class Musica {
  id: number;
  nome: string;
  cantor: string;
  categorias: string[];
  letra: string;
  cifra: string;
  youtube: SafeResourceUrl;
  tags: string;
  constructor(
    id: number,
    nome: string,
    cantor: string,
    categorias: string[],
    letra: string,
    cifra: string,
    youtube: string,
    tags: string
  ) {
    this.id = id;
    this.nome = nome;
    this.cantor = cantor;
    this.categorias = categorias;
    this.letra = letra;
    this.cifra = cifra;
    this.youtube = youtube;
    this.tags = tags;
  }
}
