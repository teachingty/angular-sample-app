import { HttpClient,HttpHeaders } from "@angular/common/http";
import { CompileShallowModuleMetadata } from "@angular/compiler";
import { Component } from "@angular/core";


const randomImageApiBaseUrl = "https://picsum.photos";
const randomImageApiBaseUrlV2 = "https://picsum.photos/v2";  

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
  // randomImageApiUrls = `${randomImageApiBaseUrl}/${this.width}/${this.height}`
  randomImageApiUrls = `${randomImageApiBaseUrlV2}/list?page=1&limit=${this.limit}`
    
  constructor(private http:HttpClient){
    this.http=http;
    http.get(this.randomImageApiUrls).subscribe(
      images => {
        this.mainImages=images;
        console.log(this.mainImages);
      }
    );
  }
}

