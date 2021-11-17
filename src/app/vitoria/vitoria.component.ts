import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vitoria',
  templateUrl: './vitoria.component.html',
  styleUrls: ['./vitoria.component.css']
})
export class VitoriaComponent implements OnInit {

  palavra: string = ''
  constructor(private activateRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.recuperaPalavra()
  }
  

  recuperaPalavra(): any{
  
    this.palavra = JSON.parse(sessionStorage.getItem("jogodaforca") ?? "[]");
    console.log('palavra' + this.palavra)
  }
  novoJogo(){
    this.router.navigate(['/'])
  }
}
