var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
import readlineSync from "readline-sync";
import * as cheerio from "cheerio";
class App {
    static getOccurrences() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = readlineSync.question('Digite a URL: ');
                const term = readlineSync.question('Digite o termo: ');
                const response = yield fetch(url);
                const body = yield response.text();
                const content = cheerio.load(body);
                const text = content("body").text();
                const palavras = text.split(/\s+/);
                const occurrences = [];
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
                }
                else {
                    console.log(`Ocorrências de "${term}":`);
                    occurrences.forEach((ocorrencia, index) => {
                        console.log(`${index + 1}. ${ocorrencia}`);
                    });
                }
            }
            catch (e) {
                console.error('Erro de requisição: ', e.message);
            }
        });
    }
}
App.getOccurrences();
