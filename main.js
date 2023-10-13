window.onload = function() {
    function calcularEnderecoRedeBroadcast(ip, mascara) {
        let ipArray = ip.split('.').map(Number);
        let mascaraArray = mascara.split('.').map(Number);

        let enderecoRede = ipArray.map((num, idx) => num & mascaraArray[idx]).join('.');
        let enderecoBroadcast = ipArray.map((num, idx) => num | ~mascaraArray[idx] & 255).join('.');

        return {
            enderecoRede: enderecoRede,
            enderecoBroadcast: enderecoBroadcast
        };
    }

    document.getElementById('ipForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let ip = document.getElementById('ip').value;
        let mascara = document.getElementById('mascara').value;

        let resultado = calcularEnderecoRedeBroadcast(ip, mascara);

        document.getElementById('resultados').textContent = `Endereço de Rede: ${resultado.enderecoRede}, Endereço de Broadcast: ${resultado.enderecoBroadcast}`;

        let li = document.createElement('li');
        li.textContent = `IP: ${ip}, Máscara: ${mascara}, Endereço de Rede: ${resultado.enderecoRede}, Endereço de Broadcast: ${resultado.enderecoBroadcast}`;
        document.getElementById('historico').appendChild(li);
    });
}