import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  video: string ="../../assets/video.mp4";
  constructor() {
  }

  ngOnInit() {
  }

}
