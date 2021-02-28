import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

declare function chemDoodleCompute(molData: string, el: ElementRef, id: string, renderer: Renderer2, width: number, height: number): any;

@Directive({
  selector: '[chem_doodle_2d]',
  exportAs: 'chem_doodle_2d'
})
export class ChemdoodleDirective implements OnChanges {
  @Input() width: number;
  @Input() height: number;
  @Input() chem_doodle_2d: string;
  @Input() id: string;
  @Input() molData: string;

  constructor(private  el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.molData === undefined || this.molData === '') {
      return;
    }

    const correctNewLineMolData = this.addCorrectNewLines(this.molData);
    console.log(correctNewLineMolData);
    if (this.width === undefined && this.height === undefined) {
      chemDoodleCompute(correctNewLineMolData, this.el, this.id, this.renderer, 200, 200);
    }

    chemDoodleCompute(correctNewLineMolData, this.el, this.id, this.renderer, this.width, this.height);
  }

  private addCorrectNewLines(molData) {
    if (!molData.includes('\\n')) {
      return molData;
    }
    let result = '';
    const temp = molData.split('\\n');

    for (const i of temp) {
      result = result.concat(i + '\n');
    }

    return result;
  }
}
