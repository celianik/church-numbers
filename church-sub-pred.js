const fp = p => pair (snd (p)) (succ(snd(p)))
const pr0 = pair (zero) (zero)
const pred = n => fst (n (fp) (pr0))

const sub = n => m => m (pred)(n)
