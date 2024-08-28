let usuariosJSON = `[
    {
        "id": 1,
        "nombre": "Anastasia Romanov",
        "email": "anastasiaromanov@gmial.com",
        "taller": "Ballroom Dance",
        "horario": "Lunes de 14:00hs a 16:00hs",
        "terminos": "true"
    }
]`;

let usuarios = JSON.parse(usuariosJSON);


function mostrarUsuarios() {
    const listaUsuarios = document.getElementById('listaUsers');
    listaUsuarios.innerHTML = '';

    usuarios.forEach(usuario => {
        const item = document.createElement('li');
        item.textContent = `ID: ${usuario.id}, Nombre: ${usuario.nombre}, Email: ${usuario.email}, Taller: ${usuario.taller}`;
        listaUsuarios.appendChild(item);
    });
}

mostrarUsuarios();


document.getElementById('formularioDanza').addEventListener('submit', function(event) {
event.preventDefault();

let nombre = document.getElementById('nombre').value;
let email = document.getElementById('email').value;
let taller = document.getElementById('taller').value;
let horario = document.getElementById('horario').value;
let terminos = document.getElementById('terminos').checked;

let nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: nombre,
    email: email,
    taller: taller,
    horario: horario,
    terminos: terminos
};

usuarios.push(nuevoUsuario);

localStorage.setItem('usuarios', JSON.stringify(usuarios));

mostrarUsuarios();

document.getElementById('formularioDanza').reset();
});



