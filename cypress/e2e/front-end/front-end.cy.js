/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Testes front-end ABI', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('[CT01] - Valida criação de usuário administrador dinâmico', () => {
    const email = faker.internet.email();

    cy.criandoUsuario('Teste', email ,'123');  
  });

  it('[CT02] - Valida e-mail inválido', () => {
    cy.validaEmailInvalido();
  });

  it('[CT03] - Valida obrigatoriedade dos campos (Nome, E-mail, Senha)', () => {
    cy.validaObrigatoriedadeCadastro();
  })

  })
