/// <reference types="cypress" />

describe('Testes back-end ABI', () => {

it('[CT01][GET] - Valida retorno rota de usuários', () => {
   cy.buscarUsuariosApi()
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade')
            expect(response.body).to.have.property('usuarios')
            expect(response.body.usuarios[0]).to.have.property('nome')   
    })
})
it('[CT02][POST] - Valida login com usuário inválido', () => {
    cy.validaUsuarioInvalido()
        .then((response) => {
           expect(response.status).to.eq(401)
           expect(response.body.message).to.eq('Email e/ou senha inválidos')
       })
});

it('[CT03][POST] - Valida e-mail com formato inválido', () => {
    cy.ValidaEmailInvalido()
        .then((response) => {
            expect(response.status).to.eq(400)
             expect(response.body.email).to.eq('email deve ser um email válido')
       })
})

});