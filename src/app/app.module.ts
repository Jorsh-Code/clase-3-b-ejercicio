import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponent } from './components/uno/uno.component';
import { ColorDirective } from './libs/directives/color.directive';
import { TextDirective } from './libs/directives/text.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    ColorDirective,
    TextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
