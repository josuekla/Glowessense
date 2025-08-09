#Como rodar o servidor para o colocaborador ver em tempo real o desenvolvimento do site
### 1. Instale a extensão **Live Server** no VS Code.

- Abre seu HTML com botão direito > “**Open with Live Server**”
- Isso abre em `http://127.0.0.1:5500`

### 2. Instale o **LocalTunnel** (apenas 1 vez):

Abra o terminal e execute:

```bash

npm install -g localtunnel

```

### 3. Exponha sua porta:

Supondo que o Live Server está rodando na porta 5500:
```bash

lt --port 5500

```
