export class ArtistEvent {
    artist_id: string;
    datetime: string;
    id: string;
    lineup: number[];
    offers: number[];
    url: string;
    venue: Venue;
}

class Venue {
    city: string;
    country: string;
    latitude: string;
    longitude: string;
    name: string;
    region: string;
}

