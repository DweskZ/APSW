
// definicion de la interfaz IStudent

import { rejects } from "assert";
import { promises } from "dns";
import { resolve } from "path";

interface IStudent {
    name: string;
    age: number;
    courses: string[];
    }   

// Crear un objeto que implemente la interfaz IStudent

let student: IStudent = {
    name: "John Doe",
    age: 20,
    courses: ["Math", "Science", "History"]
};

// Crear un array de estudiantes que implementen la interfaz IStudent
const studentarray:IStudent [] = [
    {
        name: "Jane Smith",
        age: 22,
        courses: ["English", "Art"]
    },
    {
        name: "Sam Brown",
        age: 19,
        courses: ["Biology", "Chemistry"]
    }
];

// Agregar un nuevo estudiante al array
studentarray.push({
    name : "Alice Johnson",
    age : 21,
    courses : ["Physics", "Philosophy"]
});

//Funcion para agregar un nuevo estudiante al array y callback 

function addStudent(param: IStudent, callback:(Student:IStudent) => void) {

    studentarray.push(param);
    callback(param);
} 

// probramos la funcion con callback


addStudent(student, (param:IStudent) => console.log)


//funcion Con promesa 

function addStudent3(param: IStudent):Promise<IStudent> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    });
}

//probar la funcion con promesa usando then 

console.log(addStudent3(student).then((param:IStudent) => { 
    console.log(param);
}));

//Funciones asincronicas - try catch - await 

async function main(){
    try {
        await addStudent3(student);
        console.log("Student added successfully");
    }
    catch (ex) {
        console.error("Error adding student:", ex);
    }
    finally {
        console.log("Execution completed");
    }
}
//llamar a la funcion main para ejecutar el codigo asincronico 
main();