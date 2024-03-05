import fetch from "node-fetch";
import readlineSync from "readline-sync";
import * as cheerio from "cheerio";

class App {
    static async returnLinks(): Promise<void> {
        try {
            const url = readlineSync.question("Digite a URL: ");
            const response = await fetch(url);
            const body = await response.text();

            const content = cheerio.load(body);
            const links: String[] = [];

            content("a").each((i, el) => {
                const link = content(el).attr("href");
                if (link) {
                    links.push(link);
                }
            });

            for (const link of links) {
                console.log(link);
            }
        
        } catch (e: any) {
            console.error('Erro de requisição: ', e.message);
        }
    }
}

App.returnLinks();
