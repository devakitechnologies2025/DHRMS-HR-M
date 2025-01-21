import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  standalone: false,
  
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Simulate an API call to reset the password
    console.log('Reset Password:', {
      email: this.email,
      newPassword: this.newPassword,
    });

    alert('Password reset successfully!');
  }

  togglePasswordVisibility(fieldId: string): void {
    const inputField = document.getElementById(fieldId) as HTMLInputElement;
    if (inputField.type === 'password') {
        inputField.type = 'text';
    } else {
        inputField.type = 'password';
    }
 }

}
