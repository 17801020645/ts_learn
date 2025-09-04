interface Customer {
  custname: string;
  buymoney: number;
}

type CustFn = (params: Customer) => string;
type CustParaTyp = CustFn extends (params: any) => infer R ? R : CustFn;
