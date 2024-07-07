import { Injectable } from "@angular/core";
import { Observable, of, timeout } from "rxjs";
import { StoriesModel } from "./stories.model";

@Injectable({
    providedIn: 'root',
})

export class StoryApiService {
    getStoryList():Observable<any>{
        var data:StoriesModel[] =[
            {
                id:"1",
                title:"OnePiece",
                tag:"one-piece",
                synopsis:"One piece description",
                author_id:"1",
                status:0,
                categoy_id:"1",
                image:"https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
                views:100,
                likes:100,
                comment_id:1
            }
        ]

        for(let i = 0; i < 10; i++){
            const item = {
                id: i.toString(),
                title:"OnePiece",
                tag:"one-piece",
                synopsis:"One piece description",
                author_id:"1",
                status:0,
                categoy_id:"1",
                image:"https://upload.wikimedia.org/wikipedia/vi/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
                views:100,
                likes:100,
                comment_id:1
            }
            data.push(item)
        }
        return of(data).pipe(timeout(1000));
    }
}