# Core WAGMI

![CI](https://github.com/turbo-eth/core-wagmi/actions/workflows/main.yml/badge.svg)
![TS](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![GPLv3 license](https://img.shields.io/badge/License-MIT-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
[![Version](https://img.shields.io/npm/v/@turbo-eth/core-wagmi.svg)](https://npmjs.org/package/@turbo-eth/core-wagmi)
[![Downloads/week](https://img.shields.io/npm/dw/@turbo-eth/core-wagmi.svg)](https://npmjs.org/package/@turbo-eth/core-wagmi)

### 💾 &nbsp;Installation

```sh
npm install @turbo-eth/core-wagmi
```

```sh
yarn add @turbo-eth/core-wagmi
```

```sh
pnpm add @turbo-eth/erc721-wagmi
```

```sh
git clone https://github.com/turbo-eth/core-wagmi
```

### 💻 Developer Experience

The module uses a combination of [DTS](https://github.com/weiran-zsd/dts-cli) and [Microbundle](https://github.com/developit/microbundle) to manage the development workflow.

- [Husky](https://typicode.github.io/husky/#/)
- [Jest](https://jestjs.io/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [TypeScript](https://www.typescriptlang.org/)
- [eslint](https://eslint.org/) + [prettier](https://prettier.io/)

### 🐕 What is husky

Husky improves your git commits.

You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.

#### 🪝 Hooks

- pre-commit: lint code by applying eslint
- commit-msg: force commintlint rules

### 📋 What is commitlint

commitlint checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

In general the pattern mostly looks like this:

```sh
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Real world examples can look like this:

```
chore: run tests on travis ci
```

```
fix(server): send cors headers
```

```
feat(blog): add comment section
```

Common types according to [commitlint-config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

### Sponsors & Maintainers

The TurboETH Web3 Build System development is (currently) sponsored (and maintained) by District Labs.

<a alt="District Labs" href="https://districtlabs.com/" target="_blank">
 <img src="https://red-effective-snake-988.mypinata.cloud/ipfs/QmXhSGcjL9oqQUpoSLzJ1vWto4B43epATpraqJhV5B4cdB">
</a>

Interested in sponsoring the development and maintenance of the `TurboETH - Web3 Build System` templates, utilities and modules?

Contact us today at <a alt="District Labs" href="https://districtlabs.com/" target="_blank">District Labs</a> or collect (coming soon) the TurboETH Mirror Collection.

<hr />

Copyright 2022 [Kames Geraghty](https://twitter.com/KamesGeraghty)
