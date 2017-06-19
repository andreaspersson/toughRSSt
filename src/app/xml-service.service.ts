import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import * as xml2js from 'xml2js';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MyXmlService {

  constructor( 
    private http: Http,
    ) {}
  
  public xmlItems : any;

getXML(){
 return this.http.post('http://api.notified.com/Channel/66bbc5cf-0030-e711-80d6-a0d3c1f2861f?key=ab07bd54-7766-46dd-8480-2daa14035af0&format=basic&limit=50', 'body')
    .map(res => {
      var i,
      arr    = [],
      parser = new xml2js.Parser(
              {
                trim: true,
                explicitArray: true
               });
               parser.parseString(res.text(), function (err, result)
         {  
            var obj = result.rss.channel["0"];
            for(i in obj.item)
            {
               var item = obj.item[i];
               arr.push({
                  link : item.link[0],
                  description : item.description[0],
                  descriptionRaw : item.descriptionRaw[0],
                  abstract : item.abstract[0],
                  //guid : item.guid[0],
                  //pubDate : item.pubDate[0],
                  pubDateFormatted : item.pubDateFormatted[0],
                  source : item.source[0],
                  //media : item.media[0],
                  //category : item.category[0],                
               });
            }
         });
         return arr;         
    }
  );  
}}
