import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import Product from 'src/product';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[];

  constructor(private ps: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ps.get_products().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  delete_product(id, i) {

    this.ps.delete_product(id).subscribe(res => {
      console.log('Succesfully removed.');
      this.products.splice(i, 1);
    })
  }
}