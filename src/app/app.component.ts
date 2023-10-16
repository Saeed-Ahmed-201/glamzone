import { Component, OnInit } from '@angular/core';
import { Constants } from './core/constants';
import { 
     Firestore, addDoc, collection, 
    doc,
    getDoc, 
    getDocs,
    query,
    where,
   } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'glamzone';
   collectionInstance : any;
   
   data : any[]  = [];
   details !: Parlour;

  constructor(private firestore: Firestore){
    this.collectionInstance = collection(this.firestore, Constants.PARLOURS_COLLECTION);
  }

  ngOnInit(): void {
      this.getData();
  }
  
  addDocument(collectionName: string, data : any){
    addDoc(this.collectionInstance, data)
    .then(() => console.log('successfully added document'))
    .catch((err) => console.log(err));
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
    dataSnap.forEach(result => { 
       let item = {id: result.id, data: result.data()}
       this.data.push(item);
       console.log(`id of collection ${result.id} ${JSON.stringify(result.data())}`);
       console.log(`item ${JSON.stringify(item)}`);
    })
  }

  async getDataByEmail(email : string){
    console.log('entered in getDataByEmail');
    const queryByEmail = query(this.collectionInstance, where('title', '==', 'abc'));
    const dataSnap = await getDocs(queryByEmail);
    dataSnap.forEach(result => console.log(result.data())); 
  }

}
export interface Parlour {
      title: string;
}