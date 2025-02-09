import { exec } from "child_process";
import { ValidarPeticion } from "../Validacion/Validador.js";
import { promisify } from 'util';

export class Controller {
    constructor({ Modal }) {
        this.Modal = Modal;
    }

    ChatIA = async (req, res) => {
        const execAsync = promisify(exec);
        try {
            const validado = ValidarPeticion(req.body);
            if (validado.success) {
                const { peticion } = req.body;

                const { stdout, stderr } = await execAsync(`${peticion}`);

                if (stderr) {
                    console.error(`Error en stderr: ${stderr}`);
                    return res.status(500).send({ api: null, message: null, Errorr: 'Ha ocurrido un error' });
                }
                return res.status(200).send({ api: null, message: stdout, Errorr: null });
            }
            return res.status(400).send({ api: null, message: null, Errorr: 'Ha ocurrido un error, por favor intente de nuevo' });
        } catch (error) {
            console.error(`Error ejecutando el comando: ${error}`);
            return res.status(500).send({ api: null, message: null, Errorr: 'Ha ocurrido un error, por favor intente de nuevo' });
        }
    }

    Empleados = async (req, res) => {
        try {
            const response = await this.Modal.ApiRes();
            return res.status(200).send({ api: response, message: null, Errorr: null });
        } catch (error) {
            console.error('Ha ocurrido este error en el controller: ' + error);
            return res.status(500).send({ api: null, message: null, Errorr: 'Ha ocurrido un error, por favor intente de nuevo' });
        }
    }

    Fotos = async (req, res) => {
        try {
            const { title } = req.params;
            res.status(200).sendFile(process.cwd() + `/fotos/${title}.jpg`);
        } catch (error) {
            console.error(`Error en la función Fotos: ${error}`);
            return res.status(500).send({ api: null, message: null, Errorr: 'Ha ocurrido un error, por favor intente de nuevo' });
        }
    }
}
