function validar() {
  if(formulario.nombre.value.trim().length == 0){
    alert('El nombre es obligatorio');
    formulario.nombre.focus();
    return false;
  }
  if(formulario.apellido.value.trim().length == 0){
    alert('El apellido es obligatorio');
    formulario.apellido.focus();
    return false;
  }

  var controlEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!controlEmail.test(formulario.email.value)){
    alert("Ingrese un email válido");
    formulario.email.focus();
    return false;
  }

  if(formulario.cantidad.value == 0){
    alert('La cantidad de tickets debe ser mayor a cero.');
    formulario.cantidad.focus();
    return false;
   }
  
  var cantidad = formulario.cantidad.value; 

  var cate = formulario.categoria.value;

  switch (cate) {
    case 'estudiante':
      valor1 = 0.8;
      break;
    case 'trainee':
      valor1 = 0.5;
      break;
    case 'junior':
      valor1 = 0.15
      break;
    default:
      alert('Debe seleccionar una categoria');
      formulario.categoria.focus();
      return false;
    }

    var descuento = (valor1 * 200); 
    var precio = (200 - descuento) * cantidad;
    var mostrar = "Total a pagar es: $" + precio; 
    document.getElementById('precio').innerHTML = mostrar;

    var mostrarPrecio = document.getElementById("precio");
    //pre.innerHTML = precio;
    //var mostrar = "El total a pagar es: $" + precio; 

}

function borrar() {
  formulario.reset();
}

const btnclick = document.getElementById('validar');
btnclick.addEventListener('click', validar);

const btnclickDos = document.getElementById('borrar')
btnclickDos.addEventListener('click', borrar)
