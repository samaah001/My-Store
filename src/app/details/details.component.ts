import { Component, OnInit } from '@angular/core';
import{products} from '../products'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product;

  constructor(private route:ActivatedRoute) {
    console.log(route);
   }

  ngOnInit() {
     // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
     const productIdFromRoute = Number(routeParams.get("productid"));
    console.log(productIdFromRoute);

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute); //  product.ts

    // console.log(this.product)
  }

}