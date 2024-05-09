import { Component } from '@angular/core';
import { ImageModel } from '../../model/image.model';
import { ImageService } from '../../services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  p: number = 0;
  images: ImageModel[] = [];
  constructor(
    private imageService: ImageService
  ) { }

  getImages(): void{
    this.imageService.getImages()
      .subscribe(images => this.images = images);
  }

  ngOnInit() {
    this.getImages()
  }


}
