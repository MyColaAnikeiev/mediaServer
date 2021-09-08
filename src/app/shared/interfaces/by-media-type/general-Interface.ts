type Metadata ={
    author: string,
    title: string,
    duration: null | number
}

export interface GeneralI{
    filetype: string,
    format: string,
    filename: string,
    namingDisplayType: string,
    date: string,
    thumbImg: string,
    href: string,
    metadata: null | Metadata
  }