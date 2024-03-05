import fetch from "node-fetch";
import readlineSync from "readline-sync";

class App {
    static async getInfo(): Promise<void> {
        try {
            const url = readlineSync.question("Digite a URL: ");
            const response = await fetch(url);
            const body = await response.text();
            
            console.log("Status: ", response.status);
            console.log("Enconding: ", response.headers.get("content-encoding"));
            console.log("Tamanho do body: ", body.length);
            console.log("Body: ", body);
        
        } catch (e: any) {
            console.error('Erro de requisição: ', e.message);
        }
    }
}

App.getInfo();
