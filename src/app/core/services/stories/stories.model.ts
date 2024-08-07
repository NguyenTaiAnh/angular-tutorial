export interface StoriesModel{
    id: string;
    title: string;
    tag: string;
    synopsis: string;
    author_id: string;
    status:number;
    categoy_id: string;
    image: string;
    views: number;
    likes: number;
    comment_id?:number,
    create_date?:string;
    update_date?:string;
}

// export interface StoryRequestModel{
//     title: string;
//     tag: string;
//     synopsis: string;
//     author_id: string;
//     status:number;
//     categoy_id: string;
//     image: string;
//     views: number;
//     likes: number;
//     comment_id:number
// }
export type StoryUpdateModel = Omit<StoriesModel,'id'>