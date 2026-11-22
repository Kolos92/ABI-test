Funcionalidade: Cadastro de usuários no ServeRest

  @CT01
  Cenário: Cadastrar usuário administrador
    Dado que acesso a página inicial do ServeRest
    Quando preencho o cadastro com dados válidos e e-mail único
    E seleciono a opção de administrador
    E confirmo o cadastro
    Então o usuário deve ser cadastrado com sucesso

  @CT02
  Cenário: Validar e-mail inválido
    Dado que acesso a página de cadastro
    Quando informo um e-mail inválido
    E tento realizar o cadastro
    Então devo visualizar uma mensagem de e-mail inválido

  @CT03
  Cenário: Validar campos obrigatórios
    Dado que acesso a página de cadastro
    Quando tento cadastrar sem preencher os campos
    Então devo visualizar a mensagem "Nome é obrigatório"
    E devo visualizar a mensagem "Email é obrigatório"
    E devo visualizar a mensagem "Password é obrigatório"