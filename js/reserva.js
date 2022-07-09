import moment from "moment";
// import "moment/locale/es";

console.log(window.location.pathname);
if (window.location.pathname === "/") {
  import("moment/locale/es").then((lang) => {
    return lang;
  });
}

const revisar = document.getElementById("revisar");
//inputs
const nombre = document.getElementById("nameC");
const email = document.getElementById("emailC");
const fecha = document.getElementById("date");
const invitados = document.getElementById("invitados");
const btncotizar = document.getElementById("contactoBtn");

//user agent
const ua = navigator.userAgent;

//obtengo los datos de los inputs

//si es cel app si es pc web.app
const actualizar = (e) => {
  console.log("first")
  e.preventDefault();

  if (
    invitados.value === "" ||
    fecha.value === "" ||
    email.value === "" ||
    nombre.value === ""
  ) {
    console.log("vacio");
  } else {
    btncotizar.classList.remove("desactivado");
  }

  //comprobar si es cel o pc
  let whats = "";
  if (/Mobile/i.test(ua)) {
    whats = "https://api.whatsapp.com/send/?phone=5217551019549&text=";
  } else {
    whats = "https://web.whatsapp.com/send/?phone=5217551019549&text=";
  }
  //obtener las noches

  moment.locale("es");
  const fechaE = moment(fecha.value).format("dddd D MMMM YYYY");
 
  const mensaje = `
  <hr>
  <b>Por favor revise sus datos</b>
  <hr>
Nombre: <b> ${nombre.value} </b> <br>
Email: <b> ${email.value} </b> <br>
Fecha del evento: <b> ${fechaE} </b> <br>
Numero de invitados: <b> ${invitados.value}</b>
`;
  revisar.innerHTML = mensaje;
  envio( whats, fechaE);
};

// fin actualizar

const envio = (whats, fechaE) => {
  const url = `
  ${whats}Hola,%20me%20contacto%20desde%20zihuacentro.com,%20deseo%20cotizar:%0aNombre:%20${nombre.value},%0aNo.%20de%20adultos:%20${email.value},%0aNo.%20de%20niños:%20${fechaE}%0aFecha%20de%20Llagada:%20${invitados.value}%0aComentarios:%20
  `;

  const urlEn = `
  ${whats}Hi,%20I%20contact%20from%20zihuacentro.com.:%0aName:%20${nombre.value},%0aNo.%20de%20adultos:%20${nombre.value},%0aNo.%20de%20niños:%20${email.value}%0aFecha%20de%20Llagada:%20${fechaE}%0aFecha%20de%20Salida:%20${invitados.value}%0aComentarios:%20
  `;

  if (window.location.pathname === "/") {
    btncotizar.href = url;
  } else {
    btncotizar.href = urlEn;
  }
};

nombre.addEventListener("focusout", actualizar);
email.addEventListener("focusout", actualizar);
fecha.addEventListener("focusout", actualizar);
invitados.addEventListener("focusout", actualizar);
