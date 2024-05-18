import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css'],
  providers: [MessageService],
})
export class InventaireComponent {}
