import fs from 'fs';
import chalk from 'chalk';
import { encode } from 'punycode';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não encontrado neste diretório'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto.md');