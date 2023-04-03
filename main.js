
const formtaDigito = (digito) => `0${digito}`.slice(-2)

function atualizar(tempo){
    const segundos = document.getElementById('segundos')
    const minutos = document.getElementById('minutos')
    const horas = document.getElementById('horas')
    const dias = document.getElementById('dias')

    const qtdDias =    Math.floor(tempo / (60 * 60 * 24))
    const qtdHoras =    Math.floor((tempo % (60 * 60 * 24)) / (60 * 60))
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60)
    const qtdSegundos = tempo % 60

    dias.innerHTML = formtaDigito(qtdDias)
    horas.innerHTML = formtaDigito(qtdHoras)
    minutos.innerHTML = formtaDigito(qtdMinutos)
    segundos.innerHTML = formtaDigito(qtdSegundos)
}

const paraContagem = (id) => clearInterval(id)


const contagemRegressiva = (tempo) =>{
    
    const contar = () =>{
        if(tempo === 0){
            paraContagem(id)
        }
        atualizar(tempo)
        tempo--
        
    }
    const id = setInterval(contar, 1000)
}

const tempoRestante = () => {
    const dataEvento= new Date('2023-03-16 20:00:00')
    const dataHoje = Date.now()
    return Math.floor((dataEvento - dataHoje) / 1000)
}

contagemRegressiva(tempoRestante())