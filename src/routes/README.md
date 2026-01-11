## File-based Routing

Routes will be auto-generated for React files in this dir with the same file structure.
Check out [`@tanstack/react-router`](https://github.com/TanStack/router) for more details.

### Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having

```ts
import Footer from '../../../../components'
```

now, you can use

```ts
import Footer from '~/components'
```
