import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SetorService {

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
  }

}
