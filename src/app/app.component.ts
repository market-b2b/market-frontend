import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TuiButtonModule, TuiModeModule, TuiRootModule, TuiThemeNightModule} from '@taiga-ui/core';
import {TuiInputModule, TuiToggleModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AbstractTuiThemeSwitcher, TuiLetModule} from "@taiga-ui/cdk";
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TuiRootModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiInputModule,
    FormsModule,
    TuiLetModule,
    TuiButtonModule,
    TuiToggleModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends AbstractTuiThemeSwitcher {
  title = 'market';
  isNight = false;
  private nightSubject = new BehaviorSubject<boolean>(this.isNight);

  night$: Observable<boolean> = this.nightSubject.asObservable();

  toggleNight() {
    this.isNight = !this.isNight;
    this.nightSubject.next(this.isNight);
  }
}
