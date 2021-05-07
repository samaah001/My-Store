import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ExpirementAComponent } from './expirement-a/expirement-a.component';
import { ExpirementBComponent } from './expirement-b/expirement-b.component';
import { ExpirementCComponent } from './expirement-c/expirement-c.component';
import { DetailsComponent } from './details/details.component';
import { ImporterComponent } from './importer/importer.component';
import { TryService } from './try.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'haa', component: ExpirementAComponent },
       { path: 'waa', component: ExpirementBComponent },
        { path: 'impr', component: ImporterComponent },
       { path: 'taa', component: ExpirementCComponent },
       { path: 'products/:productid', component: DetailsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ExpirementAComponent,
    ExpirementBComponent,
    ExpirementCComponent,
    DetailsComponent,
    ImporterComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [TryService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/