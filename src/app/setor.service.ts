import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SetorService {
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
  }

}
