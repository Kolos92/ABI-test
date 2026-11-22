
# language: pt

Funcionalidade: Validação da API ServeRest

  @CT01 @GET
  Cenário: Consultar usuários cadastrados
    Dado que a API ServeRest está disponível
    Quando realizo uma requisição GET para "/usuarios"
    Então o status HTTP deve ser 200
    E a resposta deve conter a propriedade "quantidade"
    E a resposta deve conter uma lista de "usuarios"

  @CT02 @POST
  Cenário: Validar login com credenciais inválidas
    Dado que possuo credenciais inválidas
    Quando realizo uma requisição POST para "/login"
    Então o status HTTP deve ser 401
    E a mensagem deve ser "Email e/ou senha inválidos"

  @CT03 @POST
  Cenário: Validar cadastro com e-mail inválido
    Dado que possuo os dados para cadastrar um usuário
    E o e-mail informado possui formato inválido
    Quando realizo uma requisição POST para "/usuarios"
    Então o status HTTP deve ser 400
    E a resposta deve informar que o e-mail é inválido
