import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @Input() videos;
  video:any=[]


  constructor(private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    console.log(this.videos);
    for (let x of this.videos) {
      for (let y of x.videos){
        this.video.push(y)
      }
    }
    console.log("esto es de video");
    console.log(this.video);
  }
  getVideoIframe(url) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}

}
