import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-layout',
  imports: [MenubarModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  items = [
    { label: 'Home', icon: '' },
    { label: 'Sensores' },
    { label: 'Plantas' },
  ];
}
