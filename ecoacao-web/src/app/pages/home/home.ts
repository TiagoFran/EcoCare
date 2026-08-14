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

  categoriaSelecionado = Categoria.NATUREZA;

  iconeSelecionado = '🌱';

  Categoria = Categoria;

  categorias = Object.values(Categoria);

  icones: string[] = ['💧','⚡','🌱','♻️','🚲'];

  nomeAcao = '';

  acoes: Acao[] = [];

  realizarAcao() {
    if(this.nomeAcao.trim().length > 0){
      this.acoes.push({nome: this.nomeAcao.trim(),
        quantidade: 0,
        categoria: this.categoriaSelecionado,
        icone: this.iconeSelecionado});
      this.nomeAcao = '';
    }
  }

  incrementarAcao(acao: Acao) {
    acao.quantidade++;
  }

  decrementarAcao(acao: Acao) {
    acao.quantidade--;
  }

}
