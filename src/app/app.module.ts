import { SetorService } from './setor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaSetorComponent } from './lista-setor/lista-setor.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { CadastroSetorComponent } from './cadastro-setor/cadastro-setor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaSetorComponent,
    CadastroSetorComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SetorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
