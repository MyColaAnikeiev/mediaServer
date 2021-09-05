import { VideoI } from "./videos-interface";

export interface VideoCollectionI{
    id: number;
    title: string;
    number: number;
    owner: string;
    videos: VideoI[];
}