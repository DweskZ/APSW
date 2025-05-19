import express, {Request, Response} from 'express';
import { parse } from 'path';

const app = express();
app.use(express.json()); 
const port = 3000;


interface IUser {
    id: number;
    name: string;
}

const users: IUser[] = [
    { id: 1, name: 'El chile Carlos' },
    { id: 2, name: 'Mejillon' },
    { id: 3, name: 'xxxDweskxxx' },
]

app.get("/users",(req: Request, res: Response) => {
    res.json(users);
})


app.post("/users", (req: Request, res: Response) => {
    const {body} = req;
    users.push(body);
    res.status(201).json(body);
})

app.get("/users/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    const userFinded = users.find((ele) => ele.id === parseInt(id));
    if (!userFinded)
         {
        res.status(404).json({
            message: "Usuario no encontrado"
        });
    }
    res.status(200).json(userFinded);
});


app.patch("/users/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    const { nombre } = req.body;

    const userFinded = users.find((ele) => ele.id === parseInt(id));
    if (!userFinded)
         {
        res.status(404).json({
            message: "Usuario no encontrado"
        })
        return;
    }
    userFinded.name = nombre;
    res.status(200).json(userFinded);
});


app.delete("/users/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    const { nombre } = req.body;

    const userFinded = users.find((ele) => ele.id === parseInt(id));
    if (!userFinded)
         {
        res.status(404).json({
            message: "Usuario no encontrado"
        })
    }
    users.splice(users.indexOf(userFinded), 1);
    res.status(200).json({
        message: "Usuario eliminado"
    });
});


app.listen(port, () => {
    console.log("ESTA ALSAO EL POERTO 3000");
});