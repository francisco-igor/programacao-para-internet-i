import fetch from "node-fetch";
import readlineSync from "readline-sync";
import * as cheerio from "cheerio";

class App {
    static async getOccurrences(): Promise<void> {
        try {
            const url = readlineSync.question('Digite a URL: ');
            const term = readlineSync.question('Digite o termo: ');

            const response = await fetch(url);
            const body = await response.text();

            const content = cheerio.load(body);
            const text = content("body").text();
            const palavras = text.split(/\s+/);

            const occurrences: String[] = [];
            for (let i = 0; i < palavras.length; i++) {
                if (palavras[i].toLowerCase() == term.toLowerCase()) {
                    const previous = Math.max(0, i - 10);
                    const later = Math.min(palavras.length, i + 11);
                    const around = palavras.slice(previous, later).join(' ');
                    occurrences.push(around);
                }
            }

            if (occurrences.length === 0) {
                console.log(`Nenhuma ocorrência de "${term}"`);
            } else {
                console.log(`Ocorrências de "${term}":`);
                occurrences.forEach((ocorrencia, index) => {
                    console.log(`${index + 1}. ${ocorrencia}`);
                });
            }

        } catch (e: any) {
            console.error('Erro de requisição: ', e.message);
        }
    }
}

App.getOccurrences();
