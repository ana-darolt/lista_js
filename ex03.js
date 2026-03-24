    function ex03() {

        let ganhoAnual = 0;
        let gastoAnual = 0;

        for (let i = 1; i <= 3; i++) {
            let ganho = Number(prompt("ganho do mes " + i))
            let gasto = Number(prompt("ganho do mes " + i))
            ganhoAnual += ganho;
            gastoAnual += gasto;

            console.log(ganhoAnual);
            console.log(gastoAnual);

            let saldo = ganhoAnual - gastoAnual 

            alert("Ganho Anual: ", ganhoAnual);
            alert("Gasto Anual: ", ganhoAnual);
            alert("saldo Anual: ", ganhoAnual);
            if (saldo > 0){
                alert("lucro!");
            }else{
                alert("Prejuizo!")

            }
        }
    }
