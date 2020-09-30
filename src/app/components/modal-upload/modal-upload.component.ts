import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {
  oculto: string = 'opacity-0';

  constructor() { }

  ngOnInit(): void {

    this.oculto = 'ease-out duration-300 opacity-1'
  }

  ocultar(): void {
    this.oculto = 'ease-in duration-200 opacity-0';
    setTimeout(() => {
      this.oculto = 'hidden';
    }, 200);

  }

}
