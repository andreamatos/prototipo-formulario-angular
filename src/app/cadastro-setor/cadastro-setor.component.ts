import { SetorService } from './../setor.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

class Usuario{
  id: BigInteger;
  descSetor: string;
  empresa: string;
}

@Component({
  selector: 'app-cadastro-setor',
  templateUrl: './cadastro-setor.component.html',
  styleUrls: ['./cadastro-setor.component.css']
})

export class CadastroSetorComponent{
  constructor(private setorService: SetorService){}

  usuario = new Usuario();

  empresas = ['3 - CRUZEIRO PÓS GRADUAÇÃO', '10 - UNICID - PÓS GRADUAÇÃO', '15 - UNIFRAN - PÓS GRADUAÇÃO'];

  adicionar(usuario: any){
    this.setorService.adicionar(this.usuario);
  }

}
