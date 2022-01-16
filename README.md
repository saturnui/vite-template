# Vuwi + Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

### The template has the following additional dependencies installed

* [vue-demi](https://github.com/vueuse/vue-demi) - a developing utility
allows you to write Universal Vue Libraries for Vue 2 & 3
* [vueuse](https://vueuse.org/) - collection of essential Vue composition utilities
* [mitt](https://github.com/developit/mitt) - tiny 200b functional event emitter / pubsub

#### Tooltip Component
* [popper](https://popper.js.org/) - tooltip & popover positioning engine

#### TextInput Component
* [maska](https://github.com/beholdr/maska) - a simple zero-dependency input mask
* [vee-validate](https://vee-validate.logaretm.com/v4/) - form validation

