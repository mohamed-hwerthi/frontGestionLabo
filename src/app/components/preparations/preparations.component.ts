import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GestionService } from 'src/app/gestionservice';
import {
  PreparationProduit,
  PreparationRequestDto,
  PreparationResponseDto,
  ProduitResDto,
} from 'src/app/models/models';

@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.component.html',
  styleUrls: ['./preparations.component.css'],
  providers: [MessageService],
})
export class PreparationsComponent {
  productDialog: boolean = false;
  deleteProductDialog: boolean = false;
  deleteProductsDialog: boolean = false;
  preparationPayload: PreparationRequestDto = {
    designation: '',
    date: new Date(),

    preparationReqProduits: [],
  };
  submitted: boolean = false;
  cols: any[] = [];
  allPreparations: PreparationResponseDto[] = [];
  rubriqueRes!: PreparationResponseDto;
  allProducts: ProduitResDto[] = [];
  visible: boolean = false;
  productQuantityPayload: PreparationProduit = {
    idProduit: '',
    quantite: 0,
  };
  skeletonLoaderDisplay: boolean = true;
  laboType: string[] = [
    'technique',
    'scientifique',
    'informatique',
    'physique',
  ];

  showDialog() {
    this.visible = true;
  }
  constructor(
    private messageService: MessageService,
    private gestionService: GestionService
  ) {}

  ngOnInit() {
    this.getAllPreparation();
    this.getAllProducts();
    this.getAllProducts();
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }

  /*   editProduct(product: Product) {
    this.productDialog = true;
  }
 */
  deleteProduct(labo: PreparationResponseDto) {
    this.deleteProductDialog = true;
    this.rubriqueRes = { ...labo };
  }
  confirmDelete(rubriqueId: string | undefined) {
    this.deletePreparation(rubriqueId);
    this.deleteProductDialog = false;
    this.allPreparations = this.allPreparations.filter(
      (val) => val.id !== rubriqueId
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Rubrique Deleted',
      life: 3000,
    });
  }
  /**
   * addProductToPreparation
   */
  public addProductToPreparation() {
    console.log(this.productQuantityPayload);
    this.preparationPayload.preparationReqProduits = [
      this.productQuantityPayload,
      ...this.preparationPayload.preparationReqProduits,
    ];
    console.log(this.preparationPayload);
    this.visible = false;
    this.skeletonLoaderDisplay = false;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  /* services consumming  */
  getAllPreparation() {
    return this.gestionService.getAllPreparation().subscribe(
      (res: PreparationResponseDto[]) => {
        console.log(res);
        this.allPreparations = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  /* methode to add labo  , this methode calls the labo methode which calls the service wich work with the back */
  savePreparation() {
    this.addPreparation(this.preparationPayload);
    this.productDialog = false;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'preparation added successfully',
      life: 3000,
    });
    this.preparationPayload = {
      designation: '',
      date: new Date(),
      preparationReqProduits: [],
    };
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

  deletePreparation(id: string | undefined) {
    return this.gestionService
      .deletePreparation(id)
      .subscribe((res: void) => {});
  }
  addPreparation(preparationPayload: PreparationRequestDto) {
    return this.gestionService.savePreparation(preparationPayload).subscribe(
      (res) => {
        console.log(res);
        this.allPreparations = [res, ...this.allPreparations];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  /**
   * getAllCategories
   */
  public getAllProducts() {
    return this.gestionService.getAllProduit().subscribe(
      (res: ProduitResDto[]) => {
        console.log(res);
        this.allProducts = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
