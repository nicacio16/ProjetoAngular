import { Component } from '@angular/core';

@Component({
  //define o nome do componente (tag que é chamada no index.html)
  selector: 'app-root',
  //define o template da página
  templateUrl: './app.component.html',
  //define o css da página
  styleUrls: ['./app.component.css']
})
//Classe AppComponent, export = public(Java)
export class AppComponent {
  //atributo TITLE com valor atribuido ProjetoAngular
  title = 'ProjetoAngular';
}
