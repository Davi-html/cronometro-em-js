function getDate(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pr-BR',{
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio')

let segundos = 0
let timer

function iniciaRelogio(){
    timer = setInterval(()=> {
        segundos++
        relogio.innerHTML = getDate(segundos)
    }, 1000)
}

document.addEventListener('click', (e)=>{
    let elemento = e.target
    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }
    if(elemento.classList.contains('pausar')){
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
    if(elemento.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        segundos = 0
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
    }
})