/* Hay que inicializar muuri */

const grid = new Muuri('.grid', {
/* Aqui ponemos la clase .grid  */
/* hacemos un objeto con toas las propiedades que queramos. */
layout: {
    rounding: false
}

})


/* CARGAR LAS IMG TODAS AL MISMO TIEMPO */
/* Esto va con los estidlos de grid: opacity y grid .imagenes-cargadas con opacity a 1! */

window.addEventListener('load', () =>{
    
    grid.refreshItems().layout();
    /* Dentro de la libraria muuri, hay muchos efectos */

   document.getElementById('grid').classList.add('imagenes-cargadas');
   /* Aqui cogemos el id de GRID, y que se convierta en la clase de imagenes cargadas. */
   /* Todo esto dentro de la funcion load */



/* ESTOS SON LOS LISTENER PARA FILTRAR POR CATEGORIAS */

   const enlaces = document.querySelectorAll('#categorias a')
        enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    evento.preventDefault();
                    enlaces.forEach((enlace) => enlace.classList.remove('activo'))
                    evento.target.classList.add('activo');/* al target se pondrá en activo */


                    const categoria = evento.target.innerHTML.toLowerCase();

                    categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria = "${categoria}"]`);
                    

                })
        })



        /* LISTENER PAR ALA BARRA DE BUSQUEDA */

/* Accedo al id de la barra de busqueda.
Le agredo un event listener, y cuando el usuasrio ponga un input con alguna letra, que se jeecute la funcion que se d
dispara sola, le paso el evento porque lo querré recibir.

Creo una variable que se llama bsuqueda que va a ser igual al evento.targuet.value, (vamos, el valor del input).
 */


    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
        /* Grid filter muestra los elementos que cumpaln las caract de la funcion en una linea.
        El parametro es de item, cada uno de estos de la grid ejecuta el codigo de la funcion, obtiene
        Obtiene el elemento de la imagen, luego el dataset de las etiquetas y si 
        Si incluye lo que pone en el buscador, pues funciona! */
    });

/* Esto tengo que estudiarlo eh  */




});




