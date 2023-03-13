# CrudAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Logs Commits

1 - Criei a aplicação com o `ng new crud-angular`, estou usando scss, adicionei roteamento, incluí o angular material com `ng add @angular/material`

- Dentro do `app.component.html` coloquei um componente do material design.
- Dentro do `app.module.ts` adicionei o `import { MatToolbarModule } from '@angular/material/toolbar';`
- Logo em seguida adicionei dentro dos imports o `MatToolbarModule`

---

2 - criei um módulo antes de criar um componente com `ng g m courses --routing`

- onde **g** é de generate **m** de module após isso vem o nome do módulo e **--routing** é para o cli do angular gerar o roteamente
- caso eu queria usar um componente de dentro do módulo courses eu necessito exporta-lo
- Criando um componente `ng g c courses/courses` | Aqui eu crio um componente dentro do diretório de courses.
- configuando a rota para abrir o futuro componente de listas com o roteamento. | Vou até o `courses-routing.module.ts` e coloco o path como vazio e quando ele for requisitado ele renderiza o componente `CoursesComponent`.
- Configurando o escopo global, para que se não houver nada a url ele redirecione para uma url específica. ` path: '', pathMatch:'full', redirectTo: 'courses'` isso em `app-routing`.
- _Carregue a rota de forma automática já que esse módulo é um módulo filho da aplicação_ `{
  path: 'courses',
  loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
}`
- Como o primeiro path está vazio e tem o redirectTo course, então quando entrar ele já vai renderizar o loadChildren.
- Onde eu quero renderizar a rota, `<router-outlet></router-outlet>`

---

## 05 - Customizando o Tema do Angular Material

- [Paleta de cores AngularMaterial](https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors)


____
## 06 - Criando Material Table para Listar Cursos

- indo no Angular Material e utilizando o `import {MatTableModule} from '@angular/material/table';` 
- Criando uma interface 
- `ng g interface courses/model/course` que será utilizada apena em tempo de desenvolvimento
- Não deve-se esquecer de importar o MatTableModule para dentro do courses.module.ts
- Configurando quais são as colunas que serão mostradas com o `displayedColumns`
- Mockando um registro
____
## 07 - CSS do Material Table e Criando um Módulo App Material

- Criando um Módulo App Material que é compartilhado com a aplicação inteira
- tudo que foi criado dentro da pasta **shared** será compartilhado com a aplicação inteira, por isso a ideia de colocar um módulo compartilhado dentro dela, para ser acessado em todo o ambiente do app.
- Customizado a tabela para preencher 100% de largura de tela também
- foi inserido os componentes `<mat-card> <mat-card-content> <mat-toolbar>` na estilização da tabela 
____
