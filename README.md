# DartLab Site Backend

## 1. Visão Geral

Esta API permite gerenciar membros, projetos, trabalhos de pesquisa e administradores de uma instituição acadêmica, incluindo suas associações e relacionamentos que irão ser servidas pro frontend da aplicação.

## 2. Entidades

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
- **categoria**: Nível de acesso/categoria // quero conversar sobre

---

## 3 Endpoints da API

### 3.1 Membros

#### 3.1.1 Criar Membro
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
  "id_equipes": "string[]"
}
```

#### 3.1.2 Listar Membros
```http
GET /membros
```
**Descrição:** Listar todos os membros

#### 3.1.3 Buscar Membro
```http
GET /membros/:id
```
**Descrição:** Buscar membro por ID

#### 3.1.4 Atualizar Membro
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
}
```

#### 3.1.5 Deletar Membro
```http
DELETE /membros/:id
```
**Descrição:** Deletar membro 

---

### 3.2 Equipe

#### 3.2.1 Criar Equipe
```http
POST /equipe
```
**Descrição:** Criar equipe

**Body:**
```json
{
  "nome": "string",
  "descricao": "string", // exemplo: Equipe de Análise e Dados
  "instagram": "string",
  "linkedin": "string"
}
```

#### 3.2.2 Vincular Membro À uma equipe
```http
POST /equipe/:id_equipe/:id_membro
```
**Descrição:** vincular usuário à uma equipe

#### 3.2.3 Atualizar Equipe
```http
PUT /equipe
```
**Descrição:** Editar informações de equipe

**Body:**
```json
{
  "nome": "string",
  "descricao": "string", // exemplo: Equipe de Análise e Dados
  "instagram": "string",
  "linkedin": "string"
}
```

#### 3.2.4 Desvincula Membro de uma equipe
```http
DELETE /equipe/:id_equipe/:id_membro
```
**Descrição:** desvincular usuário à uma equipe

#### 3.2.5 Buscar membros de uma equipe
```http
DELETE /equipe/:id/membros
```
**Descrição:** Buscar todos membros de uma equipe

### 3.3 Projetos

#### 3.3.1 Criar Projeto
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

#### 3.3.2 Listar Projetos
```http
GET /projetos
```
**Descrição:** Listar todos os projetos

#### 3.3.3 Buscar Projeto
```http
GET /projetos/:id
```
**Descrição:** Buscar projeto por ID

#### 3.3.4 Atualizar Projeto
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

#### 3.3.5 Deletar Projeto
```http
DELETE /projetos/:id
```
**Descrição:** Deletar projeto

---

### 3.4 Trabalhos (Pesquisas)

#### 3.4.1 Criar Trabalho
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

#### 3.4.2 Listar Trabalhos
```http
GET /trabalhos
```
**Descrição:** Listar todos os trabalhos

#### 3.4.3 Buscar Trabalho
```http
GET /trabalhos/:id
```
**Descrição:** Buscar trabalho por ID

#### 3.4.4 Atualizar Trabalho
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

#### 3.4.5 Deletar Trabalho
```http
DELETE /trabalhos/:id
```
**Descrição:** Deletar trabalho

---

### 3.5 Administradores

#### 3.5.1 Criar Admin
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

#### 3.5.2 Listar Admins
```http
GET /admins
```
**Descrição:** Listar todos os admins

#### 3.5.3 Buscar Admin
```http
GET /admins/:id
```
**Descrição:** Buscar admin por ID

#### 3.5.4 Atualizar Admin
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

#### 3.5.5 Deletar Admin
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
- Senhas devem seguir políticas de segurança adequadas [hash]
