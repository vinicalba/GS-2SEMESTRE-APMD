$(function () {

    var cidades = new Array(
        new cidade("São Paulo", 9.7, 25),
        new cidade("Rio de Janeiro", 8.5, 23),
        new cidade("Curitiba", 8.9, 15)
    )

    var html = ``

    $(cidades).each(function (i) {
        html = `
        <div class="cardv">
            <img src="https://www.picxfilmes.com.br/assets/images/palavras-chave/videos-com-drone-em-sp.jpg"
            alt="poster do filme Sonic 2" id="poster">
            <p>${cidades[i].nome}</p>
            <p style="text-align:center;">Serviço: &#x2B50;${cidades[i].avaliacao}</p>
            <p>Valor: R$ ${cidades[i].valor} a cada 1 Km.</p>
        </div>`
        $('#divPrices').append(html)
    })
})