const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");
/*
    ESPERA DE LA
    RESPUESTA DEL API
*/
setTimeout(function(){
    subtitle.textContent = "Mis Platos";
    setTimeout(function(){
        subtitle2.textContent = "Favoritos";
        
    }, 1000);

//arrays de mis comidas favoritas del peru
    setTimeout(function(){
        const platos = [
            {
                "nombre": "Pollo a la brasa",
                "calificacion": 7,
                "isTasty": true
            },
            {
                "nombre": "Tallarin verde",
                "calificacion": 10,
                "isTasty": true
            },
            {
                "nombre": "lomo Saltado ",
                "calificacion": 9,
                "isTasty": true
            },
            {
                "nombre": "Carapulcra",
                "calificacion": 7,
                "isTasty": true
            },
            {
                "nombre": "Seco de cabrito",
                "calificacion": 0,
                "isTasty": false
            },
            {
                "nombre": "Sopa de mote",
                "calificacion": 10,
                "isTasty": true
            },
            {
                "nombre": "Tallarin rojo",
                "calificacion": 0,
                "isTasty": false
            },
            {
                "nombre": "Ceviche",
                "calificacion": 6,
                "isTasty": true
            },
            {
                "nombre": "Pescado frito",
                "calificacion": 7,
                "isTasty": true
            },
            {
                "nombre": "Causa",
                "calificacion": 9,
                "isTasty": true
            }
        ];
        
        
        const platoElement = document.getElementById("comida");
        let contenido = "";
        platos.forEach(function(plato) {    
            let claseicon = "rico";
            if (plato.isTasty) {
                claseicon = "rico";
            } else {
                claseicon = "no-rico";
            }
            let calificacion = plato.calificacion;
            const template = `
                <div class="plato">
                    <div class="icon icon-${claseicon}"></div>
                    <div class="data">
                        <h4>${plato.nombre}</h4>
                    </div>
                    <div class="gobierno">
                        ${calificacion}
                    </div>
                </div>
            `;
            contenido = contenido + template;
        });
        
        platoElement.innerHTML = contenido;
    }, 1000);
}, 1000);



