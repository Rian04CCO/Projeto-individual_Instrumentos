var database = require("../database/config");

function buscarInstrumentos() {
    console.log("Model: buscarInstrumentos()");

    var instrucaoSql = `
        SELECT instrumento, COUNT(*) AS quantidade
        FROM Usuario
        GROUP BY instrumento;
    `;

    console.log("Executando SQL:\n", instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarMusica() {
    console.log("Model: buscarMusica()");

    var instrucaoSql = `
        SELECT 
            qtdMusica AS musica,
            COUNT(*) AS quantidade
        FROM Usuario
        GROUP BY qtdMusica;
    `;


    console.log("Executando SQL:\n", instrucaoSql);

    return database.executar(instrucaoSql);
}

function mostrarKpis() {
    console.log('Model: MostrarKpis()')

    var instrucaoSql = `SELECT instrumento, COUNT(*) AS quantidade
        FROM Usuario
        GROUP BY instrumento
        ORDER BY quantidade DESC
        LIMIT 1;
    `

    console.log("Executando SQL:\n", instrucaoSql);

    return database.executar(instrucaoSql);

}


module.exports = {
    buscarMusica,
    mostrarKpis,
    buscarInstrumentos
}
