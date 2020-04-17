import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../core/services/account.service';
import {ChangePassword} from '../../shared/models/changePassword';
import {Account} from '../../shared/models/account';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {EditAccountModalComponent} from './edit-account-modal/edit-account-modal.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
      ]
    }),
    newPassword: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
      ]
    }),
    confirmNewPassword: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
      ]
    })
  });
  currentAccount: Account;

  constructor(private accountService: AccountService,
              public matDialog: MatDialog,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.populateAccount();
  }

  populateAccount() {
    this.accountService.getCurrentAccount()
      .then(value => this.currentAccount = value);
  }

  savePassword() {
    if (this.isValid()) {
      const changePassword: ChangePassword = new ChangePassword();
      changePassword.oldPassword = this.oldPassword.value;
      changePassword.password = this.newPassword.value;
      changePassword.username = this.currentAccount.username;
      this.accountService.changePassword(changePassword).subscribe(
        data => {
          this.toastr.success('Parola a fost schimbata');
          this.changePasswordForm.reset();
        },
        error => this.handlerError(error)
      );
    }
  }

  isValid() {
    return this.oldPassword.valid
      && this.newPassword.valid
      && this.confirmNewPassword.valid
      && this.newPassword.value === this.confirmNewPassword.value
      && this.oldPassword.value !== this.newPassword.value;
  }

  openUpdateAccountModel() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'update-account-modal';
    dialogConfig.height = '500px';
    dialogConfig.width = '800px';
    dialogConfig.data = this.currentAccount;

    const modalDialog = this.matDialog.open(EditAccountModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.populateAccount();
      }
    });
  }

  handlerError(error: any) {
    if (error && error.status === 400) {
      this.toastr.error('Parola este incorecta');
    } else {
      this.toastr.error('A aparut o eroare');
    }
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmNewPassword() {
    return this.changePasswordForm.get('confirmNewPassword');
  }

}
