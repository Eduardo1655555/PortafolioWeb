import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Contact } from '../../interfaces/contact';
import { ContactService } from '../../Services/contact.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

interface Contacto {
  name:string,
  email: string;
  phone: string;
  gmail: string;
  namep:string;
  gmailp: string;
  phonep: string;
  lugar: string;
  lugarp: string;

};


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})


export class ContactComponent  {

  Contacto$: Observable<Contacto[]>;

  firestore:Firestore =inject(Firestore);

  constructor(){
    const ContactoCollection = collection(this.firestore, 'Contacto');
    this.Contacto$ = collectionData(ContactoCollection) as Observable<Contacto[]>;
  }

  

  // contacts:Contact[] = [];

  // constructor(private contactService: ContactService) {
      
  // }

  // ngOnInit(): void {
  //   this.contactService.getcontact().subscribe(contacts=>{
  //     console.log(contacts);
  //   }
  //     )
  // }
}
