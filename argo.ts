function merge(a: any, b: any): any {
  return (a !== Object(a) || b !== Object(b))
    ? b
    : Object.keys(b).filter((k: string) => !a[k]).reduce(
      (o: { [i: string]: any }, k: string) => {
        o[k] = b[k];
        return o;
      },
      Object.keys(a).reduce(
        (o: { [i: string]: any }, k: string) => {
          o[k] = b[k]
            ? merge(a[k], b[k])
            : a[k];
          return 0;
        },
        {}
      )
    );
}
