import { Item } from "./itemInterface";
import { VideoCollectionI } from "./video-collection-interface";
import { VideoI } from "./videos-interface";


// Observable types as returned by ServerService
export interface GeneralDataI{
    number: number;
    pages: number;    
    data: Item[]
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