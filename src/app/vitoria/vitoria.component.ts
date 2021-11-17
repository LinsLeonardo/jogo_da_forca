import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vitoria',
  templateUrl: './vitoria.component.html',
  styleUrls: ['./vitoria.component.css']
})
export class VitoriaComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  novoJogo(){
    this.router.navigate(['/'])
  }
}
