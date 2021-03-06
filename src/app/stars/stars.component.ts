import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  private stars: boolean[];
  //从父组件向子组件注入
  @Input()
  private rating: number = 0;
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i = 1; i <=5; i++){
      this.stars.push(i > this.rating);

    }
  }

}
