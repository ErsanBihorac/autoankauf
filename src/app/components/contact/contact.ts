import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './scss/contact.scss',
})
export class Contact {
  mailService = inject(MailService);
  email = '';
  phone = '';
  message = '';

  get canSubmit(): boolean {
    const emailValue = this.email.trim();
    const messageValue = this.message.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    return emailValid && messageValue.length > 0;
  }

  async submit() {
    if (!this.canSubmit) {
      return;
    }
    await this.sendRequest(this.email.trim(), this.phone.trim(), this.message.trim());
    console.log('Contact form submitted', {
      email: this.email.trim(),
      phone: this.phone.trim(),
      message: this.message.trim(),
    });
  }

  async sendRequest(email: string, phone: string, message: string) {
    try {
      const response: any = await firstValueFrom(
        this.mailService.sendMail(email, phone, message)
      );
    } catch (error) {
      console.log('HTTP Error:', error);
    }
  }

}
