import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Product } from '../salle-tp/salle-tp.component';
import { MessageService } from 'primeng/api';
import { LaboService } from 'src/app/services/labo.service';
import { LaboResponseDto } from 'src/app/models/Response/LaboResponseDto';
import { HttpErrorResponse } from '@angular/common/http';

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

  products: LaboResponseDto[] = [];

  product: Product = {};

  selectedProducts: Product[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];
  allLabo: LaboResponseDto[] = [];

  constructor(
    private messageService: MessageService,
    private laboService: LaboService
  ) {}

  ngOnInit() {
    this.getAllLabo();
    this.getLaboById('6600995de6e2d8326b59c481');
    this.deleteLabo('6600995de6e2d8326b59c481');
   
    this.cols = [
      { field: 'product', header: 'Product' },
      { field: 'price', header: 'Price' },
      { field: 'category', header: 'Category' },
      { field: 'rating', header: 'Reviews' },
      { field: 'inventoryStatus', header: 'Status' },
    ];

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' },
    ];
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.deleteProductDialog = true;
    this.product = { ...product };
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.products = this.products.filter(
      (val) => !this.selectedProducts.includes(val)
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Produc6600995de6e2d8326b59c481ts Deleted',
      life: 3000,
    });
    this.selectedProducts = [];
  }

  confirmDelete() {
    this.deleteProductDialog = false;
    this.products = this.products.filter((val) => val.id !== this.product.id);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000,
    });
    this.product = {};
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }



  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  // consuming labo services :
  getAllLabo() {
    return this.laboService.getAlLabo().subscribe(
      (res: LaboResponseDto[]) => {
        this.allLabo = res;
        this.products = res;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
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

  deleteLabo(id: string) {
    return this.laboService.deleteLabo(id).subscribe((res: void) => {
      console.log('deleted');
    });
  }
}
