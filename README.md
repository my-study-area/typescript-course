# typescript-course
Mini-curso de TypeScript do Willian Justen

## Aula 03 - Instalando o compilador e escrevendo primeiro código - Mini-curso de Typescript

- instala o typescript localmente
```bash
npm install -g typescript
```
- compila o arquivo ts
```bash
tsc filename.ts
```
## 04. Criando e configurando TSconfig - Mini-curso de TypeScript
- cria o arquivo de configuração inicial
```bash
tsc --init
```
- monitora alterações typescript e compila automaticamente
```bash
tsc --watch
```

## 05. Types - Mini-curso de TypeScript
// boolean (true/false)
```typescript
let isOpen: boolean
isOpen = true
```

// string ('foo', "foo", `foo`)
```typescript
let message: string
message = `oo {$(isOpen)}`
```

// number (int, float, hex, binary)
```typescript
let total: number
total = 0xff0
```

//array (type[])
```typescript
let itens: string[]
itens = ["foo", "bar"]
```
```typescript
let values: Array<number>
values = [1, 2, 3]
```

// tuple
```typescript
let title: [number, string, string]
title = [1, "foo", "bar"]
```

// enum
```typescript
enum Colors {
    white = '#fff',
    black = '000'
}
```

//any (qualquer coisa) NÃO É LEGAL
```typescript
let coisa: any
coisa = [1]
```
// void
```typescript
function logger(): void {
    console.log('foo');
}
```

//null / undefined
```typescript
type Bla = string | undefined
```

// never
```typescript
function error(): never {
    throw new Error("error");
}
```
// object
```typescript
let cart: object
cart = {
    key: "fi"
}
```
## 06. Type Inference - Mini-curso de TypeScript

//Type Inference
```typescript
let message2 = "mensagem definida";
message2 = "string nova";

window.addEventListener("click", (e) => {
    console.log(e.target);
});
```

