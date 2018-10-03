import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-my-photos',
  templateUrl: './my-photos.component.html',
  styleUrls: ['./my-photos.component.css']
})
export class MyPhotosComponent implements OnInit {

  photos;
  searchTag: string = "car";
  constructor(private service: FlickrService) { }

  ngOnInit() {
    this.callService();
  }

  callService(){
    this.service.getPhotos(this.searchTag).subscribe(value => {
      this.photos = value;
    });
  }
}
