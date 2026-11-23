/// <reference types="cypress" />

describe('Testes front-end ABI', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('[CT01] - Valida criação de usuário administrador dinâmico', () => {
    const numero = (Math.random() * 1000000)
    const email = `${numero}@teste.com`

    cy.criandoUsuario('Teste', 'teste'+email ,'123');  
  });

  it('[CT02] - Valida e-mail inválido', () => {
    cy.validaEmailInvalido();
  });

  it('[CT03] - Valida obrigatoriedade dos campos (Nome, E-mail, Senha)', () => {
    cy.validaObrigatoriedadeCadastro();
  })

  })
