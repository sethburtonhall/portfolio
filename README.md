<!-- # Portfolio | Seth Hall

[https://www.sethhallcreative.com/](https://www.sethhallcreative.com/)

## The Stack

- Astro
- Typescript
- Tailwind

## Project Structure

#### `/Components`

- includes all Astro web components.

#### `/Content`

- defines content collections in `config.ts`
- includes `web` or `creative` markdown content

#### `/Layouts`

- includes `BaseLayout.astro`

#### `/Lib`

- includes functions and helpers in `utils`

#### `/Pages`

- includes all `/`, `web` and `creative` pages

#### `/Styles`

- uses a hybrid approach
- theme and extends in `tailwind.config.mjs`
- css variables and global css in `styles/global.css`
- page scoped styles are either inline Tailwind utility classes or vanilla CSS in the `<style>` tag

## How to Add Web Projects

- create a project repo on Github
- tag with `showcase/shortstack`
- add other relevant `tags`

  > the project page at `web/**/*` will pull the tags and description from the repo.

- add an image to the appropriate `public/assets/web/*` directory
- add a matching `.md` file in the `content/web` directory with the appropriate `frontmatter` and `content`.

  > The frontmatter title must match the repo title.

## How to Add Creative Projects

- add an image to the `public/assets/creative` directory
- create a `.md` file in the `content/creative` directory with the appropriate `frontmatter` and `content`

## CI/CD

- Deployed automatically to Netlify when pushed to Github -->
