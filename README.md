 Educação Financeira – Projeto de Extensão

Este projeto faz parte da ação de extensão **Educação Financeira Prática para Jovens Adultos**, e integra desenvolvimento web, modelagem de banco de dados com SQLite e controle de versão com Git/GitHub.

## 💡 Objetivo

Oferecer uma aplicação educativa que ajude jovens a organizar suas finanças pessoais, registrar metas e gastos com uma interface simples e prática.

---

## 🧰 Tecnologias utilizadas

- HTML, CSS e JS
- [Vite](https://vitejs.dev) como framework web
- SQLite (banco de dados leve e local)
- Git e GitHub para versionamento

---

## 🗃️ Estrutura do Banco de Dados (SQLite)

- **usuarios** (id, nome, email)
- **metas** (id, usuario_id, titulo, valor_meta)
- **gastos** (id, usuario_id, descricao, valor, data)

**Diagrama ER:**
![Diagrama ER]()
![image](https://github.com/user-attachments/assets/c47ee947-4ac9-41de-841b-12cfa54d1fbf)

---

## 🚀 Como rodar o projeto localmente

> Pré-requisitos:
> - Node.js e npm instalados
> - VS Code com extensão SQLite Viewer (opcional)

1. Clone o repositório:
git clone https://github.com/freezepopx/educacao-financeira.git

cd educacao-financeira

2. Instale as dependências do projeto web:
npm install

3. Rode a aplicação localmente:
npm run dev

4. Abra http://localhost:5173 no navegador.

🗄️ Acessar banco de dados (SQLite)
Abra o VS Code com o projeto.

Clique no ícone do SQLite Explorer (barra lateral).

Clique em Add Connection, escolha banco.sqlite.

Navegue pelas tabelas e faça consultas.

✅ Funcionalidades (parcial)
 Cadastro de usuários fictícios

 Registro de metas e gastos

 Integração com frontend (em desenvolvimento)

📦 Repositório
Link: https://github.com/freezepopx/educacao-financeira

📚 Créditos e Referências
Date, C.J. – Introdução a Sistemas de Banco de Dados

Chacon, Scott – Pro Git

SQLite – https://www.sqlite.org

GitHub Docs – https://docs.github.com
