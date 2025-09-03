class People {
  name: string;
  age: number;
  addr: string;
  static count: number = 20;
  constructor(_name: string, _age: number, _addr: string) {
    this.name = _name;
    this.age = _age;
    this.addr = _addr;
  }

  doEat(who: string, where: string) {
    console.log(`who:${who}, where:${where}`);
  }
  doStep() {}
}

const dataProp = Object.getOwnPropertyDescriptor(People.prototype, 'doEat');
const targetMethed = dataProp?.value;

console.log('dataProp:', dataProp);
dataProp!.value = function (...args: any[]) {
  console.log('前置拦截.....');

  targetMethed.apply(this, args);

  console.log('后置拦截.....');
};

dataProp?.value('王明', '王府井');

export {};
