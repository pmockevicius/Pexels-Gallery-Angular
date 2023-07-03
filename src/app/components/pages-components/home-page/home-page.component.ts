import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/API.service';
import { ImageCallResponse } from 'src/app/services/interface';
import { ImageDialogComponent } from '../../shared-components/image-dialog/image-dialog.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(
    public _apiService: ApiService,
    public dialog: MatDialog){
   this.getImages("wildlife", 8)
      }

images: ImageCallResponse[] = []

      getImages(query: string, perPage: number): void {
        this._apiService.getImages(query, perPage).subscribe((res) => {
          
        this.images = res.photos

        console.log("API response home", this.images);
        })
      }

      openDialog(imageUrl: string) {
        this.dialog.open(ImageDialogComponent, {
          data: {
            imageUrl: imageUrl,
          },
        });
      }

}
