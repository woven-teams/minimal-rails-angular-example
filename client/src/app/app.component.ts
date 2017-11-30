import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Work Sample Example';
  posts = []

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getPosts().subscribe(data => {
      this.posts = data as any[]
    })
  }
}
