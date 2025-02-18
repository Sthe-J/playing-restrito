import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto.service';
import { Produto } from '../../models/Produto.model';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css'
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Produto[] = [];
  
  constructor(private _produtoService: ProdutoService, private _router:Router, private _loginService: LoginService) { }
  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostraMenu(false);
  }
  listarProdutos(): void {
    this._produtoService.getProdutos()
      .subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
              return new Produto(
                item.id,
                item.produto,
                item.descricao,
                item.foto,
                item.preco
              );
            }
          )
        }
      )
  }

  excluir(id: number){
    this._produtoService.removerProduto(id).subscribe(
    produto=>{
      this.listarProdutos();
    },
    err => {alert("Erro ao excluir")}
    );
   this._router.navigate(["/restrito/lista"])

  }

}
