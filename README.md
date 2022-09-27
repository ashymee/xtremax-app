# NextJS - Project Starter

This nextjs project starter is suitable for team. Worried nothing about code styling for each developer and misunderstood of committed message of any changes.

> Note: this is works good on VS Code. I have not testing with another editor.

### How to use

- clone this repo & rename the `my-app` with `your-another-stunning-app`.

```bash
git clone https://github.com/ashymee/nextts-project-starter.git my-app
```

- jump to `my-app` or `your-another-stunning-app` directory

```bash
cd your-another-stunning-app
```

- install all packages

use npm

```bash
npm install
```
or, use yarn

```bash
yarn install
```

or, use pnpm

```bash
pnpm install
```

- run it on your machine locally

use npm

```bash
npm run dev
```
or, use yarn

```bash
yarn dev
```

or, use pnpm

```bash
pnpm dev
```

### Try to edit and make ugly code typing, such

```ts
const MyApp     = (
        ) {
return <div className='bg-red-500 
    text-white'>
        Hello world!!
    </div>
        }
```

then, save it. You can see, if this fix your current file.

if you want to reformat all your files, use CLI to reformat it, based on ESLint & Prettier standard that installed in devDependencies. For do that, just run in your terminal as mention below.

use npm

```bash
npm run format
```
or, use yarn

```bash
yarn format
```

or, use pnpm

```bash
pnpm format
```

> Note (1): if problem occur when auto formatting on save, please disable Prettier Ext installed on your VS Code. Let prettier installed on your current project works best for you.

> Note (2): when saving process is run, it will also do automatically manage your modules imported, such sorting and remove module(s) that are not reassign.

---

♥️ Happy coding..