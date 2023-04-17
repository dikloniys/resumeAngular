import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent {
  contacts = [
    {
      logo:'/assets/imgs/telegram.png',
      link:'https://t.me/vladimir01099400',
    },
    {
      logo:'/assets/imgs/vk.png',
      link:'https://vk.com/v.fedorov94',
    },
    {
      logo:'/assets/imgs/mail.png',
      link:'mailto:vladimir01099400@gmail.com',
    },
    {
      logo:'/assets/imgs/phone.png',
      link:'tel:89081980202',
    },
  ]
}
