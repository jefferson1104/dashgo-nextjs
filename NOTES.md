## REACT-QUERY

Fazer uma requisição em uma API utilizando o react-query é muito vantajoso devido a ele criar um 'cache' para guardar os dados da primeira requisição, e ao atualizar a pagina ou navegar para outro lugar e retornar ele não anula uma proxima requisição na API, via background faz essa nova requisição e atualiza os dados. O nome desse conceito é '**stale while revalidate**' que significa obsoleto enquanto revalida, ou seja os dados do cache são atualizados nessa proxima requisição da API porém em tela.

E o mais legal dessa ferramenta é que, o mesmo acontece quando o usuário sai da janela da aplicação via navegador e quando ele retorna essa requisição é feita novamente e os dados guardados em cache são atualizados se houver alguma mudança, o nome desse conceito é '**revalidate on focus**'.
