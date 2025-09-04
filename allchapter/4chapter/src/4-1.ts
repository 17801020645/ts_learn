interface Customer {
  name: string;
  degree: number;
  phone: string;
}

type CustKeyValsTyp = {
  [P in keyof Customer]: Customer[P];
};


