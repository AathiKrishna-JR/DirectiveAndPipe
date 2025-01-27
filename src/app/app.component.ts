import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth/auth.directive';
import { DisplayFont } from './display.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent,AuthDirective , LearningResourcesComponent,DisplayFont],
})
export class AppComponent {
  private authService = inject(AuthService);
  isAdmin = computed(() => this.authService.activePermission() === 'admin')
  displayName = "aaa";
  setName(name :string){
    this.displayName = name.split('@')[0];
  }
}
