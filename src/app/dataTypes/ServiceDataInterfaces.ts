import { Item } from "../itemInterface";
import { VideoI } from "./videos-interface";


// Observable types as returned by ServerService
export interface GeneralDataI{
    pages: number;    
    data: Item[]
}   

export interface VideoDataI{
    pages: number;
    data: VideoI[];
}