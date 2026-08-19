import { Component } from '@angular/core';
import { Acao } from '../../models/acao';
import { FormsModule } from '@angular/forms';
import {Categoria} from '../../models/categoria';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  nomeProjeto = 'EcoAção';

  proximoId = 1;

  categoriaSelecionado = Categoria.NATUREZA;

  iconeSelecionado = '🌱';

  Categoria = Categoria;

  categorias = Object.values(Categoria);

  icones: string[] = ['💧','⚡','🌱','♻️','🚲'];

  nomeAcao = '';

  acoes: Acao[] = [];

  acoesFiltradas: Acao[] = [];

  categoriaFiltro: Categoria | null = null;

  realizarAcao() {
    if(this.nomeAcao.trim().length > 0){
      this.acoes.push({id: this.proximoId,
        nome: this.nomeAcao.trim(),
        quantidade: 0,
        categoria: this.categoriaSelecionado,
        icone: this.iconeSelecionado});

      this.proximoId++;

      this.nomeAcao = '';

      this.filtrarPorCategoria(this.categoriaFiltro);
    }
  }

  filtrarPorCategoria(categoria: Categoria | null) {
    this.categoriaFiltro = categoria;

    if (categoria === null) {
      this.acoesFiltradas = this.acoes;
    } else {
      this.acoesFiltradas = this.acoes.filter(acao => acao.categoria === categoria);
    }
  }

  incrementarAcao(acao: Acao) {
    acao.quantidade++;
  }

  decrementarAcao(acao: Acao) {
    acao.quantidade--;
  }

  removerAcao(id: number) {
    this.acoes = this.acoes.filter(acao => acao.id !== id);

    this.filtrarPorCategoria(this.categoriaFiltro);
  }

}
