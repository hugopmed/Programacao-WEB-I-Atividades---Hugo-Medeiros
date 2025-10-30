let x = 10;
let y = 5;

console.log("Soma: ", x + y);
console.log("Subtração: ", x - y);
console.log("Multiplicação: ", x * y);
console.log("Divisão: ", x / y);
console.log("Módulo/Resto: ", x % y);
console.log("Exponenciação: ", x ** y);

console.log("X é igual a Y: ", x == y);
console.log("X é estritamente igual a Y: ", x === y);
console.log("X é diferete de Y: ", x != y);
console.log("X é maior que Y: ", x >= y);

        const nota = 75;

        if (nota >= 70) {
            console.log("Aprovado");
        } else if (nota >= 50) {
            console.log("Recuperação");
        } else {
            console.log("Reprovado");
        }

        const mes = 5;

        switch (mes) {
            case 1:
                console.log("Janeiro");
                break;
            case 2:
                console.log("Fevereiro");
                break;
            case 3:
                console.log("Março");
                break;
            case 4:
                console.log("Abril");
                break;
            case 5:
                console.log("Maio");
                break;
            case 6:
                console.log("Junho");
                break;
            case 7:
                console.log("Julho");
                break;
            case 8:
                console.log("Agosto");
                break;
            case 9:
                console.log("Setembro");
                break;
            case 10:
                console.log("Outubro");
                break;
            case 11:
                console.log("Novembro");
                break;
            case 12:
                console.log("Dezembro");
                break;
            default:
                console.log("Mês inválido");
        }

        console.log("Números pares de 0 a 20:");
        let i = 0;
        while (i <= 20) {
            if (i % 2 === 0) {
                console.log(i);
            }
            i++;
        }

        const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Curitiba"];
        console.log("Cidades:");
        for (let j = 0; j < cidades.length; j++) {
            console.log(cidades[j]);
        }

        console.log("Números de 10 a 1:");
        for (let k = 10; k >= 1; k--) {
            console.log(k);
        }