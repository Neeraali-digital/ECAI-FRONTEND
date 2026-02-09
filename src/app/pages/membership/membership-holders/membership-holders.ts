import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-membership-holders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membership-holders.html',
  styleUrl: './membership-holders.css',
})
export class MembershipHolders {
  members = Array.from({ length: 24 }, (_, i) => ({
    name: `Member ${i + 1}`,
    id: `MEM${String(i + 1).padStart(3, '0')}`,
    joinDate: 'Jan 2024',
    image: 'assets/placeholder-user.jpg'
  }));

  extractImage(event: Event) {
    (event.target as HTMLImageElement).classList.remove('opacity-0');
  }
}
