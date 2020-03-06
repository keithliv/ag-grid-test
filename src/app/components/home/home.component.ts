import { Component, OnInit } from '@angular/core';
import {UserData} from "../../services/user-data/user-data";
import {DataService} from "../../services/data/data.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    users: UserData[] = [];

    constructor(private dataService: DataService){
    }

    getUsers(){
        this.dataService.getUsers().subscribe(data => {
            this.users = data;
        });
    }

    ngOnInit() {
        this.getUsers();
    }
}
