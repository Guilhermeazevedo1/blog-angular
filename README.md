# Blog em Angular

Este é um pequeno projeto de blog desenvolvido em Angular para fins de aprendizado.

## Tecnologias Utilizadas
- Angular
- TypeScript
- HTML
- CSS

## Estrutura do Projeto
O blog possui os seguintes componentes:
- `app-menu-bar`: Barra de menu superior.
- `app-menu-title`: Título da seção.
- `app-big-card`: Cartão principal com o artigo em destaque.
- `app-small-card`: Cartões menores para outros artigos.

## Lógica Implementada
Para criar os textos e imagens exibidos no blog, utilizei a parte lógica do Angular, aplicando conceitos como:

- **Binding de Dados**: Uso da interpolação (`{{ title }}`) para exibir dinamicamente o título do blog.
- **Inputs (@Input)**: Implementado no `MenuTitleComponent` para receber valores dinâmicos, como o título da seção.
- **Componentização**: Separação da estrutura do blog em componentes reutilizáveis, como `app-big-card` e `app-small-card`.
- **Passagem de Propriedades**: Utilizada no `app-big-card`, onde as informações como `photoCover`, `cardTitle` e `cardDescription` são passadas dinamicamente via propriedades do componente.
- **Templates HTML Dinâmicos**: Os componentes utilizam templates dinâmicos para exibir os dados de forma organizada e reutilizável.

### Exemplo de Código
#### Estrutura HTML Principal
```html
<header>
    <app-menu-bar></app-menu-bar>
</header>
<app-menu-title title="Valorant News"></app-menu-title>

<div class="container_articles">
    <div class="article_main">
        <app-big-card 
            photoCover="https://static.valorantzone.gg/news/2025/01/13173426/Aspas-MIBR-2.jpg"
            cardTitle="ASPAS CHEGA AO MIBR PARA 2025"
            cardDescription="O MIBR oficializou a reformulação no elenco de Valorant, com Erick 'aspas' como principal contratação para a temporada 2025. Campeão mundial com a LOUD em 2022 e com passagem pela latino-americana Leviatán neste ano, aspas volta a trabalhar com o treinador norte-americano Daniel 'fRoD'.">
        </app-big-card>
    </div>
</div>
```

#### Exemplo de Componente Angular (`MenuTitleComponent`)
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css'
})
export class MenuTitleComponent {
  @Input() title: string = "";
}
```

#### Template HTML do `MenuTitleComponent`
```html
<div class="menu_title_container">
    <hr>
    <h1>{{ title }}</h1>
    <hr>
</div>
```

## Como Rodar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-projeto
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Rode o projeto:
   ```sh
   ng serve
   ```
5. Acesse no navegador: `http://localhost:4200`

## Melhorias Futuras
- Implementar sistema de comentários.
- Adicionar API para gerenciamento de artigos.
- Melhorar o design e responsividade.

## Autor
Desenvolvido por [Seu Nome](https://github.com/seu-usuario).

