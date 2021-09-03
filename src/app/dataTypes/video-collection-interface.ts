import { VideoI } from "./videos-interface";

export interface VideoCollectionI{
    title: string;
    number: number;
    owner: string;
    videos: VideoI[];
}