import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/API.service';
import { ImageCallResponse } from 'src/app/services/interface';
import { ImageDialogComponent } from '../../shared-components/image-dialog/image-dialog.component';

@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.scss']
})
export class Gallery2Component {

  constructor(
    public _apiService: ApiService,
    public dialog: MatDialog
    ){
    this.getImages("animals", 40)
       }

       isLoading = false;
       images: ImageCallResponse[] = []
       lastResponse: any


  onScroll(event: any) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight -1
    const scrollPosition = window.scrollY;
  
    if (scrollPosition + windowHeight >= documentHeight) {
      console.log('End of page');
     this.loadMoreData()
    }
  }


  async loadMoreData() {
    if (!this.isLoading) {
      this.isLoading = true;
      console.log(this.lastResponse)
       this._apiService.getImagesFromNextPage(this.lastResponse.next_page).subscribe((res)=>{
        this.isLoading = false;
        this.images = [...this.images, ...res.photos];
        console.log("updated images",this.images)
        this.lastResponse = res
        console.log("response",res)
      })
      
    }
  }

       getImages(query: string, perPage: number): void {
         this._apiService.getImages(query, perPage).subscribe((res) => {
           
         this.images = res.photos
         this.lastResponse = res
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
