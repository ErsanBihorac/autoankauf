import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Intro } from '../intro/intro';

@Component({
  selector: 'app-landing-page',
  imports: [Nav, Intro],
  templateUrl: './landing-page.html',
  styleUrl: './scss/landing-page.scss',
})
export class LandingPage {

}
