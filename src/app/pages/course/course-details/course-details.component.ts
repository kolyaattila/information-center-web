import {Component, OnInit} from '@angular/core';
import {Course} from '../../../shared/models/course';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../../core/services/course.service';
import {QuizService} from '../../../core/services/quiz.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddTopicModelComponent} from '../../lesson/add-topic-model/add-topic-model.component';
import {UpdateTopicModelComponent} from '../../lesson/update-topic-model/update-topic-model.component';
import {Topic} from '../../../shared/models/topic';
import {ConfirmationModalComponent} from '../../../shared/modal/confirmation-modal/confirmation-modat.component';
import {TopicService} from '../../../core/services/topic.service';
import {ToastrService} from 'ngx-toastr';
import {CreateVideoModalComponent} from '../../lesson/video/create-video-modal/create-video-modal.component';
import {VideoService} from '../../../core/services/video.service';
import {Video} from '../../../shared/models/video';
import {Quiz} from '../../../shared/models/quiz';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  steps: {
    number: number;
    name: string;
    topicExternalId: string;
    videoExternalId?: string;
    quiz?: string;
    document?: string;
    display?: boolean;
    videoName?: string;
  }[] = [];
  temp = [
    {
      number: 1,
      name: 'title',
      topicExternalId: '335',
      video: 'video',
      quiz: 'quiz',
      document: 'document',
      display: false
    },
    {
      number: 2,
      video: 'video',
      name: 'title',
      document: 'document',
      display: false
    },
    {
      number: 3,
      video: 'video',
      name: 'title',
      quiz: 'quiz',
      document: 'document',
      display: false
    },
    {
      number: 4,
      video: 'video',
      name: 'title',
      quiz: 'quiz',
      document: 'document',
      display: false
    },
    {
      number: 5,
      video: 'video',
      name: 'title',
      quiz: 'quiz',
      document: 'document',
      display: false
    }
  ];

  course = new Course();
  quizzes: Quiz[] = [];

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private quizService: QuizService,
              private matDialog: MatDialog,
              private topicService: TopicService,
              private toastr: ToastrService,
              private videoService: VideoService) {
    this.route.params.subscribe(params => {
      this.initDate(params.id);
    });
  }

  ngOnInit() {
  }

  initDate(courseId: string) {
    this.courseService.getCourseById(courseId).subscribe(
      data => {
        this.course = data;
        data.topics.forEach((topic, index) => {
          this.steps.push({
            number: index + 1,
            name: topic.name,
            topicExternalId: topic.externalId,
            display: false
          });
        });
      },
      error => {
        this.course = new Course();
      }
    );

    this.quizService.getQuizzesByCourseId(courseId).subscribe(
      data => this.quizzes = data,
      error => this.quizzes = []
    );
  }

  display(step) {
    this.steps.forEach(i => {
      if (i.number === step.number) {
        i.display = !i.display;
      }
    });
    this.completeStep(step);
  }

  completeStep(step) {

    this.quizzes.forEach(quiz => {
      if (step.topicExternalId === quiz.chapterExternalId) {
        step.quiz = quiz.externalId;
      }
    });
  }

  openCreateTopicModel() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'add-topic-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';
    dialogConfig.data = {courseExternalId: this.course.externalId};

    const modalDialog = this.matDialog.open(AddTopicModelComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        // update
      }
    });
  }

  openUpdateTopicModel(step) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'update-topic-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';
    let updateTopic: any = false;
    this.course.topics.forEach(topic => {
        if (step.topicExternalId === topic.externalId) {
          updateTopic = topic;
        }
      }
    );
    if (!updateTopic) {
      return;
    }

    dialogConfig.data = updateTopic;

    const modalDialog = this.matDialog.open(UpdateTopicModelComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        // update
      }
    });
  }

  openDeleteTopicModal(step: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'confirmation-modal';
    dialogConfig.height = '300px';
    dialogConfig.width = '500px';

    dialogConfig.data = {
      name: 'deleteTopic',
      title: 'Sunteti sigur ca doriti sa stergeti acest topic?',
      description: 'Daca veti continua topicul: ' + step.name + ' va fi sters impreuna cu toate quiz-urile.',
      actionButtonText: 'Sterge',
      topicId: step.topicExternalId
    };

    const modalDialog = this.matDialog.open(ConfirmationModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        this.topicService.deleteTopic(step.topicExternalId).subscribe(
          data => {
            this.toastr.success('Topic sters cu succes');
            // update
          },
          error => {
            this.toastr.error('A aparut o eroare');
          });
      }
    });
  }

  openCreateVideoModel(step: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'add-video-modal';
    dialogConfig.height = '600px';
    dialogConfig.width = '500px';

    let selectedTopic: Topic;
    this.course.topics.forEach(topic => {
        if (step.topicExternalId === topic.externalId) {
          selectedTopic = topic;
        }
      }
    );

    dialogConfig.data = {
      course: {name: this.course.name, externalId: this.course.externalId},
      topic: selectedTopic,
    };

    const modalDialog = this.matDialog.open(CreateVideoModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  private setVideoIntoStep(video: Video) {
    console.log(this.steps);
    this.steps.forEach(step => {
      if (step.topicExternalId === video.topicExternalId) {
        step.videoExternalId = video.externalId;
        step.videoName = video.title;
      }
    });
  }
}
