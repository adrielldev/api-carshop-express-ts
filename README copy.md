# m6 capstone
Uma aplicação para anuncio de veiculos e leilões.

# ROTAS

## Anuncios

### POST – /announces
Responsável por cadastrar um novo anuncio, nescessario login.

**Requisitos**: 
  - Autenticação: O usuário precisa estar autenticado para poder criar um anuncio. Não é nescessaria autenticação para visualizar os anuncios.

Os dados solicitados pela API são:

    {
   	"announceType": "VENDA OU LEILÃO",
    "title": "celtinha",
	"year": "2002",
	"mileage": 212.12, 
	"price": 8000.00,
	"description": "rodado, mas conservado ",
	"vehicleType": "CARRO OU MOTO",
    }
   
**Retornos:**

    {
    "id": "uuid",
    "announceType": "VENDA OU LEILÃO",
    "title": "celtinha",
    "year": "2002",
    "mileage": 212.12, 
    "price": 8000.00,
    "description": "rodado, mas conservado ",
    "vehicleType": "CARRO OU MOTO",
    "createdAt": "10/10/2022",
    "updatedAt": "10/10/2022",
    "author": User
    }

| Status | Mensagem | Descrição |
|--|--|--|
|201 |Sucesso |Registro com sucesso. |
|401 |Falha na requisição |Falta algum dado na requisição. |
|403 |Não autorizado |Verifique tipo de conta ou Token. |
|500 |Erro interno |Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos ou aciono o nosso suporte. | 



### GET – /announces
Rota responsável por listar todos os anuncios. 

**Requisitos:**
- nenhum.
  
**Retornos:**

    {
    "id": "uuid",
    "announceType": "VENDA OU LEILÃO",
    "title": "celtinha",
    "year": "2002",
    "mileage": 212.12, 
    "price": 8000.00,
    "description": "rodado, mas conservado ",
    "vehicleType": "CARRO OU MOTO",
    "createdAt": "10/10/2022",
    "updatedAt": "10/10/2022",
    "author": {
        User.name
        }
    }

### POST – /announces/:id 
Rota responsável por permitir o envio de um comentario para um anuncio com base no ID.

**Requisitos:**
- autenticação/login

**Os dados solicitados da API**

    {
    "content:"comentarios sobre o anuncio",
    }

**Retornos**

    {
    "id":uuid,
    "author":User,
    "content":"comentarios sobre o anuncio",
    "createdAt":"10/10/2022"
    }

### GET – /announces/:id 
Rota responsável por listas um anuncio especifico com base no ID, exibindo tambem os comentarios relacionados ao anuncio.

**Requisitos:**
- nenhuma

**Retornos**

    {
    "id": "uuid",
    "announceType": "VENDA OU LEILÃO",
    "title": "celtinha",
    "year": "2002",
    "mileage": 212.12, 
    "price": 8000.00,
    "description": "rodado, mas conservado ",
    "vehicleType": "CARRO OU MOTO",
    "createdAt": "10/10/2022",
    "updatedAt": "10/10/2022",
    "author": {
        User.name
        }
    "comments": [
            {
            "author":{
                user.name
                },
            "content:"comentarios sobre o anuncio",
            "createdAt":"10/10/2022"
            }
        ]
    }
