import { Component } from '@angular/core';
import { Nav } from "../nav/nav";
import { Contact } from "../contact/contact";
import { Intro } from "../intro/intro";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-contact-page',
  imports: [Nav, Contact, Intro, Footer],
  templateUrl: './contact-page.html',
  styleUrl: './scss/contact-page.scss',
})
export class ContactPage {

}
