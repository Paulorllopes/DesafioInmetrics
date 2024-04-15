Primeiro - eu executei o comando "npm install".

Segundo - eu executei o comando "npm install cypress".

Terceiro - executamos o comando "npm install cypress-cucumber-preprocessor".

Quarto - configuramos o arquivo "package.json" com as dependências e configuramos também o cucumber.

Quinto - configuramos os plugins "Cuke Step Definition Generator", "Feature Syntax Highlight and Snippets (Cucumber/Gherkin)" e "Material Icon Theme".

Sexto - executamos o comando "npx cypress open".

Sétimo - após o cypress abrir, clicar em "2E2 TESTING", "Continue", Selecionar o "Browser" e clicar em "Start E2E Testing in Chrome".

Oitavo - Selecione um dos modelos e clique em "create spec", verifique que dento da pasta "cypress" será criada a pasta "E2E" com o arquivo "spec.cy.js".

Nono - dento da pasta "E2E" criaremos as pastas "feature", "Pages", "steps" e "elements". 

Décimo - criamos uma classe elements, dentro delas mapearemos os elementos e os armazenaremos em um método, inserir o código "export default IncluirProdutoElements" para assinar uma clásula de exportação. posteriormente a classe page herdará os metodos com os elementos.

Décimo primeiro - Criamos a classe page com os métodos de interação com o site, importamos os elementos mapeados nas classe elements para que possamos interagir com eles.

Décimo segundo - Agora criaremos a classe feature com as modelagens dos cenários de teste escritos em "gherkin".

Décimo terceiro - Criaremos a classe steps, quando selecionarmos os steps escritos na feature, clicarmos com o botão direito do mouse e escolhermos a opção "generate step definition", os steps são criados e copiados para o "clip board", assim podemos colar os métodos de execução  na classe steps. os steps estarão salvos no "clip board. A classe steps deve herdar os métodos escritos nas classes pages. 

Décimo quarto - inserimos o código "///<reference types="cypress"/>" nas classes "steps", "pages" e elements. 

Décimo quinto - Devemos importar as classes "import IncluirProdutoElements from "../elements/incluir_produto_elements";"

Décimo sexto - devemos criar um objeto da classe que herdaremos os métodos da seguinte forma "const incluirProdutoElements = new IncluirProdutoElements"

 Décimo sétimo- Executo o projeto novamente e verfifique se existe alguma correção, essa estrutura pode ser usada como fundamento base para criar uma automação web em cypress. 















