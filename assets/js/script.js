const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: 'Prestige Suburb, CA 45678',
        habitaciones: 4 ,
        baños: 4, 
        costo: 5.000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/70/b3/81/apartamentos-la-montana.jpg',
        descripcion: 'Apartamento acogedor en la montaña',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2 ,
        baños: 1,
        costo: 1.200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4.500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Penthouse en Viñas de Chicureo ',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_748745-MLC72672467582_112023-F.webp',
        descripcion: 'Emplazado en un entorno privilegiado, tranquilo y rodeado de naturaleza.',
        ubicacion: 'Viñas de Chicureo, Summit Peaks, CA 23456',
        habitaciones: 4,
        baños: 3,
        costo: 100.000,
        smoke: true,
        pets: true
    }
]


const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2.000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños:  3,
        costo: 2.500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo:  2.200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Suite en Hotel Mandarin Oriental',
        src: 'https://nuevosdestinosbymara.com/wp-content/uploads/2021/02/4.mandarin-oriental-tokyo-18-room-deluxe-premier-bedroom.jpg',
        descripcion: '',
        ubicacion: '361 Nihonbashi, Skyview City, CA 56759',
        habitaciones: 1,
        baños: 2,
        costo: 3.000,
        smoke: false,
        pets: true
    }
]

let html = document.querySelector("#ventas");
let index = 0;
for (let venta of propiedades_venta) {
     let ventas = `<div class="col-md-4 mb-4">
            <div class="card">
              <img src="${venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${venta.nombre}
                </h5>
                <p class="card-text">
                ${venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${venta.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 5.000</p>`

                if (venta.smoke) {
                    ventas += `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                    </p>`
                } else {
                    ventas += `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>`
                }

                if (venta.pets) {
                    ventas += `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
                } else {
                    ventas += `<p class="text-danger">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>`
                }    

                ventas += 
              `</div>
            </div>
          </div>`;
    index++;
    if (index <= 3) {
        html.innerHTML += ventas;
    }
}

///

let contain = document.querySelector("#alquiler");
let lista = 0;
for (let alquiler of propiedades_alquiler) {
     let alquilar = `<div class="col-md-4 mb-4">
            <div class="card">
              <img src="${alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${alquiler.nombre}
                </h5>
                <p class="card-text">
                ${alquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                ${alquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${alquiler.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 5.000</p>`

                if (alquiler.smoke) {
                    alquilar += `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                    </p>`
                } else {
                    alquilar += `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>`
                }

                if (alquiler.pets) {
                    alquilar += `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
                } else {
                    alquilar += `<p class="text-danger">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>`
                }    

                alquilar += `</div>
            </div>
          </div>`;
    lista++;
    if (lista <= 3) {
        contain.innerHTML += alquilar;
    }
}

