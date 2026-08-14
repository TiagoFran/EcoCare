import { Categoria } from './categoria';

export interface Acao {

  nome: string;
  quantidade: number;
  categoria: Categoria;
  icone: string;
}
