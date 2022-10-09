import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
titre :string="Demo du data binding interpolation";
status:boolean=false;
nom :string="Ayed malek";
  constructor() { }

  ngOnInit(): void {
  }
changertitre(){
  this.titre="nouveau titre";
}
}
