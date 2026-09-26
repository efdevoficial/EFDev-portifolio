fetch('./version.json')
    .then(response => response.json())
    .then(data => {
        const versionElement = document.getElementById('version');
        versionElement.textContent = `Versão: ${data.version}`;
    });