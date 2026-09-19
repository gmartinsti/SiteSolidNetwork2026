Plano de implementação:

1. Remover o menu Agência completo
- Remover o dropdown “Agência” do menu desktop.
- Remover o item “Agência” e seus subitens do menu mobile.
- Manter páginas como Portfólio e Blog acessíveis apenas se já estiverem linkadas em outras áreas, sem criar novos links.

2. Remover Gestão Smart e Suporte Smart da aba Produtos
- Remover “Gestão Smart” e “Suporte Smart” do dropdown Produtos no desktop.
- Remover os mesmos itens do menu Produtos no mobile.
- Remover os links dessas páginas no rodapé, onde também aparecem em “Serviços”.
- Remover as rotas `/servicos/gestao-smart` e `/servicos/suporte-smart` para que não fiquem páginas ativas pelo roteador.

3. Remover a conexão com Supabase
- Remover imports e uso do cliente Supabase nos formulários de Contato e Agendamento.
- Ajustar o envio desses formulários para não tentar salvar em banco nem chamar funções Supabase; eles exibirão confirmação local ao usuário após validação.
- Remover o hook `useSubmitToSupabase` e os clients Supabase do código.
- Remover a dependência `@supabase/supabase-js` dos arquivos de pacote/lock.
- Remover a pasta/configuração `supabase` do projeto, já que não será mais usada.

4. Validação
- Pesquisar novamente por referências a “Supabase”, “Gestão Smart”, “Suporte Smart” e “Agência” nos pontos de navegação para confirmar que foram removidas conforme solicitado.