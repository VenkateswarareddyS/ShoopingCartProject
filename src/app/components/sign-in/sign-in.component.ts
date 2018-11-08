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

users:any;
message:any;

  ngOnInit() {
  }


  user: User = new User();

  constructor(private router: Router, private accountService: AccountService) {

  }

  createUser(): void {
    this.accountService.createUser(this.user)
        .subscribe( data => {
          this.users=data;
          alert("Successfully Logged in.");
          this.router.navigate(['/products'])
          console.log(data);
        });

  };




}
