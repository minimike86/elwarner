import { Component } from '@angular/core';

import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPatreon } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'micha.elwarner.co.uk';
  public year = new Date().getFullYear();

  faGithubAlt = faGithubAlt;
  faLinkedinIn = faLinkedinIn;
  faIndustry = faIndustry;
  faTwitter = faTwitter;
  faTwitch = faTwitch;
  faYoutube = faYoutube;
  faPatreon = faPatreon;
  faBoxOpen = faBoxOpen;

  public opened: boolean = true;

}
