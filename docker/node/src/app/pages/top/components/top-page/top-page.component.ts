import { Component,OnInit } from "@angular/core";
import　{RandomImageService} from "../../services/random-image.service"


@Component({
  selector:'top-page',
  templateUrl:'./top-page.component.html',
  styleUrls:['./top-page.component.css']
})
export class TopPageComponent implements OnInit{
  public mainImages:string[];
  public readonly imagescount=  10;

  constructor(private readonly randomImageService:RandomImageService){}

  public ngOnInit():void{
    this.randomImageService.getImageList(this.imagescount).subscribe(
      images => {
        this.mainImages=images;
        console.log(this.mainImages);
      }
    );
  }
}

