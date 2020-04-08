import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {OnInit, Component, Inject} from '@angular/core';
import {ModalActionsService} from './modal-actions.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'confirmation-modal-component',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private modalService: ModalActionsService,
    private toastr: ToastrService) {

  }

  ngOnInit() {
  }

  actionFunction() {
    this.modalService.modalAction(this.modalData).subscribe(
      data => {
        this.toastr.success('Topic sters cu succes');
        this.closeModal(true);
      },
      error => {
        this.toastr.error('A aparut o eroare');
        this.closeModal(false);
      }
    );
  }

  closeModal(response: boolean) {
    this.dialogRef.close(response);
  }
}
