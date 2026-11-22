/// <reference types="cypress" />

describe('Testes front-end ABI', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Valida criação de usuário adminstrador dinâmico', () => {
    const numero = (Math.random() * 1000000)
    const email = `${numero}@teste.com`

    cy.criandoUsuario('Teste', email ,'123');  
  });

  it('Verificando e-mail inválido', () => {
    cy.validaEmailInvalido();
  });

  it('Valida obrigatoriedade dos campos (Nome, E-mail, Senha)', () => {
    cy.validaObrigatoriedadeCadastro();
  })

  })
