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
  submitted = false;

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
    this.submitted = true;
    const ok = await this.sendRequest(this.email.trim(), this.phone.trim(), this.message.trim());
  }

  async sendRequest(email: string, phone: string, message: string): Promise<boolean> {
    try {
      await firstValueFrom(
        this.mailService.sendMail(email, phone, message)
      );
      return true;
    } catch (error) {
      console.log('HTTP Error:', error);
      return false;
    }
  }

}
