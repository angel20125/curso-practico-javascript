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
		console.log(
			'Puedes tomar casi todos los cursos de Platzi durante un mes'
		);
		break;
	case 'Expert':
		console.log(
			'Puedes tomar casi todos los cursos de Platzi durante un año'
		);
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

### Programación del Taller 1 : parte 1

```javascript
//===========================
//      ==Cuadrado==
//===========================

console.group('Cuadrado');

const cuadradoLado = 5;

const cuadradoPerimetro = cuadradoLado * 4;
const cuadradoArea = cuadradoLado * cuadradoLado;

console.log('Los lados del cuadro mide : ' + cuadradoLado + 'cm');
console.log('El perímetro del cuadro mide : ' + cuadradoPerimetro + 'cm^2');
console.log('El área del cuadro mide : ' + cuadradoArea + 'cm^2');

console.groupEnd();

//===========================
//      ==Triángulo==
//===========================

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

//===========================
//      ==Círculo==
//===========================

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

## 7. Encapsulando código en funciones

### ¿Qué es una función?

Las funciones son como un conjunto de sentencias para realizar ciertas tareas o acciones y en ellas se puede hacer el uso de las variables

### Funciones Declarativas

Las funciones declarativas son aquellas que expresamente se declara con la palabra reservada `funtion` seguida el del nombre y sus parámetros.

### Sintaxis funciones declarativas

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

### llamar funciones dentro de otras funciones

También puede darse la situación de que se pueda llamar una función dentro de otra función

Ejemplo:

```javascript
// Círculo
console.group('Círculo');

const PI = Math.PI;
const circuloRadio = 4;

function fn_circuloDiametro(p_circuloRadio) {
	return p_circuloRadio * PI;
}

//llamando una función dentro de otra función
function fn_circuloArea(p_circuloRadio) {
	// es equivalente a = p_circuloRadio *  p_circuloRadio * PI
	return fn_circuloDiametro(p_circuloRadio) * p_circuloRadio;
}

const circuloDiametro = fn_circuloDiametro(circuloRadio);
const circuloArea = fn_circuloArea(circuloRadio);

console.log('La constante PI es de: ' + PI);
console.log('El radio del círculo mide ' + circuloRadio + 'cm');
console.log('El diametro del circulo es : ' + circuloDiametro + 'cm');
console.log('El área triángulo mide: ' + circuloArea + 'cm^2');

console.groupEnd();
```

### funciones como argumentos de una función

En javascript se puede enviar funciones como argumentos de otras funciones.

```javascript
function fn_sumar(num1, num2, respuesta) {
	respuesta = num1 + num2;
	console.log(`El resultado de la suma es: ${respuesta}`);
}

function datos_de_suma(fn_sumar) {
	var num1 = 5;
	var num2 = 6;
	var respuesta;
	if (fn_sumar) {
		//la función es invocada o ejecutada
		fn_sumar(num1, num2, respuesta);
	}
}

// se pasa la referencia de  la función. No es una invocación
datos_de_suma(fn_sumar);
```

Otro ejemplo de funciones por argumentos

```javascript
class Persona {
	constructor(nombre, apellido, altura) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.altura = altura;
	}
	saludar(fn_responderSaludo) {
		//de-estructuracion
		// var nombre = this.nombre
		// var apellido = this.apellido
		var { nombre, apellido } = this;
		console.log(`Hola, me llamo ${nombre} ${apellido}`);
		if (fn_responderSaludo) {
			//la función es invocada
			fn_responderSaludo(nombre, apellido, false);
		}
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura) {
		super(nombre, apellido, altura);
	}
	saludar(fn_responderSaludo) {
		//de-estructuracion
		// var nombre = this.nombre
		// var apellido = this.apellido
		var { nombre, apellido } = this;
		console.log(
			`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`
		);
		if (fn_responderSaludo) {
			// la función es invocada
			fn_responderSaludo(nombre, apellido, true);
		}
	}
}

// función que se pasará por parámetro
function responderSaludo(nombre, apellido, esDev) {
	console.log('==================');
	console.log('Respondiendo Saludo');
	console.log(`Buen día ${nombre} ${apellido}`);
	if (esDev) {
		console.log(
			`Eres desarrollador/a,
			¡Que bueno! podemos hablar de muchos temas (^.^)`
		);
	} else {
		console.log(
			`No eres desarrollador/a,
			pero igual podemos conversar de otros temas (^.^)`
		);
	}
	console.log('______________________________________________');
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
var erika = new Persona('Erika', 'Luna', 1.65);
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89);

// Se  pasa la referencia de  la función. No es una invocación
sacha.saludar(responderSaludo);
// Se  pasa la referencia de  la función. No es una invocación
erika.saludar(responderSaludo);
// Se  pasa la referencia de  la función. No es una invocación
arturo.saludar(responderSaludo);
```

### Programción del taller 1 : parte 2

```javascript
//===========================
//      ==Cuadrado==
//===========================
console.group('Cuadrado');

const cuadradoLado = 5;

function fn_cuadradoPerimetro(p_cuadradoLado) {
	return p_cuadradoLado * 4;
}

function fn_cuadradoArea(p_cuadradoLado) {
	return p_cuadradoLado * p_cuadradoLado;
}

const cuadradoPerimetro = fn_cuadradoPerimetro(cuadradoLado);
const cuadradoArea = fn_cuadradoArea(cuadradoLado);

console.log('Los lados del cuadro mide : ' + cuadradoLado + 'cm');
console.log('El perímetro del cuadro mide : ' + cuadradoPerimetro + 'cm^2');
console.log('El área del cuadro mide : ' + cuadradoArea + 'cm^2');

console.groupEnd();

//===========================
//      ==Triángulo==
//===========================

console.group('Triángulo');

const trianguloLado_a = 6;
const trianguloLado_b = 6;
const trinaguloBase = 4;
const trianguloAltura = 5.5;

function fn_trainguloPerimetro(
	p_trainguloLado_a,
	p_trainguloLado_b,
	p_trainguloLado_base
) {
	return trianguloLado_a + trianguloLado_b + trinaguloBase;
}

function fn_trianguloArea(p_trianguloBase, p_trianguloAltura) {
	return (p_trianguloBase * p_trianguloAltura) / 2;
}

const trianguloPerimetro = fn_trainguloPerimetro(
	trianguloLado_a,
	trianguloLado_b,
	trinaguloBase
);
const trianguloArea = fn_trianguloArea(trinaguloBase, trianguloAltura);

console.log('El lado A del triángulo a mide: ' + trianguloLado_a + 'cm,');
console.log('El lado B del triángulo b mide: ' + trianguloLado_b + 'cm,');
console.log('La base o lado C del triángulo mide: ' + trinaguloBase + 'cm');
console.log('La altura del triángulo mide: ' + trianguloAltura + 'cm');
console.log('El perímetro del triángulo mide: ' + trianguloPerimetro + 'cm');
console.log('El area triángulo mide: ' + trianguloArea + 'cm^2');

console.groupEnd();

//===========================
//      ==Círculo==
//===========================

console.group('Círculo');

const PI = Math.PI;
const circuloRadio = 4;

function fn_circuloDiametro(p_circuloRadio) {
	return p_circuloRadio * PI;
}

function fn_circuloArea(p_circuloRadio) {
	return p_circuloRadio * p_circuloRadio * PI;
}

const circuloDiametro = fn_circuloDiametro(circuloRadio);
const circuloArea = fn_circuloArea(circuloRadio);

console.log('La constante PI es de: ' + PI);
console.log('El radio del círculo mide ' + circuloRadio + 'cm');
console.log('El diametro del circulo es : ' + circuloDiametro + 'cm');
console.log('El área triángulo mide: ' + circuloArea + 'cm^2');

console.groupEnd();
```

## 8. Interactuando con JavaScript desde HTML

### etiquetas html vistas en clases

-   h1-h6
    Representa los títulos que se puede colocar en nuestro documento html

-   header
    El "header" representa un encabezado o sección del documento. El elemento de encabezado se usa típicamente para agrupar un conjunto de elementos h1 – h6 para marcar el título de una página con su subtítulo o lema. Sin embargo, los elementos de encabezado pueden contener más que solo los encabezados y subtítulos de la sección, por ejemplo, información del historial de versiones o fecha de publicación, menús entre otro.

-   section
    Representa un documento genérico o una sección de aplicación. En este contexto, una sección es una agrupación temática de contenido, normalmente con un encabezado, posiblemente con un pie de página. Los ejemplos incluyen capítulos de un libro, las distintas páginas con pestañas en un cuadro de diálogo con pestañas o las secciones numeradas de una tesis. La página de inicio de un sitio web se puede dividir en secciones para una introducción, noticias e información de contacto

-   form
    El elemento form son formularios son elementos que representa una colección de elementos asociados al este mismo, algunos de los cuales pueden representar valores editables que pueden enviarse a un servidor para su procesamiento.

Al crear un botón dentro de un formulario se recarga la página automáticamente debido a que los botones son de tipo submit por defecto. Este tipo de botón envía la información de los formularios.

-   input
    El elemento input, es un elemento de entrada representa un campo de datos escrito, generalmente con un control de formulario para permitir al usuario editar los datos.

```html
<input
	class="input"
	type="number"
	id="input_respCuadradoPerimetro"
	name="input_respCuadradoPerimetro"
	placeholder="Valor del Perímetro"
/>
```

Los siguientes atributos se le pueden aplicar

class, es aplicar estilos de css.
type, define el tipo datos que recibirá.
id, define un identificador para el elemento html
name, define un identificador y se puede asociar a un grupo de elementos

-   button
    El elemento botón representa un botón. Si el elemento no está deshabilitado, entonces el agente de usuario debe permitir que el usuario active el botón

```html
<button
	class="button"
	type="button"
	onclick="fn_calcularCuadradoArea()"
></button>
```

Los siguientes atributos se le pueden aplicar

class, es aplicar estilos de css.
type, define el tipo de botón. en los formularios por defecto de tipo submit.
onclick, define la ejecución del evento click. Esto puede ser la llamada de una función javascript

referencia

-   [Más elementos en html5doctor](http://html5doctor.com/)

### Elementos javascript asociado a html

-   Para asociar elementos html con javascript se utiliza el método `document.getElementById('id_elemento_html')` y luego lo asignamos a una variable o constante javascript

```javascript
const input_cuadradoLado = document.getElementById('input_cuadradoLado');
```

-   Para enviar valores de los elementos html hacia javascript, se utiliza `document.getElementById('id_elemento_html').value` . Otra forma es asignar el elemento html y luego obtener el valor

```javascript
const input_cuadradoLado = document.getElementById('input_cuadradoLado');
const cuadradoLado = parseFloat(input_cuadradoLado.value);
```

Ejemplo de obteniendo/enviados valores desde javascript a html

```html
<!-- Cuadrado -->
<section class="cuadrado-container">
	<h2>Calcula el área y perímetro de un cuadrado</h2>
	<form class="form">
		<label for="input_cuadradoLado">
			Escribe cuánto mide cada lado de tu cuadrado:
		</label>
		<input
			class="input"
			type="number"
			id="input_cuadradoLado"
			name="input_cuadradoLado"
		/>
		<br />
		<button
			class="button"
			type="button"
			onclick="fn_calcularCuadradoPerimetro()"
		>
			Calcular el perímetro
		</button>

		<button
			class="button"
			type="button"
			onclick="fn_calcularCuadradoArea()"
		>
			Calcular el área
		</button>
		<br />

		<label for="input_respCuadradoPerimetro">
			Respuestas del perímetro del cuadrado:
		</label>
		<input
			class="input"
			type="number"
			id="input_respCuadradoPerimetro"
			name="input_respCuadradoPerimetro"
			placeholder="Valor del Perímetro"
		/>
		<br />

		<label for="input_respCuadradoArea">
			Respuestas del área del cuadrado:
		</label>
		<input
			class="input"
			type="number"
			id="input_respCuadradoArea"
			name="input_respCuadradoArea"
			placeholder="Valor del área"
		/>
	</form>
</section>
```

```javascript
//===========================
//      ==Cuadrado==
//===========================

const input_cuadradoLado = document.getElementById('input_cuadradoLado');
const input_respCuadradoArea = document.getElementById(
	'input_respCuadradoArea'
);
const input_respCuadradoPerimetro = document.getElementById(
	'input_respCuadradoPerimetro'
);

function fn_cuadradoPerimetro(p_cuadradoLado) {
	return p_cuadradoLado * 4;
}

function fn_cuadradoArea(p_cuadradoLado) {
	return p_cuadradoLado * p_cuadradoLado;
}

function fn_calcularCuadradoPerimetro() {
	const cuadradoLado = parseFloat(input_cuadradoLado.value);
	const cuadradoPerimetro = fn_cuadradoPerimetro(cuadradoLado);

	input_respCuadradoPerimetro.value = cuadradoPerimetro;

	console.group('Cuadrado');
	console.log('Los lados del cuadro mide : ' + cuadradoLado + 'cm');
	console.log('El perímetro del cuadro mide : ' + cuadradoPerimetro + 'cm');
}

function fn_calcularCuadradoArea() {
	const cuadradoLado = parseFloat(input_cuadradoLado.value);
	const cuadradoArea = fn_cuadradoArea(cuadradoLado);

	input_respCuadradoArea.value = cuadradoArea;

	console.log('El área del cuadro mide : ' + cuadradoArea + 'cm^2');
	console.groupEnd();
}
```

Referencia de repositorio

-   [repositorio: angel20125](https://github.com/angel20125/curso-practico-javascript)

## 9. Reto: matemáticas con JavaScript

### Objetivo de este taller

En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

### Pasos a ejecutar

-   La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
-   La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
-   La función debe retornar la altura del triángulo.

> Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

Referencia:

-   [Encontrar un lado de un triángulo ](https://www.youtube.com/watch?v=7zWtpaz_yl0)

-   [Math.sqrt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

## Reto 1 completado

-   [reto 1](https://github.com/angel20125/curso-practico-javascript/tree/main/retos/retos-1) completado

# Capítulo III: Taller #2 precios y descuentos

## 10. Análisis: cómo calcular porcentajes y descuentos

En este taller se creará un programa que realiza descuento a productos a facturar.

### Análisis para realizar programa de porcentajes y descuentos

-   Primer paso: definir las fórmulas de los porcentajes y descuentos
-   Segundo paso: implementar la fórmula en JavaScript
-   Tercer paso: crear funciones
-   Cuarto paso: integrar JS con HTML

### Definiendo fórmulas de porcentajes y descuento

La formula para hacerlo escalable, es decir para cualquier precio y cualquier descuento es:

```javascript
const _PORCENTAJE_TOTAL_ = 100;
const _PORCENTAJE_DESCUENTO_ = 15;

let precio_producto = 100;
let precio_con_descuento = 0;

precio_con_descuento =
	(precio_producto * (_PORCENTAJE_TOTAL_ - _PORCENTAJE_DESCUENTO_)) / 100;

console.log(`${precio_producto}`);
console.log(`${precio_con_descuento}`);
```

## 11. Convertir en función el análisis realizado

Se convierte en función la formula anteriormente realizada

```javascript
const _PORCENTAJE_TOTAL_ = 100;

function fn_calcularPrecioConDescuento(
	p_precioProducto,
	p_porcentajeDescuento
) {
	const precioProductoConDescuento =
		(p_precioProducto * (_PORCENTAJE_TOTAL_ - p_porcentajeDescuento)) / 100;

	console.group('fn_calcularPrecioConDescuento');
	console.log({
		p_precioProducto,
		p_porcentajeDescuento,
		_PORCENTAJE_TOTAL_,
		precioProductoConDescuento,
	});
	console.groupEnd();

	return precioProductoConDescuento;
}

fn_calcularPrecioConDescuento(100, 15);
fn_calcularPrecioConDescuento(280, 15);
fn_calcularPrecioConDescuento(300, 15);
```

### console.log ({})

Algo importante a destacar es que se puede utilizar un objeto en un console.log para imprimir todas las variables. Algo que ocurre en javascript es que cuando se coloca la key del objeto javascript automáticamente entiende que el valor de key está contenido en una variable del mismo nombre

En los dos ejemplos que siguen son equivalentes

```javascript
console.group('fn_calcularPrecioConDescuento');
console.log({
	p_precioProducto,
	p_porcentajeDescuento,
	_PORCENTAJE_TOTAL_,
	precioProductoConDescuento,
});
console.groupEnd();
```

```javascript
console.group('fn_calcularPrecioConDescuento');
console.log({
	p_precioProducto: p_precioProducto,
	p_porcentajeDescuento: p_porcentajeDescuento,
	_PORCENTAJE_TOTAL_: _PORCENTAJE_TOTAL_,
	precioProductoConDescuento: precioProductoConDescuento,
});
console.groupEnd();
```

## 12. Escribiendo HTML desde JavaScript

### innerHTML

innerHTML es una función que se comporta como una propiedad que sirve para enviar u obtener contenido de un elemento html. Pero este lo conservabando el formato html

```html
<!DOCTYPE html>
<html>
	<body>
		<p id="demo" onclick="myFunction()">
			Click me to change my HTML content (innerHTML).
		</p>

		<script>
			function myFunction() {
				document.getElementById('demo').innerHTML =
					'Paragraph changed!';
			}
		</script>
	</body>
</html>
```

Referencia:

-   [innerHTML developer.mozilla](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
-   [innerHTML en w3schools](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

### innerText innerHTML

Es una función que se comporta como propiedad que sirve para enviar o recuperar contenido en formato texto de un elemento html

```html
<!DOCTYPE html>
<html>
	<body>
		<p>Click the button get the text content of the button element.</p>

		<button onclick="myFunction()" id="myBtn">Try it</button>

		<p>
			<strong>Note:</strong> The innerText property is not supported in
			Internet Explorer 9 and earlier.
		</p>

		<p id="demo"></p>

		<script>
			function myFunction() {
				var x = document.getElementById('myBtn').innerText;
				document.getElementById('demo').innerHTML = x;
			}
		</script>
	</body>
</html>
```

Referencia:

-   [innerTEXT en w3school](https://www.w3schools.com/jsref/prop_node_innertext.asp)

### Diferencia entre innerText vs innerHTML

#### innerHTML

-   Obtiene y manda contenido en el formato HTML.
-   Podemos insertar etiquetas HTML.
-   Considera los espacios-
-   Devuelve la etiqueta con una etiqueta de su interior.

#### innerText

-   Obtiene y manda el contenido en texto plano.
-   No podemos insertar etiquetas HTML, solo texto.
-   ignora los espacios.
-   Devuelve solamente el texto sin la etiqueta que lo contiene

[segundo taller práctico de javascript](https://github.com/angel20125/curso-practico-javascript/tree/main/2-segundo-taller-productos-descuentos)

## 13. Reto: funciones más inteligentes

Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: **implementar descuentos con cupones**.

Déjame tu solución en los comentarios y luego, sí, evalúa mis 3 propuestas.

### Solución #1: arrays y switch

Analicemos el problema y nuestra propuesta de solución:

-   Crearemos un array con cada uno de nuestros cupones.
-   Cambiaremos el input de descuento en HTML por un input de cupones.
-   Usaremos un condicional switch para aplicar cierto porcentaje de descuento en nuestros productos dependiendo del cupón que se haya elegido al presionar el botón del formulario.

Vamos paso a paso:

-   **Crear un array de cupones**

```js
const coupons = [
	'JuanDC_es_Batman',
	'pero_no_le_digas_a_nadie',
	'es_un_secreto',
];
```

-   **Cambiar el input de descuento por uno de cupones**

Cambiemos los IDs en HTML:

```html
<label for="InputCoupon">Escribe el cupón de descuento para tu producto:</label>
<input id="InputCoupon" type="number" />
```

Y actualicemos nuestras referencias en el código JavaScript:

```js
const inputCoupon = document.getElementById('InputCoupon');
const couponValue = inputCoupon.value;
```

-   **Crear una variable descuento y asignarle un valor distinto con un switch**

```js
function onClickButtonPriceDiscount() {
	const inputPrice = document.getElementById('InputPrice');
	const priceValue = inputPrice.value;

	const inputCoupon = document.getElementById('InputCoupon');
	const couponValue = inputCoupon.value;

	let descuento;

	switch (couponValue) {
		case 'JuanDC_es_Batman':
			descuento = 15;
			break;
		case 'pero_no_le_digas_a_nadie':
			descuento = 30;
			break;
		case 'es_un_secreto':
			descuento = 25;
			break;
	}

	const precioConDescuento = calcularPrecioConDescuento(
		priceValue,
		descuento
	);

	const resultP = document.getElementById('ResultP');
	resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
}
```

### Solución #2: legibilidad, error first y muerte al switch

**Legibilidad** es la facilidad que ofrece nuestro código para entenderlo sin tropiezos cuando lo leemos. Mejorar la legibilidad es mucho más importante que reducir la cantidad de líneas de código.

Además, **error-first** es un patrón de programación donde atrapamos los errores antes de escribir el resto de la lógica de nuestros programas. Aplicar error-first nos puede ayudar a mejorar la legibilidad de nuestro código (es completamente válido tener otra opinión, no te preocupes, cuéntame en los comentarios).

-   **Error first con array.includes**

La función `array.includes()` nos permite validar si un elemento ha sido almacenado en el array. Vamos a usar esta función para ejecutar un error si el cupón de los usuarios es inválido (no fue guardado en el array `coupons`):

```js
if (!coupons.includes(userCouponValue)) {
	alert('El cupón ' + couponValue + 'no es válido');
}
```

Ya que estamos usando un condicional `if`, podemos reescribir el resto del condicional `switch`, pero en este caso usaremos condicionales `else if`:

```js
if (!coupons.includes(couponValue)) {
	alert('El cupón ' + couponValue + 'no es válido');
} else if (couponValue === 'JuanDC_es_Batman') {
	descuento = 15;
} else if (couponValue === 'pero_no_le_digas_a_nadie') {
	descuento = 30;
} else if (couponValue === 'es_un_secreto') {
	descuento = 25;
}
```

### Solución #3: arrays y condicionales mucho más inteligentes

Ya usamos uno de los muchos métodos de los arrays para aplicar error first. Pero podemos usar algunos más para simplificar aún más nuestro código.

> 💡 Recuerda que mejorar la legibilidad no (necesariamente) significa reducir líneas de código.

-   **Array de cupones 2.0: ahora también con los descuentos**

Por ahora tenemos muy separada la lógica de nuestros cupones. Por un lado tenemos la lista de cupones, pero en otro lugar distinto definimos el descuento de cada cupón.

Vamos a cambiar eso convirtiendo nuestro array de strings en un array de objetos (con el nombre y descuento de cada cupón en el mismo lugar):

```js
const coupons = [
	{
		name: 'JuanDC_es_Batman',
		discount: 15,
	},
	{
		name: 'pero_no_le_digas_a_nadie',
		discount: 30,
	},
	{
		name: 'es_un_secreto',
		discount: 25,
	},
];
```

Ahora la función `array.includes` dejó de funcionar, pero podemos reemplazarla por la función `array.find()` para validar si el cupón que escribió el usuario está guardado en la propiedad `name` de alguno de los objetos en la lista de cupones.

Vamos a crear una variable `isUserCouponValueValid` con una función que valide si su parámetro `coupon` es igual a nuestra variable `userCouponValue`. Y esta variable la vamos a enviar como parámetro a nuestra función `array.find()`.

```js
const isCouponValueValid = function (coupon) {
	return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
	alert('El cupón ' + userCouponValue + 'no es válido');
}
```

¡Muy bien!

Pero fíjate que ya tenemos nuestro cupón (con nombre y **descuento**) disponible en la nueva variable `userCoupon`.

Podemos aprovechar esta variable para eliminar todos nuestros condicionales `else if` y cambiarlos por un condicional `else` que nos proporcione el porcentaje de descuento automáticamente, sin importar el cupón (válido) que estén usando nuestros usuarios.

```js
if (!userCoupon) {
	alert('El cupón ' + userCouponValue + 'no es válido');
} else {
	const descuento = userCoupon.discount;
	const precioConDescuento = calcularPrecioConDescuento(
		priceValue,
		descuento
	);

	const resultP = document.getElementById('ResultP');
	resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
}
```

De esta forma, no solo logramos reducir las líneas de código de nuestro programa, sino también mejorar su legibilidad.

---

¡Te espero en la siguiente clase para que iniciemos nuestro tercer taller práctico del curso!

## Reto 2 completado

[reto 2 ](https://github.com/angel20125/curso-practico-javascript/tree/main/retos/reto-2) completado

# Capítulo IV: Taller #3 promedio moda y mediana

## 14. Qué es promedio, moda y mediana

### Media o promedio aritmético:

Consiste en sumar una serie de valores y luego dividirlo por la cantidad de valores sumados. Esta herramienta es útil cuando los valores tiene un valor máximo que puede alcanzar y por su puesto tienen una estrecha relación entre sí.

Un ejemplo donde es útil sería un promedio de notas, un alumno tiene la siguiente serie de notas entre sus exámenes
nota examen 1: 20
nota examen 2: 15
nota examen 3: 19
notas

promedio = (20 + 15 + 19) = 54/ 3 = 18

Es importante destacar que si se introduce un “dato atípico” los resultados no serian muy acertados. Un ejemplo en donde esta herramienta no sería útil seria sería en el promedio serial de una persona que están en un bar, ya que puede surgir datos atípicos y puede haber una persona con un salario muy alto.

.

### Mediana:

Este consiste en tener un número de elementos numéricos ordenados en forma ascendente:

-   Si el número de datos que hay en el “arreglo” es impar escogemos el número de la mitad: Si fueran 15 posiciones escogemos la posición 8

-   Si el número de datos que hay en el “arreglo” es par escogemos el valor de las dos posiciones del centro y las dividimos en dos: Si fuera 16 escogemos la posición 8 y 9 y la dividimos entre 2

Este proceso es mucho más óptimo que la media aritmética, ya que los datos atípicos no afectaran demasiado el valor final.
.

### Moda:

Este es el dato que más se repite en un conjunto de datos si tenemos el siguiente arreglo [10,9,8,10,8,10,8,7,9] y vemos que dos números se repiten la misma cantidad de veces, simplemente se ponen los dos [8,10].
Este tipo de proceso es muy funcional cuando no solo queremos hablar de tipos de datos numéricos, también pueden ser cadenas de texto y demás.

## 15. Calculando el promedio en JavaScript

### Recorriendo un array para calcular la media aritmética

Existen tres múltiples forma de recorrer un array

#### For

Recorriendo el array con un for

```js
const _SALARY_LIST_ = [100, 200, 300, 500];

let salaryTotal = 0;
let averageSalary = 0;

for (let i = 0; i < _SALARY_LIST_.length; i++) {
	salaryTotal = salaryTotal + _SALARY_LIST_[i];
}

averageSalary = salaryTotal / _SALARY_LIST_.length;

console.log(`Valor total de salarios: ${salaryTotal}`);
console.log(`Valor del promedio salarial: ${averageSalary}`);
```

#### for of

```js
const _SALARY_LIST_ = [100, 200, 300, 500];

let salaryTotal = 0;
let averageSalary = 0;

for (let individualSalary of _SALARY_LIST_) {
	salaryTotal = salaryTotal + individualSalary;
}

averageSalary = salaryTotal / _SALARY_LIST_.length;
console.log(`Valor total de salarios: ${salaryTotal}`);
console.log(`Valor del promedio salarial: ${averageSalary}`);
```

### array.reduce

-   El Array.reduce() método ejecuta una función reductora para cada valor de una matriz.
-   Array.reduce() devuelve un valor único que es el resultado acumulado de la función.
-   Array.reduce() no ejecuta la función para elementos de matriz vacíos.
-   Array.reduce() no cambia la matriz original.

```js
const _SALARY_LIST_ = [100, 200, 300, 500];

let salaryTotal = 0;
let averageSalary = 0;

salaryTotal = _SALARY_LIST_.reduce(function (
	valueAcumulate = 0,
	currentSalary
) {
	return valueAcumulate + currentSalary;
});

averageSalary = salaryTotal / _SALARY_LIST_.length;
console.log(`Valor total de salarios: ${salaryTotal}`);
console.log(`Valor del promedio salarial: ${averageSalary}`);
```

## 16. Calculando la mediana en Javascript

### Ordenar número con array.sort()

Ordenar ascendentemente

```javascript
const numbers = [3, 23, 12];

numbers.sort(function (a, b) {
	return a - b;
}); // --> 3, 12, 23
```

Ordenar descendentemente

```javascript
const numbers = [3, 23, 12];

numbers.sort(function (a, b) {
	return b - a;
}); // --> 23, 12, 3
```

Referencia para ordenar lista de números con sort

-   [MDN Ordenamiento con sort](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    [FREECODECAMP Ordenamiento con sort](https://www.freecodecamp.org/news/javascript-array-sort-tutorial-how-to-use-js-sort-methods-with-code-examples/)

## 17. Calculando la moda en Javascript

La moda consiste encontrar los valores que más se repiten

Se puede agrupar elementos dentro de un objeto y contar las incidencias de un array

```javascript
/**
 *  función que ordena una lista de números enteros de forma ascendentemente
 * @param {*} p_list: array de números enteros
 * @returns p_list: array de nú
 */
function orderList(p_list) {
	// se crea una copia del array por parámetro
	const list = p_list.slice();
	// ordena lista de salarios
	list.sort(function (a, b) {
		return a - b;
	});
	console.group('Ordenando elementos');
	console.log(list);
	console.groupEnd();
	return list;
}

/**
 * función encargada de agrupar y  contar los elementos
 * @param {*} p_list: array de valores enteros
 * @returns  listGroup: un objeto con los valores enteros agrupados
 */
function groupList(p_list) {
	// se crea una copia del array por parámetro
	const list = p_list.slice();
	let listGroup = {};

	list.map(function (p_element) {
		if (listGroup[p_element]) {
			// si existe el grupo para el elemento que se desea agrupar
			//entonces se cuenta 1
			listGroup[p_element] += 1;
		} else {
			// si no existe el grupo para el elemento que se desea agrupar
			// entonces se  crea el grupo y se  inicializa la cuenta en 1
			listGroup[p_element] = 1;
		}
	});

	console.group('Agrupando elementos');
	console.log(listGroup);
	console.groupEnd();
	return listGroup;
}

/**
 * función encargada de calcular la moda
 * @returns moda: retorna valor que  más se repite
 */
function arithmeticModa() {
	let moda = 0;
	let valuesByCategories = {};
	let valuesByCategoriesToArray = [];

	// 1. Se grupan los elementos y se cuentan por categoría en un  objecto
	valuesByCategories = groupList(SALARY_LIST);
	// 2. Se convierte el la lista de objetos en un array
	valuesByCategoriesToArray = Object.entries(valuesByCategories);
	// 3.  Se ordena el array de mayor a menor según las veces
	// que se repite un elemento
	valuesByCategoriesToArray.sort(function (a, b) {
		return a[1] - b[1];
	});
	//4. finalmente la moda es el valor
	moda = valuesByCategoriesToArray[valuesByCategoriesToArray.length - 1];

	return parseInt(moda);
}

const inputResultModaSalary = document.getElementById('inputResultModaSalary');
const inputResultListSalarys = document.getElementById(
	'inputResultListSalarys'
);

const SALARY_LIST = [100, 200, 300, 100, 200, 300, 400, 200, 200, 200, 100];

// Se  muestran los resultados en html
inputResultListSalarys.innerText = `${SALARY_LIST}`;
inputResultModaSalary.innerText = `${moda}`;
```

## 18. Reto: calcula otros tipos de promedio

En las clases prácticas de este taller aprendimos a calcular el promedio (media aritmética), la mediana y la moda con JavaScript. En este reto debes encontrar la fórmula de algún otro tipo de promedio, trabajar con alguno de sus casos de uso útiles y traducirlo a código JavaScript.

Responde las siguientes preguntas en los comentarios:

-   ¿Cuál tipo de promedio elegiste para trabajar?
-   ¿Qué casos de uso tiene tu tipo de promedio?
-   ¿Cómo traduces su fórmula a código JavaScript?

Espero tu solución en la sección de aportes.

## Solución al promedio ponderado

Elegí trabajar con la media aritmética ponderada. Este es un promedio muy similar a la media aritmética, pero nos permite definir también el peso, importancia o relevancia de cada elemento en nuestro conjunto de números.

Un caso de uso de la media ponderada es el cálculo de notas académicas cuando cada materia o asignatura otorga diferentes “créditos”.

Esta es su fórmula:

![Promedio ponderado](https://static.platzi.com/media/user_upload/JS%20POO%20random%20thoughts%20%20%286%29-98d0ce55-8e51-436e-a33f-7ec391560f46.jpg)

En español: multiplicar cada número del conjunto por su respectivo crédito, sumar todos los resultados y dividirlo entre la suma de todos los créditos.

> Recuerda que no tienen que ser únicamente 3 números, pueden ser lo que desees, esto solo fue un ejemplo.

Ahora sí, vamos paso a paso implementando el promedio ponderado en JavaScript:

-   **Definir el conjunto de números junto al peso de cada elemento**

Para esto vamos a crear un array de objetos llamado `notes`. Cada objeto tendrá tres valores: `course` con el nombre de la materia (aunque en realidad no lo utilizaremos 😅), `note` con la nota de la materia y `credit` con los créditos de la materia.

```js
const notes = [
	{
		course: 'Educación Física',
		note: 10,
		credit: 2,
	},
	{
		course: 'Programación',
		note: 8,
		credit: 5,
	},
	{
		course: 'Finanzas personales',
		note: 7,
		credit: 5,
	},
];
```

Ahora vamos paso a paso construyendo nuestra máquina para sacar promedios ponderados.

-   **Multiplicar cada número de la lista por su peso**

Vamos a usar de nuevo el método `map` de los arrays. Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.

```js
const notesWithCredit = notes.map(function (noteObject) {
	return noteObject.note * noteObject.credit;
});
```

-   **Sumar todos los elementos del arreglo de elementos multiplicados por su peso**

Vamos a usar de nuevo el método `reduce` de los arrays.

Crearemos una nueva variable `notesWithCredit` que tenga como resultado la suma de todos los elementos del arreglo `sumOfNotesWithCredit`. Recuerda que la función `reduce` recibe una función con dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con 0) y el nuevo elemento de los arrays.

```js
const sumOfNotesWithCredit = notesWithCredit.reduce(function (sum = 0, newVal) {
	return sum + newVal;
});
```

-   **Sumar todos los pesos (créditos)**

Sí, otra vez `map` y `reduce`. Vamos a crear un nuevo arreglo `credits` únicamente con los créditos de cada materia y otra nueva variable `sumOfCredits` que recorra el arreglo `credits` y sume sus elementos.

```js
const credits = notes.map(function (noteObject) {
	return noteObject.credit;
});

const sumOfCredits = credits.reduce(function (sum = 0, newVal) {
	return sum + newVal;
});
```

-   **Hacer la división entre ambas “sumas”**

Lo último que nos falta es dividir nuestra variable `sumOfNotesWithCredit` sobre la variable `sumOfCredits`.

```js
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
```

En este caso, el promedio ponderado de una nota de 10 con créditos de 2, otra nota de 8 con un crédito de 5 y una última nota de 7 con créditos de 5 nos da como resultado `7.916`.

La media aritmética sin tener en cuenta el peso de cada nota habría sido `8.333`.

---

Espero que este último ejercicio te haya ayudado a interiorizar un poco más el uso de los métodos de los arrays para obtener diferentes resultados con ellos.

Te espero en la siguiente clase para iniciar nuestro último y más avanzado taller de este curso.

## Reto 3

Responde las siguientes preguntas en los comentarios:

-   ¿Cuál tipo de promedio elegiste para trabajar?
    Tipo de promedio que decidí utilizar fue la media geométrica

-   ¿Qué casos de uso tiene tu tipo de promedio?
    Es una medida de tendencia central que puede utilizarse para mostrar los cambios porcentuales en una serie de números positivos. Como tal, tiene una amplia aplicación en los negocios y en la economía, debido a que con frecuencia se está interesado en establecer el cambio porcentual en las ventas en el producto interno bruto o en cualquier serie económica. Se define como la raíz índice n del producto de n términos. La media geométrica se utiliza con más frecuencia para calcular la tasa de crecimiento porcentual promedio de algunas series dadas, a través del tiempo.

-   ¿Cómo traduces su fórmula a código JavaScript?
    Si el crecimiento de las ventas en un negocio fue en los tres último años de 26%, 32% y 28%, hallar la media anual del crecimiento.

```javascript
/**
 *  función que se encarga de cálcular la raíz para cualquier
 *  índice
 * @param {*} number: representa el radicando, de la raíz
 * @param {*} n: representa el índice
 * @returns
 */
function rootForAnyIndex(number, n) {
	let result = 0;
	// si los los parámetros son distintos de número retorna null
	if (typeof number !== 'number' || typeof n !== 'number') {
		return null;
	}
	// cálculo para números negativos no está definido
	if (number < 0) {
		return undefined;
	}
	result = Math.pow(number, 1 / n);
	return result;
}

/**
 *función encargada de cálcular el factor de crecimiento (growthFactor)
  de un valor porcentual
 * @param {*} p_list: lista porcentuales de ventas
 * @returns
 */
function growthFactor(p_list) {
	let listGrowFactor = p_list.map(function (value) {
		value = 1 + value / 100;
		return value;
	});
	console.group('growthFactor');
	console.log(listGrowFactor);
	console.groupEnd();
	return listGrowFactor;
}

/**
 *
 * @param {*} p_list
 * @returns
 */
function geometricAverage(p_list) {
	console.group('geometricAverage');
	let n = 0;
	let resultMultiplication = 0;
	let resultGeometricAverage = 0;

	//se obtiene el índece  de la raíz
	n = p_list.length;
	// se múltiplca los factores de crecimiento
	resultMultiplication = p_list.reduce(function (
		valueAcumulate,
		currentValue
	) {
		return parseFloat(valueAcumulate * currentValue);
	});

	//se cálcula el valor de la raíz
	resultGeometricAverage = rootForAnyIndex(resultMultiplication, n);

	return resultGeometricAverage;
}

const inputListAnnualPercentageOfSales = document.getElementById(
	'inputListAnnualPercentageOfSales'
);
const inputResulGeometricAverage = document.getElementById(
	'inputResulGeometricAverage'
);

const listSalesPercentageAnual = [26, 32, 28];

const resultGrowFactor = growthFactor(listSalesPercentageAnual);
const resultGeometricAverage = geometricAverage(resultGrowFactor);

// Se muestra los resultados en la página html
inputListAnnualPercentageOfSales.innerText = `${listSalesPercentageAnual} %`;
inputResulGeometricAverage.innerText = `${resultGeometricAverage}`;
```

Referencia

-   [media geométrica](https://www.uaeh.edu.mx/docencia/VI_Lectura/licenciatura/documentos/LEC4.pdf)

# Capítulo IV: Taller #4 análisis salarial

## 19. ## Análisis: cómo analizar salarios

## 20. Calculando la mediana de salarios

## 21. Calculando el top 10% de salarios

## 22. Reto: simulación de estudio de salarios

En este módulo pusimos en práctica todo lo que aprendimos en los talleres pasados para calcular la mediana de salarios de tu país (aunque por ahora son solo datos ficticios).

Para completar el reto de este último taller solo debes dejar volar tu imaginación y usar todas las herramientas que aprendiste para **expandir tu análisis salarial**.

##Reto 4: ¿Cómo? Como quieras

Puedes calcular la mediana de ingresos no fijos, capacidad de ahorro, capacidad de endeudamiento, recolección de impuestos, diferencia salarial, relación entre formalidad/informalidad y pobreza/riqueza…

El reto es de tema libre. Escoge la pregunta que prefieras, incluso mejor si has vivido una situación parecida alguna vez, resuélvela y muéstranos tu solución en los comentarios.

Para lograrlo solo debes seguir los siguientes pasos:

-   Plantea muy detalladamente el problema/análisis/cálculo/hipótesis que quieres resolver.
-   Encuentra las fórmulas necesarias para resolver el dilema que seleccionaste.
-   Define las variables y funciones para resolver tus fórmulas.
-   Presenta los resultados de tu informe en una página web dinámica usando HTML, CSS y JavaScript.
-   Organiza y documenta tu código para que sea más fácil de leer y entender.
-   Publícalo en tu repositorio de GitHub y muéstranos el link en la sección de comentarios.

Te recomiendo que inicies con una pregunta sencilla. Pon un tiempo límite generoso, desarrolla tu proyecto hasta el final y publica tus resultados en la sección de comentarios.

Luego vuelve a empezar con una pregunta más compleja. Y así sucesivamente hasta que tu estudio de salarios sea el proyecto del que más orgullosa te puedas sentir.

> Estoy seguro de que los siguientes Platzi Lives serán una gran fuente de inspiración:
>
> -   [Qué está pasando en Colombia y por qué hay protestas](https://www.youtube.com/watch?v=1oiTB_4tcx0)
> -   [Qué está pasando en Colombia en el 2021](https://www.youtube.com/watch?v=8LjOG7FSL_Q)
> -   [Por qué hay protestas en Chile](https://www.youtube.com/watch?v=8LjOG7FSL_Q)
> -   [Qué es la Economía Naranja (y qué no)](https://www.youtube.com/watch?v=fs31Woz8f80)
> -   [La economía de un programador](https://www.youtube.com/watch?v=8LjOG7FSL_Q)
> -   [Cuánto ganarán los programadores en el 2020 y 2021](https://www.youtube.com/watch?v=sauDgFSUmsM)
> -   [Los próximos 4 años de la industria Tech en Latinoamérica](https://www.youtube.com/watch?v=UKNv_z5OvCY)
> -   [¿Eres de izquierda o de derecha?](https://www.youtube.com/watch?v=NE0di4Aqa_Q)
> -   [Qué es la Bolsa de Valores](https://www.youtube.com/watch?v=WQFXlJTU1To)
> -   [Cómo prepararte para una recesión económica](https://www.youtube.com/watch?v=JCMYjez93pk)
> -   [Por qué hay crisis económica y en qué invertir](https://www.youtube.com/watch?v=ZrYD4aLqo7w)

## Complementos

Si sigues adelante con la [Escuela de Desarrollo Web](https://platzi.com/web), vas a aprender muchas más herramientas de JavaScript para consultar datos desde el backend y manipular el DOM aún más intensamente.

También puedes complementar tu ruta de aprendizaje con la [Escuela de Data Science](https://platzi.com/datos). Ahí aprenderás a muchísima, muchísima más profundidad cómo limpiar, consultar y presentar informes a partir de un análisis de datos.

Además, en la [Escuela de Finanzas e Inversiones](https://platzi.com/finanzas) puedes iniciar tu educación, planeación y evaluación financiera para todo tipo de proyectos, ya sea con fines personales, emprendedores o incluso inversionistas.

---

Espero ver tus retos en la sección de comentarios. En la próxima clase, como premio a todo tu esfuerzo, publicaremos nuestros proyectos en internet con ayuda de una plataforma llamada GitHub Pages. 💚
