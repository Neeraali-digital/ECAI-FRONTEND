import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-central-committee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './central-committee.html',
  styleUrl: './central-committee.css',
})
export class CentralCommittee {
  members = Array.from({ length: 12 }, (_, i) => ({
    name: `Committee Member ${i + 1}`,
    role: 'Central Committee Member',
    image: 'assets/placeholder-user.jpg'
  }));

  extractImage(event: Event) {
    (event.target as HTMLImageElement).classList.remove('opacity-0');
  }
}
