import { Component } from '@angular/core';
import { Nav } from "../nav/nav";
import { Imprint } from "../imprint/imprint";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-imprint-page',
  imports: [Nav, Imprint, Footer],
  templateUrl: './imprint-page.html',
  styleUrl: './scss/imprint-page.scss',
})
export class ImprintPage {

}
