import { Component, OnInit } from '@angular/core';
import{ TryService } from '../try.service';

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrls: ['./importer.component.css']
})
export class ImporterComponent implements OnInit {
  tempAvg=this.temp.calcTempAvg();
  constructor(private temp:TryService) { }

  ngOnInit() {
  }

}