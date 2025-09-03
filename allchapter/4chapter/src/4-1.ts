type O1 = { a: string; b: number };
type O2 = { c: string; d: string };

type O3 = O1 & O2;
let o3: O3 = { a: 'abc', b: 45, c: 'bbb', d: 'fff' };

export {};
