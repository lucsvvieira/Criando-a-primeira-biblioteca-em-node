import fs from 'fs';
import chalk from 'chalk';
import { encode } from 'punycode';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura
        [2]}));
    return resultados;
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
        console.log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow('Operação realizada com sucesso!'));
    }
}

pegaArquivo('./arquivos/texto.md');