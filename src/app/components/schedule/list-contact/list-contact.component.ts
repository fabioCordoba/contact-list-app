import { Contact } from './../../../interfaces/Contact';
import { ContactService } from './../../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  public listContacts: Contact[];

  constructor(
    private contactService: ContactService
  ) {
    //this.listContacts = this.contactService.listContacts;
    this.listContacts = [];
  }

  ngOnInit(): void {
    if (this.contactService.listContacts.length > 0) {
      this.listContacts = this.contactService.listContacts;
    } else {
      this.contactService.getData('assets/data/contacts.json').subscribe(list => {
        this.listContacts = list;
      });
    }
    console.log(this.contactService.listContacts);
    
  }

}
