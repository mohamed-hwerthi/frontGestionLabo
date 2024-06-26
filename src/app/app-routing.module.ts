import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SalleTpComponent } from './components/salle-tp/salle-tp.component';
import { LaboComponent } from './components/labo/labo.component';
import { ProductsComponent } from './components/products/products.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { RubriquesComponent } from './components/rubriques/rubriques.component';
import { PreparationsComponent } from './components/preparations/preparations.component';
import { TpComponent } from './components/tp/tp.component';
import { ArmoiresComponent } from './components/armoires/armoires.component';
import { ComamndesComponent } from './components/comamndes/comamndes.component';
import { InventaireComponent } from './components/inventaire/inventaire.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { PostsComponent } from './posts/posts.component';
import { InvDComponent } from './inv-d/inv-d.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SalleTpComponent,
      },
      {
        path: 'labo',
        component: LaboComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'cat',
        component: CategorieComponent,
      },
      {
        path: 'rub',
        component: RubriquesComponent,
      },
      {
        path: 'prep',
        component: PreparationsComponent,
      },

      {
        path: 'tp',
        component: TpComponent,
      },
      {
        path: 'arm',
        component: ArmoiresComponent,
      },
      {
        path: 'commande',
        component: ComamndesComponent,
      },
      {
        path: 'durable',
        component: InventaireComponent,
      },
      {
        path: 'consommable',
        component: InvDComponent,
      },
      {
        path: 'salleTp',
        component: SalleTpComponent,
      },
      {
        path: 'fourn',
        component: FournisseurComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
