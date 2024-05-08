import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { SalleTpComponent } from './components/salle-tp/salle-tp.component';
import { CrudComponent } from './components/crud/crud.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProductsComponent } from './components/products/products.component';
import { ArmoiresComponent } from './components/armoires/armoires.component';
import { LaboComponent } from './components/labo/labo.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { RubriquesComponent } from './components/rubriques/rubriques.component';
import { PreparationsComponent } from './components/preparations/preparations.component';
import { TpComponent } from './components/tp/tp.component';
import { ComamndesComponent } from './components/comamndes/comamndes.component';
import { InventaireComponent } from './components/inventaire/inventaire.component';

import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    SalleTpComponent,
    CrudComponent,
    ProductsComponent,
    ArmoiresComponent,
    LaboComponent,
    CategorieComponent,
    RubriquesComponent,
    PreparationsComponent,
    TpComponent,
    ComamndesComponent,
    InventaireComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ToolbarModule,
    ToastModule,
    FileUploadModule,
    TableModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
