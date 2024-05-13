import { Component } from '@angular/core';
import { Product } from '../salle-tp/salle-tp.component';
import { MessageService } from 'primeng/api';
import { LaboService } from 'src/app/services/labo.service';
import {
  LaboResponseDto,
  LaboType,
} from 'src/app/models/Response/LaboResponseDto';
import { HttpErrorResponse } from '@angular/common/http';
import { LaboRequestDto } from 'src/app/models/Request/LaboRequestDto';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-labo',
  templateUrl: './labo.component.html',
  styleUrls: ['./labo.component.css'],
  providers: [MessageService],
})
export class LaboComponent {
  productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;
  labo: LaboType = LaboType.informatique;
  submitted: boolean = false;
  cols: any[] = [];
  allLabo: LaboResponseDto[] = [];
  laboRes!: LaboResponseDto;

  form = new FormGroup({
    laboType: new FormControl('', [Validators.required]),
  });

  constructor(
    private messageService: MessageService,
    private laboService: LaboService
  ) {}

  ngOnInit() {
    this.getAllLabo();
  }
  laboType: string[] = [
    'technique',
    'scientifique',
    'informatique',
    'physique',
  ];

  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }

  editProduct(product: Product) {
    this.productDialog = true;
  }

  deleteProduct(labo: LaboResponseDto) {
    this.deleteProductDialog = true;
    this.laboRes = { ...labo };
  }
  confirmDelete(laboId: string | undefined) {
    console.log(laboId);
    console.log('confirm delete');
    this.deleteLabo(laboId);
    this.deleteProductDialog = false;
    this.allLabo = this.allLabo.filter((val) => val.id !== laboId);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000,
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  /* services consumming  */
  getAllLabo() {
    return this.laboService.getAlLabo().subscribe(
      (res: LaboResponseDto[]) => {
        this.allLabo = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  /* methode to add labo  , this methode calls the labo methode which calls the service wich work with the back */
  saveLabo() {
    this.addLabo(this.labo);
    let labo: LaboResponseDto = {
      id: '234242499999823',
      laboType: this.labo,
    };
    this.allLabo = [labo, ...this.allLabo];
    this.productDialog = false;
  }
  getLaboById(id: string) {
    return this.laboService.getLaboById(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteLabo(id: string | undefined) {
    return this.laboService.deleteLabo(id).subscribe((res: void) => {});
  }
  addLabo(laboType: LaboType) {
    console.log(laboType);
    return this.laboService.saveLabo(laboType).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('error in adding labo');
        console.log(err);
      }
    );
  }
}
