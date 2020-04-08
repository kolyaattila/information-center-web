import {Component, OnInit, Input, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TopicService} from 'src/app/core/services/topic.service';
import {ToastrService} from 'ngx-toastr';
import {Topic} from 'src/app/shared/models/topic';

@Component({
  selector: 'app-update-topic-model',
  templateUrl: './update-topic-model.component.html',
  styleUrls: ['./update-topic-model.component.scss']
})
export class UpdateTopicModelComponent implements OnInit {
  updateTopicForm = new FormGroup({
    name: new FormControl(this.modalData.name, {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    })
  });

  constructor(
    public dialogRef: MatDialogRef<UpdateTopicModelComponent>,
    private topicService: TopicService,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  actionFunction() {
    if (!this.updateTopicForm.invalid) {
      const topic = new Topic();
      topic.name = this.updateTopicForm.value.name;
      topic.externalId = this.modalData.externalId;

      this.topicService.updateTopic(topic).subscribe(
        data => {
          this.toastr.success('Topic salvat cu succes');
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

  get name() {
    return this.updateTopicForm.get('name');
  }
}
