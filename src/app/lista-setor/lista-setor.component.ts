import { SetorService } from './../setor.service';
import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-lista-setor',
  templateUrl: './lista-setor.component.html',
  styleUrls: ['./lista-setor.component.css']
})


export class ListaSetorComponent {
  constructor(private setorService: SetorService){}
  setores = this.setorService.setores;

}
