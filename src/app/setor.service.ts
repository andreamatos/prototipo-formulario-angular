import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';

=======
>>>>>>> master

@Injectable({
  providedIn: 'root'
})

export class SetorService {
<<<<<<< HEAD
  constructor(private http: HttpClient) { }

  setores = [];

  adicionar(usuario){
      const setor ={
        id: usuario.id,
        descSetor: usuario.descSetor,
        empresa: usuario.empresa
      }
      this.setores.push(setor);
  }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/empresas').toPromise();
=======

  setores = [];

  adicionar(usuario) {
    const setor = {
      id: usuario.id,
      descSetor: usuario.descSetor,
      empresa: usuario.empresa
    };

    this.setores.push(setor);
  }

  consultar() {
    return this.setores;
>>>>>>> master
  }

}
