console.log("Esse arquivo está ok");

const btn1 = document.getElementById("btn1");
let result = document.getElementById("result");

btn1.addEventListener("click", function () {

    let valor = document.getElementById("valor").value;
    let parcelas = document.getElementById("parcelas").value;
    valor = parseFloat(valor);
    parcelas = parseInt(parcelas);

    if (parcelas >= 4) {
        let juros = valor * 0.07;
        let total = valor + juros;
        let totalP = total / parcelas;
        result.value = totalP;

    } else if (parcelas >= 2) {
        let juros = valor * 0.03;
        let total = valor + juros;
        let totalP = total / parcelas;
        result.value = totalP;
        
    } else if (parcelas = 1) {
        let juros = valor * 0;
        let total = valor + juros;
        let totalP = total / parcelas;
        result.value = totalP;
    }
}
)