import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Artist} from './search-artist/artist';
import {ArtistEvent} from './search-artist-events/event';

@Injectable()
export class SearchService {
    searchURL: string;

    constructor(private http: Http) {
    }

    /**
     * Get http response of a specific URL and convert it to a Promise
     * @return {Promise<Artist> | Promise<ArtistEvent[]>}
     */
    getData(): Promise<any> {
        return this.http.get(this.searchURL)
            .toPromise()
            .catch(this.handleError);
}

    private handleError(error: any) {
        console.error('An error occured : ' + error);
        return Promise.reject(error.message || error);
    }

    /**
     * Get the artist with a name matching the specified string
     * @param name
     * @return {Promise<any>}
     */
    getArtiste(name: string): Promise<Artist> {
        this.searchURL = 'https://rest.bandsintown.com/artists/' + name + '?app_id=castouygouyb';
        return this.getData().then(response => response.json() as Artist);
    }

    /**
     * Get the all the events that match the specified artist name
     * @param name
     * @return {Promise<any>}
     */
    getEvents(name: string): Promise<ArtistEvent[]> {
        this.searchURL = 'https://rest.bandsintown.com/artists/' + name + '/events?app_id=castouygouyb';
        return this.getData().then(response => response.json() as ArtistEvent[]);
    }
}