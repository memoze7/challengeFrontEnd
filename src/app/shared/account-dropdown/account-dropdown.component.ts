import { UsuarioService } from './../../services/usuario.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.scss']
})
export class AccountDropdownComponent implements OnInit {
  isOpen = false;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void { }



}
