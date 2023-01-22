import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heyitsakhila';

  dockBasicItems = [
    {
        label: 'Facebook',
        icon: "assets/facebook.png"
    },
    {
        label: 'Instagram',
        icon: "assets/instagram.png"
    },
    {
        label: 'Email',
        icon: "assets/email.png"
    },
    {
        label: 'LinkedIn',
        icon: "assets/linkedin.png"
    }
];
}
