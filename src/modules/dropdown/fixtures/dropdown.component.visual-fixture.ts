import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SkyDropdownModule } from '../dropdown.module';

import { Bootstrapper } from '../../../../visual/bootstrapper';

@Component({
  selector: 'sky-demo-app',
  templateUrl: './dropdown.component.visual-fixture.html'
})
class AppComponent {
  public dropdownOpen = false;

  public click() {
    this.dropdownOpen = true;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    SkyDropdownModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
class AppModule { }

Bootstrapper.bootstrapModule(AppModule);
