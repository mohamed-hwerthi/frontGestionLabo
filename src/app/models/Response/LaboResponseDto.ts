export interface LaboResponseDto {
  id: String;
  type: LaboType;
}

export enum LaboType {
  technique,
  scientifique,
  informatique,
  physique,
}
