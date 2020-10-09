import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ProductsService } from '../products.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  ang_form: FormGroup;
  product_name: any;
  product_description: any;
  product_price: any
  constructor(private fb: FormBuilder, private ps: ProductsService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.ang_form = this.fb.group({
      product_name: ['', Validators.required],
      product_description: ['', Validators.required],
      product_price: ['', Validators.required]

    });
  }

  ngOnInit(): void {
  }

  add_product(form_data) {
    console.log(form_data.value);

    this.ps.add_product(form_data.value.product_name, form_data.value.product_description, form_data.value.product_price).subscribe(res => {
      console.log("Updated successfully!");
    }, (err) => {
      console.log(err);
    })
    this.router.navigate(['products'])

  }
}
