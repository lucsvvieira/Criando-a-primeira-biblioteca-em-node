import fs from 'fs';
import chalk from 'chalk';
import { encode } from 'punycode';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura
        [2]}));
    return resultados.length !== 0 ? resultados : 'Não há links no arquivo verificado.';
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não encontrado neste diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile
        (caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('Operação realizada com sucesso!'));
    }
}

export default pegaArquivo;