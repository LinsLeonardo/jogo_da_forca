import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  formulario!: FormGroup;

  palavras: String[] = ['bicicleta', 'carro', 'cantora', 'felicidade', 'fundamental', 'colesterol', 'travesseiro', 'pernilongo'];
  
  palavraEscondida = '';
  
  letraAtual = ''
  index = Math.floor(Math.random() * this.palavras.length);
  palavraAleatoria = this.palavras[this.index]; 
  todasAsLetras: String[] = [];
  erros = 0;
  letrasErradas: String[] = [];



  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    for(const letra of this.palavraAleatoria){
      this.palavraEscondida += '_ '
    }
  }

  salvaPalavra(){
    sessionStorage.setItem('jogodaforca', JSON.stringify(this.palavraAleatoria))
  }
  geraPalavra() {
    const index = Math.floor(Math.random() * this.palavras.length);
    const palavraAleatoria = this.palavras[index]; 
    return palavraAleatoria
  }

  submit(){
    // e.preventDefault();
    this.formulario.reset()
  }
  
  add(letra: any, valor: string):void{
    let botao = (document.getElementById(valor))
    botao?.classList.remove('ativo')

    this.letraAtual = letra
    this.salvaPalavra()
    this.verificaTodasAsLetras(letra)
    this.verificarLetras()
    this.verificaFimDeJogo()
  }

  verificaTodasAsLetras(letra: string){
    if(this.todasAsLetras.indexOf(letra) >= 0){
      return
    }
    else {
      this.todasAsLetras.push(letra)
    }
  }
  verificarLetras(){
    if(this.palavraAleatoria.indexOf(this.letraAtual) >= 0){
      this.palavraEscondida = "";

      for(let j = 0; j < this.palavraAleatoria.length; j++) {
        this.palavraEscondida += this.todasAsLetras.indexOf(this.palavraAleatoria.charAt(j)) >= 0 ? this.palavraAleatoria.charAt(j) : '_ ';
      }
    }
    else {

      if(!this.letrasErradas.includes(this.letraAtual)){
        this.letrasErradas.push(this.letraAtual);
        this.erros +=1
      }
      else {
        return
      }
    }
  }
    verificaFimDeJogo(){
      if(this.erros <= 5){
        if(this.palavraEscondida.includes('_')){
          return
        }
        else{
          this.router.navigate(['/vitoria'])
       }
      } else {
        this.router.navigate(['/derrota'])
       }
    }
  
  resetarFormulario(){
    this.formulario.reset();
  }

  ngOnInit(): void {
 
    this.formulario = this.formBuilder.group({
      letra: ['', [Validators.required]]
    })
  }
}
