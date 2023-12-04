import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {AuthenticationService} from "../../../core/services/authentication.service";
import {TuiAlertService, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TUI_PASSWORD_TEXTS, TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/kit';
import {of} from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiInputModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    {
      provide: TUI_PASSWORD_TEXTS,
      useValue: of(['']),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService, private authService: AuthenticationService) {
  }

  loginForm: FormGroup<any> = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });

  login() {
    if (this.loginForm.status == "INVALID") {
      this.alerts.open('', {
        label: 'Please enter all fields',
        status: 'warning',
        autoClose: true,
      }).subscribe();
      return;
    }
    this.authService.authenticate(this.loginForm.value);
  }
}
