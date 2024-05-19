import { Component } from '@angular/core';
import {
  FournisseurRequestDto,
  FournisseurResponseDto,
} from '../models/models';
import { MessageService } from 'primeng/api';
import { GestionService } from '../gestionservice';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css'],
  providers: [MessageService],
})
export class FournisseurComponent {
  productDialog: boolean = false;
  deleteProductDialog: boolean = false;
  deleteProductsDialog: boolean = false;
  fournisseurPayload: FournisseurRequestDto = {
    nom: '',
    adresse: '',
    email: '',
    nmrTel: '',
  };
  submitted: boolean = false;
  cols: any[] = [];
  allFournisseur: FournisseurResponseDto[] = [];
  fournisseurRes!: FournisseurResponseDto;

  constructor(
    private messageService: MessageService,
    private gestionService: GestionService
  ) {}

  ngOnInit() {
    this.getAllFournisseurs();
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }

  /*   editProduct(product: Product) {
    this.productDialog = true;
  }
 */
  deleteProduct(labo: FournisseurResponseDto) {
    this.deleteProductDialog = true;
    this.fournisseurRes = { ...labo };
  }
  confirmDelete(rubriqueId: string | undefined) {
    this.deleteRubrique(rubriqueId);
    this.deleteProductDialog = false;
    this.allFournisseur = this.allFournisseur.filter(
      (val) => val.id !== rubriqueId
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Fournisseur Deleted',
      life: 3000,
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  /* services consumming  */
  getAllFournisseurs() {
    return this.gestionService.getAllFournisseur().subscribe(
      (res: FournisseurResponseDto[]) => {
        console.log(res);
        this.allFournisseur = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  /* methode to add labo  , this methode calls the labo methode which calls the service wich work with the back */
  saveFournisseur() {
    console.log(this.fournisseurPayload);
    this.addFournisseur(this.fournisseurPayload);
    this.productDialog = false;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Fournisseur added successfully',
      life: 3000,
    });
  }
  getRubriiqueById(id: string) {
    return this.gestionService.getCategorieById(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteRubrique(id: string | undefined) {
    return this.gestionService
      .deleteFournisseur(id)
      .subscribe((res: void) => {});
  }
  addFournisseur(fournisseurPayload: FournisseurRequestDto) {
    return this.gestionService.saveFournisseur(fournisseurPayload).subscribe(
      (res) => {
        console.log(res);
        this.allFournisseur = [res, ...this.allFournisseur];
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
