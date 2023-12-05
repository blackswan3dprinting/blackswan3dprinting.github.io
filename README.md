# blackswan3d.com

![Black Swan Docs header](/.github/docs_header.png)

Welcome to the [blackswan3d.com](https://blackswan3d.com) repository. Our website is used as a portfolio to showcase recruiters as well as introduce customers to what Black Swan is and what we create.

## Repository Management

### Issues

The GitHub repository uses Issues and Issue Templates. Contributers can use Issues to submit **feature requests** (enhancement) , **bug reports** (bug), or **repository edit requests** (repository).

### Branches

|Branch|Type|Details|
|---|---|---|
|`main`|production|This is the code currently on [our website](https://blackswan3d.com/).|
|`dev`|development|This is code that is awaiting testing. Typically, already under a Pull Request.|
|`dev-X`|feature development|Where X is equal an Issue number, these are branches that tackle a specific Issue.|

### Pull Requests

In this repository, we use GitHub Pull Requests to have Joseph (our founder) test the changes that were committed into the `dev` branch. Once these changes are fully approved by Joseph, he merges the branch into `main`, which automatically deploys it to the website.

## What We Use

The website is built using:

- [Render](https://render.com/)
- [React](https://react.dev)
- HTML
- [Sass](https://sass-lang.com)
- [TypeScript](https://www.typescriptlang.org)

## Setup the Development Environment

To set up the development environment, get your favorite terminal and follow these instructions:

```bash
# Clone the repository
git clone https://github.com/blackswan3d.com/blackswan3d.com
cd blackswan3d.com

# install dependencies
cd src
npm install

# begin development environment
npm run dev
```

After that, you're ready to go!

### Extra instructions for Black Swan employees

If you have a `@blackswan3d.com` email address, please make sure to use that for your commits. Run these extra commands on your terminal:

```bash
git config --global user.name "firstName lastName"
git config --global user.email name@blackswan3d.com
```

Now you're ready to go! Make sure to read up on [how to write commit messages](https://www.freecodecamp.org/news/how-to-write-commit-messages-maintainers-will-like/).

## Need Help?

If you need help, please contact [tech@blackswan3d.com](mailto:tech@blackswan3d.com) and Carlos will try to get back to you soon. Thanks!
