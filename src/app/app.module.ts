import {HttpClient} from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        CommonModule,
        // Other modules
    ],
    declarations: [
        // Your components
    ],
    providers: [
        HttpClient,
        // Other providers
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
