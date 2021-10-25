const cliente = document.getElementById("nombre");
const sueldo = document.getElementById("sueldo");
const casa = document.getElementById("casa");
const perro = document.getElementById("perro");
const carro = document.getElementById("carro");
const gato = document.getElementById("gato");
const aparecer = document.getElementById("aparecer");
const botton = document.getElementById("boton");
const fruta = document.getElementById("fruta");
const conejo = document.getElementById("conejo");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const seccion = document.getElementById("seccion");
const entrada = document.getElementById("entrada");
const dias = document.getElementById("dias");
const dia1 = document.getAnimations("dias1");
const dia2 = document.getAnimations("dias2");
const dia3 = document.getAnimations("dias3");
const dia4 = document.getAnimations("dias4");
const boton10 = document.getElementById("boton10");
const botonE11 = document.getElementById("botonE11");
const botonE12 = document.getElementById("botonE12");
const letras = document.getElementById("letras");
const numeros = document.getElementById("numeros");
const botonL1 = document.getElementById("uno");
const botonL2 = document.getElementById("dos");
const botonL3 = document.getElementById("tres");
const botonL4 = document.getElementById("cuatro");
const botonL5 = document.getElementById("cinco");
const botonL6 = document.getElementById("seis");
const botonL7 = document.getElementById("siete");
const botonL8 = document.getElementById("ocho");
const botonL9 = document.getElementById("nueve");
const botonL11 = document.getElementById("once");


//EJERCICIO 1
const nombreCliente = () => {
  cliente.innerHTML = "Sara Paz";
};
const cantidadSueldo = () => {
  sueldo.innerHTML = 50;
};

//EJERCICIO 2
const traduccionPalabra = () => {
  let palabra = prompt(
    "Ingresa una de estas palabras y sabras su traducción a ingles:"
  ).toLowerCase();

  switch (palabra) {
    case "casa":
      casa.innerHTML = " Casa = House";
      break;

    case "perro":
      perro.innerHTML = "Perro = Dog";
      break;

    case "gato":
      gato.innerHTML = "Gato = Cat";
      break;

    case "carro":
      carro.innerHTML = "Carrro = Car";
      break;

    default:
      alert(
        "Por favor ingresa una de las palabras descritas en la sesión : Traducción"
      );
  }
};

//EJERCICIO 3
fruta.style.visibility = "visible";

const imagenManzana = () => {
  if (fruta.style.visibility == "visible") {
    fruta.style.visibility = "hidden";
  } else {
    fruta.style.visibility = "visible";
  }
};

//EJERCICIO 4

let cont = 1;

const divColores1 = () => {
  let ele = document.createElement("div");
  ele.setAttribute("id", cont);
  ele.style.backgroundColor = "yellow";

  ele.onclick = function () {
    if (ele.style.backgroundColor == "yellow") {
      ele.style.backgroundColor = "blue";
    } else if (ele.style.backgroundColor == "blue") {
      ele.style.backgroundColor = "black";
    } else if (ele.style.backgroundColor == "black") {
      ele.style.backgroundColor = "yellow";
    }
  };

  ele.append("Div" + cont);

  seccion.append(ele);
  cont++;
};

div1.style.color = "blue";
div2.style.color = "red";

const colorDiv1 = () => {
  if (div1.style.color == "blue") {
    div1.style.color = "Pink";
  }
};

const colorDiv2 = () => {
  if (div2.style.color == "red") {
    div2.style.color = "black";
  }
};

//EJERCICIO 5 CONSOLE
const numero1 = 5;
const numero2 = 8;

if (numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}

if (numero2 >= 0) {
  console.log("numero2 es positivo");
}

if (numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}

if (numero1 + 1 < numero2) {
  console.log(
    "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
  );
}

//EJERCICIO 6
const pizzaOrdenes = () => {
  let orden = "Su pedido es: Una pizza ";
  pedidos = alert("Bienvenido a Happy Pizzas");

  pedidos = prompt(
    "Elije El tamaño que deseas: Personal, Mediana o Familiar (Con minúsculas)"
  );

  if (pedidos == "personal") {
    orden = orden + pedidos + " ";
    pedidos = prompt("Pollo y Champiñones, Hawaina o Carnes ").toLowerCase();

    switch (pedidos) {
      case "pollo y champiñones":
        orden = orden + " de " + pedidos + " ";
        pedidos = prompt("¿Con queso o Sin queso?").toLowerCase();

        if (pedidos == "con queso") {
          orden = orden + pedidos + " ";
          pedidos = prompt("Con salsa o Con Borde de Bocadillo").toLowerCase();
        } else if (pedidos == "sin queso") {
          orden = orden + pedidos + " ";
          pedidos = prompt("Con salsa o Con Borde de Bocadillo").toLowerCase();
        }

        if (pedidos == "con salsa") {
          orden = orden + " y " + pedidos + " ";
          alert(orden);
        } else if (pedidos == "con borde de bocadillo") {
          orden = orden + " y " + pedidos + " ";
          alert(orden);
        } else {
          alert("Opción Inválida");
        }
        break;

      case "hawaiana":
        orden = orden + pedidos + " ";
        pedidos = prompt("Sin Piña, Sin Jamon").toLowerCase();

        if (pedidos == "sin piña") {
          orden = orden + pedidos + " ";
          pedidos = prompt("¿Con Salami o sin Salami?").toLowerCase();
        } else if (pedidos == "sin jamon") {
          orden = orden + pedidos + " ";
          pedidos = prompt("¿Con Salami o sin Salami?").toLowerCase();
        }

        if (pedidos == "con salami") {
          orden = orden + " y " + pedidos + " ";
          alert(orden);
        } else if (pedidos == "sin salami") {
          orden = orden + " y " + pedidos + " ";
          alert(orden);
        } else {
          alert("Opción Inválida");
        }
        break;

      case "carnes":
        orden = orden + pedidos + " ";
        pedidos = prompt("Sin Salami o Con Queso").toLowerCase();

        if (pedidos == "sin salami") {
          orden = orden + pedidos + " ";
          pedidos = prompt("Con Cabano o Sin Cabano").toLowerCase();
        } else if (pedidos == "con queso") {
          orden = orden + pedidos + " ";
          pedidos = prompt("Con Cabano o Sin Cabano").toLowerCase();
        }

        if (pedidos == "con cabano") {
          orden = orden + " y " + pedidos + " ";
          alert(orden);
        } else if (pedidos == "sin cabano") {
          orden = orden + " y " + pedidos + " ";
          alert(orden);
        } else {
          alert("Opción Inválida");
        }

        break;
      default:
        alert("Opción Inválida");
    }
  } else if (pedidos == "mediana") {
    orden = orden + pedidos + " ";
    pedidos = prompt("Mexicana o Criolla").toLowerCase();

    switch (pedidos) {
      case "mexicana":
        orden = orden + pedidos + " ";
        pedidos = prompt("Con Nachos o Sin Nachos").toLowerCase();

        if (pedidos == "con nachos") {
          orden = orden + pedidos + " ";
          pedidos = prompt(
            "Con Extra Guacamole o Sin Extra Guacamole"
          ).toLowerCase();
        } else if (pedidos == "sin nachos") {
          orden = orden + pedidos + " ";
          pedidos = prompt(
            "Con Extra Guacamole o Sin Extra Guacamole"
          ).toLowerCase();
        }

        if (pedidos == "con extra guacamole") {
          orden = orden + " y " + pedidos + " ";
          alert(orden);
        } else if (pedidos == "sin extra guacamole") {
          orden = orden + " y " + pedidos + " ";
          alert(orden);
        } else {
          alert("Opción Inválida");
        }

        break;

      case "criolla":
        orden = orden + pedidos + " ";
        pedidos = prompt("Con Maíz o Sin Maíz").toLowerCase();

        if (pedidos == "con maiz") {
          orden = orden + pedidos + " ";
          pedidos = prompt("Con Extra Carne o Con Extra Queso").toLowerCase();
        } else if (pedidos == "sin maiz") {
          orden = orden + pedidos + " ";
          pedidos = prompt("Con Extra Carne o Con Extra Queso").toLowerCase();
        }

        if (pedidos == "con extra carne") {
          orden = orden + " y " + pedidos + " ";
          alert(orden);
        } else if (pedidos == "con extra queso") {
        } else {
          alert("Opción Inválida");
        }

        break;
      default:
        alert("Opción Invalida");
    }
  } else if (pedidos == "familiar") {
    orden = orden + pedidos + " ";
    pedidos = prompt("Vegetariana O Carne y Pollo").toLowerCase();

    switch (pedidos) {
      case "vegetariana":
        orden = orden + pedidos + " ";
        pedidos = prompt("Con queso o sin Queso").toLowerCase();

        if (pedidos == "con queso") {
          orden = orden + pedidos + " ";
          alert(orden);
        } else if (pedidos == "sin queso") {
          orden = orden + pedidos + " ";
          alert(orden);
        } else {
          alert("Opción Inválida");
        }
        break;

      case "carne y pollo":
        orden = orden + " de " + pedidos + " ";
        pedidos = prompt(
          " Con adición de salchicha o Con adición de champiñones"
        ).toLowerCase();

        if (pedidos == "con adición de salchicha") {
          orden = orden + pedidos + " ";
          alert(orden);
        } else if (pedidos == "con adición de champiñones") {
          orden = orden + pedidos + " ";
          alert(orden);
        } else {
          alert("Opción Inválida");
        }
        break;
      default:
        alert("Opción Inválida");
    }
  } else {
    alert("Opción Inválida");
  }
};

//ejercicio 7
conejo.style.visibility = "visible";
const imagenConejo = () => {
  if (conejo.style.visibility == "visible") {
    conejo.style.visibility = "hidden";
  }
};
//ejercicio 8
const entradaDisco = () => {
  let edad = alert("Bienvenido a JS DISCO");
  let nombre = prompt("Ingresa tu nombre");
  let sexo = prompt(nombre + " ¿Eres Hombre o Mujer?");

  switch (sexo) {
    case "hombre":
      edad = prompt("¿Que edad tienes?");

      if (edad <= 18) {
        alert("Debes ser mayor de 18 años para obtener tu entrada");
      } else if (edad > 24) {
        alert(
          "Tienes acceso. El costo de la entrada a La JS Disco es de: 30.000$"
        );
      } else if (edad > 19 && edad <=24) {
        alert(
          "Tienes acceso. El costo de la entrada a La JS Disco es de: 25.000$"
        );
      }
      break;
    case "mujer":
      edad = prompt("Que edad tienes");

      if (edad <= 18) {
        alert("Debes ser mayor de 18 años para obtener tu entrada");
      } else if (edad >= 25) {
        alert(
          "Tienes acceso. El costo de la entrada a La JS Disco es de: 25.000$"
        );
      } else if (edad > 18 && edad < 25) {
        alert(
          "Tienes acceso. El costo de la entrada a La JS Disco es de: 20.000$"
        );
      } else {
        alert("Opción Inválida");
      }
      break;
    default:
      alert("Es necesario que ingreses tu sexo");
  }
};

//EJERCICIO 9 (CALENDARIO)
const diasSemana = () => {
  finDe = " (Fin de Semana)";
  sema = " (Entre Semana)";

  let dia = alert("Organiza tu calendario del día Lunes");

  dia = prompt(
    "Ingresa la actividad a realizar: Ir al colegio, ir a la iglesia, presentar examenes, limpiar la casa, hacer ejercicios, ir al cine, salir con amigos "
  ).toLowerCase();
  switch (dia) {
    case "ir al colegio":
      dias1.innerHTML = "Lunes: " + dia + sema;
      break;
    case "ir a la iglesia":
      dias1.innerHTML = "Lunes: " + dia + sema;
      break;
    case "presentar examenes":
      dias1.innerHTML = "Lunes: " + dia + sema;
      break;

    case "limpiar la casa":
      dias1.innerHTML = "Lunes: " + dia + sema;
      break;

    case "hacer ejercicios":
      dias1.innerHTML = "Lunes: " + dia + sema;
      break;

    case "ir al cine":
      dias1.innerHTML = "Lunes: " + dia + sema;
      break;

    case "salir con amigos":
      dias1.innerHTML = "Lunes: " + dia + sema;
      break;

    default:
      alert("Ingresa alguna de las actividades");
  }
};

const diasSemana1 = () => {
  finDe = " (Fin de Semana)";
  sema = " (Entre Semana)";

  let dia = alert("Organiza tu calendario del día Martes");

  dia = prompt(
    "Ingresa la actividad a realizar: Ir al colegio, ir a la iglesia, presentar examenes, limpiar la casa, hacer ejercicios, ir al cine, salir con amigos "
  ).toLowerCase();
  switch (dia) {
    case "ir al colegio":
      dias2.innerHTML = "Martes: " + dia + sema;
      break;
    case "ir a la iglesia":
      dias2.innerHTML = "Marte: " + dia + sema;
      break;
    case "presentar examenes":
      dias2.innerHTML = "Martes: " + dia + sema;
      break;

    case "limpiar la casa":
      dias2.innerHTML = "Martes: " + dia + sema;
      break;

    case "hacer ejercicios":
      dias2.innerHTML = "Martes: " + dia + sema;
      break;

    case "ir al cine":
      dias2.innerHTML = "Martes: " + dia + sema;
      break;

    case "salir con amigos":
      dias2.innerHTML = "Martes: " + dia + sema;
      break;

    default:
      alert("Ingresa alguna de las actividades");
  }
};

const diasSemana2 = () => {
  finDe = " (Fin de Semana)";
  sema = " (Entre Semana)";

  let dia = alert("Organiza tu calendario del día Miercoles");

  dia = prompt(
    "Ingresa la actividad a realizar: Ir al colegio, ir a la iglesia, presentar examenes, limpiar la casa, hacer ejercicios, ir al cine, salir con amigos "
  ).toLowerCase();
  switch (dia) {
    case "ir al colegio":
      dias3.innerHTML = "Miercoles : " + dia + sema;
      break;
    case "ir a la iglesia":
      dias3.innerHTML = "Miercoles : " + dia + sema;
      break;
    case "presentar examenes":
      dias3.innerHTML = "Miercoles : " + dia + sema;
      break;

    case "limpiar la casa":
      dias3.innerHTML = "Miercoles : " + dia + sema;
      break;

    case "hacer ejercicios":
      dias3.innerHTML = "Miercoles : " + dia + sema;
      break;

    case "ir al cine":
      dias3.innerHTML = "Miercoles : " + dia + sema;
      break;

    case "salir con amigos":
      dias3.innerHTML = "Miercoles : " + dia + sema;
      break;

    default:
      alert("Ingresa alguna de las actividades");
  }
};
const diasSemana3 = () => {
  finDe = " (Fin de Semana)";
  sema = " (Entre Semana)";

  let dia = alert("Organiza tu calendario del día Jueves");

  dia = prompt(
    "Ingresa la actividad a realizar: Ir al colegio, ir a la iglesia, presentar examenes, limpiar la casa, hacer ejercicios, ir al cine, salir con amigos "
  ).toLowerCase();
  switch (dia) {
    case "ir al colegio":
      dias4.innerHTML = "Jueves : " + dia + sema;
      break;
    case "ir a la iglesia":
      dias3.innerHTML = "Jueves : " + dia + sema;
      break;
    case "presentar examenes":
      dias4.innerHTML = "Jueves : " + dia + sema;
      break;

    case "limpiar la casa":
      dias4.innerHTML = "Jueves : " + dia + sema;
      break;

    case "hacer ejercicios":
      dias4.innerHTML = "Jueves : " + dia + sema;
      break;

    case "ir al cine":
      dias4.innerHTML = "Jueves : " + dia + sema;
      break;

    case "salir con amigos":
      dias4.innerHTML = "Jueves : " + dia + sema;
      break;

    default:
      alert("Ingresa alguna de las actividades");
  }
};

const diasSemana4 = () => {
  finDe = " (Fin de Semana)";
  sema = " (Entre Semana)";

  let dia = alert("Organiza tu calendario del día Viernes");

  dia = prompt(
    "Ingresa la actividad a realizar: Ir al colegio, ir a la iglesia, presentar examenes, limpiar la casa, hacer ejercicios, ir al cine, salir con amigos "
  ).toLowerCase();
  switch (dia) {
    case "ir al colegio":
      dias5.innerHTML = "Viernes : " + dia + sema;
      break;
    case "ir a la iglesia":
      dias5.innerHTML = "Viernes : " + dia + sema;
      break;
    case "presentar examenes":
      dias5.innerHTML = "Viernes : " + dia + sema;
      break;

    case "limpiar la casa":
      dias5.innerHTML = "Viernes : " + dia + sema;
      break;

    case "hacer ejercicios":
      dias5.innerHTML = "Viernes : " + dia + sema;
      break;

    case "ir al cine":
      dias5.innerHTML = "Viernes : " + dia + sema;
      break;

    case "salir con amigos":
      dias5.innerHTML = "Viernes : " + dia + sema;
      break;

    default:
      alert("Ingresa alguna de las actividades");
  }
};
const diasSemana5 = () => {
  finDe = " (Fin de Semana)";
  sema = " (Entre Semana)";

  let dia = alert("Organiza tu calendario del día Sábado");

  dia = prompt(
    "Ingresa la actividad a realizar: Ir al colegio, ir a la iglesia, presentar examenes, limpiar la casa, hacer ejercicios, ir al cine, salir con amigos "
  ).toLowerCase();
  switch (dia) {
    case "ir al colegio":
      dias6.innerHTML = "Sábado : " + dia + finDe;
      break;
    case "ir a la iglesia":
      dias6.innerHTML = "Sábado : " + dia + finDe;
      break;
    case "presentar examenes":
      dias6.innerHTML = "Sábado : " + dia + finDe;
      break;

    case "limpiar la casa":
      dias6.innerHTML = "Sábado : " + dia + finDe;
      break;

    case "hacer ejercicios":
      dias6.innerHTML = "Sábado : " + dia + finDe;
      break;

    case "ir al cine":
      dias6.innerHTML = "Sábado : " + dia + finDe;
      break;

    case "salir con amigos":
      dias6.innerHTML = "Sábado : " + dia + finDe;
      break;

    default:
      alert("Ingresa alguna de las actividades");
  }
};

const diasSemana6 = () => {
  finDe = " (Fin de Semana)";
  sema = " (Entre Semana)";

  let dia = alert("Organiza tu calendario del día Domingo");

  dia = prompt(
    "Ingresa la actividad a realizar: Ir al colegio, ir a la iglesia, presentar examenes, limpiar la casa, hacer ejercicios, ir al cine, salir con amigos "
  ).toLowerCase();
  switch (dia) {
    case "ir al colegio":
      dias7.innerHTML = "Domingo : " + dia + finDe;
      break;
    case "ir a la iglesia":
      dias7.innerHTML = "Domingo : " + dia + finDe;
      break;
    case "presentar examenes":
      dias6.innerHTML = "Domingo : " + dia + finDe;
      break;

    case "limpiar la casa":
      dias7.innerHTML = "Domingo : " + dia + finDe;
      break;

    case "hacer ejercicios":
      dias6.innerHTML = "Domingo : " + dia + finDe;
      break;

    case "ir al cine":
      dias7.innerHTML = "Domingo : " + dia + finDe;
      break;

    case "salir con amigos":
      dias7.innerHTML = "Domingo : " + dia + finDe;
      break;

    default:
      alert("Ingresa alguna de las actividades");
  }
};
//ejercicio 10
const revision = () => {
  const frase = prompt("Escriba la frase");
  
  if (frase == frase.toUpperCase()) {
      alert("Frase en mayusculas");
  } else if (frase == frase.toLowerCase()) {
     alert ("Frase en minusculas");
  }else{
      alert("Frase con mayusculas y minusculas")
  }
  };

//ejercicio 11

const consulta = () =>{
    let respuesta = prompt("Desea consultar su saldo? Responda si o no");
    if (respuesta=="si") {
        alert("Su saldo es de $200.000");
    } else if(respuesta=="no") {
        alert("No se muestra su saldo");
    }else{
        alert("Ingrese una respuesta valida");
    }
};



const compra = () => {
    let articulo = prompt("Ingrese el numero que desea comprar:" +"\n" +"1. Cevezas 24  $35.000" +"\n" + "2. Computador  $1.650.000"+ "\n"+ "3. Carne de res 2kg  $25.000" + "\n"+ "4. Ron 20 años  $205.000" + "\n"+ "5. Salmon 2kg   $78.000");
    switch (articulo) {
        case "1":
            alert("Articulo agregado a su carro de compras");
            
            break;
            case "2":
                alert("Vuelva cuando haya fondos suficientes para comprar");
                
                break;
            case "3":
                alert("Articulo agregado a su carro de compras");
                    
                break;
            case "4":
                alert("Vuelva cuando haya fondos suficientes para comprar");
                        
                break;
            case "5":
                 alert("Articulo agregado a su carro de compras");
                break;

            case 1:
                alert("Articulo agregado a su carro de compras");
                    
                break;
        default:
            alert("Ingrese una opcion valida");
            break;
    }
};



//const boton10 = document.getElementById("diez");
//const boton12 = document.getElementById("doce");

const btn1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else {
    if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "") {
      numeros.innerHTML = "1";
    }
  }
};

const btn2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else {
    if (letras.innerHTML == "") {
      alert("Siga el orden del abecedario");
    } else {
      if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1") {
        numeros.innerHTML += "2";
      } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "") {
          alert("Faltan Números");
        }
      }
    }
  }
};


const btn3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else {
    if (letras.innerHTML == "" || letras.innerHTML.length < 2) {
      alert("Siga el orden del abecedario");
    } else {
      if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12") {
        numeros.innerHTML += "3";
      } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML.length < 2) {
          alert("Faltan Números");
        }
      }
    }
  }
};


const btn4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else {
    if (letras.innerHTML == "" || letras.innerHTML.length < 3) {
      alert("Siga el orden del abecedario");
    } else {
      if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123") {
        numeros.innerHTML += "4";
      } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML.length < 3) {
          alert("Faltan Números");
        }
      }
    }
  }
};

const btn5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else {
    if (letras.innerHTML == "" || letras.innerHTML.length < 4) {
      alert("Siga el orden del abecedario");
    } else {
      if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234") {
        numeros.innerHTML += "5";
      } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML.length < 4) {
          alert("Faltan Números");
        }
      }
    }
  }
};

const btn6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else {
    if (letras.innerHTML == "" || letras.innerHTML.length < 5) {
      alert("Siga el orden del abecedario");
    } else {
      if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345") {
        numeros.innerHTML += "6";
      } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML.length < 5) {
          alert("Faltan Números");
        }
      }
    }
  }
};

const btn7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else {
    if (letras.innerHTML == "" || letras.innerHTML.length < 6) {
      alert("Siga el orden del abecedario");
    } else {
      if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123456") {
        numeros.innerHTML += "7";
      } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML.length < 6) {
          alert("Faltan Números");
        }
      }
    }
  }
};

const btn8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else {
    if (letras.innerHTML == "" || letras.innerHTML.length < 7) {
      alert("Siga el orden del abecedario");
    } else {
      if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234567") {
        numeros.innerHTML += "8";
      } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML.length < 7) {
          alert("Faltan Números");
        }
      }
    }
  }
};

const btn9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else {
    if (letras.innerHTML == "" || letras.innerHTML.length < 8) {
      alert("Siga el orden del abecedario");
    } else {
      if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345678") {
        numeros.innerHTML += "9";
      } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML.length < 8) {
          alert("Faltan Números");
        }
      }
    }
  }
};

const btn10 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else {
    if (letras.innerHTML == "" || letras.innerHTML.length < 9) {
      alert("Siga el orden del abecedario");
    } else {
      if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123456789") {
        numeros.innerHTML += "0";
      } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML.length < 9) {
          alert("Faltan Números");
        }
      }
    }
  }
};


function acceso(){

  window.location = alert("Tienes Ingreso a la Página Web") += open
};
imput.onclick = function(){
  acceso();
}

botonL1.onclick = function () {
  btn1();
};

botonL2.onclick = function () {
  btn2();
};
botonL3.onclick = function () {
  btn3();
};

botonL4.onclick = function () {
  btn4();
};
botonL5.onclick = function () {
  btn5();
};

botonL6.onclick = function () {
  btn6() ;
};

botonL7.onclick = function () {
  btn7();
};

botonL8.onclick = function () {
  btn8();
};

botonL9.onclick = function () {
  btn9();

  botonL11.onclick = function () {
    btn10();
  };
};

botonE11.onclick = function(){
    consulta();
};

botonE12.onclick = function(){
    compra();
};
  
  
  boton10.onclick= function ()  {
      revision();
  };

boton1.onclick = function () {
  nombreCliente();
};

boton2.onclick = function () {
  cantidadSueldo();
};

traduce.onclick = function () {
  traduccionPalabra();
};

aparecer.onclick = function () {
  conejo.style.visibility = "visible";
};

div1.onclick = function () {
  colorDiv1();
};

div2.onclick = function () {
  colorDiv2();
};
boton.onclick = function () {
  divColores1();
};

pizzas.onclick = function () {
  pizzaOrdenes();
};

disco.onclick = function () {
  entradaDisco();
};

dias1.onclick = function () {
  diasSemana();
};

dias2.onclick = function () {
  diasSemana1();
};

dias3.onclick = function () {
  diasSemana2();
};

dias4.onclick = function () {
  diasSemana3();
};

dias5.onclick = function () {
  diasSemana4();
};

dias6.onclick = function () {
  diasSemana5();
};

dias7.onclick = function () {
  diasSemana6();
};
