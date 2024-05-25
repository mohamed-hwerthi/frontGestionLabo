import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GestionService } from 'src/app/gestionservice';
import {
  NiveauScolaire,
  PreparationResponseDto,
  ProduitResDto,
  SalleTpResDto,
  TpRequestDto,
  TpResponseDto,
  TpType,
} from 'src/app/models/models';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css'],
  providers: [MessageService],
})
export class TpComponent {
  productDialog: boolean = false;
  deleteProductDialog: boolean = false;
  deleteProductsDialog: boolean = false;
  tpPayload: TpRequestDto = {
    tpType: TpType.CHIMIE,
    jourTp: '',
    idProf: '',
    idSalleTp: '',
    niveauScolaire: NiveauScolaire.NIVEAU_7,
    idsPrepararation: [],
    idsProduit: [],
    manip: '',
  };
  allSalleTp: SalleTpResDto[] = [];
  visiblePrep: boolean = false;
  /*     preparationReqProduits: []={

    } */
  submitted: boolean = false;
  cols: any[] = [];
  allTps: TpResponseDto[] = [];
  tpRes!: TpResponseDto;
  allProducts: ProduitResDto[] = [];
  visible: boolean = false;
  skeletonLoaderDisplay: boolean = true;
  type: string[] = ['CHIMIE', 'PHYSIQUE', 'INFORMATIQUE'];
  niveauScolaire: string[] = [
    'NIVEAU_7',
    'NIVEAU_8',
    'NIVEAU_9',
    'NIVEAU_1',
    'NIVEAU_2',
    'NIVEAU_3',
    'NIVEAU_4',
  ];
  datetime12h: Date[] | undefined;

  datetime24h: Date[] | undefined;

  time: Date[] | undefined;
  tpAssocaitedPreparations: string[] = [];
  idProduitToAddToTp: string = '';
  idPreparationToAdd: string = '';
  tpAssocaitedProduits: string[] = [];
  allPreparations: PreparationResponseDto[] = [];
  formatJourTp(jourTp: number[]): string {
    const [year, month, day, hour, minute, second] = jourTp;
    return `${day.toString().padStart(2, '0')}/${month
      .toString()
      .padStart(2, '0')}/${year} ${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
  }
  addPreparationToTp(idPrepararation: string) {
    this.tpAssocaitedPreparations = [
      idPrepararation,
      ...this.tpAssocaitedPreparations,
    ];
    this.visiblePrep = false;
    console.log(this.tpAssocaitedPreparations);
  }
  addProductToTp(idProduct: string) {
    this.tpAssocaitedProduits = [idProduct, ...this.tpAssocaitedProduits];
    console.log(this.tpAssocaitedProduits);
    this.visible = false;
  }

  showDialog() {
    this.visible = true;
  }
  showDialog2() {
    this.visiblePrep = true;
  }
  constructor(
    private messageService: MessageService,
    private gestionService: GestionService
  ) {}

  ngOnInit() {
    this.getAllTp();
    this.getAllProducts();
    this.getALlSalleTp();
    this.getAllPreapration();
  }

  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }

  /*   editProduct(product: Product) {
    this.productDialog = true;
  }
 */
  deleteProduct(labo: TpResponseDto) {
    this.deleteProductDialog = true;
    this.tpRes = { ...labo };
  }
  confirmDelete(rubriqueId: string | undefined) {
    this.deletePreparation(rubriqueId);
    this.deleteProductDialog = false;
    this.allTps = this.allTps.filter((val) => val.id !== rubriqueId);
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
  /*   public addProductToPreparation() {
    console.log(this.productQuantityPayload);
    this.tpPayload.preparationReqProduits = [
      this.productQuantityPayload,
      ...this.tpPayload.preparationReqProduits,
    ];
    console.log(this.tpPayload);
    this.visible = false;
    this.skeletonLoaderDisplay = false;
  } */

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  /* services consumming  */
  getAllTp() {
    return this.gestionService.getAllTp().subscribe(
      (res: TpResponseDto[]) => {
        console.log(res);
        this.allTps = res;
        this.allTps.map((tp) => {
          this.formatJourTp(tp.jourTp);
        });
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  /* methode to add labo  , this methode calls the labo methode which calls the service wich work with the back */
  saveTp() {
    this.tpPayload.idsPrepararation = this.tpAssocaitedPreparations;
    this.tpPayload.idsProduit = this.tpAssocaitedProduits;
    console.log(this.tpPayload);
    this.addPreparation(this.tpPayload);
    this.productDialog = false;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Tp added successfully',
      life: 3000,
    });
    // this.tpPayload = {};
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
    return this.gestionService.deleteTp(id).subscribe((res: void) => {});
  }
  addPreparation(tpPayload: TpRequestDto) {
    return this.gestionService.saveTp(tpPayload).subscribe(
      (res) => {
        console.log(res);
        this.allTps = [res, ...this.allTps];
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
  /**
   * getALlSalleTp
   */
  public getALlSalleTp() {
    return this.gestionService.getAllSalleTp().subscribe(
      (res) => {
        this.allSalleTp = res;
      },
      (err) => {}
    );
  }
  /**
   * getAllPreapration
   */
  public getAllPreapration() {
    return this.gestionService.getAllPreparation().subscribe(
      (res) => {
        this.allPreparations = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
