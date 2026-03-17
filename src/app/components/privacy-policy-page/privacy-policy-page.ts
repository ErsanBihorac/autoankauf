import { Component } from '@angular/core';
import { PrivacyPolicy } from "../privacy-policy/privacy-policy";
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-privacy-policy-page',
  imports: [PrivacyPolicy, Nav, Footer],
  templateUrl: './privacy-policy-page.html',
  styleUrl: './scss/privacy-policy-page.scss',
})
export class PrivacyPolicyPage {

}
