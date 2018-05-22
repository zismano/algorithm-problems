// north 2 east 3 south 2 west 3 -> 12
// n, e, e, e
// n, 0, 0, s
// x, w, w, s 

// north 2 east 3 south 2 west 1 -> 0 (not closing a loop)
// n, e, e, e
// n, 0, 0, s
// X, 0, x, s 

// north 2 east 3 south 2 west 1 north 2 -> 6
// n, e, x, e
// n, 0, n, s
// X, 0, w, s
