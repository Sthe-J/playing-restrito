import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.component.html',
  styleUrl: './menu-produto.component.css'
})
export class MenuProdutoComponent {

  constructor(private router: Router,
    private _loginService: LoginService) { }
  logout() {
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this.router.navigate(['/login']);
  }
}
