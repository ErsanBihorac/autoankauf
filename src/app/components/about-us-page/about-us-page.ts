import { Component } from '@angular/core';
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";
import { AboutUs } from "../about-us/about-us";
import { Intro } from "../intro/intro";

@Component({
  selector: 'app-about-us-page',
  imports: [Nav, Footer, AboutUs, Intro],
  templateUrl: './about-us-page.html',
  styleUrl: './scss/about-us-page.scss',
})
export class AboutUsPage {

}
