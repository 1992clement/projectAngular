import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  searchURL: string;

  getData(): Promise<any>{
  	return this.http.get(this.searchURL)
  	           .toPromise()
  	           .catch(this.handleError);
  }

  private handleError(error:any) {
  	console.error('An error occured : ' + error);
  	return Promise.reject(error.message || error);
  } 

  getArtiste(name:string): Promise<any>{
    this.searchURL = "https://rest.bandsintown.com/artists/" + name + "?app_id=castouygouyb";
    return this.getData();
  }

  getEvents(name:string): Promise<any>{
    this.searchURL = "https://rest.bandsintown.com/artists/" + name + "/events?app_id=castouygouyb";
    return this.getData();
  }
}