import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from "../../../core/services/authentication.service";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    providers: [AuthenticationService],
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthenticationService) {
    }

    ngOnInit(): void {
        // Exemple d'utilisation du service dans le composant

        // this.authService.authenticate({
        //     email: 'ouhrioutmanEh@gmail.com',
        //     password: 'azejdkdf',
        // });
        this.authService.refreshToken();
    }

    login() {
        // this.authService.authenticate({
        //     email: 'ouhrioutmanEh@gmail.com',
        //     password: 'azejdkdf',
        // });
        // this.authService.refreshToken();

        console.log("login 2");
    }
}
