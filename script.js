// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

window.addEventListener('load', onLoad);

function onLoad() {
    console.log('hi');

    var arrayUsers = [{
            name: 'usuario1',
            country: 'spain',
            money: 199,
            premiumAccount: true,
        },
        {
            name: 'usuario2',
            country: 'france',
            money: 0,
            premiumAccount: false,
        },

        {
            name: 'usuario3',
            country: 'spain',
            money: 537,
            premiumAccount: false,
        },
        {
            name: 'usuario4',
            country: 'italy',
            money: 1004,
            premiumAccount: true,
        },
        {
            name: 'usuario5',
            country: 'spain',
            money: 250,
            premiumAccount: false,
        },
        {
            name: 'usuario6',
            country: 'ireland',
            money: 799,
            premiumAccount: true,
        },
        {
            name: 'usuario7',
            country: 'spain',
            money: 3345,
            premiumAccount: false,
        },
    ];

    // Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que
    // asignarlo a una variable que haya sido declarada globalmente fuera de la función.

    function createUsers(nombre, pais, dinero, cuentaPremium) {
        let usuario = {
            name: nombre,
            country: pais,
            money: dinero,
            premiumAccount: cuentaPremium,
        };

        arrayUsers.push(usuario);
    }

    const USER8 = createUsers('usuario8', 'spain', 579, true);

    arrayUsers.forEach((user) => {
        console.log(user);
    });

    // Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".
    // Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
    // El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios
    // y devolverá el array filtrado.

    function filterUsers(usuarios) {
        let userFilter = usuarios.filter(
            (userFilter) => userFilter.country === 'spain' && userFilter.money > 200
        );
        return userFilter;
    }

    var usuariosFiltrados = filterUsers(arrayUsers);

    console.log('Usuarios filtrados');
    console.log(usuariosFiltrados);

    // Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
    // Utilizad constantes siempre que sea posible.
    // Suerte!
    console.log(arrayUsers);
    console.log(usuariosFiltrados);
}