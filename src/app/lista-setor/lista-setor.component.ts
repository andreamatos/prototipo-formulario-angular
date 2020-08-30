import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-setor',
  templateUrl: './lista-setor.component.html',
  styleUrls: ['./lista-setor.component.css']
})
export class ListaSetorComponent {
  constructor(private setorService: SetorService){}
  setores = this.setorService.setores;
<<<<<<< HEAD
=======

>>>>>>> master
}
