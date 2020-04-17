import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {AccountService} from '../../../core/services/account.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Account} from '../../../shared/models/account';

@Component({
  selector: 'app-edit-account-modal',
  templateUrl: './edit-account-modal.component.html',
  styleUrls: ['./edit-account-modal.component.scss']
})
export class EditAccountModalComponent implements OnInit {
  editAccountForm = new FormGroup({
    firstName: new FormControl(this.modalData.firstName, {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    lastName: new FormControl(this.modalData.lastName, {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    })
  });

  constructor(
    public dialogRef: MatDialogRef<EditAccountModalComponent>,
    private accountService: AccountService,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  actionFunction() {
    if (!this.editAccountForm.invalid) {
      const account = new Account();
      account.firstName = this.firstName.value;
      account.lastName = this.lastName.value;
      account.username = this.modalData.username;
      account.uid = this.modalData.uid;

      this.accountService.updateAccount(account).subscribe(
        data => {
          this.toastr.success('Account salvat cu succes');
          this.closeModal(true);
        },
        error => {
          this.toastr.error('A aparut o eroare');
        }
      );
    }
  }

  closeModal(response: boolean) {
    this.dialogRef.close(response);
  }

  get firstName() {
    return this.editAccountForm.get('firstName');
  }

  get lastName() {
    return this.editAccountForm.get('lastName');
  }
}
