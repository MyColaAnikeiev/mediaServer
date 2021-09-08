import { GeneralI } from "./by-media-type/general-Interface";
import { VideoCollectionI } from "./video-collection-interface";
import { VideoI } from "./by-media-type/videos-interface";
import { MusicI } from "./by-media-type/music-interface";


// Observable types as returned by ServerService
export interface GeneralDataI{
    number: number;
    pages: number;    
    data: GeneralI[]
}   

export interface VideoDataI{
    number: number;
    pages: number;
    data: VideoI[];
}

export interface VideoCollectionsDataI{
    number: number;
    pages: number;
    data: VideoCollectionI[];
}

export interface MusicDataI{
    number: number;
    pages: number;
    data: MusicI[];
}