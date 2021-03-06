import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TopPageComponent } from "./components/top-page/top-page.component";
import { RandomImageService } from "./services/random-image.service";



@NgModule({
  imports:[CommonModule],
  declarations:[TopPageComponent],
  providers:[RandomImageService]
})
export class TopModule{}