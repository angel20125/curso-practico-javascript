# Capítulo I: Antes de empezar

## 2. Prueba de JavaScript

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

#### - ¿Qué es una variable y para qué sirve?

Una variable es un espacio de memoria reservado para guardar datos o estructura de datos , esto datos por lo general están asociados a un tipo de dato, este tipo de datos pueden ser: numéricos, booleanos, cadenas de texto. En el caso de la estructura de datos están: array, matriz, objetos, entre otros. Estos tipos de datos en javascript no se deben indicar para crear una variable, ya que javascript es un lenguaje débilmente tipado.
Las variables sirven para guardar datos y también para realizar operaciones sobre esos datos y así convertirlo en información útil para el usuario.

#### - ¿Cuál es la diferencia entre declarar e inicializar una variable?

La diferencia es que cuando se declara una variable solo se reserva un espacio en memoria ram y al no indicar su valor inicial javascript asigna `undefined`. Cuando inicializamos una variable le indicamos el valor inicial que tendrá esa variable. Las variables se pueden declarar con let, const, var.

Ejemplo

```javascript
// Declaración sin inicializar

// variable
let nombre;
// array
let elementos = [];
// objeto
let persona = {};

// Declaración e inicialización:

//variable
let nombre = 'Angel';
// array
let elementos = ['Computadora', 'Celular'];
// objeto
let persona = {
	nombre: 'Sikney',
	edad: 9,
};
```

#### - ¿Cuál es la diferencia entre sumar números y concatenar strings?

A pesar de que se usa el mismo operador la diferencia es:
concatenar consiste en tomar n cantidad de string separados y juntarlos como uno solo
mientras que sumar consiste en el proceso de adicionarle a una cantidad otra cantidad más.

```javascript
//Concatenación de string
let string_a = 'hola';
let string_b = 'mundo🎉';
let result_concat = string_a + ' ' + string_b;

// resultado: hola mundo🎉
console.log(`${result_concat}`);
```

```javascript
//Concatenación de string
let value_a = 5;
let value_b = 10;
let result_sum = value_a + value_b;
console.log(`El resultado de la suma es : ${result_sum}`);
```

#### - ¿Cuál operador me permite sumar o concatenar?

El operador de suma: `+`

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

-   Nombre
-   Apellido
-   Nombre de usuario en Platzi
-   Edad
-   Correo electrónico
-   Mayor de edad
-   Dinero ahorrado
-   Deudas

| nombre de variable                 | tipo de dato                     |
| ---------------------------------- | -------------------------------- |
| `let fristName = 'Feber'`          | cadena (string)                  |
| `let lastName = 'Parra'`           | cadena (string)                  |
| `let user = '@feber'`              | cadena (string)                  |
| `let age = 25`                     | numérico entero (number)         |
| `let mail = 'feberlinda@mail.com'` | cadena (string)                  |
| `let adult = true`                 | booleano (boolean)               |
| `let saved_money= 200.3`           | numérico punto flotante (number) |
| `let deudas = 180.3`               | numérico punto flotante (number) |

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```javascript
let firstName = 'Feber'; //  cadena (string)
let lastName = 'Parra'; //  cadena (string)
let user = '@feber'; //  cadena (string)
let age = 25; //  numérico entero (number)
let mail = 'feberlinda@mail.com'; //  cadena (string)
let adult = true; //  booleano (boolean)
let saved_money = 200.3; //  numérico punto flotante (number)
let debt = 180.3; //  numérico punto flotante (number)
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

#### - Nombre completo (nombre y apellido)

```javascript
let fristName = 'Feber';
let lastName = 'Parra';
let fullName = fristName + ' ' + lastName;
console.log(`Nombre Completo es: ${fullName}`);
```

#### - Dinero real (dinero ahorrado menos deudas)

```javascript
let saved_money = 200.3;
let debt = 180.3;
let balance = saved_money - debt;
console.log(`El saldo total  es: ${balance}`);
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

-   ¿Qué es una función?
    Las funciones son como un conjunto de sentencias para realizar ciertas tareas o acciones y en ellas se puede hacer el uso de las variables

#### - Tipos de Funciones

##### Funciones Declarativas

Las funciones declarativas son aquellas que expresamente se declara con la palabra reservada `funtion` seguida el del nombre y sus parámetros.

Sintaxis funciones declarativas

```javascript
function [name]([param1, param2, ..., paramN]) {
   statements
}
```

Ejemplo de una función declarativa

```javascript
// Declaración de una Funcion Declarativa
function saludar() {
	console.log('Saludando desde una función declarativa');
}
//llamada de la función declarativa
saludar();
```

##### Funciones de Expresión

Una función de expresión también es un tipo de función anónima, y estás se llaman así porque las funciones al ser declaradas no tienen ningún valor, este tipo de funciones por lo general cuando se declaran así son para ser ejecutadas de inmediato claro depende de la situación.

Sintaxis funciones declarativas

la variable puede ser declara con `let` o `var`

```javascript
	var [variable] = function [name]([param1, param2, ..., paramN]) {
	   statements
	}
```

Ejemplo 1 - Función Expresión

```javascript
var a = 2;
var b = 3;

// Declaración de una Funcion de expresión
var resultado_suma = function (para_a, para_b) {
	var resultado = 0;
	resultado = para_a + para_b;
	return resultado;
};
//llamada de una función de expresión
resultado_suma(a, b);
```

Ejemplo 1 - Función Expresión

```javascript
var math = {
	factorial: function factorial(n) {
		if (n <= 1) return 1;
		return n * factorial(n - 1);
	},
};
```

#### - ¿Cuándo me sirve usar una función en mi código?

Las funciones son útiles cuando tenemos procesos que son muy recurrentes, es decir: cuando tenemos tareas que se repiten una otra vez lo ideal es crear un algoritmo de dicha tarea y trasladarlo a una función.

#### - ¿Cuál es la diferencia entre parámetros y argumentos de una función?

##### Parámetros

Los parámetros son la lista de variables que ponemos cuando se define una función, por ejemplo, en la siguiente función tenemos dos parámetros “a” y “b”

Ejemplo

```javascript
function sum(a, b) {
	return a + b;
}
```

##### Argumentos

Los argumentos son los valores que se pasan a la función cuando esta es invocada, de esta manera, en el siguiente ejemplo tendríamos que “7”, “4” son los argumentos de nuestra invocación a la función:

Ejemplo

```javascript
const result = sum(7, 4);
```

Referencia:

-   [Diferencia entre parámetros y argumentos](https://blog.webtraining.zone/diferencia-entre-parametros-y-argumentos-en-javascript/)

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```javascript

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = firstName + ' ' + lastName;
const nickname = "juandc";

console.log(
	"Mi nombre es " + completeName + ",
	pero prefiero que me digas " + nickname + "."
);

```

```javascript
function printPersonalData(
	p_firstName = 'Juan David',
	p_lastName = 'Castro Gallego',
	p_nickname = 'juandc'
) {
	let completeName = p_firstName + ' ' + p_lastName;
	console.log(
		'Mi nombre es ' +
			completeName +
			',pero prefiero que me digas ' +
			p_nickname +
			'.'
	);
}

printPersonalData();
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

#### - ¿Qué es una condicional?

Un condicional es: una estructura de programación que permite validar el cumplimiento de ciertas condiciones y el objetivo de estas estructuras es controlar el flujo lógico del programa con la finalidad de saber que acciones ejecutar según ciertas condiciones.

#### - ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

Existe Condicionales: If, Else, else if , operador ternario, y switch

##### If: If, Else, else if

Ejecuta una sentencia que evalúa una condición específica, Sí evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.

-   condición
    Una expresión que puede ser evaluada como verdadera o falsa.

-   sentencia 1
    Sentencia que se ejecutará si condición es evaluada como verdadera. Puede ser cualquier sentencia, incluyendo otras sentencias if anidadas. Para ejecutar múltiples sentencias, use una sentencia block ({ ... }) para agruparlas.

-   sentencia 2
    Sentencia que se ejecutará si condición se evalúa como falsa, y exista una cláusula else. Puede ser cualquier sentencia, incluyendo sentencias block y otras sentencias if anidadas.

**sintaxis del if**

```javascript
if (condición1) {
	sentencia1;
} else if (condición2) {
	sentencia2;
} else if (condición3) {
	sentencia3;
} else {
	sentencia4;
}
```

La sentencia if se puede combinar con los operadores lógicos: &&(and) || (or)

```javascript
if (condición1 && condición2) {
	sentencia1;
	sentencia2;
} else if (condición3 && condición4) {
	sentencia3;
	sentencia4;
}
```

##### Operador condicional (ternario)

El [operador condicional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) es el único operador de JavaScript que toma tres operandos. El operador puede tener uno de los dos valores basados en una condición. La sintaxis es:

```javascript
var age = 20;
var status = age >= 18 ? 'adult' : 'minor';
```

Si la condición (age >= 18) evaluada arroja true, el operador asigna la primera parte de la expresión ('adult') . De lo contrario, se asigna la segunda expresión ('minor') . Puede utilizar el operador condicional en cualquier lugar donde utilice un operador estándar.

Referencia:

-   [if, else if | Javascript MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/if...else)
-   [Expressions and operators - JavaScript | MDN ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
-   [Operador condicional (ternario) - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator)

##### Switch

La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta las declaraciones asociadas a ese case, así como las declaraciones en los casos que siguen.

-   expresión
    Es una expresión que es comparada con el valor de cada instancia case.
-   case valorN
    Una instancia, case valorN es usada para ser comparada con la expresión. Si la expresión coincide con el valorN, las declaraciones dentro de la instancia case se ejecutan hasta que se encuentre el final de la declaración switch o hasta encontrar una interrupción break.
-   default
    Una instancia default, cuando es declarada, es ejecutada si el valor de la expresión no coincide con cualquiera de las otras instancias case valorN.

```javascript
//          ==Sintaxis==
var expression = 'valor2';
switch (expression) {
	case 'valor1':
		//Logica para cuando, conincida con el valor
		break;
	case 'valor2':
		//Logica para cuando, conincida con el valor
		break;
	case 'valorN':
		//Logica para cuando, conincida con el valor
		break;
	default:
		//Logica para cuando, conincida con el valor
		break;
}
```

##### ¿Qué pasa si olvido un break?

Si olvidas un break, el script se ejecutará desde donde se cumple la condición y ejecutará el siguiente case independientemente si esta condición se cumple o no. En ocasiones es útil omitir el break, un ejemplo dónde es útil no colocar el break: Cuando se necesita que un conjunto de valores estén representados por una sola condición

```javascript
//          ==Operación única con múltiples casos==
var Animal = 'Jirafa';
switch (Animal) {
	case 'Vaca':
	case 'Jirafa':
	case 'Perro':
	case 'Cerdo':
		console.log('Este animal subirá al Arca de Noé.');
		break;
	case 'Dinosaurio':
	default:
		console.log('Este animal no lo hará.');
}
```

Referencia:

-   [https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch)
-   [expresión](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
-   [idea para hacer el retro-2](http://jeisson.ecci.ucr.ac.cr/principios/2012c/quices/quiz01/PiedraPapelTijera.java)
-   [declaraciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias

#### - ¿Puedo combinar funciones y condicionales?

si se pueden combinar condicionales y funciones

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia `switch` utilizando `if`, `else` y `else if`:

```javascript
const tipoDeSuscripcion = 'basic';

switch (tipoDeSuscripcion) {
	case 'Free':
		console.log('Solo puedes tomar los cursos gratis');
		break;
	case 'Basic':
		console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
		break;
	case 'Expert':
		console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
		break;
	case 'Expert+':
		console.log(
			'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
		);
		break;
}
```

Resultado

```javascript
const tipoDeSuscripcion = 'basic';

if (tipoDeSuscripcion === 'free') {
	console.log('Solo puedes tomar los cursos gratis');
} else if (tipoDeSuscripcion === 'basic') {
	console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
} else if (tipoDeSuscripcion === 'expert') {
	console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
} else if (tipoDeSuscripcion === 'expert+') {
	console.log(
		'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
	);
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con `if`, `else` y `else if`, pero ahora solo con `if` (sin `else` ni `else if`).

```javascript
const tipoDeSuscripcion = 'basic';

if (tipoDeSuscripcion === 'free') {
	console.log('Solo puedes tomar los cursos gratis');
}
if (tipoDeSuscripcion === 'basic') {
	console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
}
if (tipoDeSuscripcion === 'expert') {
	console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
}
if (tipoDeSuscripcion === 'expert+') {
	console.log(
		'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
	);
}
```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

#### - ¿Qué es un ciclo?

Un ciclo, loop o bucle son un conjunto sentencia estructuradas que permite la ejecución de código de forma repetitiva.

#### - ¿Qué tipos de ciclos existen en JavaScript?

Existe los siguiente ciclos For, For...of, while, do ..while

#### For

Un for es una estructura compuesta de tres sentencias que son: una variable con valor inicial, seguida de una condición de parada y por último el decremento o incremento del valor inicial.

```javascript
// 			== for ==
let estudiantes = ['María', 'Ángel', 'Jesús', 'José', 'Antonio'];

function saludar_a_Estudiante(para_nombre) {
	console.log(`Hola, ${para_nombre}`);
}

for (let i = 0; i < estudiantes.length; i++) {
	saludar_a_Estudiante(estudiantes[i]);
}
```

#### For of

La sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array

```javascript
//          == for..of ==
let profesores = ['Ana', 'Angela', 'Nicol', 'Armando', 'Natilia'];

function saludar_a_Profesor(para_nombre) {
	console.log(`Hola, ${para_nombre}`);
}

for (let profesor of profesores) {
	saludar_a_Profesor(profesor);
}
```

#### While

un while es una sentencia que crea un bucle que se ejecuta mientras sea cierta condición y se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

```javascript
var estudiantes = ['María', 'Ángel', 'Jesús', 'José', 'Antonio'];

function saludarEstudiante(para_nombre) {
	console.log(`Hola, ${para_nombre}`);
}

while (estudiantes.length > 0) {
	var nombre = estudiantes.shift();
	saludarEstudiante(nombre);
}
```

#### do...while

Un do...while es una sentencia que crea un bucle que se ejecuta mientras sea cierta condición y se evalúe como verdadera. Dicha condición es evaluada después de la ejecución del código.

```javascript
var estudiantes = ['María', 'Ángel', 'Jesús', 'José', 'Antonio'];

function saludarEstudiante(para_nombre) {
	console.log(`Hola, ${para_nombre}`);
}

do {
	var nombre = estudiantes.shift();
	saludarEstudiante(nombre);
} while (estudiantes.length > 0);
```

-   ¿Qué es un ciclo infinito y por qué es un problema?
    Un ciclo, loop o infinito es
-   ¿Puedo mezclar ciclos y condicionales?

### 2️⃣ Replica el comportamiento de los siguientes ciclos `for` utilizando ciclos `while`

```js
for (let i = 0; i < 5; i++) {
	console.log('El valor de i es: ' + i);
}

// Solución
let i = 0;
while (i <= 5) {
	console.log('El valor de i es: ' + i);
	i++;
}
```

```js
for (let i = 10; i >= 2; i--) {
	console.log('El valor de i es: ' + i);
}

// Solución
let i = 10;
while (i >= 2) {
	console.log('El valor de i es: ' + i);
	i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```javascript
let value_a = 2;
let value_b = 2;
let result = value_a + value_b;

let response = parseInt(prompt(` Cuanto es: ${value_a} + ${value_b} `));

while (response !== result) {
	if (response !== result) {
		console.log(`🥺Volvamos a empezar 🥺`);
		response = parseInt(prompt(` Cuanto es: ${value_a} + ${value_b} `));
	}
	if (response === result) {
		console.log(`🎉🎉Respuesta correcta 🎉🎉`);
	}
}
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

#### - ¿Qué es un array?

Los array son objetos en forma de lista cuyo prototipo tiene métodos para realizar operaciones sobre los datos que están dentro de ellos. Algo importante sobre los array es que estos pueden tener valores variados, a diferencia de otros lenguajes los array deben ser del mismo tipo de datos

Referencia:

[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### - ¿Qué es un objeto?

Los objetos representa uno de los tipos de datos de Javascript. Es usado para guardar una colección de datos definidos y entidades más complejas. Los objetos se definen y están delimitados mediante llaves `'{ }'`. Un atributo se compone de una clave (key) y un valor(value), que se separan entre sí por dos puntos `'key': 'value'`. Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma.

Declaración

```javascript
var name_object = {
	//atributo: valor
	key: 'value',
	key_2: 'value 2',
};
```

#### - ¿Cómo acceder a un atributo de un objeto?

Un objeto puede tener todos los atributos que sean necesarios, para acceder a ellos se debe escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto.

Ejemplo:

`nombre_del_eObjeto.Propiedad`

#### - Desglosar objetos y pasarlos por parámetros

Un objeto también se puede pasar como atributo en una función. Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { }.

Ejemplo:

```javascript
function showNameUpperCase({ name, lastName }) {
	console.log('El nombre en mayúsculas: ' + name.toUpperCase());
	console.log('El apellido en mayúsculas: ' + lastName.toUpperCase());
	console.log();
}
```

#### - Errores comunes al pasar objetos por parámetros

-   invocar el método vacío dará error, si este recibe un parámetro de un objeto de-estructurado

Ejemplo:

```javascript
showNameUpperCase();
```

-   Dará error sí se pasa un atributo que no existe. También dará error si la función pide por parámetro dos atributos y sólo se le pasa uno

Ejemplo:

```javascript
showNameUpperCase({ Apellido: 'Arnaldo' });
```

Ejemplos de declaración de objetos

```javascript
//Declaración de objetos
var samuel = {
	name: 'Samuel',
	lastName: 'Parra',
	age: 4,
};
var antonio = {
	name: 'Antonio',
	lastName: 'Torres',
	age: 25,
};

// Distintas formas de pasar un objeto
// por parámetro a una función.

//El objeto completo
function showDataObject(param_persona) {
	console.log('Nombre:   ' + param_persona.name);
	console.log('Apellido: ' + param_persona.lastName);
	console.log('Edad:     ' + param_persona.age);
	console.log();
}

//Pasando la Key especifica que necesitamos del objeto
function showNameUpperCase({ name, lastName }) {
	console.log('El nombre en mayúsculas: ' + name.toUpperCase());
	console.log('El apellido en mayúsculas: ' + lastName.toUpperCase());
	console.log();
}

console.log('Datos personales');
console.log('--------------------');
showDataObject(samuel);
showDataObject(antonio);
console.log('--------------------');

console.log('Transformar nombre en mayúsculas');
console.log('--------------------');
showNameUpperCase(antonio);
showNameUpperCase(samuel);

//Podemos definir un nuevo objeto en el parámetro

showNameUpperCase({ name: 'Feber', lastName: 'Parra' });
console.log('--------------------');
```

[objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)

#### - ¿Cuándo es mejor usar objetos o arrays?

El uso de objetos es mejor cuando se intenta describir en programación algo con propiedades y esas propiedades tiene valores y es mejor usar un array cuando se intenta agrupar datos en una lista

#### - ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

si se puede mezclar arrays con objetos u objetos con arrays

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```javascript
let array = ['Hola Mundo (=^.^=)', 'viva js!!!'];
function showData(param_array) {
	console.log(para_array[1]);
}

showData(array);
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```javascript
let array = ['Hola Mundo (=^.^=)', 'viva js!!!'];
function showData(param_array) {
	for (value of param_array) {
		console.log(value);
	}
}

showData(array);
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```javascript
var antonio = {
	name: 'Samuel',
	lastName: 'Parra',
	age: 4,
};

// Distintas formas de pasar un objeto
// por parámetro a una función.

//El objeto completo
function showDataObject(param_persona) {
	console.log('Nombre:   ' + param_persona.name);
	console.log('Apellido: ' + param_persona.lastName);
	console.log('Edad:     ' + param_persona.age);
	console.log();
}
```

## 3. Configuración del entorno de desarrollo

### ¿Qué es git?

Es un software de control de versiones para administrar proyectos en el área de software. Su función principal es: guardar el histórico de los cambios de múltiples archivos o carpetas. Esto lo hace de forma atómica, en una base de datos interna que tiene git. Esta ventaja permite: fusionar cambios, confirmar cambios, crear ramas verificar quién y cuándo se realizaron ciertos cambios.

### ¿Qué es github?

Es una plataforma web de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git

### comandos útiles:

-   Abrir carpeta actual reusando la misma ventana
    `code ./ -r `

-   Agregar todos los cambios al staging área (add)
    `git add .`

-   Realizar confirmar un cambio en la base de datos de git (commit)
    `git commit -m "mensaje del commit"`

-   subir cambios a github
    `git push`

### Objetivos de la clase

-   Crear una cuenta en github
-   Crear un repositorio en github para el curso
-   Clonar el proyecto de github en visual studio code

Recursos extras

-   [extensión para estandarizar commit](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
-   [Material para estandarizar los commit](https://www.conventionalcommits.org/)

-   colorear las ventanas de visual studio code para diferencias proyectos y carpetas [Peacock](https://www.peacockcode.dev/guide/#overview)

Además, aquí puedes ver los atajos de teclado para VSCode:

-   Windows: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
-   macOS: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
-   Linux: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

# Capítulo II: Taller #1 figuras geométricas

## 4. Análisis: cómo calcular figuras geométricas

Calcular perímetro y área de las siguientes figuras geométricas

### Cuadrado

-   Perímetro = Lado +Lado +Lado + Lado , es lo mismo decir que: Lado \* 4
-   área = Lado \* Lado, es lo mismo decir que: Lado Elevado al cuadrado 2

### Triángulo

-   Perímetro = Lado + Lado + Lado;
-   área = (Base \* Altura)/2

### Círculo

-   diámetro = (radio \* 2)
-   perímetro = diámetro \* PI
-   área = ( radio ^ 2 ) \* PI

## 5. Cómo integrar JavaScript en HTML

Existen varias formas de integrar código javascript en un archivo html:

La primera forma y poco recomendada es que dentro del body declarar un archivo

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
	</head>
	<body>
		<script>
			// Bloque de código javascript
		</script>
	</body>
</html>
```

La segunda forma es utilizar un atributo source de la etiqueta javascript

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Document</title>
	</head>
	<body>
		<h1>Figuras</h1>
		<script src="dirección del archivo">
			// Bloque de código javascript
		</script>
	</body>
</html>
```

### Cómo acceder a los archivos del proyecto desde el navegador

Para acceder a los archivos de nuestro computador se debe saber la ubicación. Si no posicionamos en la carpeta del proyecto desde la terminal
se puede utilizar el comando `pwd` y nos dará como resultado la dirección de la carpeta.

Para acceder desde el navegador se debe de escribir el prefijo `file:///` y luego la dirección de la carpeta.

`file:///ubicación-de-la-carpeta/file.html`

## 6. Calculando figuras geométricas en JavaScript

Una herramienta muy útil en js para el proceso de depuración y verificación de funcionamiento de nuestro código de la función `console.log()`. Esta herramienta nos permite imprimir mensajes, valores entre otros por la consola de js, pero en ocasiones nuestro código puede llegar hacer muy largo y en ese caso puede ser útil agrupar los mensajes por la consola de js.

-   Imprimir mensajes en la consola de Javascript se debe hacer lo siguiente:

```javascript
// apertura de la agrupación de js
console.group('nombre de la agrupación');
// cierre de la agrupación
console.groupEnd();
```

-   Ejemplo de la agrupación de mensajes por la consola de js

```javascript
// Cuadrado
console.group('Cuadrado');

const cuadradoLado = 5;

const cuadradoPerimetro = cuadradoLado * 4;
const cuadradoArea = cuadradoLado * cuadradoLado;

console.log('Los lados del cuadro mide : ' + cuadradoLado + 'cm');
console.log('El perímetro del cuadro mide : ' + cuadradoPerimetro + 'cm^2');
console.log('El área del cuadro mide : ' + cuadradoArea + 'cm^2');

console.groupEnd();

//Triángulo
console.group('Triángulo');

const trianguloLado_a = 6;
const trianguloLado_b = 6;
const trinaguloBase = 4;
const trianguloAltura = 5.5;

const trianguloPerimetro = trianguloLado_a + trianguloLado_b + trinaguloBase;
const trianguloArea = (trinaguloBase * trianguloAltura) / 2;

console.log('El lado A del triángulo a mide: ' + trianguloLado_a + 'cm,');
console.log('El lado B del triángulo b mide: ' + trianguloLado_b + 'cm,');
console.log('La base o lado C del triángulo mide: ' + trinaguloBase + 'cm');
console.log('La altura del triángulo mide: ' + trianguloAltura + 'cm');
console.log('El perímetro del triángulo mide: ' + trianguloPerimetro + 'cm');
console.log('El area triángulo mide: ' + trianguloArea + 'cm^2');

console.groupEnd();

// Círculo
console.group('Círculo');

const PI = Math.PI;
const circuloRadio = 4;

const circuloDiametro = circuloRadio * PI;
const circuloArea = circuloRadio * circuloRadio * PI;

console.log('La constante PI es de: ' + PI);
console.log('El radio del círculo mide ' + circuloRadio + 'cm');
console.log('El diametro del circulo es : ' + circuloDiametro + 'cm');
console.log('El área triángulo mide: ' + circuloArea + 'cm^2');

console.groupEnd();
```
