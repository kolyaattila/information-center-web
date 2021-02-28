import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Answer} from '../../../shared/models/answer';
import {AnswerType} from '../../../shared/models/AnswerType';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  @Input() private answers = [];
  keys = ['A', 'B', 'C', 'D', 'E'];
  answerTypeList = [AnswerType.CHEMISTRY_ANSWER, AnswerType.MATH_ANSWER, AnswerType.SIMPLE_ANSWER];
  answerForm: any;
  private readonly isUpdate: boolean;
  tooltipInfo = 'Adauga formula chimica in formatul mol, pentru mai multe diagrame adauga \'/*END*/\' la sfarsitul fiecarei diagrame ';

  constructor(public dialogRef: MatDialogRef<AnswersComponent>,
              @Inject(MAT_DIALOG_DATA) private modalData: any) {
    if (this.modalData && this.modalData.answer) {
      this.initUpdateForm(this.modalData.answer);
      this.isUpdate = true;
    } else {
      this.initForm();
    }
  }

  ngOnInit() {

  }

  closeModal() {
    this.dialogRef.close(false);
  }

  actionFunction() {
    if (this.answerForm.valid) {
      const answer = new Answer();
      answer.name = this.answerName.value;
      answer.correct = this.correct.value;
      answer.key = this.key.value;
      answer.reason = this.reason.value;
      answer.externalId = '' + Math.random();
      answer.isNewAnswer = !this.isUpdate;
      answer.answerType = this.answerType.value;
      answer.parseText = this.parseText.value;

      this.dialogRef.close(answer);
    }
  }

  get answerName() {
    return this.answerForm.get('answerName');
  }

  get key() {
    return this.answerForm.get('key');
  }

  get correct() {
    return this.answerForm.get('correct');
  }

  get reason() {
    return this.answerForm.get('reason');
  }

  get answerType() {
    return this.answerForm.get('answerType');
  }

  get parseText() {
    return this.answerForm.get('parseText');
  }

  // https://cactus.nci.nih.gov/cgi-bin/osra/index.cgi

  private initUpdateForm(answer: any) {
    this.answerForm = new FormGroup({
      answerName: new FormControl(answer.name, {
        validators: [Validators.required]
      }),
      reason: new FormControl(answer.reason, {
        validators: []
      }),
      correct: new FormControl(answer.correct, {
        validators: []
      }),
      key: new FormControl(answer.key, {
        validators: [Validators.required]
      }),
      answerType: new FormControl(answer.answerType, {
        validators: [Validators.required]
      }),
      parseText: new FormControl(answer.parseText, {})
    });
  }

  private initForm() {
    this.answerForm = new FormGroup({
      answerName: new FormControl('', {
        validators: [Validators.required]
      }),
      reason: new FormControl('', {
        validators: []
      }),
      correct: new FormControl('', {
        validators: []
      }),
      key: new FormControl('', {
        validators: [Validators.required]
      }),
      answerType: new FormControl(AnswerType.SIMPLE_ANSWER, {
        validators: [Validators.required]
      }),
      parseText: new FormControl('', {})
    });
  }
}
