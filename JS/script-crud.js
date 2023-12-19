const btnAdicionarTarefa = document.querySelector('#botao__adicionar-tarefa')
const btnCancelarTarefa = document.querySelector('#botao-cancelar')
const btnSalvarTarefa = document.querySelector('#botao-salvar')
const btnDeletarTarefa = document.querySelector('#botao-deletar')
const btnCorTarefa_01 = document.querySelector('#opcao_cor_01')
const btnCorTarefa_02 = document.querySelector('#opcao_cor_02')
const btnCorTarefa_03 = document.querySelector('#opcao_cor_03')
const btnCorTarefa_04 = document.querySelector('#opcao_cor_04')
const btnCorTema_01 = document.querySelector('#opcao_tema_01')
const btnCorTema_02 = document.querySelector('#opcao_tema_02')
const btnCorTema_03 = document.querySelector('#opcao_tema_03')
const btnCorTema_04 = document.querySelector('#opcao_tema_04')
// const btnCorFiltro_01 = document.querySelector('#opcao_filtro_01')
// const btnCorFiltro_02 = document.querySelector('#opcao_filtro_02')
// const btnCorFiltro_03 = document.querySelector('#opcao_filtro_03')
// const btnCorFiltro_04 = document.querySelector('#opcao_filtro_04')
// const btnRemoverFiltro = document.querySelector('#opcao_remover_filtro')
// const btnIconeFiltro = document.querySelector('#botao__icone_filtro')
const btnIconeLixeira = document.querySelector('#botao__icone_lixeira')
const btnIconeConfig = document.querySelector('#botao__icone_config')
const btnLateralDeletarConcluidas = document.querySelector('#botao_lateral--deletar_concluidas')
const btnLateralDeletarTodas = document.querySelector('#botao_lateral--deletar_todas')

const formTarefa = document.querySelector('#formulario__tarefa')
const tituloFormulario = document.querySelector('#titulo-formulario')
const inputTitulo = document.querySelector('#app__input-titulo')
const inputDescricao = document.querySelector('#app__input-descricao')
const ulListaTarefas = document.querySelector('#app__lista-tarefas')
const ulMenuLateral = document.querySelector('.app__regiao_navbar--fluante')
const modal_formulario = document.querySelector('.modal_formulario')

const menufiltro = ulMenuLateral.querySelector(".menu_filtro")
const menuLixeira = ulMenuLateral.querySelector(".menu_lixeira")
const menuConfig = ulMenuLateral.querySelector(".menu_config")

let listaTarefas = JSON.parse(localStorage.getItem('listaTarefas')) || []
let temaSite = JSON.parse(localStorage.getItem('temaSelecionado')) || "garden"

let tarefaEmEDicao = ""
let elementoTarefaEmEdicao = ""
let corTarefa = "#00A3FF"

// btnRemoverFiltro.addEventListener('click', () => {
//     selecionaFiltro("removeFiltro")
// })

// btnCorFiltro_01.addEventListener('click', () => {
//     selecionaFiltro("vermelho")
// })

// btnCorFiltro_02.addEventListener('click', () => {
//     selecionaFiltro("rosa")
// })

// btnCorFiltro_03.addEventListener('click', () => {
//     selecionaFiltro("roxo")
// })

// btnCorFiltro_04.addEventListener('click', () => {
//     selecionaFiltro("azul")
// })

// function redesenhaPagina() {

//     document.querySelectorAll('.tarefa_lista').forEach((tarefa) => {
//         tarefa.remove()
//     })

//     listaTarefas.forEach(tarefa => {

//         const desenhaTarefaGuardadaNaLista = criaTarefa(tarefa)
//         ulListaTarefas.prepend(desenhaTarefaGuardadaNaLista)

//     });

// }

// function selecionaFiltro(corFiltro) {

//     listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'))


//     document.querySelectorAll('.opcao_filtro').forEach((opcao_filtro) => {
//         opcao_filtro.classList.remove('cor_selecionada')
//     })

//     switch (corFiltro) {

//         case "removeFiltro":

//             filtroAtivado = false

//             redesenhaPagina()

//             break;
//         case "vermelho":

//             filtroAtivado = true

//             btnCorFiltro_01.classList.add('cor_selecionada')
//             listaTarefas = listaTarefas.filter(tarefa => tarefa.corTarefa == "#D80032")

//             redesenhaPagina()

//             break;
//         case "rosa":

//             filtroAtivado = true

//             btnCorFiltro_02.classList.add('cor_selecionada')
//             listaTarefas = listaTarefas.filter(tarefa => tarefa.corTarefa == "#FF90BC")

//             redesenhaPagina()
//             break;
//         case "roxo":

//             filtroAtivado = true

//             btnCorFiltro_03.classList.add('cor_selecionada')
//             listaTarefas = listaTarefas.filter(tarefa => tarefa.corTarefa == "#7071E8")

//             redesenhaPagina()
//             break;
//         case "azul":

//             filtroAtivado = true

//             btnCorFiltro_04.classList.add('cor_selecionada')
//             listaTarefas = listaTarefas.filter(tarefa => tarefa.corTarefa == "#00A3FF")

//             redesenhaPagina()
//             break;
//     }
// }

btnCorTema_01.addEventListener('click', () => {
    selecionaTemaSite('garden')
})

btnCorTema_02.addEventListener('click', () => {
    selecionaTemaSite('sunset')
})

btnCorTema_03.addEventListener('click', () => {
    selecionaTemaSite('midnight')
})

btnCorTema_04.addEventListener('click', () => {
    selecionaTemaSite('acqua')
})


function selecionaTemaSite(temaSelecionado) {

    document.querySelector('#nome_tema-selecionado').textContent = `${temaSelecionado}`

    document.querySelectorAll('.opcao_tema').forEach((tema) => {
        tema.classList.remove('cor_selecionada')
    })

    switch (temaSelecionado) {

        case "garden":

            btnCorTema_01.classList.add('cor_selecionada')

            document.querySelector('html').style.backgroundColor = "#2AF598"
            document.querySelector('body').style.backgroundColor = "#2AF598"
            document.querySelector('header').style.background = "linear-gradient(180deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)"
            document.querySelector('#nome_tema-selecionado').style.color = "#2AF598"

            btnCancelarTarefa.style.backgroundColor = "#2AF598"
            btnSalvarTarefa.style.backgroundColor = "#2AF598"

            localStorage.setItem('temaSelecionado', JSON.stringify('garden'))

            break;

        case "sunset":

            btnCorTema_02.classList.add('cor_selecionada')

            document.querySelector('html').style.backgroundColor = "#FF5ACD"
            document.querySelector('body').style.backgroundColor = "#FF5ACD"
            document.querySelector('header').style.background = "linear-gradient(180deg, rgb(251, 218, 97) 0%, rgb(255, 90, 205) 100%)"
            document.querySelector('#nome_tema-selecionado').style.color = "#FF5ACD"

            btnCancelarTarefa.style.backgroundColor = "#FF5ACD"
            btnSalvarTarefa.style.backgroundColor = "#FF5ACD"

            localStorage.setItem('temaSelecionado', JSON.stringify('sunset'))

            break;

        case "midnight":

            btnCorTema_03.classList.add('cor_selecionada')

            document.querySelector('html').style.backgroundColor = "#261AB2"
            document.querySelector('body').style.backgroundColor = "#261AB2"
            document.querySelector('header').style.background = "linear-gradient(180deg, rgb(189, 0, 255) 0%, rgb(38, 26, 178) 100%)"
            document.querySelector('#nome_tema-selecionado').style.color = "#261AB2"

            btnCancelarTarefa.style.backgroundColor = "#261AB2"
            btnSalvarTarefa.style.backgroundColor = "#261AB2"

            localStorage.setItem('temaSelecionado', JSON.stringify('midnight'))

            break;

        case "acqua":

            btnCorTema_04.classList.add('cor_selecionada')

            document.querySelector('html').style.backgroundColor = "#0BFBE1"
            document.querySelector('body').style.backgroundColor = "#0BFBE1"
            document.querySelector('header').style.background = "linear-gradient(180deg, rgb(0, 117, 255) 0%, rgb(11, 251, 225) 100%)"
            document.querySelector('#nome_tema-selecionado').style.color = "#0BFBE1"

            btnCancelarTarefa.style.backgroundColor = "#0BFBE1"
            btnSalvarTarefa.style.backgroundColor = "#0BFBE1"

            localStorage.setItem('temaSelecionado', JSON.stringify('acqua'))

            break;
    }

}

const removeMenuLateral = () => {
    menufiltro.classList.add('hidden')
    // btnIconeFiltro.style.background = ""
    menuLixeira.classList.add('hidden')
    btnIconeLixeira.style.background = ""
    menuConfig.classList.add('hidden')
    btnIconeConfig.style.background = ""
}

// btnIconeFiltro.addEventListener('click', () => {
//     selecionaMenuLateral("icone_filtro")
// })

btnIconeLixeira.addEventListener('click', () => {
    selecionaMenuLateral("icone_lixeira")
})

btnIconeConfig.addEventListener('click', () => {
    selecionaMenuLateral("icone_config")
})

btnLateralDeletarConcluidas.onclick = () => removerTarefas(true)
btnLateralDeletarTodas.onclick = () => removerTarefas()

function removerTarefas(somenteConcluidas) {

    const seletor = somenteConcluidas ? ".concluida" : ".tarefa_lista"
    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove()
    })
    listaTarefas = somenteConcluidas ? listaTarefas.filter(tarefa => !tarefa.concluido) : []
    atualizaLocalStorage()

}

function resetaVariaveisEdicaoTarefa() {

    tarefaEmEDicao.emEdicao = false
    tarefaEmEDicao = ""
    elementoTarefaEmEdicao = ""
    atualizaLocalStorage()
}

btnAdicionarTarefa.addEventListener('click', () => {

    document.querySelectorAll('.opcao_filtro').forEach((opcao_filtro) => {
        opcao_filtro.classList.remove('cor_selecionada')
    })


    limparFormulario()

    modal_formulario.showModal()
})

btnCancelarTarefa.addEventListener('click', () => {

    if (tarefaEmEDicao.emEdicao) {

        resetaVariaveisEdicaoTarefa()
        modal_formulario.close()
    } else {
        modal_formulario.close()
    }

})

function selecionaMenuLateral(icone) {

    switch (icone) {

        case "icone_filtro":

            if (!menufiltro.classList.contains('hidden')) {

                removeMenuLateral()

            } else {

                menufiltro.classList.remove('hidden')
                // btnIconeFiltro.style.background = "rgba(255, 255, 255, 0.3)"

                menuLixeira.classList.add('hidden')
                btnIconeLixeira.style.background = ""
                menuConfig.classList.add('hidden')
                btnIconeConfig.style.background = ""
            }

            break;

        case "icone_lixeira":

            if (!menuLixeira.classList.contains('hidden')) {
                removeMenuLateral()
            } else {

                menuLixeira.classList.remove('hidden')
                btnIconeLixeira.style.background = "rgba(255, 255, 255, 0.3)"

                menufiltro.classList.add('hidden')
                // btnIconeFiltro.style.background = ""
                menuConfig.classList.add('hidden')
                btnIconeConfig.style.background = ""
            }

            break;

        case "icone_config":

            if (!menuConfig.classList.contains('hidden')) {
                removeMenuLateral()
            } else {

                menuConfig.classList.remove('hidden')
                btnIconeConfig.style.background = "rgba(255, 255, 255, 0.3)"

                menufiltro.classList.add('hidden')
                // btnIconeFiltro.style.background = ""
                menuLixeira.classList.add('hidden')
                btnIconeLixeira.style.background = ""
            }

            break;
    }

}

btnCorTarefa_01.addEventListener('click', () => {

    selecionaCorTarefa("#D80032")

})

btnCorTarefa_02.addEventListener('click', () => {

    selecionaCorTarefa("#FF90BC")

})

btnCorTarefa_03.addEventListener('click', () => {

    selecionaCorTarefa("#7071E8")

})

btnCorTarefa_04.addEventListener('click', () => {

    selecionaCorTarefa("#00A3FF")

})

function selecionaCorTarefa(cor) {

    document.querySelectorAll('.opcao_cor').forEach((botao_cor) => {
        botao_cor.classList.remove('cor_selecionada')
    })

    switch (cor) {
        case "#D80032":

            btnCorTarefa_01.classList.add('cor_selecionada')
            corTarefa = "#D80032"
            break;

        case "#FF90BC":

            btnCorTarefa_02.classList.add('cor_selecionada')
            corTarefa = "#FF90BC"
            break;

        case "#7071E8":

            btnCorTarefa_03.classList.add('cor_selecionada')
            corTarefa = "#7071E8"
            break;

        case "#00A3FF":

            btnCorTarefa_04.classList.add('cor_selecionada')
            corTarefa = "#00A3FF"
            break;

    }
}


btnDeletarTarefa.addEventListener('click', () => {

    elementoTarefaEmEdicao.remove()

    var posicaoElementoLista = listaTarefas.indexOf(tarefaEmEDicao)
    listaTarefas.splice(posicaoElementoLista, 1)

    modal_formulario.close()
    resetaVariaveisEdicaoTarefa()
    limparFormulario()


})


function limparFormulario() {

    tituloFormulario.textContent = "Nova Tarefa"
    inputTitulo.value = ""
    inputDescricao.value = ""
    btnDeletarTarefa.classList.add('hidden')

    corTarefa = "#00A3FF"

    document.querySelectorAll('.opcao_cor').forEach((botao_cor) => {
        botao_cor.classList.remove('cor_selecionada')
    })

    btnCorTarefa_04.classList.add('cor_selecionada')

    removeMenuLateral()

}

function atualizaLocalStorage() {

    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
}

function editaTarefa(tarefa, elementoTarefa) {

    removeMenuLateral()

    modal_formulario.showModal()

    tarefa.emEdicao = true

    tituloFormulario.innerHTML = `Editando: ${elementoTarefa.titulo}`
    inputTitulo.value = `${elementoTarefa.titulo}`
    inputDescricao.value = `${elementoTarefa.descricao}`

    corTarefa = tarefa.corTarefa

    selecionaCorTarefa(corTarefa)

    btnDeletarTarefa.classList.remove('hidden')

    atualizaLocalStorage()
}

function criaTarefa(tarefa) {

    const li = document.createElement('li')
    li.classList.add('tarefa_lista')

    const div_header = document.createElement('div')
    div_header.classList.add("tarefa__header")
    div_header.style.backgroundColor = tarefa.corTarefa;
    const svg = document.createElement('svg')
    svg.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#FFFFFF"></circle>
                    </svg>
    `
    const h2 = document.createElement('h2')
    h2.textContent = tarefa.titulo
    div_header.append(svg)
    div_header.append(h2)


    const div_conteudo = document.createElement('div')
    div_conteudo.classList.add("tarefa__conteudo")
    const p = document.createElement('p')
    p.textContent = tarefa.descricao
    div_conteudo.append(p)

    li.append(div_header)
    li.append(div_conteudo)

    li.onclick = () => {

        tarefaEmEDicao = tarefa
        elementoTarefaEmEdicao = li

        editaTarefa(tarefaEmEDicao, tarefaEmEDicao)



    }

    if (tarefa.concluido == true) {

        li.classList.add("concluida")
        svg.innerHTML = `
        <svg class="app_section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFFFFF"></circle>
         <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
            fill="#01080E"></path> 
    </svg>`
    }

    if (tarefa.concluido == false) {

        li.classList.remove("concluida")
        svg.innerHTML = `
        <svg class="app_section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFFFFF"></circle>
    </svg>`

    }

    svg.onclick = (evento) => {

        evento.stopPropagation()

        if (tarefa.concluido == false) {

            tarefa.concluido = true
            li.classList.add("concluida")
            svg.innerHTML = `
            <svg class="app_section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFFFFF"></circle>
             <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path> 
        </svg>`
        } else {

            tarefa.concluido = false
            li.classList.remove("concluida")
            svg.innerHTML = `
            <svg class="app_section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFFFFF"></circle>
        </svg>`
        }

        atualizaLocalStorage()


    }


    return li

}

formTarefa.addEventListener('submit', (evento) => {

    evento.preventDefault()

    if (tarefaEmEDicao.emEdicao) {

        tarefaEmEDicao.titulo = inputTitulo.value
        tarefaEmEDicao.descricao = inputDescricao.value
        tarefaEmEDicao.corTarefa = corTarefa

        elementoTarefaEmEdicao.querySelector('h2').textContent = tarefaEmEDicao.titulo
        elementoTarefaEmEdicao.querySelector('p').textContent = tarefaEmEDicao.descricao
        elementoTarefaEmEdicao.querySelector('.tarefa__header').style.backgroundColor = corTarefa

    } else {

        const tarefinha = {
            titulo: inputTitulo.value,
            descricao: inputDescricao.value,
            emEdicao: false,
            concluido: false,
            corTarefa: corTarefa
        }

        listaTarefas.push(tarefinha)

        const novaTarefa = criaTarefa(tarefinha)
        ulListaTarefas.prepend(novaTarefa)

    }

    modal_formulario.close()
    resetaVariaveisEdicaoTarefa()
    atualizaLocalStorage()
    limparFormulario()

})


listaTarefas.forEach(tarefa => {

    tarefa.emEdicao = false
    atualizaLocalStorage()

    const desenhaTarefaGuardadaNaLista = criaTarefa(tarefa)
    ulListaTarefas.prepend(desenhaTarefaGuardadaNaLista)

});

selecionaTemaSite(temaSite)




