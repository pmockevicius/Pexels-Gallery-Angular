import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/API.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(public _apiService: ApiService){
   this.getImages("cute animals", 15)
      }

images: any

      getImages(query: string, perPage: number): void {
        this._apiService.getImages(query, perPage).subscribe((res) => {
          
        this.images = res.photos

        console.log("API response", this.images);
        })
      }

}
