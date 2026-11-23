## Tecnologias utilizadas

- Cypress
- JS
- Node e npm
- Mochawesome Report
- BDD/Gherkin para documentação dos casos de testes (pasta features)

## Extensões utilizadas no Visual Studio Code:

- Add only
- Cucumber (Gherkin) Full Support
- Cypress Snippets
- ESLint
- Material Icon Theme
- Prettier - Code formatter
- vscode-icons
- Cypress Snippets

## Relatório - Mochawesome

- Utiliza para gerar relatórios em HTML dos testes.

- O relatório é gerador a partir do comando:

    npx cypress run

- E após a execução, é enviado para a pasta e diretório:

    cypress/reports/html/index.html

- Para visualizar o relatório:

    - Localize o caminho dentro do projeto -> cypress/reports/html/index.html
    - Clique com o botão direito do mouse sobre o arquivo index.hmtl
    - Clique em "Copy bath".
    - Cole no navegador, na barra de endereços.

## Comandos do Cypress

- Para abrir a interface do Cypress, utilize:

    - npx cypress open

- Para executar pelo terminal:

    - npx cypress run

