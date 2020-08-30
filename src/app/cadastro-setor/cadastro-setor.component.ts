import { SetorService } from './../setor.service';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

class Usuario{
  id: BigInteger;
  descSetor: string;
  empresa: BigInteger;
  descEmpresa: string;
}

@Component({
  selector: 'app-cadastro-setor',
  templateUrl: './cadastro-setor.component.html',
  styleUrls: ['./cadastro-setor.component.css']
})

export class CadastroSetorComponent implements OnInit {
  constructor(private setorService: SetorService){}

  usuario = new Usuario();
  empresas = [];

  ngOnInit(){
    this.setorService.consultar()
      .then(empresas => {
        this.empresas = empresas;
      });
  }

  adicionar(usuario: any){
    console.log(usuario);
    this.setorService.adicionar(this.usuario);
  }

}
