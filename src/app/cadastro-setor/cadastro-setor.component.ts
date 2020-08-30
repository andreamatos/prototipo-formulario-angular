import { SetorService } from './../setor.service';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

class Usuario{
  id: BigInteger;
  descSetor: string;
  empresa: BigInteger;
  descEmpresa: string;
}
=======
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
>>>>>>> master

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
<<<<<<< HEAD
=======

export class CadastroSetorComponent{
  constructor(private setorService: SetorService){}

  usuario = new Usuario();
>>>>>>> master

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
<<<<<<< HEAD
    console.log(usuario);
=======
>>>>>>> master
    this.setorService.adicionar(this.usuario);
  }

}
