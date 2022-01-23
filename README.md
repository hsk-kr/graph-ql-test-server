# GraphQL Test Server

It's been made with apollo-server for testing my toy projects that related to GraphQL.

There is no database. it uses in-memory as a data storage(Just an array).

## How To Run

### With Docker Compose

_This is not tested._

```properties
docker-compose up
```

### With nest

```properties
npm run dev
```

## GraphQL Data

### Types

```graphql
Todo {
    id: string
    content: string
    checked: boolean
}

DeleteTodoResponse {
    ok: boolean
    error?: string # It's in when there is an error
}
```

### Query

```graphql
Query {
    getTodos(): Todo[]
    findTodoById(id: string!): Todo
}
```

### Mutation

```graphql
Mutation {
    toggleTodo(id: string!): Todo | null
    createTodo(content: string!): Todo
    updateTodo(id: string!, content: string!): Todo | null
    deleteTodo(id: string!): DeleteTodoResponse
}
```

## Examples

```graphql
query {
  getTodos {
    id
    content
    checked
  }
}

query {
  findTodoById(id: "16429287848170") {
    id
  }
}

mutation {
  deleteTodo(id: "16429291537871") {
    ok
    error
  }
}

mutation {
  toggleTodo(id: "16429287848170") {
    id
    content
    checked
  }
}

mutation {
  updateTodo(id: "16429287848170", content: "test4") {
    id
    content
    checked
  }
}

mutation {
  ct1: createTodo(content: "test1") {
    id
  }

  ct2: createTodo(content: "test2") {
    id
  }

  ct3: createTodo(content: "test3") {
    id
  }
}
```
