<h1 align="center" style="color: teal">xng-breadcrumb</h1>

<div align="center">

> A lightweight, declarative and dynamic breadcrumbs solution for Angular 6 and beyond. <https://www.npmjs.com/package/xng-breadcrumb>

[![CI](https://github.com/udayvunnam/xng-breadcrumb/actions/workflows/ci.yml/badge.svg)](https://github.com/udayvunnam/xng-breadcrumb/actions/workflows/pr-checks.yml)
[![npm version](https://img.shields.io/npm/v/xng-breadcrumb.svg)](https://www.npmjs.com/package/xng-breadcrumb)
![bundle size](https://img.shields.io/bundlephobia/minzip/xng-breadcrumb)
[![license](https://img.shields.io/npm/l/xng-breadcrumb.svg)](https://github.com/udayvunnam/xng-breadcrumb/blob/main/LICENSE)
![npm downloads](https://img.shields.io/npm/dt/xng-breadcrumb?style=social)

![Twitter follow](https://img.shields.io/twitter/follow/udayvunnam_?style=social)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

</div>

## Why do you need Breadcrumbs?

- In applications with deep navigation hierarchy, it is essential to have breadcrumbs.
- Breadcrumbs easily allow going back to states higher up in the hierarchy.

## Documentation

A step by step guide to integrate xng-breadcrumb into your Angular application - https://udayvunnam.github.io/xng-breadcrumb

## Demo Angular App using xng-breadcrumb

[Demo App](https://xng-breadcrumb.vercel.app/) - A demo app showcasing `xng-breadcrumb` library usage in an Angular app. Navigate through different links to see breadcrumbs behavior.

<a href="https://xng-breadcrumb.vercel.app//dashboard" rel="noopener" target="_blank" ><img width="945" alt="xng-breadcrumb usage" src="https://github.com/udayvunnam/xng-breadcrumb/assets/20707504/02aa26d1-a41f-4a47-a1fe-009d6dfcd0b7"></a></p>

## Features

- ✅ **Zero configuration**: Just add `<xng-breadcrumb></xng-breadcrumb>` anywhere in the app. Breadcrumb labels are auto-generated by analyzing Angular Route configuration in your App.

- ✅ **Custom labels**: Each route can have a custom label defined via Angular Route Config. These labels are used automatically while generating breadcrumbs.

- ✅ **Update labels dynamically**: Change breadcrumb labels dynamically using `BreadcrumbService.set()`. You can either use _route path_ or _route path alias_ to update label.

- ✅ **Skip breadcrumb**: Skip specific routes from displaying in breadcrumbs, conditionally.

- ✅ **Disable breadcrumb**: Disable specific routes so that navigation is disbaled to intermediate routes.

- ✅ **Customization**: Customize breadcrumb template to show **icons with label**, **use pipes on text**, **add i18n with ngx-translate**, etc.

- ✅ **Styling**: **Separator** and **Styles** can be customized with ease.

- ✅ **QueryParams and Fragment**: Preserves QueryParams and Fragemnet while navigating via breadcrumbs

- ✅ **SSR**: Supports server side rendering with nguniversal

## ❤️ [Become a Sponsor!](http://paypal.me/udayvunnam)

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/udayvunnam/"><img src="https://avatars.githubusercontent.com/u/20707504?v=4?s=100" width="100px;" alt="Uday Vunnam"/><br /><sub><b>Uday Vunnam</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=udayvunnam" title="Code">💻</a> <a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=udayvunnam" title="Documentation">📖</a> <a href="#maintenance-udayvunnam" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/anthonythiry"><img src="https://avatars.githubusercontent.com/u/28025542?v=4?s=100" width="100px;" alt="anthonythiry"/><br /><sub><b>anthonythiry</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=anthonythiry" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dedrazer"><img src="https://avatars.githubusercontent.com/u/23525418?v=4?s=100" width="100px;" alt="dedrazer"/><br /><sub><b>dedrazer</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=dedrazer" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dannyfeliz.com/"><img src="https://avatars.githubusercontent.com/u/5460365?v=4?s=100" width="100px;" alt="Danny Feliz"/><br /><sub><b>Danny Feliz</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=DannyFeliz" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kapenzo"><img src="https://avatars.githubusercontent.com/u/16196222?v=4?s=100" width="100px;" alt="Kapsky"/><br /><sub><b>Kapsky</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=kapenzo" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/andreicojea"><img src="https://avatars.githubusercontent.com/u/4705022?v=4?s=100" width="100px;" alt="Andrei Cojea"/><br /><sub><b>Andrei Cojea</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=andreicojea" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jontze"><img src="https://avatars.githubusercontent.com/u/42588836?v=4?s=100" width="100px;" alt="Jonathan"/><br /><sub><b>Jonathan</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=jontze" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://pavankjadda.dev/"><img src="https://avatars.githubusercontent.com/u/17564080?v=4?s=100" width="100px;" alt="Pavan Kumar Jadda"/><br /><sub><b>Pavan Kumar Jadda</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=pavankjadda" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/LeonFretter"><img src="https://avatars.githubusercontent.com/u/40633983?v=4?s=100" width="100px;" alt="Leon Fretter"/><br /><sub><b>Leon Fretter</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=LeonFretter" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lukasmatta"><img src="https://avatars.githubusercontent.com/u/4323927?v=4?s=100" width="100px;" alt="Lukáš Matta"/><br /><sub><b>Lukáš Matta</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=lukasmatta" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cskiwi"><img src="https://avatars.githubusercontent.com/u/847540?v=4?s=100" width="100px;" alt="Glenn Latomme"/><br /><sub><b>Glenn Latomme</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=cskiwi" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ovidiu-cssrl"><img src="https://avatars.githubusercontent.com/u/48490266?v=4?s=100" width="100px;" alt="Ovidiu Haureș"/><br /><sub><b>Ovidiu Haureș</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=ovidiu-cssrl" title="Code">💻</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/udayvunnam/"><img src="https://avatars.githubusercontent.com/u/20707504?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Uday Vunnam</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=udayvunnam" title="Code">💻</a> <a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=udayvunnam" title="Documentation">📖</a> <a href="#maintenance-udayvunnam" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/anthonythiry"><img src="https://avatars.githubusercontent.com/u/28025542?v=4?s=100" width="100px;" alt=""/><br /><sub><b>anthonythiry</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=anthonythiry" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dedrazer"><img src="https://avatars.githubusercontent.com/u/23525418?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dedrazer</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=dedrazer" title="Code">💻</a></td>
    <td align="center"><a href="https://dannyfeliz.com/"><img src="https://avatars.githubusercontent.com/u/5460365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Danny Feliz</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=DannyFeliz" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/kapenzo"><img src="https://avatars.githubusercontent.com/u/16196222?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kapsky</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=kapenzo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/andreicojea"><img src="https://avatars.githubusercontent.com/u/4705022?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrei Cojea</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=andreicojea" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jontze"><img src="https://avatars.githubusercontent.com/u/42588836?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=jontze" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://pavankjadda.dev/"><img src="https://avatars.githubusercontent.com/u/17564080?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pavan Kumar Jadda</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=pavankjadda" title="Code">💻</a> <a href="#maintenance-pavankjadda" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/LeonFretter"><img src="https://avatars.githubusercontent.com/u/40633983?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leon Fretter</b></sub></a><br /><a href="https://github.com/udayvunnam/xng-breadcrumb/commits?author=LeonFretter" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

To add new contributor _username_, who made a contribution of type _contribution_:

`pnpm all-contributors add <username> <contribution>` Example: `pnpm all-contributors add jfmengels code,doc`
