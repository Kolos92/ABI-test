Cypress.Commands.add('loginUser1', () => {
  cy.get('[data-testid="email"]').type('hikola9040@kranove.com', { log: false }).as('Digitando e-mail')
  cy.get('[data-testid="senha"]').type('123', { log: false }).as('Digitando senha')
  cy.get('[data-testid="entrar"]').click().as('Clicando no botão "Entrar"')
});

Cypress.Commands.add('loginUser2', () => {
  cy.get('[data-testid="email"]').type('matheus_souto@live.com', { log: false }).as('Digitando e-mail')
  cy.get('[data-testid="senha"]').type('123', { log: false }).as('Digitando senha')
  cy.get('[data-testid="entrar"]').click().as('Clicando no botão "Entrar"')
});

Cypress.Commands.add('criandoUsuario', (nome, email, senha) => {
cy.get('[data-testid="cadastrar"]').click().as('Clicando botão "Cadastre-se"');
cy.get('[data-testid="nome"]').type(nome).as('Digitando nome');
cy.get('[data-testid="email"]').type(email).as('Digitando e-mail');
cy.get('[data-testid="password"]').type(senha, { log: false }).as('Digitando senha');
//cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.add('validaObrigatoriedadeCadastro', () => {
cy.get('[data-testid="cadastrar"]').click().as('Clicando botão "Cadastre-se"');
cy.get('[data-testid="cadastrar"]').click();
cy.get('div[class="alert alert-secondary alert-dismissible"]')
    .should('be.visible')
    .and('contain.text', 'Nome é obrigatório')
    .and('contain.text', 'Email é obrigatório')
    .and('contain.text', 'Password é obrigatório')
});











