import fetch from "node-fetch";
import readlineSync from "readline-sync";
import * as fs from "fs";

class App {
    static async saveImage(): Promise<void> {
        try {
            const url = readlineSync.question('Digite a URL da imagem (GIF): ');
            const response = await fetch(url);
            const buffer = await response.arrayBuffer();

            fs.writeFile("./imagem.gif", Buffer.from(buffer), 
                    (err) => {
                        if (err) {
                            console.error('Erro ao salvar a imagem: ', err.message);
                        } else {                    
                            console.log("Imagem salva com sucesso!");
                        }
                    });
        
        } catch (e: any) {
            console.error('Erro de requisição: ', e.message);
        }
    }
}

App.saveImage();
