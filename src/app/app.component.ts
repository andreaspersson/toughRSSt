import { Component } from '@angular/core';

import { MyXmlService } from './xml-service.service';

@Component({
  selector: 'app-root',
  template: '<landingpage></landingpage>',
  providers: [MyXmlService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private xmlservice : MyXmlService) {}
  title = 'ToughRSSt';
  rssArray = [];

  loadXML(){ 
    this.xmlservice.getXML().subscribe(data => this.rssArray = data), 
    error => console.log('oops, error ' + error);    
  }

ngOnInit(){
 this.loadXML();
}

}

