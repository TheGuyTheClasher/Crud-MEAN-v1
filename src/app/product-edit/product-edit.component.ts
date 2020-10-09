import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  ang_form: FormGroup;
  product: any = {};

  constructor(private fb: FormBuilder, private ps: ProductsService, private route: ActivatedRoute, private router: Router) {
    this.create_form();

  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.edit_product(params['id']).subscribe(res => {
        this.product = res;
      })
    })
  }

  create_form() {
    this.ang_form = this.fb.group({
      product_name: ['', Validators.required],
      product_description: ['', Validators.required],
      product_price: ['', Validators.required]
    });
  }

  update_product(form_data) {
    console.log(form_data);
    console.log('id' + this.route.snapshot.params.id);
    this.ps.update_product(form_data.value.product_name, form_data.value.product_description, form_data.value.product_price, this.route.snapshot.params.id);
    this.router.navigate(['products'])

  }

}


