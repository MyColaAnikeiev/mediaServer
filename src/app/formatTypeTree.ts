export let formatTypeTree = {
    'all' : [
        'all'
    ],
    'video':[
        'all',
        'mp4',
        'webm',
        'mkv'
    ],
    'music':[
        'all',
        'mp3',
        'ogg'
    ],
    'image':[
        'all',
        'jpg',
        'jpeg',
        'png'
    ],
    'document':[
        'all',
        'pdf'
    ],

    [Symbol.iterator]: function(){
        return Object.keys(this)[Symbol.iterator]();
    }
}
