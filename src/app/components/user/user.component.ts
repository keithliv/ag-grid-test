import { Component, OnInit } from '@angular/core';
import {UserData} from '../../services/user-data/user-data';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
