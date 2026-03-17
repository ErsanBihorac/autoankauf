import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { WildcardPage } from './components/wildcard-page/wildcard-page';
import { ImprintPage } from './components/imprint-page/imprint-page';
import { PrivacyPolicyPage } from './components/privacy-policy-page/privacy-policy-page';
import { AboutUsPage } from './components/about-us-page/about-us-page';
import { ContactPage } from './components/contact-page/contact-page';

export const routes: Routes = [
    {path: "", component: LandingPage},
    {path: "about", component: AboutUsPage},
    {path: "contact", component: ContactPage},
    {path: "imprint", component: ImprintPage},
    {path: "privacy-policy", component: PrivacyPolicyPage},
    {path: "**", component: WildcardPage},
];
