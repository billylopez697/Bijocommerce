import { Component, OnInit,Input } from '@angular/core';
import{NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() img;

Imagenes:any=[];



  constructor(private _config:NgbCarouselConfig) {
    _config.interval=3000;
    _config.pauseOnHover=true;
    _config.showNavigationArrows=false;
   }

  ngOnInit(): void {
    console.log(this.img);
    for (let x of this.img) {
      for (let y of x.imagen){
        this.Imagenes.push(y)
      }
    }
    console.log("esto es de imagen");
  }

}


