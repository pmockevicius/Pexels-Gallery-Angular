import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as FileSaver from 'file-saver';
import { saveAs } from 'file-saver';






@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any
  ) {

  
  }

imageUrl =  this.data.imageUrl



  download() {
    fetch(this.imageUrl)
      .then(response => response.blob())
      .then(blob => {
        FileSaver.saveAs(blob, this.data.alt);
      });
  }



}


