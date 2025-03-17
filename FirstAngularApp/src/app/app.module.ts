import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { CompareComponent } from './compare/compare.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './directive/highlight.directive';
import { PipesComponent } from './component/pipes/pipes.component';
import { AgePipe } from './pipes/age.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    BindingComponent,
    CompareComponent,
    DirectiveComponent,
    HighlightDirective,
    PipesComponent,
    AgePipe,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ProductsComponent,

   
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
