import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { Observable, of } from "rxjs";
import { take,map } from "rxjs/operators";


export interface IRandomImageListItem {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export type IRandomImageListResponse = IRandomImageListItem[];
// const IRandomImageListResponse:any =[];

const randomImageApiBaseUrl = "https://picsum.photos";
const randomImageApiBaseUrlV2 = "https://picsum.photos/v2";  

export const randomImageApiUrls = {
  byList:(limit:number)=>`${randomImageApiBaseUrlV2}/list?page=${Math.round(Math.random()*100)+1}&limit=${limit}`,
  byIdandWidthandHeight:(id:number,width:number,height:number)=>`${randomImageApiBaseUrl}/id/${id}/${width}/${height}`
}

@Component({
  selector:'http-page',
  templateUrl:'./http-page.component.html',
  styleUrls:['./http-page.component.css']
})
export class HttpPageComponent{
  public limit:number = 10;
  public mainImages;
  public readonly width = 200;
  public readonly height =300;
  // randomImageApiUrls = `${randomImageApiBaseUrlV2}/list?page=1&limit=${this.limit}`
  // randomImageApiUrlsbyIdandWidthandHeight = `${randomImageApiBaseUrl}/id/${this.id}/${this.width}/${this.height}`

  constructor(private http:HttpClient){
    http.get(randomImageApiUrls.byList(10)).pipe(take(1),map(
      (items:IRandomImageListResponse)=>{
        // items.map(({id}) => console.log(id));
        return items.map(
          ({id}) => randomImageApiUrls.byIdandWidthandHeight(id,200,300)
        );
      }
    ))
    .subscribe(
      images => {
        this.mainImages=images;
        console.log(this.mainImages);
      }
    );
  }
  fun():void{
    new Observable()
  }

  // public loadImages(images){
  //   this.mainImages=images
  //   // const image = new Image(width,height);
  //   // image.src = this.randomImageApiUrls

  //   return of(this.mainImages)
  // }
}

