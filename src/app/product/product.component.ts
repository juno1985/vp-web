import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products=[
      new Product(102,"IBM电脑",9999.99,"http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg"),
      new Product(103,"IBM电脑",9999.99,"http://localhost:8882/mgt/upload/pc_pic/68f5d46a301045c39f1db349fe3f719a.jpg"),
      new Product(104,"IBM电脑",9999.99,"http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg"),
      new Product(105,"IBM电脑",9999.99,"http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg"),
      new Product(106,"IBM电脑",9999.99,"http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg"),
      new Product(107,"IBM电脑",9999.99,"http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg"),
      new Product(108,"IBM电脑",9999.99,"http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg"),
    ];
    this.products.push(new Product(109,"IBM电脑",9999.99,"http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg"));
    this.products.push(new Product(110,"IBM电脑",9999.99,"http://localhost:8882/mgt/upload/pc_pic/f9a4ca400e7a4edf988dffe2c4efe36e.jpg"));
  }

}
export class Product{
  constructor(
    public id:number,
    public trademark:string,
    public price:number,
    public pic:string
  ){}
}