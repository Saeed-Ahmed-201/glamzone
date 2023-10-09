import { Component } from '@angular/core';
import { Constants } from './core/constants';
import { Firestore, addDoc, collection, collectionData, orderBy, doc, getDoc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'glamzone';
   collectionInstance : any;
  constructor(private firestore: Firestore){
    this.collectionInstance = collection(this.firestore, Constants.PARLOURS_COLLECTION);
  }
  
  addDocument(collectionName: string, data : any){
    addDoc(this.collectionInstance, data)
    .then(() => console.log('successfully added document'))
    .catch((err: any) => console.log(err));
    
  }
  
  addData(){
    this.addDocument(Constants.PARLOURS_COLLECTION, {title: 'abc'})
  }
  // Get only one document:

  async getDataById(docId: string){
    const refDoc = doc(this.collectionInstance, docId);
    const dataSnap = await getDoc(refDoc);
    console.log(dataSnap.data());
  }
  
  async getData(){
    const dataSnap = await getDocs(this.collectionInstance);
    dataSnap.forEach((result :any) => console.log(result.data()));
  }
}
