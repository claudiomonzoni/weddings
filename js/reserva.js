import moment from "moment";
// import "moment/locale/es";

if (window.location.pathname === !"/") {
  import("moment/locale/es").then((lang) => {
    return lang;
  });
  moment.locale("es");
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
    whats = "https://api.whatsapp.com/send/?phone=&text=";
  } else {
    whats = "https://web.whatsapp.com/send/?phone=5217551149568&text=";
  }
  //obtener las noches


  const fechaE = moment(fecha.value).format("dddd D MMMM YYYY");

  const mensaje = `
  <hr>
  <b>Please check that are correct the data / Por favor revise los datos</b>
  <hr>
Name / Nombre: <b> ${nombre.value} </b> <br>
Email: <b> ${email.value} </b> <br>
Event date / Fecha del evento: <b> ${fechaE} </b> <br>
Invites / Invitados: <b> ${invitados.value}</b>
`;


 revisar.innerHTML = mensaje;
  envio( whats, fechaE);
};

// fin actualizar

const envio = (whats, fechaE) => {
  const url = `
  ${whats}Hola,%20me%20contacto%20desde%20weddingsinzihua.com%0aNombre:%20${nombre.value},%0aEmail:%20${email.value},%0aFecha%20del%20evento:%20${fechaE}%0aNo.%20de%20invitados:%20${invitados.value}%0ahablemos de tu evento%20😁:%20
  `;

  const urlEn = `
  ${whats}Hi,%20I%20contact%20from%20weddingsinzihua.com.:%0aName:%20${nombre.value}%0aEmail:%20${email.value}%0aEvent%20de%20date:%20${fechaE}%0aInvites:%20${invitados.value}%0aLet's%20talk%20😁:%20
  `;

  if (window.location.pathname === "/indexes.html") {
    btncotizar.href = url;
  } else {
    btncotizar.href = urlEn;
  }
};

nombre.addEventListener("focusout", actualizar);
email.addEventListener("focusout", actualizar);
fecha.addEventListener("focusout", actualizar);
invitados.addEventListener("focusout", actualizar);
