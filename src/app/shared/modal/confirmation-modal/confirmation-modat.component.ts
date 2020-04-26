import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'confirmation-modal-component',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any) {

  }

  ngOnInit() {
  }

  actionFunction() {
    this.closeModal(true);
  }

  closeModal(response: boolean) {
    this.dialogRef.close(response);
  }

  get data() {
    return this.modalData;
  }
}
