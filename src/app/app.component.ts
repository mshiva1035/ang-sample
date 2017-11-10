import { Component } from '@angular/core';
import { DataService} from './data.service';

import {trigger, state, style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
      <p [@myAnim]='state' (click)='animateMe()'> Animate </p>
    `,
  styles: [`
      p{
        width: 200px;
        background: lightgray;
        margin: 100px auto; 
        text-align: center;
        padding:20px;
        font-size:1.5em;
      }
  `],
  animations: [
    trigger('myAnim',[

      state('small',style({
        transform:' scale(1)',
      })),
      state('large',style({
        transform: 'scale(2)'
      })),
      transition('small <=> large',animate('300ms ease-in',keyframes([
        style({opacity:0,transform:'translateY(-75%)',offset:0}),
        style({opacity:1,transform:'translateY(30%)',offset:.5}),
        style({opacity:1,transform:'translateY(0%)',offset:1})
      ])))
    ]),
    
  ]
})
export class AppComponent {
  title = 'app';
  titleClass = 'red-title';
  titleClassRed = true;
  titleClasses={
    'red-title':true,
    'large-title':true
  }
  titleStyle = false;

  titleStyles = {
    'color' : 'red',
    'font-size': '4em'
  }
  myEvent(event){
    console.log(event);
  }
  state : string = 'small';
  constructor(private dataService:DataService){

  }
  newProp:string = '';
  ngOnInit(){
    console.log(this.dataService.cars);
    this.newProp = this.dataService.myData();
  }
  
  animateMe(){
    this.state = (this.state === 'small'?'large':'small');
  }
}
