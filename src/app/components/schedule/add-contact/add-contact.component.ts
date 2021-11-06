import { ContactService } from './../../../services/contact.service';
import { Contact } from './../../../interfaces/Contact';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contact: Contact;

  constructor(
    private contactService: ContactService,
    private route: Router
  ) {
    this.contact = {
      'name': '',
      'surname': '',
      'description': '',
      'sex': '',
      'email':'',
      'telephone': '',
      'company': ''
    }
   }

  ngOnInit(): void {
  }

  addContact(){
    console.log(this.contact);
    this.contactService.addContact(this.contact);
    this.route.navigate(['/list-contact']);
    
  }

}
