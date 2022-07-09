import moment from "moment";
// import "moment/locale/es";

if (window.location.pathname === "/indexes.html") {
  import("moment/locale/es").then((lang) => {
    return lang;
  });
  moment.locale("es");
  console.log("es")
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
  e.preventDefault();

  if (
    nombre.value === "" ||
    email.value === "" ||
    fecha.value === "" ||
    invitados.value === "" 
  ) {
    console.log("vacio");
  } else {
    btncotizar.classList.remove("desactivado");
  }

  //comprobar si es cel o pc
  let whats = "";
  if (/Mobile/i.test(ua)) {
    whats = "https://api.whatsapp.com/send/?phone=5217551149568&text=";
  } else {
    whats = "https://web.whatsapp.com/send/?phone=5217551149568&text=";
  }
  //obtener las noches


  const fechaE = moment(fecha.value).format("dddd D MMMM YYYY");
 
  const mensaje = `
  <hr>
  <b>Please check that are correct the data</b>
  <hr>
Name: <b> ${nombre.value} </b> <br>
Email: <b> ${email.value} </b> <br>
Event date: <b> ${fechaE} </b> <br>
Invites: <b> ${invitados.value}</b>
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
  ${whats}Hi,%20I%20contact%20from%weddingsinzihua.com.:%0aName:%20${nombre.value},%0aNo.%20de%20Email:%20${email.value}%0aEvent%20de%20date:%20${fechaE}%0aInvites:%20${invitados.value}%0aLet's%20talk%20😁:%20
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
