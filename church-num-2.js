let churchAdd = (c1) => (c2) => (f) => (x) => c1(f)(c2(f)(x));
let churchMul = (c1) => (c2) => (f) => (x) => c1(c2(f))(x);
let churchPow = (cb) => (ce) => (f) => (x) => ce(cb)(f)(x);
