# Sobre a aplicação
	Este projeto foi destinado ao aprendizado do Redux, Reducer, Store, Persistor, Styled-components, Sagas, Dispacth de ações, inclusão de imagens e manipulação de css.

# Tipos de Dados
    - string  = 'nome'
    - number  = 1234
    - boolean = true ou false
    - date    = new Date()
    - array   = []      // exemplo de lista - um array ele é composto por um conjunto de dados seja um objeto que é um {} ou uma classe ou um numero ou uma '' ou um valor booleano que é true ou false

    [6,35,42] - array de numero
    [{title:'Davi'}, {title: 'Elio'}, {title: 'Bi'}] - array de objeto

    https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows



# Tipos de funções

    - Arrow Function

        const nomedafuncao = (params) => {
            return valorderetorno
        }

    
    - Function generator

        function* nomedafuncao(params) {
            return valordafuncao
        }


# pega valor do estado global, tras todos os reducers 
    
    const state = yield store.getState() 


# Este comando serve para previnir caso haja algum tipo de erro ele executa a parte do catch

    try {
        ...conteudo do codigo
	} catch (error) {
        console.log(error)
    }

# Reducer
    É o estado da aplicação, onde é possivel guardar os dados e manipulalos podendo ser acessivel de qualquer lugar da aplicação ou sistema.
    Os dados podem ser recuperados atraves do hook chamado userSelector() que faz parte do pacote importado react-redux.

# Sagas
    É conhecido como redux, que tem como funcionalidade o gatilho por monitoramento de chaves para executar tarefas em segundo plano. 

# Sobre o import
    quando for importar um arquivo local em .js e o mesmo não conter o export default e conter apenas export const no meio do codigo.
    realizar a importação utilizando o * as exemplo: import * as nomeDeUtilizacao from 'enderecoDoArquivo'


# Lógica de programação

    - if ou ternario

    const entradaDados = 6
    const idade = 6

    // condição padrão
    if (entradaDados == idade) {
        fazAlgo .....
        return retornaAlgo1
    } else {
        fazAlgo .....
        return retornaAlgo2
    }

    // condição ternaria
    return entradaDados == idade ? retornaAlgo1 : retornaAlgo2

    para verificar se o conteudo de uma variavel é null ou vazio
        utilizar o simbolo de !
        
        1- if (!nomeDaVariavel)        
        2- !nomeDaVariavel ? ...: ...

# O que é Reducer?

    A função do reducer é receber um objeto que representa o estado “anterior” da aplicação e baseado na ação que foi realizada (podendo enviar esse estado para uma função transformá-lo, etc), retornar um objeto completamente novo que tenha copiando todas as informações do estado anterior.

# Como funciona Redux em React?

    Ele basicamente tira a responsabilidade de cada um dos componentes de armazenar os estados, deixando tudo isso centralizado, sendo utilizado ao mesmo tempo por todos os componentes de forma compartilhada. Ele também roda em diferentes ambientes como servidor, cliente e nativo.

# O que é Redux saga?

    redux-saga é uma biblioteca que foca em fazer os efeitos colaterais (ex: chamadas assíncronas para buscar dados em uma API, transformações impuras como acessar o cache do navegador, etc) em aplicações React/Redux serem mais fáceis e simples de se criar e manter.