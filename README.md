# Sistema de Chama Senha

## Sobre o Projeto

Este projeto implementa um sistema simples de "Chama Senha", com uma interface web responsiva e funcionalidades de autenticação para garantir acesso restrito. Foi desenvolvido utilizando HTML, CSS e JavaScript, com ênfase em responsividade e boa experiência do usuário.

## Funcionalidades

1. **Painel de Chama Senha**
   - Exibe a senha atual chamada.
   - Lista as últimas senhas chamadas.
   - Campo para entrada de nova senha.
   - Botão para limpar os dados exibidos.

2. **Autenticação de Usuário**
   - Tela de login para autenticar o usuário.
   - Acesso ao painel restrito a usuários autenticados.
   - Botão "Deslogar" para retornar à tela de login.

3. **Interface Responsiva**
   - Design adaptado para diferentes tamanhos de tela.
   - Uso de Flexbox e media queries para garantir uma experiência consistente em dispositivos móveis e desktops.

## Estrutura do Projeto

```
chama-senha/
├── index.html          # Tela de Login
├── API                 # pasta da API de senhas
│   ├── cliente.php     
│   ├── login.php       # arquivo de login do backend que busca no db.php os dados de conexão
│   ├── db.php          # arquivo que contem os dados de conexão com o banco de dados
│   ├── senhas.jason    # arquivo vazio          
│   ├── senhas.php          
│   └── usuarios.php          
├── cliente/            # Pasta para o painel do cliente final
│   ├── cliente.html    # Página do painel do cliente
│   ├── cliente.js      # Lógica do painel do cliente
│   └── styles_cliente.css # Estilos do painel do cliente
├── css/                # Pasta com estilos
│   ├── login.css       # Estilos da página de login
│   └── styles.css      # Estilos globais do sistema
├── home/               # Pasta do painel de senhas
│   └── index.html      # Página inicial do painel de senhas
├── img/                # Pasta com imagens
│   └── logo.png        # Logo do sistema
├── js/                 # Pasta com scripts
│   ├── login.js        # Lógica da autenticação
│   └── script.js       # Lógica do sistema de senhas
└── README.md           # Documentação do projeto
```

### Detalhes dos Arquivos

- **index.html**: Página inicial para login.
- **cliente/cliente.html**: Página do painel do cliente final.
- **cliente/cliente.js**: Script com a lógica do painel do cliente.
- **cliente/styles_cliente.css**: Estilos específicos para o painel do cliente.
- **css/login.css**: Estilos aplicados à tela de login.
- **css/styles.css**: Estilos globais para o sistema.
- **home/index.html**: Página principal do painel de senhas.
- **img/logo.png**: Imagem utilizada como logo do sistema.
- **js/login.js**: Script para validação de login.
- **js/script.js**: Lógica do painel de senhas.

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com//Paulo-Lisboa/chama-senha.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd chama-senha
   ```
3. Abra o arquivo `index.html` para acessar a tela de login e iniciar o sistema.

## Estilo e Responsividade

### Estilos Globais

```css
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
```

### Estilos Responsivos

Utilizamos media queries para dispositivos com largura de até 768px:

```css
@media (max-width: 768px) {
    .container {
        width: 90%;
        max-width: 400px;
        text-align: center;
    }
    .input-senha {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .input-senha input, .input-senha button {
        width: 100%;
        max-width: 300px;
    }
}
```

### Uso de Flexbox

O Flexbox foi utilizado para alinhar elementos de forma responsiva e organizada:

```css
.input-senha {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
```

## Configuração do Sistema

1. **Tela de Login**
   - A página `index.html` serve como a tela de login.
   - Utilize JavaScript para validar o usuário e senha, comparando com dados armazenados localmente ou em um banco de dados.

2. **Integração com Banco de Dados (opcional)**
   - Configure um banco de dados MySQL para armazenar os usuários e senhas.
   - Implemente requisições AJAX ou um backend para autenticação.

## Melhorias Futuras

- Implementar backend para gerenciamento de usuários e senhas.
- Adicionar suporte a vários níveis de acesso (admin e usuário comum).
- Salvar histórico de senhas chamadas no banco de dados.
- Introduzir temas claros e escuros.
- Adicionar animações para transições suaves.

## Contribuições

Contribuições são bem-vindas! Por favor, envie um pull request com suas melhorias ou abra uma issue para discussão.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
