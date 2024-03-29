import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  @Input() view:'grid' | 'list' = 'grid';

  constructor() { }

  ngOnInit(): void {
  }

}
