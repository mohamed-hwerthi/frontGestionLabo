import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminSignUpRequestModel } from 'src/app/models/Request/RequestModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  payload: AdminSignUpRequestModel = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  constructor(private router: Router, private authService: AuthService) {}
  submit() {
    this.signUpUser();
    alert('Admin registered');
    this.router.navigate(['/login']);
  }

  signUpUser() {
    this.authService.singUpAdmin(this.payload).subscribe(
      (res) => {},
      (err) => {}
    );
  }
}
