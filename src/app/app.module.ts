import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocklyComponent } from './components/blockly/blockly.component';
import { UnityComponent } from './components/unity/unity.component';
import { ResizableComponent } from './components/resizable/resizable.component';
import { DragableComponent } from './components/dragable/dragable.component';
import { NavbarComponent } from './components/navbars/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocklyComponent,
    UnityComponent,
    ResizableComponent,
    DragableComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
