import { Component, Output, inject, signal, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LogDirective } from '../log.directive';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  hostDirectives: [LogDirective]
})
export class AuthComponent {
  @Output() detail = new EventEmitter<{name:string,date:Date}>();
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    if(this.authService.authenticate(this.email(), this.password())){
      this.detail.emit({name:this.email(),date:new Date});
    }

  }
}
