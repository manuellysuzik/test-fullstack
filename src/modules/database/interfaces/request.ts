

export interface IRequest {
  id:string
  description:string
  qtd:number
  price:number

  createdDate?:Date
  updatedDate?:Date
}