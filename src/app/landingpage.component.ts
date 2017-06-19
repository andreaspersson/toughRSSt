import { Component } from '@angular/core';

import { ContactInfo }    from './contact-info';

@Component({
  selector: 'landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
  })
export class LandingPageComponent {

  model = new ContactInfo('forrest@gump.aol.com', 44, 'Forrest Gump');
/*
  submitted = false;

  onSubmit() { this.submitted = true; }
*/
}