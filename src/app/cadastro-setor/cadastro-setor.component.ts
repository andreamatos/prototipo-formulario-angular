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
  usuario = new Usuario();
  constructor(private setorService: SetorService){}

  adicionar(usuario: any){
    this.setorService.adicionar(this.usuario);
  }

}
