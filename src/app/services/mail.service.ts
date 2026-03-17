import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { contactMail } from '../interfaces/contact-mail.interface';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private http = inject(HttpClient);

  sendMail(email: string, message: string, phone?: string,): Observable<any> {
    const url = environment.backendUrl + "/send-contact-email/";

    const body: contactMail = { email, phone, message };
    if (phone) body.phone = phone;
    return this.http.post(url, body);
  }
}
