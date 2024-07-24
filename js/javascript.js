var bool;

//PERMITE A RANDOMIZACAO DE TODAS AS MATRIZES
//O DO WHILE ESTAVA BUGANDO DAI TIVE QUE SER UM GENIO DA LAMPADA COM ISSO
while (true) {
    bool = prompt(
        "Você deseja selecionar o tamanho das matrizes?(S/N)",
        "S/N"
    ).toLowerCase();

    //DETECTA SE DIGITOU SIM OU NAO
    if (bool == "s" || bool == "n") {
        break;
    } else {
        alert("Digite S para sim, e N para não");
    }
}

//SE O USUARIO QUISER ELE PODE RANDOMIZAR AS MATRIZES
if (bool === "s") {
    //CRIACAO DAS LINHAS
    var lin;
    do {
        lin = parseInt(prompt("Digite o número de linhas da primeira matriz"));
    } while (lin <= 0 || isNaN(lin));

    //CRIACAO DAS COLUNAS
    var col;
    do {
        col = parseInt(prompt("Digite o número de colunas da primeira matriz"));
    } while (col <= 0 || isNaN(col));

} else {
    //CRIA UM NUMERO DE COLUNAS ALEATORIO ATE 10 QUE E MAIOR QUE ZERO
    //A NAO SER QUE DE 0.0000000000 ( QUE E IMPOSSIVEL BASICAMENTE )
    var col = Math.ceil(Math.random() * 10);
    var lin = Math.ceil(Math.random() * 10);
    console.log("col:", col, "lin:", lin);
}


//FUNCAO DE CRIACAO DE MATRIZES

function criarMatriz() {
    var matriz = new Array();

    for (let i = 0; i < lin; i++) {
        let linha = new Array();
        for (let v = 0; v < col; v++) {
            linha[v] = (Math.round(Math.random() * 100));
        }
        matriz.push(linha);
    }
    return matriz; //retorna a matriz
}


//FUNCAO DE IMPRESSAO DE MATRIZES


function imprimirMatriz(mat) {

    document.write("<table>");
    for (let n = 0; n < lin; n++) {
        document.write('<tr>');
        for (let m = 0; m < col; m++) {
            document.write("<td>" + mat[n][m] + "</td>");
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

function imprimirMatriz3x3(mat) {

    document.write("<table>");
    for (let n = 0; n < 3; n++) {
        document.write('<tr>');
        for (let m = 0; m < 3; m++) {
            document.write("<td>" + mat[n][m] + "</td>");
        }
        document.write('</tr>');
    }
    document.write('</table>');
}


//FUNCAO DE SOMA DE MATRIZES


function somaMatrizes() {
    document.write("<br><h2>Soma:</h2><br>");
    //CRIA 2 MATRIZES PARA SOMAR
    var matriz1 = criarMatriz();
    var matriz2 = criarMatriz();
    //A TERCEIRA MATRIZ SERVE COMO A SOMA DAS DUAS ANTERIORES
    var matriz3 = criarMatriz();

    for (var i = 0; i < lin; i++) {
        matriz3[i] = new Array();
        for (var j = 0; j < col; j++) {
            matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    document.write("<div>");
    imprimirMatriz(matriz1);
    document.write(" + ");
    imprimirMatriz(matriz2);
    document.write(" = ");
    imprimirMatriz(matriz3);
    document.write("</div>");
}

somaMatrizes();

function subMatrizes() {
    document.write("<br><h2>Subtração:</h2><br>");
    //CRIA 2 MATRIZES PARA SUBTRAIR
    var matriz1 = criarMatriz();
    var matriz2 = criarMatriz();
    //A TERCEIRA MATRIZ SERVE COMO A SUBTRAÇÃO DAS DUAS ANTERIORES
    var matriz3 = criarMatriz();

    for (let i = 0; i < lin; i++) {
        matriz3[i] = new Array();
        for (let j = 0; j < col; j++) {
            matriz3[i][j] = matriz1[i][j] - matriz2[i][j];
        }
    }
    document.write("<div>")
    imprimirMatriz(matriz1);
    document.write(" - ");
    imprimirMatriz(matriz2);
    document.write(" = ");
    imprimirMatriz(matriz3);
    document.write("</div>");
}
subMatrizes();

function multMatrizes() {
    document.write("<br><h2>Multiplicação:</h2><br>");

    var matriz1 = [
                [22,16,90],
                [31,14,7],
                [78,3,77]
    ];
    var matriz2 = [
                [1,0,19],
                [2,6,14],
                [9,12,22]
    ];

    if (matriz1[0].length == matriz2.length){

        var matriz3 = [];

        for (var i = 0; i < matriz1.length; i++) {

                matriz3[i] = [];

            for(var j = 0; j < matriz2[0].length; j++) {

                    matriz3[i][j] = 0;

                for(var k = 0; k < matriz1[0].length; k++) {

                    matriz3[i][j] += matriz1[i][k] * matriz2[k][j];
                }
            }
        }

        document.write("<div>")
        imprimirMatriz3x3(matriz1);
        document.write(" * ");
        imprimirMatriz3x3(matriz2);
        document.write(" = ");
        imprimirMatriz3x3(matriz3);
        document.write("</div>");

    } else {
        document.write("Erro! Números inválidos");
    }

}
multMatrizes();