import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { take, map } from "rxjs/operators";
import { Observable, of } from "rxjs";

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

@Injectable()
export class RandomImageService{
  public readonly defaultImageWidth = 400;
  public readonly defaultImageHeight = 300;

  constructor(private httpClient:HttpClient){}
   
  // fun():void{
  //   new Observable()
  // }

  // public loadImages(images){
  //   this.mainImages=images
  //   // const image = new Image(width,height);
  //   // image.src = this.randomImageApiUrls

  //   return of(this.mainImages)
  // }
  public getImageList(width:number=this.defaultImageWidth,height:number=this.defaultImageHeight){
    return this.httpClient.get(randomImageApiUrls.byList(10)).pipe(take(1),map((items:IRandomImageListResponse)=>{
      return items.map(({id})=>randomImageApiUrls.byIdandWidthandHeight(id,width,height))
    }));
  }

}