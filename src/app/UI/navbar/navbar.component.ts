import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrl: './navbar.component.scss'
})

export class NavbarComponent{
    @Input() firstName?:string 
    @Output() dataEmitString = new EventEmitter();
    @Output() dataEmitObject = new EventEmitter();
    @Output() dataEmitArray = new EventEmitter();

    emitData(){
        this.dataEmitString.emit("return string")
    }
    obj = {
        name: "Your Name",
        age: 19
    }
    emitObjectData(){
         
        this.dataEmitObject.emit(this.obj);
    }
    emitArrayData(){
        var arr = [];
        for(let i = 0; i < 10; i++) {
            arr.push({
                name: this.obj.name + i,
                age: this.obj.age +i
            })
        }
        this.dataEmitArray.emit(arr)
    }
}