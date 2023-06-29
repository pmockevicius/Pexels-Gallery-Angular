import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/API.service';
import { ImageCallResponse } from 'src/app/services/interface';
import { ImageDialogComponent } from '../../shared-components/image-dialog/image-dialog.component';

@Component({
  selector: 'app-gallery3',
  templateUrl: './gallery3.component.html',
  styleUrls: ['./gallery3.component.scss']
})
export class Gallery3Component {


  constructor(
    public _apiService: ApiService,
    public dialog: MatDialog
    ){
    this.getImages("jungle animalsw", 40)
       }

       isLoading = false;
       images: ImageCallResponse[] = []
       lastResponse: any


  onScroll(event: any) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
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

      getRandomColSpan(): number {
        const minColSpan = 1; // Minimum col-span value
        const maxColSpan = 4; // Maximum col-span value
        return Math.floor(Math.random() * (maxColSpan - minColSpan + 1) + minColSpan);
      }

}
