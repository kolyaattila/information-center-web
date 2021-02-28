import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MathDirective} from './math.directive';
import {MathService} from './math.service';


@NgModule({
  declarations: [MathDirective],
  imports: [CommonModule],
  exports: [MathDirective],
  providers: [MathService]
})
export class MathModule {
}
