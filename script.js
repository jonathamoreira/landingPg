function abrirMenu() {
    const barraMenu = document.getElementById('barra-menu')

    if (barraMenu.style.width == "0px") {
        barraMenu.style.width = "300px"   
    } else {
        barraMenu.style.width = "0px"
    }
    
}