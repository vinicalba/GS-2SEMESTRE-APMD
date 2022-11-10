$(function () {

    var cidades = new Array(
        new cidade("São Paulo", 9.7, 25, "https://www.picxfilmes.com.br/assets/images/palavras-chave/videos-com-drone-em-sp.jpg"),
        new cidade("Rio de Janeiro", 8.5, 23, "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/05/GettyImages-1208531279-scaled.jpg"),
        new cidade("Curitiba", 8.9, 15, "https://farm6.staticflickr.com/5803/31285315936_51fcd3ec65_h.jpg")
    )

    var html = ``

    $(cidades).each(function (i) {
        html = `
        <div class="cardv">
            <img src=${cidades[i].imagem}
            alt="poster do filme Sonic 2" id="poster">
            <p>${cidades[i].nome}</p>
            <p style="text-align:center;">Serviço: &#x2B50;${cidades[i].avaliacao}</p>
            <p>Valor: R$ ${cidades[i].valor} a cada 1 Km.</p>
        </div>`
        $('#divPrices').append(html)
    })
})