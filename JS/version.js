fetch('./version.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('version').textContent = `V${data.version}`;
    })
    .catch(error => {
        console.error('Erro ao carregar versão:', error);
    });