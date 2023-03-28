
export class Playlist {
  id: number;
  nome: string;
  idMusicas: number[];
  idUsuario: number;
  public: boolean;
  dataCriacao: Date;
  constructor(
    id: number,
    nome: string,
    idMusicas: number[],
    idUsuario: number,
    _public: boolean,
    dataCriacao:Date
  ) {
    this.id = id;
    this.nome = nome;
    this.idMusicas = idMusicas;
    this.idUsuario = idUsuario;
    this.public = _public;
    this.dataCriacao = dataCriacao;
  }
}
