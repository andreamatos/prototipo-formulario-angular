import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-setor',
  templateUrl: './cadastro-setor.component.html',
  styleUrls: ['./cadastro-setor.component.css']
})
export class CadastroSetorComponent{

  empresas = ['3 - CRUZEIRO PÓS GRADUAÇÃO', '10 - UNICID - PÓS GRADUAÇÃO', '15 - UNIFRAN - PÓS GRADUAÇÃO'];

  salvar(form: NgForm) {
    console.log(form.value.empresa);
    console.log(form.value.idSetor);
    console.log(form.value.idDescricao);
  }

}
