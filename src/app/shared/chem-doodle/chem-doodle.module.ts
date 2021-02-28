import {NgModule} from '@angular/core';
import {ChemdoodleDirective} from './directive/chem-doodle.directive';


@NgModule({
  exports: [ChemdoodleDirective],
  declarations: [ChemdoodleDirective]
})
export class NgChemdoodleModule {
}
