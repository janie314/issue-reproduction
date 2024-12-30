# UseExhaustiveDependencies Edge Case

1. Run the following. Note that both Biome and ESLint fail because of their
   corresponding exhaustive React hook dependencies lints.

```shell
bun i
bun run biome ci
bun run eslint
```

