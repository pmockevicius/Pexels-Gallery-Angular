import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/API.service';
import { ImageCallResponse } from 'src/app/services/interface';
import { ImageDialogComponent } from '../../shared-components/image-dialog/image-dialog.component';
import { HeaderComponent } from '../../shared-components/header/header.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery1',
  templateUrl: './gallery1.component.html',
  styleUrls: ['./gallery1.component.scss']
})
export class Gallery1Component {

  constructor(
    public _apiService: ApiService,
    public dialog: MatDialog
    ){
    this.getImages()
       }
 
 catsImages: ImageCallResponse[] = []
 dogsImages: ImageCallResponse[] = []
 rabbitImages: ImageCallResponse[] = []

 animalsArray: any [] = [
  {
    groupName: "Cats",
    images: this.catsImages,
  },
  {
  groupName: "Dogs",
    images: this.dogsImages,
  },
  {
  groupName: "Rabbits",
    images: this.rabbitImages,
  },
 ]
 
       getCatsImages(): void {
         this._apiService.getImages("cats", 8).subscribe((res) => { 
         this.catsImages = res.photos
         this.animalsArray[0].images = this.catsImages
         })
       }
       getDogsImages(): void {
         this._apiService.getImages("dogs", 8).subscribe((res) => { 
         this.dogsImages = res.photos
         this.animalsArray[1].images = this.dogsImages
         })
       }
       getRabbitImages(): void {
         this._apiService.getImages("rabbits", 8).subscribe((res) => { 
         this.rabbitImages = res.photos
         this.animalsArray[2].images = this.rabbitImages
         })
       }

getImages(){
  this.getCatsImages()
  this.getDogsImages()
  this.getRabbitImages()
  console.log(this.animalsArray)

}


openDialog(imageUrl: string) {
  this.dialog.open(ImageDialogComponent, {
    data: {
      imageUrl: imageUrl,
    },
  });
}
}



