import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Calculator';
  num1:any;
  num2:any;
  num3:any;
  add(){
    this.num3=this.num1+this.num2
  }
  sub(){
    this.num3=this.num1-this.num2;
  }
  mul(){
    this.num3=this.num1*this.num2;
  }
  div(){
    this.num3=this.num1/this.num2;
  }

  }


