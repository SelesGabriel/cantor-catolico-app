import { Musica } from "../models/musica";
import { Playlist } from "../models/playlist";

export const Playlists: Playlist[] = [
  {
    id: 1,
    nome: 'missa',
    idUsuario: 1,
    idMusicas: [1, 2, 3],
    public: true,
    dataCriacao: new Date(),
  },
  {
    id: 2,
    nome: 'missa 21/09',
    idUsuario: 1,
    idMusicas: [1, 2, 3],
    public: true,
    dataCriacao: new Date(),
  },
  {
    id: 3,
    nome: 'missa 31/03',
    idUsuario: 1,
    idMusicas: [1, 2, 3],
    public: true,
    dataCriacao: new Date(),
  },
  {
    id: 4,
    nome: 'adoração',
    idUsuario: 1,
    idMusicas: [1, 2, 3],
    public: true,
    dataCriacao: new Date(),
  },
];

export const Musicas: Musica[] = [
  {
    id: 1,
    nome: 'GLORIA A DEUS NAS ALTURAS',
    cantor: 'ELIANA RIBEIRO',
    categorias: ['HINO DE LOUVOR / ', 'ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/XtrBoeXXpu8',
    tags: 'gloria a deus nas alturas,eliana ribeiro,hino de louvor, adoração, adoracao, glória',
  },
  {
    id: 2,
    nome: 'HEROI',
    cantor: 'WALMIR ALENCAR',
    categorias: ['ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/7w83Qn-Tlm8',
    tags: 'walmir alencar, adoracao, adoração heroi, herói',
  },
  {
    id: 3,
    nome: 'FOGO ABRASADOR',
    cantor: 'COLO DE DEUS',
    categorias: ['ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/Wj2ByWbya9g',
    tags: 'fogo abrasador colo de deus adoração adoracao',
  },
  {
    id: 4,
    nome: 'QUERO TE DAR A PAZ',
    cantor: 'SHALOM',
    categorias: ['HINO DE LOUVOR / ', 'ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/nOo0NZfn1hE',
    tags: 'quero te dar a paz shalom hino de louvor adoração adoracao',
  },
  {
    id: 5,
    nome: 'DESPERTA',
    cantor: 'COLO DE DEUS',
    categorias: ['HINO DE LOUVOR / ', 'ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/0BxQuwHLtC0',
    tags: 'desperta colo de deus hino de louvor adoração adoracao',
  },
  {
    id: 6,
    nome: 'NOITES TRAIÇOEIRAS',
    cantor: 'PADRE MARCELO ROSSI',
    categorias: ['HINO DE LOUVOR / ', 'ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/xV7ZzeBR3oc',
    tags: 'noites traicoeiras traiçoeiras padre marcelo rossi hino de louvor adoração adoracao adoraçao',
  },
  {
    id: 7,
    nome: 'DEUS É DEZ',
    cantor: 'PADRE MARCELO ROSSI',
    categorias: ['HINO DE LOUVOR / ', 'ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/-y79-W318Gs',
    tags: 'padre marcelo rossi deus é dez deus é 10',
  },
  {
    id: 8,
    nome: 'TODA TUA',
    cantor: 'COLO DE DEUS',
    categorias: ['MARIA / ', 'ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/EtFrVnuXFsQ',
    tags: 'toda tua maria adoração',
  },
  {
    id: 9,
    nome: 'COLO DE MÃE',
    cantor: 'COLO DE DEUS',
    categorias: ['HINO DE LOUVOR / ', 'ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/fvJY4Ky_lQ4',
    tags: 'colo de mãe colo de mae maria',
  },
  {
    id: 10,
    nome: 'YESHUA',
    cantor: 'COLO DE DEUS',
    categorias: ['HINO DE LOUVOR / ', 'ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/fTLC4SJNvgE',
    tags: 'yeshua colo de deus adoração adoracao',
  },
  {
    id: 11,
    nome: 'SANTO, SANTO, SANTO',
    cantor: 'SHALOM',
    categorias: ['HINO DE LOUVOR / ', 'ADORAÇÃO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/B416yyyiRxA',
    tags: 'santo shalom',
  },
  {
    id: 12,
    nome: 'CORDEIRO',
    cantor: 'FREI GILSON',
    categorias: ['CORDEIRO'],
    letra: 'https://www.letras.mus.br/eliana-ribeiro/783808/',
    cifra:
      'https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/',
    youtube: 'http://www.youtube.com/embed/tpjSo2K6zAE',
    tags: 'cordeiro frei gilson cordeiro de deus',
  },
];
