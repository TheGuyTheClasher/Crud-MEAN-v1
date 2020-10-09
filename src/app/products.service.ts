import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { config } from './config/config'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  add_product(product_name, product_description, product_price) {
    const obj = {
      product_name,
      product_description,
      product_price
    };
    console.log(obj);
    // this.http.post(`${config.uri}/add`, obj).subscribe(res => console.log('Done'));
    return this.http.post(`${config.uri}/add`, obj);
  };

  get_products() {
    return this.http.get(`${config.uri}`);
  }

  edit_product(id) {
    return this.http.get(`${config.uri}/edit/${id}`);
  }

  update_product(product_name, product_description, product_price, id) {
    const obj = {
      product_name,
      product_description,
      product_price
    };
    this.http.post(`${config.uri}/update/${id}`, obj).subscribe(res => {
      console.log("Update successful!");
    }, (err) => {
      console.log('Failed.');
    })
  }

  delete_product(id) {
    return this.http.get(`${config.uri}/delete/${id}`)
  };

}
