/// <reference types="cypress" />

describe('Tela Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Criando novo usuário', () => {
    cy.criandoUsuario('Matheus','matheus_souto@live.com','123');
  });

  it.only('Valida obrigatoriedade dos campos (Nome, E-mail, Senha)', () => {
    cy.validaObrigatoriedadeCadastro();
  })

  })
