
const obtenerDetallesAleatorios = async (ids, limite) => {
    const shuffledIDs = ids.sort(() => Math.random() - 0.5).slice(0, limite);
    const promesas = shuffledIDs.map(id =>
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then(response => response.json())
    );
    return Promise.all(promesas);
};

const mostrarObras = async () => {
    try {
        const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects");
        const resultados = await response.json();
        const objectIDs = resultados.objectIDs;

        const obras = await obtenerDetallesAleatorios(objectIDs, 5);
        const obrasContainer = document.querySelector("#obras-arte");

        obras.forEach(obra => {
            if (obra.primaryImage) {
                obrasContainer.innerHTML += `
                    <div class="obra">
                        <img src="${obra.primaryImage}" alt="${obra.title}" />
                        <h3>${obra.title}</h3>
                        <p>${obra.artistDisplayName}</p>
                    </div>
                `;
            } else {
                console.log(`No hay imagen para la obra ${obra.title}`);
            }
        });
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
};
mostrarObras();
