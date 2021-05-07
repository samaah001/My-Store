import { Component, OnInit } from '@angular/core';
import {products} from "../products"


@Component({
  selector: 'app-expirement-b',
  templateUrl: './expirement-b.component.html',
  styleUrls: ['./expirement-b.component.css']
})
export class ExpirementBComponent implements OnInit {
  product=products;

  constructor() { }

  ngOnInit() {
  }
}