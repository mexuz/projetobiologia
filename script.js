$(document).ready(function() {
    $('.rer').hover(function() {
        $("#imagem").attr("src","images/Reticulo Endoplasmatico Rugoso.png");
        $("p").text("O Retículo Endoplasmático Rugoso (RER) recebe esse nome devido a sua estrutura rugosa e a presença de vários grânulos (ribossomos), além disso possui um formato achatado. A sua principal função é fazer a sintetização de proteínas e transportá-las para outros locais fora da célula. Já os ribossomos irão sintetizar as proteínas que serão utilizadas no interior da célula.")
        $("h1").text("Retículo Endoplasmatico Rugoso")
    });
    $('.nucleo').hover(function() {
        $("#imagem").attr("src","images/nucleo.png");
        $("p").text("O núcleo é a maior organela existente em uma célula eucarionte, pois ele é responsável por guardar o material genético, o DNA do ser vivo e comandar tudo que acontece dentro da célula.")
        $("h1").text("Núcleo")
    });
    $('.rel').hover(function() {
        $("#imagem").attr("src","images/Reticulo Endoplasmatico Liso.png");
        $("p").text("O retículo endoplasmático liso possui a função de sintetizar lipídeos, a exemplo dos fosfolipídios, óleos e esteroides (incluindo os hormônios sexuais estrogênio e testosterona), promovendo a desintoxicação da célula. Além disso, ele desempenha outra função importante que é o metabolismo celular e a quebra do álcool presente no corpo de quem ingere bebida alcoólica.")
        $("h1").text("Retículo Endoplasmatico Liso")
    });
    $('.Ribossomos').hover(function() {
        $("#imagem").attr("src","images/ribossomos.png");
        $("p").text("Os ribossomos são pequenas estruturas em forma de grânulo. São encontradas tanto em indivíduos eucariontes quanto procariontes (não possuem a carioteca). A sua presença é muito importante, uma vez que ela atua no controle e regeneração das células.")
        $("h1").text("Ribossomo")
    });
    $('.centriolos').hover(function() {
        $("#imagem").attr("src","images/centriolos.png");
        $("p").text("Os centríolos são organelas formadas por microtúbulos que vão ajudar os cromossomos a se separarem na hora da divisão celular (mitose e meiose). Estão presentes também em cílios e flagelos, auxiliando na locomoção de algumas células.")
        $("h1").text("Centríolo")
    });
    $('.cg').hover(function() {
        $("#imagem").attr("src","images/Complexo de Golgi.png");
        $("p").text("O complexo de golgi armazena, modifica e exporta as proteínas sintetizadas no retículo endoplasmático rugoso e realiza a função de sintetizar carboidratos do tipo polissacarídeos. Essas proteínas sofrem a reação da adição de um açúcar (glicosiladas) no retículo endoplasmático e no golgi. É assim que o processo se completa, caso contrário, essas proteínas podem se tornar inativas. Além disso, são responsáveis por produzir o acrossomo (cabeça do espermatozoide).")
        $("h1").text("Complexo de Golgi")
    });
    $('.lisossomos').hover(function() {
        $("#imagem").attr("src","images/Lisossomos.png");
        $("p").text("Os lisossomos são organelas celulares que contêm substâncias digestivas formadas no retículo endoplasmático rugoso e amadurecidas pelo complexo golgiense. Assim, sua função é digerir moléculas orgânicas como lipídios, carboidratos, proteínas e ácidos nucleicos (DNA e RNA).")
        $("h1").text("Lisossomo")
    });
    $('.microtubulo').hover(function() {
        $("#imagem").attr("src","images/Microtubulos.png");
        $("p").text("Os microtúbulos possuem diversas funções, como: principal componente do aparelho mitótico – fuso acromático, organização dos cromossomos, manutenção da forma celular, ancoragem das organelas citoplasmáticas, criação de força motriz, formação da parede celular, ao movimento intracelular, diferenciação celular, entre outras. Eles participam da constituição de estruturas, como: os centríolos, fuso mitótico, cílios e flagelos, sendo que os microtúbulos de cílios e flagelos são muito estáveis e os do fuso mitótico são fracos.")
        $("h1").text("Microtúbulo")
    });
    $('.mitocondria').hover(function() {
        $("#imagem").attr("src","/images/Mitocondrias.png");
        $("p").text("As mitocôndrias possuem o próprio DNA (se reproduzem sozinhas) e o próprio ribossomo. Estão envolvidas por uma membrana dupla (interna e externa), chamada de cristas mitocondriais.  Elas realizam a respiração celular e produzem grande parte de energia (ATP) essenciais para manter o funcionamento das células.")
        $("h1").text("Mitocôndria")
    });
});
