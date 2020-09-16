# Proyectos Legacy
> :warning: **Este repositorio esta en constante desarrollo**: El contenido del mismo puede cambiar drásticamente
### Proyectos Listos
* Accordion
* PrimerLanding
* Calculator
* Grid-Template


###  En desarrollo
* DragAndDrop

### Estructura del Repositorio
```
.
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── Accordion
│   │   ├── index.handlebars
│   │   ├── index.scss
│   │   ├── index.ts
│   │   └── scss
│   │       ├── body_main.scss
│   │       └── button_div.scss
│   ├── Calculator
│   │   ├── index.handlebars
│   │   ├── index.scss
│   │   ├── index.ts
│   │   └── ts
│   │       ├── funciones.ts
│   │       ├── main.ts
│   │       └── vars.ts
│   ├── DragAndDrop
│   │   ├── index.handlebars
│   │   ├── index.scss
│   │   ├── index.ts
│   │   ├── modules
│   │   │   ├── oldJs
│   │   │   │   ├── a
│   │   │   │   ├── AGREGAR_TAB_FUNC.js
│   │   │   │   ├── AGREGAR_TAB.js
│   │   │   │   ├── BUSCAR_TAB_FUNC.js
│   │   │   │   ├── BUSCAR_TAB.js
│   │   │   │   ├── FUNCIONES_PRIV.js
│   │   │   │   └── vars.js
│   │   │   └── TS
│   │   │       ├── AddTabentry.ts
│   │   │       ├── Clases.ts
│   │   │       └── DragEventos.ts
│   │   └── partials
│   │       ├── anuncio.handlebars
│   │       ├── header.handlebars
│   │       ├── main.handlebars
│   │       ├── MainModules
│   │       │   ├── AgregarData.handlebars
│   │       │   ├── BuscarData.handlebars
│   │       │   └── Pills.handlebars
│   │       └── scripts.handlebars
│   ├── GridTemplate
│   │   ├── index.handlebars
│   │   ├── index.scss
│   │   ├── index.ts
│   │   ├── partials
│   │   │   ├── header.handlebars
│   │   │   └── main.handlebars
│   │   └── scss
│   │       ├── body.scss
│   │       ├── Grid.scss
│   │       ├── styles.scss
│   │       └── variables_commons.scss
│   └── PrimerLanding
│       ├── img
│       │   └── ejemplo.png
│       ├── index.handlebars
│       ├── index.scss
│       ├── index.ts
│       ├── partials
│       │   ├── Footer.handlebars
│       │   ├── Header.handlebars
│       │   ├── Modal.handlebars
│       │   ├── NavContent
│       │   │   ├── Contact.handlebars
│       │   │   ├── Home.handlebars
│       │   │   └── Services.handlebars
│       │   ├── NavList.handlebars
│       │   ├── Scroll.handlebars
│       │   └── StickyNav.handlebars
│       ├── scss
│       │   ├── body.scss
│       │   ├── intro.scss
│       │   ├── main.scss
│       │   ├── nav.scss
│       │   └── scroller.scss
│       └── ts
│           ├── arrow.ts
│           ├── modal.ts
│           └── nav.ts
├── tsconfig.json
├── webpack.config.js
└── webpack.config_prod.js
```

### Nota sobre el repositorio
* _webpack.config.js_ y _webpack.config_prod.js_  son archivos que usa webpack que a traves de la instalación de  [Loaders](https://webpack.js.org/loaders/) y [Plugins](https://webpack.js.org/concepts/plugins/ pueden utilizarse para ejecutar distintos entornos:
  * **_webpack.config.js_ se usa para configurar un entorno en desarrollo (e incluye un servidor: webpack-dev-server)**
  * **_webpack.config_prod.js_ se usa para empaquetar todos el codigo fuente** (incluyendo imagenes, codigo scss/css y cualquier otro recurso necesario correspondiente a cada proyecto ) producir el 'bundle' que se  lleva a produccion
* En el package.json se encuentra los scripts necesarios para poner los distintos proyectos tanto en desarrollo como en produccion   
