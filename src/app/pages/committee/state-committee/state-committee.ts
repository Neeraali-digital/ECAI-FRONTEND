import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-state-committee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state-committee.html',
  styleUrl: './state-committee.css',
})
export class StateCommittee {
  members = Array.from({ length: 12 }, (_, i) => ({
    name: `State Member ${i + 1}`,
    role: 'State Committee Member',
    image: 'assets/placeholder-user.jpg'
  }));

  extractImage(event: Event) {
    (event.target as HTMLImageElement).classList.remove('opacity-0');
  }
}
