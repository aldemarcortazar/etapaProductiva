const menuDesplegable = (boton, panel)=>{
    document.addEventListener('click', (e)=>{
        if(e.target.matches(boton) || e.target.matches(`${boton} *`)){
            document.querySelector(panel).classList.toggle('activo')
        }
    })
}

export default menuDesplegable;