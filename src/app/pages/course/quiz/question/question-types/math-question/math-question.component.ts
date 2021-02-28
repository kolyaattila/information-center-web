import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss']
})
export class MathQuestionComponent implements OnInit {
  @Input() question;

  // exemplu
  // <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  //   <msup>
  //     <mrow data-mjx-texclass="INNER">
  //       <mo data-mjx-texclass="OPEN">(</mo>
  //       <munderover>
  //         <mo data-mjx-texclass="OP">&#x2211;</mo>
  //         <mrow>
  //           <mi>k</mi>
  //           <mo>=</mo>
  //           <mn>1</mn>
  //         </mrow>
  //         <mi>n</mi>
  //       </munderover>
  //       <msub>
  //         <mi>a</mi>
  //         <mi>k</mi>
  //       </msub>
  //       <msub>
  //         <mi>b</mi>
  //         <mi>k</mi>
  //       </msub>
  //       <mo data-mjx-texclass="CLOSE">)</mo>
  //     </mrow>
  //     <mrow>
  //       <mstyle scriptlevel="0">
  //         <mspace width="negativethinmathspace"></mspace>
  //       </mstyle>
  //       <mstyle scriptlevel="0">
  //         <mspace width="negativethinmathspace"></mspace>
  //       </mstyle>
  //       <mn>2</mn>
  //     </mrow>
  //   </msup>
  //   <mo>&#x2264;</mo>
  //   <mrow data-mjx-texclass="INNER">
  //     <mo data-mjx-texclass="OPEN">(</mo>
  //     <munderover>
  //       <mo data-mjx-texclass="OP">&#x2211;</mo>
  //       <mrow>
  //         <mi>k</mi>
  //         <mo>=</mo>
  //         <mn>1</mn>
  //       </mrow>
  //       <mi>n</mi>
  //     </munderover>
  //     <msubsup>
  //       <mi>a</mi>
  //       <mi>k</mi>
  //       <mn>2</mn>
  //     </msubsup>
  //     <mo data-mjx-texclass="CLOSE">)</mo>
  //   </mrow>
  //   <mrow data-mjx-texclass="INNER">
  //     <mo data-mjx-texclass="OPEN">(</mo>
  //     <munderover>
  //       <mo data-mjx-texclass="OP">&#x2211;</mo>
  //       <mrow>
  //         <mi>k</mi>
  //         <mo>=</mo>
  //         <mn>1</mn>
  //       </mrow>
  //       <mi>n</mi>
  //     </munderover>
  //     <msubsup>
  //       <mi>b</mi>
  //       <mi>k</mi>
  //       <mn>2</mn>
  //     </msubsup>
  //     <mo data-mjx-texclass="CLOSE">)</mo>
  //   </mrow>
  // </math>


  constructor() {
  }

  ngOnInit() {
  }

}
