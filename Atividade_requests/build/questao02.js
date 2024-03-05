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
import * as fs from "fs";
class App {
    static saveImage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = readlineSync.question('Digite a URL da imagem (GIF): ');
                const response = yield fetch(url);
                const buffer = yield response.arrayBuffer();
                fs.writeFile("./imagem.gif", Buffer.from(buffer), (err) => {
                    if (err) {
                        console.error('Erro ao salvar a imagem: ', err.message);
                    }
                    else {
                        console.log("Imagem salva com sucesso!");
                    }
                });
            }
            catch (e) {
                console.error('Erro de requisição: ', e.message);
            }
        });
    }
}
App.saveImage();
