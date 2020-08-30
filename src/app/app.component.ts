import { SetorService } from './setor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  setores = [];

  constructor(private setorService: SetorService){}

  ngOnInit(): Promise<any> {
    this.setores = this.setorService.consultar();
  }

}
