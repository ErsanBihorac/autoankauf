import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Intro } from '../intro/intro';
import { CarDetails } from '../car-details/car-details';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-landing-page',
  imports: [Nav, Intro, CarDetails, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './scss/landing-page.scss',
})
export class LandingPage {

}
