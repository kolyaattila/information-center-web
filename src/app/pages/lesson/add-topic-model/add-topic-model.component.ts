import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {TopicService} from 'src/app/core/services/topic.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {Topic} from 'src/app/shared/models/topic';

@Component({
  selector: 'app-add-topic-model',
  templateUrl: './add-topic-model.component.html',
  styleUrls: ['./add-topic-model.component.scss']
})
export class AddTopicModelComponent implements OnInit {
  createTopicForm = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    })
  });
  private courseExternalId: string;

  constructor(
    public dialogRef: MatDialogRef<AddTopicModelComponent>,
    private topicService: TopicService,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private toastr: ToastrService) {

    if (modalData) {
      this.courseExternalId = modalData.courseExternalId;
    }

  }

  ngOnInit() {
  }

  actionFunction() {
    const topic = new Topic();
    topic.name = this.createTopicForm.value.name;
    topic.courseExternalId = this.courseExternalId;

    if (!this.createTopicForm.invalid) {

      this.topicService.saveTopic(topic).subscribe(
        data => {
          this.toastr.success('Topic creat cu succes');
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
    return this.createTopicForm.get('name');
  }
}
