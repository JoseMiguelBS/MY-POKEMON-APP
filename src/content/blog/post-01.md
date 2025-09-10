---
title: Explorando Async/Await en JavaScript
date: 2023-06-01
description: Comprendiendo cómo funcionan Async y Await para manejar código asíncrono en JavaScript.
author: Jane Doe
image: '/assets/images/post-01.png'
tags: [JavaScript, Async, Await, Programming]
---

# Explorando Async/Await en JavaScript

<!-- Mostrar imagen -->
<img src="/assets/images/post-01.png" width="350" alt="Explorando Async/Await en JavaScript" />

El manejo de operaciones asíncronas en JavaScript puede ser complicado. Con ES8 se introdujo `async` y `await`, que permiten escribir código asíncrono de una manera más clara y fácil de leer.

## ¿Qué es Async?

Una función declarada con `async` devuelve automáticamente una *Promise*. Esto significa que siempre devolverá un valor resuelto o rechazado.

### Ejemplo

```javascript
async function greet() {
  return "Hola, mundo!";
}

greet().then(console.log); // Output: Hola, mundo!
