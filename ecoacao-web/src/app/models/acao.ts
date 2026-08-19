import { Categoria } from './categoria';

export interface Acao {
  id: number;
  nome: string;
  quantidade: number;
  categoria: Categoria;
  icone: string;
}
