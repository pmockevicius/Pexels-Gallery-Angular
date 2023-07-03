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
    this.getImages("jungle animals", 20)
       }

       isLoading = false;
       images: ImageCallResponse[] = []
       lastResponse: any


  onScroll(event: any) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight -10
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

      getImageContainerClass(index: number): string {
        const patterns = [
          'col-span-2 row-span-1 bg-cover bg-center bg-no-repeat ',
          'col-span-1 row-span-2 bg-cover bg-center bg-no-repeat ',
          'col-start-4 col-span-1 row-span-1 bg-cover bg-center bg-no-repeat h-14vh ',
          'col-span-1 row-span-1 bg-cover bg-center bg-no-repeat h-14vh ',
          'col-span-1 row-span-1 bg-cover bg-center bg-no-repeat h-14vh ',
          'col-span-1 row-span-1 bg-cover bg-center bg-no-repeat h-14vh ',
          'col-span-1 row-span-1 bg-cover bg-center bg-no-repeat h-14vh ',
          'col-span-1 row-span-1 bg-cover bg-center bg-no-repeat ',
          'col-span-2 row-span-1 bg-cover bg-center bg-no-repeat'
        ];

        console.log(index, patterns[index % patterns.length])
        return patterns[index % patterns.length];
      }
      


}
