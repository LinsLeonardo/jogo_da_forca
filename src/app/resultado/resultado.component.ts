import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  palavra!: String; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.recuperaPalavra()
  }

  recuperaPalavra(): any{
  
    this.palavra = JSON.parse(sessionStorage.getItem("jogodaforca") ?? "[]");
  }
  novoJogo(){
    this.router.navigate(['/'])
  }
}
