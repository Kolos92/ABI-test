
Cypress.Commands.add('criandoUsuario', (nome, email, senha) => {
cy.get('[data-testid="cadastrar"]').click().as('Clicando botão "Cadastre-se"');
cy.get('[data-testid="nome"]').type(nome).as('Digitando nome');
cy.get('[data-testid="email"]').type(email).as('Digitando e-mail');
cy.get('[data-testid="password"]').type(senha, { log: false }).as('Digitando senha');
cy.get('[data-testid="checkbox"]').click().as('Selecionando checkbox do administrador');
cy.get('[data-testid="cadastrar"]').click();
cy.contains('Cadastro realizado com sucesso')
    .should('be.visible');
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

Cypress.Commands.add('validaEmailInvalido', () => {
  cy.get('[data-testid="email"]').type('invalidoinvalido@live.com').as('Digitando e-mail inválido')
  cy.get('[data-testid="senha"]').type('123', { log: false }).as('Digitando senha')
  cy.get('[data-testid="entrar"]').click().as('Clicando no botão "Entrar"')
  cy.get('div[class="alert alert-secondary alert-dismissible"]')
    .should('be.visible')
    .and('contain.text', 'Email e/ou senha inválidos')
});

Cypress.Commands.add('buscarUsuariosApi', () => {
  return cy.request({
    method: 'GET',
    url: 'https://serverest.dev/usuarios'
  })
})

Cypress.Commands.add('validaUsuarioInvalido', () => {
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    body: {
        email: 'testetesteteste@teste.com',
        password: 'testestest000'
    },
    failOnStatusCode: false
  })
})

Cypress.Commands.add('ValidaEmailInvalido', () => {
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/usuarios',
    body: {
        email: 'teste.com',
    },
    failOnStatusCode: false
  })
})







