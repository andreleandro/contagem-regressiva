
const crono = () => {
    const cronoData = new Date('January 1, 2023 00:00:00').getTime()
    const agora = new Date().getTime()
    const gap = cronoData - agora

    //Como funciona a conversão:
    const segundo = 1000
    const minuto = segundo * 60
    const hora = minuto * 60
    const dia = hora * 24

    //Cálculo:
    const textoDia = Math.floor(gap / dia) 
    const textoHora = Math.floor((gap % dia) / hora)
    const textoMinuto = Math.floor((gap % hora) / minuto)
    const textoSegundo = Math.floor((gap % minuto) / segundo)

    document.querySelector('#dia').innerText = textoDia;
    document.querySelector('#hora').innerText = textoHora;
    document.querySelector('#minuto').innerText = textoMinuto;
    document.querySelector('#segundo').innerText = textoSegundo;
    
}

setInterval(crono, 1000)