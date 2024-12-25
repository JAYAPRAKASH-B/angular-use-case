import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const observable = new Observable(observer => {
  observer.next('Hello');
  observer.next('Hello world this is from last observable value');
  observer.complete();
});

const subject = new Subject<string>();

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  constructor(private readonly router: Router) {}
  public message: any;
  public subjectmessage  = "";
  ngOnInit() {
    this.initData();
    this.initSubjectData();
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }
  initData(): void {
    observable.subscribe({
      next: (value: unknown) => {
        this.message = value
      },
      error: err => console.error(err),
      complete: () => console.log('Observable Completed'),
    });
  }

  initSubjectData() {
    subject.subscribe(value => this.subjectmessage = value);

    subject.subscribe(value => this.subjectmessage = value);

    subject.next('Hello world');
    subject.next('Hello world this is from rxjs subject');
  }
  ngOnDestroy() {
    subject.unsubscribe();
  }
}
