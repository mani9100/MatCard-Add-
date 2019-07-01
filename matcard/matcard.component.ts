import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-matcard',
  templateUrl: './matcard.component.html',
  styleUrls: ['./matcard.component.scss']
})
export class MatcardComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  value:number;
  // typesOfLaps: any[] = [{name:'Hp',value:10},{name:'Dell',value:20},{ name: 'Lenovo',value:40},{name:'MAC',value:30} ];
  // priceOfLaps: number[]=[10 , 20 , 30 , 40 , 50 ]
  // click(){
  //   return this.typesOfLaps.value + this.typesOfLaps.value + this.typesOfLaps.value + this.typesOfLaps.value ;
  // }
} 

    