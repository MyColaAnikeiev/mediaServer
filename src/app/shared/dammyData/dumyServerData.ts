import { GeneralI } from "../interfaces/by-media-type/general-Interface";
import { VideoCollectionI } from "../interfaces/video-collection-interface";
import { VideoI } from "../interfaces/by-media-type/videos-interface";
import { MusicI } from "../interfaces/by-media-type/music-interface";


function toVideoI(item: GeneralI): VideoI{
    return {
        filename: item.filename,
        title: item.metadata ? item.metadata.title : item.filename,
        thumbImg: item.thumbImg,
        src: item.href
    }
}

function toMusicI(item: GeneralI): MusicI{
    return {
        filename: item.filename,
        artist: item?.metadata?.author || '',
        title: item?.metadata?.title || '',
        duration: item?.metadata?.duration || -1,
        thumbImg: item.thumbImg,
        src: item.href
    }
}

export const dummyData: GeneralI[] = [
    {
      filetype: "music",
      format: "mp3",
      filename: "Ringtone.mp3",
      namingDisplayType: "name",
      date: "04.09.2021",
      thumbImg: '',
      href: '',
      metadata: null
    },
    {
      filetype: "image",
      format: "jpg",
      filename: "grapefruit-slice.jpg",
      namingDisplayType: "name",
      date: "18.10.2020",
      thumbImg: 'assets/thumbs/grapefruit-slice.jpg',
      href: 'assets/thumbs/grapefruit-slice.jpg',
      metadata: null
    },
    {
      filetype: "music",
      format: "mp3",
      filename: "filename",
      namingDisplayType: "metadata",
      date: "10.11.2021",
      thumbImg: '',
      href: '',
      metadata: {
        author: "Joan Roling",
        title: "Harry Potter",
        duration: 201
      }
    },
    {
      filetype: "music",
      format: "mp3",
      filename: "filename",
      namingDisplayType: "name",
      date: "10.11.2021",
      thumbImg: '',
      href: '',
      metadata: null
    },
    {
      filetype: "music",
      format: "mp3",
      filename: "filename",
      namingDisplayType: "name",
      date: "10.11.2021",
      thumbImg: '',
      href: '',
      metadata: null
    },
    {
      filetype: "music",
      format: "mp3",
      filename: "filename",
      namingDisplayType: "name",
      date: "10.11.2021",
      thumbImg: '',
      href: '',
      metadata: null
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "Debussy.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/Debussy.jpg",
        href: "assets/dummy_videos/Debussy.mp4",
        metadata: {
            author: '',
            title: "Debussy - Clair de Lune",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "Mountain.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/Mountain.jpg",
        href: "assets/dummy_videos/Mountain.mp4",
        metadata: {
            author: '',
            title: "3d Graphics",
            duration: 5
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "building.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/building.jpg",
        href: "assets/dummy_videos/building.mp4",
        metadata: {
            author: '',
            title: "Buildings",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "cave.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/cave.jpg",
        href: "assets/dummy_videos/cave.mp4",
        metadata: {
            author: '',
            title: "Unbelivable cave",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "china_mountain.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/china_mountain.jpg",
        href: "assets/dummy_videos/china_mountain.mp4",
        metadata: {
            author: '',
            title: "Chinese mountains",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "waterfall.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/waterfall.jpg",
        href: "assets/dummy_videos/waterfall.mp4",
        metadata: {
            author: '',
            title: "Waterfall",
            duration: 17
        }
    },
    // Copy --------------------------
    {
        filetype: "video",
        format: "mp4",
        filename: "waterfall.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/waterfall.jpg",
        href: "assets/dummy_videos/waterfall.mp4",
        metadata: {
            author: '',
            title: "Waterfall",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "Debussy.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/Debussy.jpg",
        href: "assets/dummy_videos/Debussy.mp4",
        metadata: {
            author: '',
            title: "Debussy - Clair de Lune",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "Mountain.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/Mountain.jpg",
        href: "assets/dummy_videos/Mountain.mp4",
        metadata: {
            author: '',
            title: "3d Graphics",
            duration: 5
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "building.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/building.jpg",
        href: "assets/dummy_videos/building.mp4",
        metadata: {
            author: '',
            title: "Buildings",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "cave.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/cave.jpg",
        href: "assets/dummy_videos/cave.mp4",
        metadata: {
            author: '',
            title: "Unbelivable cave",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "china_mountain.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/china_mountain.jpg",
        href: "assets/dummy_videos/china_mountain.mp4",
        metadata: {
            author: '',
            title: "Chinese mountains",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "waterfall.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/waterfall.jpg",
        href: "assets/dummy_videos/waterfall.mp4",
        metadata: {
            author: '',
            title: "Waterfall",
            duration: 17
        }
    },
    {
        filetype: "video",
        format: "mp4",
        filename: "building.mp4",
        namingDisplayType: "metadata",
        date: "07.04.2020",
        thumbImg: "assets/thumbs/building.jpg",
        href: "assets/dummy_videos/building.mp4",
        metadata: {
            author: '',
            title: "Buildings",
            duration: 17
        }
    },
  ];


export const dummyVideoCollections: VideoCollectionI[] = [
    {
        id: 0,
        title: "Nature",
        number: 4,
        owner: "ObiVanDarkholme",
        videos: [dummyData[7], dummyData[9], dummyData[10], dummyData[11]].map(toVideoI)
    },
    {
        id: 1,
        title: "Some Music",
        number: 1,
        owner: "ObiVanDarkholme",
        videos: [dummyData[6]].map(toVideoI)
    },

    // Copy
    
    {
        id: 2,
        title: "Nature",
        number: 4,
        owner: "ObiVanDarkholme",
        videos: [dummyData[7], dummyData[9], dummyData[10], dummyData[11]].map(toVideoI)
    },
    {
        id: 3,
        title: "Some Music and Very long long name",
        number: 1,
        owner: "ObiVanDarkholme",
        videos: [dummyData[6]].map(toVideoI)
    },
    {
        id: 4,
        title: "Nature",
        number: 4,
        owner: "ObiVanDarkholmee",
        videos: [dummyData[7], dummyData[9], dummyData[10], dummyData[11]].map(toVideoI)
    },
    {
        id: 5,
        title: "SomeMusic",
        number: 1,
        owner: "ObiVanDarkholme",
        videos: [dummyData[6]].map(toVideoI)
    },
    {
        id: 6,
        title: "Nature",
        number: 4,
        owner: "ObiVanDarkholme",
        videos: [dummyData[7], dummyData[9], dummyData[10], dummyData[11]].map(toVideoI)
    },
    {
        id: 7,
        title: "SomeMusic",
        number: 1,
        owner: "ObiVanDarkholme",
        videos: [dummyData[6]].map(toVideoI)
    },
    {
        id: 8,
        title: "Nature",
        number: 4,
        owner: "ObiVanDarkholme",
        videos: [dummyData[7], dummyData[9], dummyData[10], dummyData[11]].map(toVideoI)
    },
    {
        id: 9,
        title: "SomeMusic",
        number: 1,
        owner: "ObiVanDarkholm",
        videos: [dummyData[6]].map(toVideoI)
    },
    {
        id: 10,
        title: "Nature",
        number: 4,
        owner: "ObiVanDarkholme",
        videos: [dummyData[7], dummyData[9], dummyData[10], dummyData[11]].map(toVideoI)
    },
    {
        id: 11,
        title: "SomeMusic",
        number: 1,
        owner: "ObiVanDarkholme",
        videos: [dummyData[6]].map(toVideoI)
    },
    {
        id: 12,
        title: "Nature",
        number: 4,
        owner: "ObiVanDarkholme",
        videos: [dummyData[7], dummyData[9], dummyData[10], dummyData[11]].map(toVideoI)
    },
    {
        id: 13,
        title: "SomeMusic",
        number: 1,
        owner: "ObiVanDarkholme",
        videos: [dummyData[6]].map(toVideoI)
    }

];

export const dummyMusicData = dummyData
    .filter((item) => item.filetype === 'music')
    .map(toMusicI);