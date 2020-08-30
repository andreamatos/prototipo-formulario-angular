import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent{

  setores = [];
=======
export class AppComponent implements OnInit{

  setores = [];

  constructor(private setorService: SetorService){}

  ngOnInit() {
    this.setores = this.setorService.consultar();
  }

>>>>>>> master
}
