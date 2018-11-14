
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireStorage } from '@angular/fire/storage';



@Injectable()
export class UploadProvider {

  constructor(
    private storage: AngularFireStorage
  ) {}

  private guid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  create(file) {
    let fileName = this.guid();
    let storageRef = this.storage.ref('');
    let uploadTask = storageRef.child(`${fileName}`).put(file);
    return uploadTask.then(
      (snapshot) => {
          
          console.log(snapshot.uploadUrl_);
        return snapshot.downloadURL;
      }
    );
  }
}