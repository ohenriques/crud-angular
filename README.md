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

---

<div align="center">

# Logs ✍🏻

</div>

## 1 - Criei a aplicação com o `ng new crud-angular`, estou usando scss, adicionei roteamento, incluí o angular material com `ng add @angular/material`

- Dentro do `app.component.html` coloquei um componente do material design.
- Dentro do `app.module.ts` adicionei o `import { MatToolbarModule } from '@angular/material/toolbar';`
- Logo em seguida adicionei dentro dos imports o `MatToolbarModule`

---

## 2 - criei um módulo antes de criar um componente com `ng g m courses --routing`

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

---

## 06 - Criando Material Table para Listar Cursos

- indo no Angular Material e utilizando o `import {MatTableModule} from '@angular/material/table';`
- Criando uma interface
- `ng g interface courses/model/course` que será utilizada apena em tempo de desenvolvimento
- Não deve-se esquecer de importar o MatTableModule para dentro do courses.module.ts
- Configurando quais são as colunas que serão mostradas com o `displayedColumns`
- Mockando um registro

---

## 07 - CSS do Material Table e Criando um Módulo App Material

- Criando um Módulo App Material que é compartilhado com a aplicação inteira
- tudo que foi criado dentro da pasta **shared** será compartilhado com a aplicação inteira, por isso a ideia de colocar um módulo compartilhado dentro dela, para ser acessado em todo o ambiente do app.
- Customizado a tabela para preencher 100% de largura de tela também
- foi inserido os componentes `<mat-card> <mat-card-content> <mat-toolbar>` na estilização da tabela

---

## 08 - Criando um Service no Angular

- `ng g s courses/services/courses`
- É utilizado injeção de dependencia quando pegamos o service e injetamento dentro do contrutor o courses.component.ts

---

## 09 - Chamada HTTP Get no Angular e RXJS

- Criando uma arquvio dentro de assets apenas para mockar uma chamada http, após desenvolver o backend será excluido esse arquivo.
- o `pipe` é utilizado para manipular uma informação depois de realizar um get.
- devemos evitar de fazer um `subscribe`e deixar o Angular mesmo decidir
- utilizando o `take(1)`após você receber todas as informações você fecha a conexão com a origem.
- `first()` é utilizado para obter a primeira resposta do servidor assim que bater no endpoing.

---

## 10 - Lista de Cursos: Spinner (Carregando)

- Adicionando o `<mat-spinner></mat-spinner>` para colocar o spinner e adicionando o `MatProgressSpinnerModule` no shared para ser compartilhado com a aplicação.
- envolve-se o courses.component.html dentro de uma div, para que seja incluido um `ng-if` para verificar se foi carregado, caso não é mostrado o spinner
- o `| async` automaticamente se incrive no observable. Porém como estou utilizando o `first()`ele já realiza o unsubscribe automaticamente
- ao colocar um sinal de dolar[$] no nome de uma variável, automaticamente estamos falando que aquela variável é um observable.
- Colocando um ; dentro do ngIf é a mesma coisa de implementar um Else e nesse caso coloca-se o `else loagin' o loading pode ser qualquer nome.
- Após isso, colocamos o `ng-template` para ser executado apenas caso seja falso.
- no service foi colocado um `delay(2000)` para simular realmente um delay na resposta da chamada a API.
- Centralizando o spinner com **SCSS**

---

## 11 - Lista de Cursos: Tratamento de Erros e MatDialog

- Em pop-ups de erros pode usar um `snackbar` ou um `dialog`
- Criando um módulo para o diretório de _shared_ `ng g m shared`
- Criando um componente para o pop-up de error dentro do diretório _shared_ para ser compartilhado com toda a aplicação `ng g c shared/components/error-dialog`
- Como não havia sido importado dentro de _courses.module_ antes, ai foi realizado o import do **SharedModule**.
- Em **courses.component.ts** foi realizada a implementação de um método `onError` que recebe uma mensagem como string e abre o componente dialog. [Dialog Doc.](https://material.angular.io/components/dialog/overview).
- Quando colocado o pipe após a chamada do método dentro do **courses.component.ts** ele junto com o catchError consegue retornar um _observable_ para que caso de algum erro na aplicação e retorne um objeto vazio ele sobe o meu pop-up de error.
- Adiciono dentro de **app-material.module** _MatDialogModule_ e _MatButtonModule_ para melhor organização.

---

## 12 - Lista de Cursos: Pipe para mostrar ícone

- Inserindo um icone é necesário utilizar o `import {MatIconModule} from '@angular/material/icon' `
- _pipe_ = dado um valor eu vou ter uma lógica e eu vou retornar esse valor transformado.
- O _pipe_ será criado dentro do diretório **categoria** simplesmente pois pode ser utilizado em outro local.
- para gerar um pipe com o Angular CLI ⬇:
  ng g pipe shared/pipes/category
- [+ icons](https://fonts.google.com/icons?hl=pt-br)
- adicionando o `CategoryPipe` dentro do `shared.module.ts` para que ele possa ser acessado dentro do `courses.component.ts`
- adicionando o componente de **Icon** dentro do **AppMaterialModule**.
- Criando um pipe e com o **switch case** é realizado uma verificação onde ele recebe o dado e trata e devolve para o **courses.component.html** dentro do `mat-icon` é enviado os dados para o **pipe**.

___
## 16 - Banco de Dados H2 e Conectando o Angular na API Spring | **CORS ERROR**
- Chamadas entre dominios diferentes (api + angular) demandam de uma configuração para que o Angular possa acessar a api sem que haja problema de **cors**
- Correção: criar um arquivo na raiz do projeto chamado `proxy.conf.js`
- no `package.json` editar o ng start para `"start": "ng serve --proxy-config proxy.conf.js ",`
- Após criar o arquivo é necessario que seja da seguinte forma

      const PROXY_CONFIG = [
        {
          context:['/api'],
          target: 'http://localhost:8080/',
          secure:false,
          logLevel: 'debug'
        }
      ];

      module.exports = PROXY_CONFIG

- Atualizar a API no arquivo de serviços `private readonly API = 'api/courses';`
- Desta maneira sempre que eu colocar no Angular um path com o inicio **api**/anything ele irá me redirecionar para `'http://localhost:8080/'`


___
## 18 - Componente de Formulário e Roteamento para criar cursos

- Usar a diretivad o Angular Material `Mat-Header-Cell` onde é possivel configurar como a gente quer a própria coluna
- Sempre adicionar o cabeçalho e o corpo ` <mat-cell *matCellDef="let course">`
- Criando um novo componente para editar um curso `ng g c courses/course-form`
- Adicionando um método de click quando clicado ele redireciona para uma outra página a maneira de fazer esse redirecionamento é da sequinte forma: 

      onAdd() { 
        this.router.navigate(['new'], { relativeTo: this.route });
      }

- onde o **new** representea o path para onde eu quero ir.
- o `RelativeTo` para indicar que eu quero pegar a rota atual onde eu to e inserir o parametro anterior depois.
- Não esquecer de adicionar no construtor as seguintes propriedades
      
      private router: Router,
      private route: ActivatedRoute

- realizei também a declaração do **path** no *courses-routing.module.ts*.

___ 

