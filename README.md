

# Desafio Back-End da Olisaude

<div align="center">
<img src="https://img.shields.io/github/commit-activity/t/iamthepoe/desafio-backend-olisaude?style=for-the-badge"> <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/iamthepoe/desafio-backend-olisaude?style=for-the-badge"> <img alt="Repository size" src="https://img.shields.io/github/repo-size/etec-sa/frege?style=for-the-badge"> </div>

## 💻 Iniciando e configurando o projeto

### Requisitos

- [Node.js](https://nodejs.org/en/).
- [PNPM](https://pnpm.io/pt/), [NPM](https://www.npmjs.com/) ou semelhantes.

```bash
# Clone o repositório
git clone https://github.com/iamthepoe/desafio-backend-olisaude && cd desafio-backend-olisaude/
# Crie o arquivo .env
cp .env.example .env
# Instale as dependências
pnpm install

# Crie o banco de dados e execute o semeamento
npx prisma migrate deploy && npx prisma db seed

# Rode o projeto na porta 3000 =)
pnpm run start:dev
```
## 👀 Documentação
O projeto utiliza Swagger para criar uma documentação automática. Para ler a documentação e testar os endpoints, basta acessar a rota `/api`:

<div align="center">
	<img src="https://raw.githubusercontent.com/iamthepoe/desafio-backend-olisaude/main/public/swagger.png" alt="Documentação com Swagger"/>
</div>

## 🚀 Tecnologias

As principais tecnologias utilizadas foram:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [SQLite](https://www.sqlite.org)
- [PrismaORM](https://prisma.io)


