import { Component } from '@angular/core';
import { Acao } from '../../models/acao';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  nomeProjeto = 'EcoAção';

  nomeAcao = '';

  acoes: Acao[] = [];

  realizarAcao() {
    if(this.nomeAcao.trim().length > 0){
      this.acoes.push({nome: this.nomeAcao,
        quantidade: 0});
    }
    this.nomeAcao = '';
  }

  incrementarAcao(acao: Acao) {
    acao.quantidade++;
  }

  decrementarAcao(acao: Acao) {
    acao.quantidade--;
  }

}
