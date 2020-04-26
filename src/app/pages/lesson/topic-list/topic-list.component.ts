import {Component, OnInit} from '@angular/core';
import {TopicService} from 'src/app/core/services/topic.service';
import {Topic} from 'src/app/shared/models/topic';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ConfirmationModalComponent} from 'src/app/shared/modal/confirmation-modal/confirmation-modat.component';
import {AddTopicModelComponent} from '../add-topic-model/add-topic-model.component';
import {UpdateTopicModelComponent} from '../update-topic-model/update-topic-model.component';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {

  allTopics: Topic[];

  constructor(private topicService: TopicService,
              public matDialog: MatDialog,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.populateTopics();
  }

  populateTopics() {
    this.topicService.getAllTopics().subscribe(
      data => {
        this.allTopics = data;
      },
      error => {

      }
    );
  }

  openDeleteTopicModal(topic: Topic) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'confirmation-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';

    dialogConfig.data = {
      name: 'deleteTopic',
      title: 'Sunteti sigur ca doriti sa stergeti acest topic?',
      description: 'Daca veti continua topicul: ' + topic.name + ' va fi sters.',
      actionButtonText: 'Sterge',
      topicId: topic.externalId
    };

    const modalDialog = this.matDialog.open(ConfirmationModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.topicService.deleteTopic(topic.externalId).subscribe(
          data => {
            this.toastr.success('Topic sters cu succes');
            this.populateTopics();
          },
          error => {
            this.toastr.error('A aparut o eroare');
          });
      }
    });
  }

  openCreateTopicModel() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'add-topic-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';

    const modalDialog = this.matDialog.open(AddTopicModelComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.populateTopics();
      }
    });
  }

  openUpdateTopicModel(topic: Topic) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'update-topic-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';
    dialogConfig.data = topic;

    const modalDialog = this.matDialog.open(UpdateTopicModelComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.populateTopics();
      }
    });
  }
}
