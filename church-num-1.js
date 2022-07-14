const add = m => n => f => x => m(f)(n(f)(x))

const mul = m => n => f => x => m(n(f))(x)

const pow = m => n => f => x => n(m)(f)(x)
