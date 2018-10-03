import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FlickrService {
  constructor(private http: Http) {};

  getPhotos(searchTag?){
      var uri = `http://localhost:3000/${searchTag}`;
    return this.http
               .get(uri)
               .map(res => res.json())
               .map(val => {
                if (val.stat === 'ok') { //if the status of request is ok
                  return val.photos.photo.map((photo: any) => {
                    return { 
                      // The Final URL to display photo https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
                      url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
                    };
                  });
                } else { 
                  return [];
                }
               });
  };
}
