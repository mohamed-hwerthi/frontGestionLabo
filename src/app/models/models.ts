import { LaboResponseDto } from './Response/LaboResponseDto';
/* armoires models -----------------------------------------------------*/
export interface ArmoireRequestDto {
  designation: string;
  idSalleTp: string;
}
export interface ArmoireResDto {
  id: string;
  designation: string;
  salleTp: SalleTpResDto;
}
/*   rubrique dto  */
export interface RubriqueReqDto {
  designation: string;
  idCategorie: string;
}
export interface RubriqueResDto {
  id: string;
  designation: string;
  categorie: CategorieResDto;
}

/*   categorie dto  */
export interface CategorieReqDto {
  designation: string;
}
export interface CategorieResDto {
  id: string;
  designation: string;
}
/* tp models -------------------------------------------------------------- */
export interface TpRequestDto {
  tpType: TpType;
  jourTp: string;
  idProf: string;
  idSalleTp: string;
  niveauScolaire: NiveauScolaire;
  idsPrepararation: string[];
  idsProduit: string[];
}

enum TpType {
  CHIMIE,
  PHYSIQUE,
  INFORMATIQUE,
}

enum NiveauScolaire {
  NIVEAU_7,
  NIVEAU_8,
  NIVEAU_9,
  NIVEAU_1,
  NIVEAU_2,
  NIVEAU_3,
  NIVEAU_4,
}
export interface TpResponseDto {
  id: string;
  tpType: TpType;
  jourTp: string;
  idProf: string;
  idSalleTp: string;
  niveauScolaire: NiveauScolaire;
}

/* preparation models--------------------------------------------------------------- */

/* ---------------------------------------------------------SalleTp models  */
export interface SalleTpRequestDto {
  numero: string;
  idLabo: string;
}
export interface SalleTpResDto {
  id: string;
  numero: string;
  labo: LaboResponseDto;
}
/* ------------------------------------------------------------produit models  */
export interface ProduitRequestDto {
  designation: string;
  reference: string;
  type?: ProduitType;
  quantiteInitiale: number;
  idCategorie: string;
  idRubrique: string;
  idFournisseur: string;
  idArmoire: string;
  uniteMesure?: UniteMesure;
}

export interface ProduitResDto {
  id: string;
  designation: string;
  reference: string;
  type: ProduitType;
  quantiteInitiale: number;
  categorie?: CategorieResDto;
  fournisseur?: any;
  uniteMesure: UniteMesure;
  rubrique?: RubriqueResDto;
  armoire?: ArmoireResDto;
}
export enum ProduitType {
  chimique,
  materiel,
}
export enum UniteMesure {
  ml,
  l,
  g,
  kg,
  mm,
  m,
}

/* -------------------------------------- fournisseur models */
export interface FournisseurRequestDto {
  nom: string;
  adresse: string;
  email: string;
  nmrTel: string;
}

export interface FournisseurResponseDto {
  id: string;
  nom: string;
  adresse: string;
  email: string;
  nmrTel: string;
}
/* ---------------------------------------- preparation  models  */
export interface PreparationRequestDto {
  designation: string;
  date: Date;
  preparationReqProduits: PreparationProduit[];
}
export interface PreparationProduit {
  idProduit: string;
  quantite: number;
}
export interface PreparationResponseDto {
  id: string;
  designation: string;
  date: Date;
  preparationReqProduits: PreparationProduit[];
}