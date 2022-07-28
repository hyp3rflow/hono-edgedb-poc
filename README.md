# hono-edgedb-poc

Don't try this at home (do at your work)

## how to

1. Setup edgedb (maybe `edgedb project init`)
2. Pull
   [`hyp3rflow/edgedb/deno-qb`](https://github.com/hyp3rflow/edgedb-js/tree/deno-qb)
   on parent directory
3. Go to pulled edgedb, `yarn && yarn compileForDeno`
4. Back to here, `deno task gen`
5. There is some type conflicts between `edgedb` in deno.land and our own type,
   so replace `https://deno.land/x/edgedb/` with `eql/`. (`eql` is in
   [import_map](./import_map.json))
6. `deno task start`
