import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore){
  }

  addDocument(collectionName: string, data : any){
      const collectionInstance =  collection(this.firestore, collectionName);
      addDoc(collectionInstance, data)
                   .then(() => console.log('successfully added document'))
                   .catch((err) => console.log(err));
  }
}
