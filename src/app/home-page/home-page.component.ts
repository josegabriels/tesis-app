import { Component, OnInit } from '@angular/core';
import { ConsultantsService } from '../services/consultants.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  consultants: any[] = [];

  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit(): void {
    this.getConsultants();
  }

  getConsultants() {
    this.consultantsService.getConsultants().subscribe(res_consultants => this.consultants = res_consultants);
  }

}
