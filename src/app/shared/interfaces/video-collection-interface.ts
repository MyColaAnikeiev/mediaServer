import { VideoI } from "./by-media-type/videos-interface";

export interface VideoCollectionI{
    id: number;
    title: string;
    number: number;
    owner: string;
    videos: VideoI[];
}