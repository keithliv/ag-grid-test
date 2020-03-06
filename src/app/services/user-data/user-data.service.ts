import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {UserData} from './user-data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements InMemoryDbService {

  constructor() { }

    public createDb(){
        const users: UserData[]=[
            { id: 1, username: 'jonesm',  firstname: 'Mike',  lastname: 'Jones', email: 'mike.jones@aol.com'  },
            { id: 2, username: 'smithc',  firstname: 'Chris',  lastname: 'Smith', email: 'christ.smith@aol.com'  },
            { id: 3, username: 'clarkej',  firstname: 'Joe',  lastname: 'Clarke', email: 'joe.clarke@aol.com'  },
            { id: 4, username: 'lynche',  firstname: 'Eric',  lastname: 'Lynch', email: 'eric.lynch@aol.com'  },
            { id: 5, username: 'chot',  firstname: 'Tom',  lastname: 'Cho', email: 'tom.cho@aol.com'  },
            { id: 6, username: 'knopel',  firstname: 'Leslie',  lastname: 'Knope', email: 'leslie.knope@aol.com'  },
            { id: 7, username: 'mundr',  firstname: 'Ronnie',  lastname: 'Mund', email: 'ronnie.mund@aol.com'  },
            { id: 8, username: 'millerg',  firstname: 'Greg',  lastname: 'Miller', email: 'greg.miller@aol.com'  },
            { id: 9, username: 'doej',  firstname: 'John',  lastname: 'Doe', email: 'john.doe@aol.com'  },
            { id: 10, username: 'perkinsa',  firstname: 'Ann',  lastname: 'Perkins', email: 'ann.perkins@aol.com'  }
        ];
        return {users};
    }
}
