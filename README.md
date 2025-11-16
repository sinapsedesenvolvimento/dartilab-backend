# DartLab Site Backend

## Visão Geral

Esta API permite gerenciar membros, projetos, trabalhos de pesquisa e administradores de uma instituição acadêmica, incluindo suas associações e relacionamentos que irão ser servidas pro frontend da aplicação.

## Entidades

### Campos por Entidade

#### Membro
- **id**: Identificador único
- **nome**: Nome completo
- **email**: Endereço de e-mail
- **lattes**: Link para currículo Lattes
- **foto**: URL da foto de perfil
- **linkedin**: Perfil do LinkedIn
- **descricao**: Descrição/biografia
- **equipe**: Equipe(s) [Sinapse, ...]

#### Projeto
- **id**: Identificador único
- **titulo**: Título do projeto
- **descricao**: Descrição detalhada
- **foto**: Imagem do projeto
- **data_inicio**: Data de início
- **status**: Status atual do projeto

#### Trabalho (Pesquisa)
- **id**: Identificador único
- **titulo**: Título do trabalho
- **descricao**: Resumo/descrição
- **data_publicacao**: Data de publicação
- **status**: Status da pesquisa
- **categoria**: Categoria/área de pesquisa
- **foto**: Imagem ilustrativa

#### Admin
- **id**: Identificador único
- **nome**: Nome completo
- **email**: E-mail de acesso
- **senha**: Senha de acesso
- **categoria**: Nível de acesso/categoria

#### Relacionamentos N:N
- **Membro_projeto**: Associação entre membros e projetos
  - id_membro, id_projeto
  - Campos opcionais: papel, data_entrada
  
- **Membro_pesquisa**: Associação entre membros e pesquisas
  - id_membro, id_pesquisa
  - Campos opcionais: papel, data_entrada

---

## Endpoints da API

### Membros

#### Criar Membro
```http
POST /membros
```
**Descrição:** Criar novo membro

**Body:**
```json
{
  "nome": "string",
  "email": "string",
  "lattes": "string",
  "foto": "string",
  "linkedin": "string",
  "descricao": "string",
  "equipe": "string"
}
```

#### Listar Membros
```http
GET /membros
```
**Descrição:** Listar todos os membros

#### Buscar Membro
```http
GET /membros/:id
```
**Descrição:** Buscar membro por ID

#### Atualizar Membro
```http
PUT /membros/:id
```
**Descrição:** Atualizar membro existente

**Body:**
```json
{
  "nome": "string",
  "email": "string",
  "lattes": "string",
  "foto": "string",
  "linkedin": "string",
  "descricao": "string",
  "equipe": "string"
}
```

#### Deletar Membro
```http
DELETE /membros/:id
```
**Descrição:** Deletar membro

---

### Projetos

#### Criar Projeto
```http
POST /projetos
```
**Descrição:** Criar novo projeto

**Body:**
```json
{
  "titulo": "string",
  "descricao": "string",
  "foto": "string",
  "data_inicio": "string",
  "status": "string"
}
```

#### Listar Projetos
```http
GET /projetos
```
**Descrição:** Listar todos os projetos

#### Buscar Projeto
```http
GET /projetos/:id
```
**Descrição:** Buscar projeto por ID

#### Atualizar Projeto
```http
PUT /projetos/:id
```
**Descrição:** Atualizar projeto existente

**Body:**
```json
{
  "titulo": "string",
  "descricao": "string",
  "foto": "string",
  "data_inicio": "string",
  "status": "string"
}
```

#### Deletar Projeto
```http
DELETE /projetos/:id
```
**Descrição:** Deletar projeto

---

### Trabalhos (Pesquisas)

#### Criar Trabalho
```http
POST /trabalhos
```
**Descrição:** Criar novo trabalho/pesquisa

**Body:**
```json
{
  "titulo": "string",
  "descricao": "string",
  "data_publicacao": "string",
  "status": "string",
  "categoria": "string",
  "foto": "string"
}
```

#### Listar Trabalhos
```http
GET /trabalhos
```
**Descrição:** Listar todos os trabalhos

#### Buscar Trabalho
```http
GET /trabalhos/:id
```
**Descrição:** Buscar trabalho por ID

#### Atualizar Trabalho
```http
PUT /trabalhos/:id
```
**Descrição:** Atualizar trabalho existente

**Body:**
```json
{
  "titulo": "string",
  "descricao": "string",
  "data_publicacao": "string",
  "status": "string",
  "categoria": "string",
  "foto": "string"
}
```

#### Deletar Trabalho
```http
DELETE /trabalhos/:id
```
**Descrição:** Deletar trabalho

---

### Administradores

#### Criar Admin
```http
POST /admins
```
**Descrição:** Criar novo admin

**Body:**
```json
{
  "nome": "string",
  "email": "string",
  "senha": "string",
  "categoria": "string"
}
```

#### Listar Admins
```http
GET /admins
```
**Descrição:** Listar todos os admins

#### Buscar Admin
```http
GET /admins/:id
```
**Descrição:** Buscar admin por ID

#### Atualizar Admin
```http
PUT /admins/:id
```
**Descrição:** Atualizar admin existente

**Body:**
```json
{
  "nome": "string",
  "email": "string",
  "senha": "string",
  "categoria": "string"
}
```

#### Deletar Admin
```http
DELETE /admins/:id
```
**Descrição:** Deletar admin

---

### Associações Membro-Projeto

#### Associar Membro a Projeto
```http
POST /membros-projetos
```
**Descrição:** Associar membro a projeto

**Body:**
```json
{
  "id_membro": "integer",
  "id_projeto": "integer",
  "papel": "string (opcional)",
  "data_entrada": "string (opcional)"
}
```

#### Listar Associações
```http
GET /membros-projetos
```
**Descrição:** Listar todas as associações membro-projeto

#### Buscar Associação
```http
GET /membros-projetos/:id_membro/:id_projeto
```
**Descrição:** Buscar associação específica

#### Atualizar Associação
```http
PUT /membros-projetos/:id_membro/:id_projeto
```
**Descrição:** Atualizar associação existente

**Body:**
```json
{
  "papel": "string (opcional)",
  "data_entrada": "string (opcional)"
}
```

#### Remover Associação
```http
DELETE /membros-projetos/:id_membro/:id_projeto
```
**Descrição:** Remover associação

---

### Associações Membro-Pesquisa

#### Associar Membro a Pesquisa
```http
POST /membros-pesquisas
```
**Descrição:** Associar membro a pesquisa

**Body:**
```json
{
  "id_membro": "integer",
  "id_pesquisa": "integer",
  "papel": "string (opcional)",
  "data_entrada": "string (opcional)"
}
```

#### Listar Associações
```http
GET /membros-pesquisas
```
**Descrição:** Listar todas as associações membro-pesquisa

#### Buscar Associação
```http
GET /membros-pesquisas/:id_membro/:id_pesquisa
```
**Descrição:** Buscar associação específica

#### Atualizar Associação
```http
PUT /membros-pesquisas/:id_membro/:id_pesquisa
```
**Descrição:** Atualizar associação existente

**Body:**
```json
{
  "papel": "string (opcional)",
  "data_entrada": "string (opcional)"
}
```

#### Remover Associação
```http
DELETE /membros-pesquisas/:id_membro/:id_pesquisa
```
**Descrição:** Remover associação

---

## Consultas Especiais

### Relacionamentos
```http
GET /membros/:id/projetos
```
**Descrição:** Listar projetos de um membro específico

```http
GET /projetos/:id/membros
```
**Descrição:** Listar membros de um projeto específico

```http
GET /membros/:id/trabalhos
```
**Descrição:** Listar trabalhos/pesquisas de um membro específico

```http
GET /trabalhos/:id/membros
```
**Descrição:** Listar membros de um trabalho/pesquisa específico

---

##  Notas

- Todos os IDs são números inteiros únicos
- Campos marcados como "opcional" podem ser omitidos nas requisições
- Datas devem seguir formato ISO 8601 (YYYY-MM-DD)
- URLs de fotos devem ser válidas e acessíveis
- Senhas devem seguir políticas de segurança adequadas
