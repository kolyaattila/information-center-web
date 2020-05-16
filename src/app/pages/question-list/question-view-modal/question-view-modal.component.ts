import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-question-view-modal',
  templateUrl: './question-view-modal.component.html',
  styleUrls: ['./question-view-modal.component.scss']
})
export class QuestionViewModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuestionViewModalComponent>,
              @Inject(MAT_DIALOG_DATA) private modalData: any) {
  }

  ngOnInit() {
  }

  get data() {
    return this.modalData;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
