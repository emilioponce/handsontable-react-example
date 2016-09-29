
## Example of Handsontable library embedded in a React component


**Proof of concept**: React datagrid component using [Handsontable javascript library](https://handsontable.com/). It is reusable since their datagrid data and it's DOM element are both parameters.

>**Especial configuration**: Handsontable do not work well with Webpack as it cannot resolve some dependencies. As we are using react-create-app, ['npm run eject'](https://www.npmjs.com/package/react-scripts)' was necessary in order to access the webpack configuration. An small workaround was implemented in Webpack dev/prod config files following [this instructions.](https://github.com/handsontable/handsontable/issues/3718)

---

### Installation

```shell
> git clone https://github.com/emilioponce/handsontable-react-example.git
> npm install
> npm start

> npm test
> npm build
```

---

NOTE: [create-react-app ](https://github.com/facebookincubator/create-react-app) was used in this example
