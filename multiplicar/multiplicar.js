const fs = require('fs');

let data = '';

let listarTabla = (base, limite = 10) =>{
    return new Promise((resolve,reject)=>{
        if (!Number(base)){
            reject('La base no es un numero');
            return;
        }
        if (!Number(limite)){
            reject('El limite no es un numero');
            return;
        }
        for (var i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }
        resolve(data);
    });

}

let crearArchivo = (base,limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)){
            reject `la base no es un numero`;
            return;
        }
            for (var i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i} \n`;
            }

            fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tablas/tabla_${base}.txt`);
            });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

