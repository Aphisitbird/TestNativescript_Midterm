import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'todoLists',
    moduleId: module.id,
    templateUrl: 'todoLists.component.html'
})

export class TodoListsComponent implements OnInit{
    oneWay: String;
    constructor(){

    }

    ngOnInit(){

    }

    add(){
        alert("ไม่พบข้อมูล");
    }


}