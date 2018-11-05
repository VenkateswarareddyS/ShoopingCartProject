import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {



  ngOnInit() {
  }


  user: User = new User();

  constructor(private router: Router, private accountService: AccountService) {

  }

  createUser(): void {
    this.accountService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };




}
