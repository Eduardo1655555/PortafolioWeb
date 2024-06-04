import { Injectable } from '@angular/core';
import { Firestore, collection,collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore: Firestore) { }


   getcontact(): Observable<Contact[]>{
    const ContactRef = collection(this.firestore,'contact');
    return collectionData(ContactRef,{idfield: 'id'} ) as Observable<Contact[]>;
   }
 

  }