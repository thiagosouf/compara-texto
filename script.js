 
// = `A descoberta de uma nova espécie revela um elo evolucionário entre dois grupos de dinossauros. A existência do Daemonosaurus chauliodus se deu depois que cientistas do Instituto Smithsoniano encontraram fósseis de seu crânio e das vértebras de seu pescoço no estado norte-americano do Novo México, no Sudoeste do país. A pesquisa foi publicada pelo “Proceedings of the Royal Society B”. O Daemonosaurus viveu há aproximadamente 205 milhões de anos, bem no fim do período triássico, antes do jurássico. Como foram encontrados apenas ossos da cabeça e do pescoço, não é possível calcular o tamanho do animal. Contudo, sabe-se que à subordem dos terópodes, dinossauros bípedes que podem ser carnívoros ou onívoros. Os mais antigos dinossauros bípedes conhecidos incluem espécies de predadores como o Herrerasaurus, que habitou um espaço que hoje corresponde à Argentina ao Brasil há cerca de 230 milhões de anos. Até a presente descoberta, os cientistas não conheciam nenhum elo entre esses animais e os terópodes mais desenvolvidos. A análise da estrutura óssea foi suficiente para mostrar que o Daemonosaurus é esse elo. A descoberta motiva os paleontólogos na busca por novas evidências sobre a evolução dos dinossauros. Milhões de anos mais tarde, surgiriam as aves, e elas herdariam dos dinossauros um olfato apurado. Esse estudo foi um esforço conjunto da Universidade de Ohio, nos EUA, da Universidade de Calgary e do Museu Real Tyrrell, ambos no Canadá. Há muito se acreditava que, durante a evolução dos dinossauros para as aves, o olfato teria piorado, uma vez que foi preciso desenvolver a visão, a audição e o equilíbrio, essenciais ao voo. No entanto, uma comparação entre os bulbos olfatórios de dinossauros e pássaros – antigos e modernos não confirmou está hipótese.`

// = `A descoberta de uma nova espécie revela um elo evolucionário entre dois grupos de dinossauros. A existência do Daemonosaurus chauliodus se deu depois que cientistas do Instituto Smithsoniano encontraram fósseis de seu crânio e das vértebras de seu pescoço no estado norte-americano do Novo México, no Sudoeste do país. A pesquisa foi publicada pelo “Proceedings of the Royal Society B”. O Daemonosaurus viveu há aproximadamente 205 milhões de anos, bem no fim do período triássico, antes do jurássico. Como foram encontrados apenas ossos da cabeça e do pescoço, não é possível calcular o tamanho do animal. Contudo, sabe-se que à subordem dos terópodes, dinossauros bípedes que podem ser carnívoros ou onívoros. Os mais antigos dinossauros bípedes conhecidos incluem espécies de predadores como o Herrerasaurus, que habitou um espaço que hoje corresponde à Argentina ao Brasil há cerca de 230 milhões de anos. Até a presente descoberta, os cientistas não conheciam nenhum elo entre esses animais e os terópodes mais desenvolvidos. A análise da estrutura óssea foi suficiente para mostrar que o Daemonosaurus é esse elo. A descoberta motiva os paleontólogos na busca por novas evidências sobre a evolução dos dinossauros. Milhões de anos mais tarde, surgiriam as aves, e elas herdariam dos dinossauros um olfato apurado. Esse estudo foi um esforço conjunto da Universidade de Ohio, nos EUA, da Universidade de Calgary e do Museu Real Tyrrell, ambos no Canadá. Há muito se acreditava que, durante a evolução dos dinossauros para as aves, o olfato teria piorado, uma vez que foi preciso desenvolver a visão, a audição e o equilíbrio, essenciais ao voo. No entanto, uma comparação entre os bulbos olfatórios de dinossauros e pássaros – antigos e modernos não confirmou está hipótese.`
let textoOriginal = ""
let textoRedigido = ""


function limparCache(){
    document.querySelector("span").innerHTML = ""
}

function verificarPalavra(){
    textoOriginal = document.querySelector("#original").value
    textoRedigido = document.querySelector("#redigido").value;
    let arrayTextoOriginal = textoOriginal.split(" ")
    let arrayTextoRedigido = textoRedigido.split(" ")
    console.log(arrayTextoOriginal)
    console.log(arrayTextoRedigido)
    for(let i = 0; i<arrayTextoOriginal.length; i++){
        if(arrayTextoOriginal[i] !== arrayTextoRedigido[i]){
            document.querySelector("span").innerHTML = document.querySelector("span").innerHTML + `<p>ERRO: A palavra original <strong>${arrayTextoOriginal[i]}</strong> é diferente da paralavra digitada <small>${arrayTextoRedigido[i]}</small></p>`
        }
    }
}
