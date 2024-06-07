<img src="../assets/logointeli.png">


# GDD - Game Design Document - Módulo 1 - Inteli


## Derma Gaming

#### Nomes dos integrantes do grupo
  1. [João Cherry](https://www.linkedin.com/in/jo%C3%A3o-rafael-cherry-sim%C3%A3o-5b845a2b2/),
  2. [Guilherme Carvalho](https://www.linkedin.com/in/guilherme-lopes-de-carvalho-7a3650186/),
  3. [Gabriela Silva](https://www.linkedin.com/in/gabriela-silvaa/),
  4. [Lucas Magalhães](https://www.linkedin.com/in/lucas-magalh%C3%A3es-8105422b2/),
  5. [Maria Pucci](https://www.linkedin.com/in/maria-pucci-9614a8272/),
  6. [Kesney Ferro](https://www.linkedin.com/in/kesney-lucas-ferro-de-oliveira-0b4514243/),
  7. [Danilo Merlo](https://www.linkedin.com/in/danilo-martins-merlo-381b76228/).

## Sumário

[1. Introdução](#c1)

[2. Visão Geral do Jogo](#c2)

[3. Game Design](#c3)

[4. Desenvolvimento do jogo](#c4)

[5. Casos de Teste](#c5)

[6. Conclusões e trabalhos futuros](#c6)

[7. Referências](#c7)

[Anexos](#c8)

<br>


# <a name="c1"></a>1. Introdução 

## 1.1. Escopo do Projeto

### 1.1.1. Contexto da indústria 

&nbsp;&nbsp;&nbsp;&nbsp;Na indústria da medicina, a competitividade entre as principais instituições de ensino superior é um reflexo da importância atribuída à formação de profissionais médicos de excelência. A Faculdade de Medicina da Universidade de São Paulo (FM-USP) se destaca como uma das principais referências no campo, juntamente com instituições de renome como a Faculdade Einstein e a ABC Medicina.

&nbsp;&nbsp;&nbsp;&nbsp;Embora não haja um grande número de concorrentes diretos, a presença de instituições como a Faculdade Einstein e a ABC Medicina indica que a competição existe e é significativa. Essas instituições, assim como a FM-USP, desempenham um papel crucial na formação de médicos e na pesquisa médica no país.

&nbsp;&nbsp;&nbsp;&nbsp;A qualidade das faculdades de medicina é fundamental, uma vez que impacta diretamente na formação de profissionais capazes de lidar com os desafios complexos da área da saúde. Além disso, a excelência acadêmica dessas instituições influencia positivamente a reputação do sistema de saúde como um todo.

&nbsp;&nbsp;&nbsp;&nbsp;A FM-USP, em particular, tem uma longa história de excelência, remontando a sua fundação em 1912. Sua posição como a mais avançada da América Latina é um testemunho do seu compromisso com a inovação e a qualidade no ensino e na pesquisa médica. A instituição não apenas forma médicos, mas também contribui significativamente para o avanço do conhecimento médico por meio de pesquisas de ponta e colaborações internacionais.

&nbsp;&nbsp;&nbsp;&nbsp;Quanto à geração de receita, a FM-USP adota uma abordagem que envolve o apoio de investidores que adquirem projetos desenvolvidos pelo corpo dicente e docente. Isso não apenas fornece financiamento para projetos inovadores, mas também promove uma cultura de empreendedorismo e colaboração entre alunos, professores e investidores.

&nbsp;&nbsp;&nbsp;&nbsp;Em suma, o contexto da indústria da medicina no Brasil é caracterizado por uma competição entre instituições de ensino superior de renome, como a FMUSP, a Faculdade Einstein e a ABC Medicina. A qualidade dessas instituições é fundamental para o desenvolvimento de profissionais médicos capacitados e para o avanço da pesquisa médica no país. A FMUSP, em particular, destaca-se como uma líder na área, com uma longa história de excelência e um compromisso com a inovação e o avanço do conhecimento médico.

### 1.1.2. Análise SWOT 

&nbsp;&nbsp;&nbsp;&nbsp;Análise SWOT, ou FOFA, é uma ferramenta de gestão que examina os pontos fortes (strengths), fraquezas (weaknesses), oportunidades (opportunities) e ameaças (threats) de um projeto, empresa ou situação. Essa análise proporciona uma compreensão abrangente do ambiente interno e externo, permitindo a identificação de fatores críticos para o sucesso e desafios a serem superados. Em uma perspectiva de oportunidades e ameaças,faz-se necessário compreender que ambos os casos são possibilidades baseadas em projeções de futuro que podem impactar diretamente os produtos, mesmo estando fora do controle do negócio. Nesse contexto, é essencial aplicar a análise SWOT para identificar e avaliar as características específicas da FM-USP, incluindo recursos e habilidades, bem como as tendências de mercado e a concorrência. Assim, a seguinte abordagem e a Figura 1 visam orientar o planejamento estratégico, facilitar a tomada de decisões e otimizar o desenvolvimento do produto final:

<p align="center"> Figura 1: Análise SWOT</p>
<br>

![imagem swot](/assets/SWOTAtualizado.png)
<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>

**Forças** (Strenghts) — Aspectos Internos que permitem o sucesso:

* **Reconhecimento nacional e global:** A FM-USP é reconhecida internacionalmente por sua excelência acadêmica e pesquisa em medicina, atraindo talentos e recursos.
* **Renomado corpo docente:** A FM-USP tem um corpo docente e discente altamente qualificado e experiente em diversas áreas.
* **Infraestrutura avançada:** Instalações de pesquisa modernas e laboratórios bem equipados possibilitam estudos clínicos inovadores e o desenvolvimento de terapias para queimaduras.

**Fraquezas** (Weaknesses) — Aspectos internas que podem ser melhorados:

* **Restrições orçamentárias:** Desafios financeiros podem limitar investimentos em pesquisa, infraestrutura e atualização de equipamentos.
* **Burocracia institucional:** Processos administrativos complexos podem atrasar a implementação de novas abordagens de tratamento.
* **Limitações de recursos humanos:** Dificuldades na contratação e retenção de pessoal qualificado são enfrentadas, devido à competição e demanda por especialistas.
* **Barreiras de comunicação com o público:** Dificuldade em comunicar eficazmente informações médicas complexas limita o impacto dos trabalhos em campo com o público alvo.

**Oportunidades** (Opportunities) — Fatores externos que podem ser aproveitados para o desenvolvimento :

* **Colaborações hospitalares:** Parcerias com hospitais de renome oferecem acesso a casos clínicos variados e equipamentos de ponta para pesquisa e tratamento.
* **Demandas crescentes:** Aumento de acidentes cria uma demanda por avanços no tratamento de queimaduras, possibilitando à FM-USP liderar a inovação.
* **Acesso aos avanços tecnológicos:** O acesso ao desenvolvimento de tecnologias médicas, como terapias a laser e impressão 3D, possibilitam novas abordagens no tratamento.
* **Colaborações interdisciplinares:** Sendo parte da USP, a FM tem maior facilidade de acesso à parcerias com os melhores profissionais de outras disciplinas, fator que contribui para a aplicação de abordagens inovadoras no desenvolvimento de terapias.

**Ameaças** (Threats) — Fatores externos que apresentam desafios para o desenvolvimento:

* **Crescente concorrência acadêmica:** Outras instituições, tanto do setor público como do privado, apresentam um crescimento elevado na área de pesquisa médica ao passo que também buscam avanços no tratamento de queimaduras, assim, competindo por financiamento e talentos.
* **Mudanças nas políticas de saúde:** Alterações nas políticas do Sistema Unificado de Saúde (SUS) e outros órgãos públicos podem reduzir os recursos  disponíveis para pesquisa, tratamento e aplicação das tecnologias desenvolvidas pela FM-USP.
* **Aumento do custo dos insumos:** Mudanças na economia em razão da recessão econômica global causada pelo COVID-19, bem como a alta demanda, aumentou os custos para adquirir insumos necessários para tratamentos e pesquisa.

**Nossa visão da situação do parceiro (situação interna) em relação à concorrência.**

&nbsp;&nbsp;&nbsp;&nbsp;Atualmente, o mercado de faculdades de medicina está em expansão. Com a alta demanda e baixa oferta desse curso, bem como a proposta de remuneração associada a ele, diversas universidades privadas surgiram para atender a essa necessidade. Entretanto, a Faculdade de Medicina da USP ainda é, acima de tudo, a principal referência no cenário de desenvolvimento profissional e acadêmico do Brasil e da América Latina. Portanto, embora os riscos e fraquezas identificados na análise anterior sejam significativos, fatores como a qualidade dos profissionais e o excelente renome conseguem compensar muitas das deficiências administrativas e logísticas do parceiro.

### 1.1.3. Descrição da Solução Desenvolvida 

**a. Qual é o problema a ser resolvido?**

&nbsp;&nbsp;&nbsp;&nbsp;O problema a ser resolvido é a falta de prevenção de queimaduras e a disseminação de informações incorretas sobre métodos de tratamento para queimados. Isso porque, na atualidade, muitas pessoas não estão cientes das práticas corretas para prevenir queimaduras ou para tratá-las adequadamente quando ocorrem. Além disso, existem muitos mitos e tratamentos caseiros que podem ser prejudiciais de maneira que é crucial educar o público sobre as medidas preventivas e os procedimentos adequados de primeiros socorros para queimaduras.

**b. Quais os dados disponíveis (fonte e conteúdo)?**

&nbsp;&nbsp;&nbsp;&nbsp;Os dados disponíveis incluem artigos científicos e literatura médica relacionados a queimaduras, suas causas, tipos, tratamentos e medidas preventivas. Esses dados podem ser obtidos em periódicos médicos, bancos de dados acadêmicos e sites confiáveis de saúde. Além disso, recursos visuais como imagens e vídeos podem ser encontrados em fontes online e em organizações de saúde. Consultar socorristas e profissionais de saúde também pode fornecer insights valiosos sobre a prática no campo.

**c. Qual a solução proposta?**

&nbsp;&nbsp;&nbsp;&nbsp;A solução proposta é o desenvolvimento de um jogo educativo interativo do tipo "serious game" no estilo de "Papers, Please", onde os jogadores assumem o papel de socorristas encarregados da investigação de queimados. O jogo proporcionará uma simulação realista de situações de emergência do cotidiano envolvendo queimaduras, permitindo que os jogadores aprendam e pratiquem os procedimentos corretos de avaliação do caso. Através dessa experiência imersiva, os jogadores seriam educados sobre como reconhecer diferentes tipos de queimaduras, avaliar sua gravidade e o que pode ou não ser feito nessas situações

**d. Como a solução proposta deverá ser utilizada?**

&nbsp;&nbsp;&nbsp;&nbsp;A solução proposta será utilizada como uma ferramenta educacional interativa, disponível em plataformas digitais, como computadores e dispositivos móveis. O jogo estará acessível ao público em geral, especialmente a estudantes do ensino médio de escolas públicas. Em parceria com a FM-USP, o Queimaduras Zero tem a intenção de ser utilizado em apresentações realizadas atualmente em escolas da rede pública com o intuito de conscientizar os alunos acerca do tema. A solução vigente trata-se de uma apresentação de slides combinada com o Kahoot, de maneira que o jogo substituiria o último.

**e. Quais os benefícios trazidos pela solução proposta?**

&nbsp;&nbsp;&nbsp;&nbsp;Os benefícios trazidos pela solução proposta incluem a disseminação de informações precisas sobre prevenção e tratamento de queimaduras, a redução de mitos e práticas prejudiciais, o aumento da conscientização sobre a gravidade das queimaduras e a capacitação dos jogadores para agir de forma eficaz em situações de emergência. Além disso, o jogo oferece uma abordagem inovadora e envolvente para a educação em saúde, que pode atrair e engajar um público amplo.

**f. Qual será o critério de sucesso e qual medida será utilizada para avaliá-lo?**

&nbsp;&nbsp;&nbsp;&nbsp;O critério de sucesso será medido pela eficácia do jogo em educar os jogadores sobre prevenção e tratamento de queimaduras, bem como pela sua capacidade de engajar e reter o público-alvo. Como métrica para esse aprendizado o próprio jogo utiliza de ferramentas de quiz e feedback que testam frequentemente o conhecimento adquirido pelo usuário e garantem que a experiência seja o mais proveitosa possível, instigando o jogador a utilizar de sua percepção analítica para alcançar o melhor desempenho possível.


### 1.1.4. Proposta de Valor 

&nbsp;&nbsp;&nbsp;&nbsp;A proposta de valor é uma poderosa ferramenta para analisar o público-alvo, já que, por meio dela, é possível mapear os desejos e as dores mais fortes do público e compreender quem é o cliente, o que ele precisa e como o nosso produto pode ajudá-lo a conquistar o que ele deseja ao resolver uma dor forte que possui [(FERREIRA, 2024)](#FERREIRA). Assim, o projeto de Queimaduras Zero apresenta a Proposta de valor representada pela Figura 2 como uma maneira de compreender melhor a requisição do cliente e como abordar as necessidades do mercado objetivado.

<p align="center"> Figura 2 - Canvas Proposta de valor </p>

![imagem swot](/assets/canvas-atualizado.jpg)

<p align ="center"> Fonte: Material produzido por Strategyzer (2023)</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;No modelo de canva de proposta de valor a parte a direita do diagrama representada por um círculo demonstra o segmento de clientes e suas necessidades. Nele, destacam-se:

**Ganhos (Gains)** — O que os clientes desejam alcançar com nosso produto ou serviço:

* **Ferramenta educacional interativa:** Busca-se uma ferramenta que permite aprendizado contínuo e interativo.
* **Disseminação de informações verídicas sobre queimaduras:** Em meio a muitos mitos sobre o tratamento de queimaduras, o usuário busca por meio de Queimaduras Zero encontrar informações verídicas e de qualidade.
* **Pessoas interessadas em aprender:** Objetiva-se um jogo que gera interesse no usuário.
* **Diminuir casos de queimaduras:** Com maior acesso à conscientização, os usuários de Queimaduras Zero precisam de uma solução que possa informar a população e, por consequência, diminuir os casos de queimaduras.

**Dores (Pains)** — Problemas ou preocupações do cliente:

* **Complexo para compreensão de crianças:** Observando a proposta atual de apresentação, uma das dores do cliente é a dificuldade de compreensão do modelo atual, de maneira que objetiva-se tornar o jogo compreensível até para crianças.
* **Falta de interesse:** Ao passo que o conteúdo apresentado pela FM-USP, atualmente, é apresentado por meio de slides e, posteriormente, um Kahoot, existe uma dor gerada pela falta de interesse nesse modelo pouco autêntico

**Trabalhos do Cliente(Costumer Job's)** — Principais trabalhos ou objetivos do cliente:

* **Apresentações e aulas sobre queimaduras:** Atualmente, os usuários adquirem o conhecimento sobre queimaduras por meio de aulas e Kahoots

&nbsp;&nbsp;&nbsp;&nbsp;Já na parte a esquerda do diagrama, representada por um quadrado, observa-se a proposta de valor da empresa, ou seja, como ela atende às necessidades do cliente. Nessa, destacam-se:

**Geradores de Ganhos (Gain Creators)** — Como a solução proporciona benefícios aos clientes:

* **Combate a desinformação generalizada:** Por meio de quizzes bem estruturados e de uma ferramenta de guia para o usuário, Queimaduras Zero proporciona ao usuário um combate eficaz aos mitos gerais acerca do tema.
* **Fácil compreensão e Aprendizado Ágil:** Utilizando de mecânicas simplificadas e intuitivas a proposta é fácil de compreender e rápida de se adaptar às mecânicas.
* **Apresentações divertidas:** Com gráficos dedicados a um elevado padrão de experiência de usuário, Queimaduras Zero apresenta uma maneira única de apresentar grandes quantidades de informação sem sobrecarregar o usuário.
* **Conscientização:** Utilizando de casos cotidianos, o jogo permite a conscientização sobre a prevenção e tratamento adequado de queimaduras.

**Analgésicos (Pain Relievers)** — Como a solução alivia as dores do cliente:

* **Fácil Engajamento:** Com uma experiência de enredo envolvente que mantém o interesse do público, o engajamento é natural e contínuo durante toda a jogatina.
* **Aprendizado Lúdico:** Utilizando de recursos visuais engajantes o aprendizado se torna natural no jogo combatendo diretamente a falta de interesse inicial.
* **Acolhe um público abrangente:** Pensando na limitação inicial de público alvo, a proposta simplificada de Queimaduras Zero, alinhada com os inúmeros recursos de engajamento do jogo favorecem a expansão do público atendido, de maneira que o jogo torna-se uma experiência única para todos os tipos de usuários. 
* **Gera interesse e diversão enquanto ensina sobre queimaduras:** Visando mudar o aspecto monótono da apresentação inicial, o jogo favorece a diversão do usuário com a interação com diferentes ferramentas e dinâmicas de conversa com o NPC. 

**Produtos & Serviços (Products & Services)** — Os produtos e serviços oferecidos:

* **Jogo educativo "Point and Click":** Por meio de Queimaduras Zero, um jogo no estilo Serious Game, é possível trazer alto valor agregado ao cliente, proporcionar ganhos únicos e aliviar as dores da proposta prévia.

&nbsp;&nbsp;&nbsp;&nbsp;Em resumo, através da análise detalhada dos segmentos de clientes e da proposta de valor da empresa, destacam-se os desejos dos clientes, as dores que enfrentam e os trabalhos que precisam realizar. A solução se concentra em fornecer ganhos significativos aos clientes, combatendo a desinformação, facilitando o aprendizado e tornando as apresentações mais envolventes. Ao mesmo tempo, aliviam-se as dores do cliente, tornando o engajamento mais fácil, o aprendizado mais lúdico, acolhendo um público amplo e tornando o processo de aprendizado mais interessante e divertido.

&nbsp;&nbsp;&nbsp;&nbsp;Logo, com o jogo educativo "Point and Click" oferecido por Queimaduras Zero, proporciona-se uma experiência única e de alto valor aos clientes, oferecendo ganhos tangíveis e aliviando suas dores de forma eficaz.

### 1.1.5. Matriz de Riscos 

&nbsp;&nbsp;&nbsp;&nbsp;A matriz de risco é uma ferramenta extremamente importante utilizada para avaliar a chance de um evento acontecer e quais seriam seus impactos no ambiente da empresa ou instituição. Separada por probabilidade de algo acontecer e impacto caso esse risco aconteça, a matriz de risco é usada para prever possíveis problemas e avaliar potenciais riscos dentro de um setor. 

&nbsp;&nbsp;&nbsp;&nbsp;Para montar uma matriz de risco, é necessário descrever qual é a oportunidade ou ameaça para depois classificá-la entre sua probabilidade de acontecer e o seu impacto. Caso a chance de um risco ocorrer seja grande e o impacto também, é importante que a equipe se prepare para contornar os danos ou aproveitar os benefícios que ele pode trazer, entretanto, se a probabilidade for baixa e o impacto também, o foco deve ser redirecionado para aqueles riscos com maior probabilidade e impacto. Dessa forma, além de fornecer uma visão ampla do cenário da empresa/projeto, a matriz de risco contribui para a tomada de decisões inteligentes e analíticas.

<p align="center"> Figura 3 - Matriz de risco</p>

![matriz de risco](/assets/matriz-atualizada.png)
<p align="center"> Fonte: Material produzido pelos autores (2024)</p>


**AMEAÇAS (acompanhadas de sua probabilidade e impacto, respectivamente):**


**Jogabilidade complexa (10%, muito baixo)**
* **Contexto:** Por se tratar de um jogo educativo, o objetivo é garantir que todos que tenham acesso consigam jogar e compreender o conteúdo abordado.
* **Plano de ação:** Simplificar as mecânicas desenvolvidas dentro do jogo, investir mais tempo no tutorial inicial e recolher feedbacks por meio de testes para saber o que deve ser refinado antes da entrega final. 

**Mudanças no projeto ao longo do desenvolvimento (10%, alto)**
* **Contexto:** Com os feedbacks, conselhos e objetivos do parceiro FMUSP, ao longo do desenvolvimento do projeto algumas alterações podem ser necessárias tanto na mecânica do jogo, quanto no design ou em alguma característica que os parceiros decidam ou entendam como importante.
* **Plano de ação:** Alinhar expectativas com o parceiro a cada entrega de sprint e manter uma boa comunicação para tirar potenciais dúvidas sobre quais devem ser os próximos passos para uma boa entrega.

**Ruídos de comunicação (10%, muito alto)**
* **Contexto:** Devido a quantidade de tarefas e compromissos, é essencial que a comunicação interna do grupo mantenha sua qualidade sendo assertiva e eficaz procurando uma boa manutenção das relações entre a equipe até o final do projeto.
* **Plano de ação:**  manter os meios de comunicação e de trabalho organizados e atualizados, além de garantir que todos os membros da equipe saibam quais são as tarefas designadas para cada um e o estágio de desenvolvimento que cada uma se encontra.

**Sobrecarga da equipe (90%, alto)**
* **Contexto:** O impacto deste risco reflete diretamente na produtividade e desempenho da equipe no geral, podendo trazer outros problemas maiores para o projeto já que além do trabalho em equipe, planos pessoais devem ser considerados na rotina de cada um.
* **Plano de ação:** Dividir as tarefas de revisão do projeto e garantir que todos estejam cientes do que falta ser realizado para a entrega final. Além disso, monitorar as tarefas do kanban a fim de garantir uma distribuição justa entre os membros da equipe.

**OPORTUNIDADES (acompanhadas de sua probabilidade e impacto, respectivamente):**

* **Reconhecimento (70%, muito alto)**
Por conta da parceria com a FMUSP, a grande quantidade de conteúdo de qualidade que temos para a produção do jogo e as instruções com os acadêmicos e com a pesquisadora responsável pela área de queimados traz para o projeto uma grande oportunidade de reconhecimento e destaque.
* **Conscientização por meio da gamificação (90%, alto)**
Os jogos possuem uma grande aceitação do público-alvo em razão dos processos de gamificação do aprendizado, tornando-se uma ferramenta eficaz para resolver o problema apresentado.
* **Combate aos mitos (90%, muito alto)**
O combate aos mitos potencializa a eficácia do jogo, pois além de desmistificar atitudes cotidianas erradas contra queimaduras, ajuda na proliferação das informações de qualidade.


 &nbsp;&nbsp;&nbsp;&nbsp; Durante a realização de cada sprint, os objetivos e tarefas da equipe DermaGaming variaram de acordo com a prioridade definida para os artefatos e entregas da semana. Com isso, a cada planejamento feito no início de sprint, as probabilidades de cada risco previsto de acontecer foram alteradas e seus impactos foram recalculados para que ficassem de acordo com o andamento do projeto.

 &nbsp;&nbsp;&nbsp;&nbsp; No final da sprint 4 e início da sprint 5, a maioria dos riscos do início do projeto já não representavam mais uma ameaça para o desenvolvimento e para a evolução do jogo Queimaduras Zero, como, por exemplo, o risco de não conseguir avaliar o aproveitamento do jogo pelo usuário que foi resolvido com a implementação de um questionário de 5 perguntas ao final de cada jogatina. Dessa forma, além de avaliar os conhecimentos do jogador e quais informações foram absorvidas da cutscene e da análise dos elementos da tela principal, o jogo torna-se mais divertido e competitivo, impactando em outros riscos iniciais do projeto, como na antiga preocupação sobre o possível desinteresse dos jogadores. Além disso, outras ameaças como a representação inadequada de queimaduras também foram resolvidas por meio de adaptações e refinamentos no projeto que permitem a compreensão acerca do assunto, mas sem causar desconforto em nenhum usuário, por exemplo, a representação das camadas da pele dentro do tablet.
 
 &nbsp;&nbsp;&nbsp;&nbsp; Porém, mesmo com mudanças no planejamento e no projeto, os riscos se alteram e alguns continuaram representando uma ameaça, seja baixa ou alta, ao desenvolvimento do projeto. Um exemplo disso é o risco da jogabilidade ser muito complexa para o público-alvo que o projeto atende, porém, apesar de continuar representando um perigo à taxa de aceitação do jogo pelo público, sua probabilidade de acontecer e o seu impacto no projeto reduziram com os ajustes feitos visando a simplificação do jogo e a intuitividade das tarefas a serem realizadas.
 
 &nbsp;&nbsp;&nbsp;&nbsp; Contudo, mesmo que tenha requisitado baixa atenção da equipe durante a sprint 4, um plano de ação foi moldado para evitar que a prioridade desse risco retorne para alta. Como ação de combate à jogabilidade complexa, um tutorial do jogo foi desenvolvido e, além dele, os elementos interativos estão em destaque do resto da tela. Por meio disso, a experiência do jogador será a mais intuitiva e proveitosa possível.
 
 &nbsp;&nbsp;&nbsp;&nbsp; Outros riscos que permaneceram e receberam um novo plano de ação são: a sobrecarga da equipe, os ruídos de comunicação e as mudanças imprevistas no projeto. Entre eles, o mais preocupante para o desenvolvimento do projeto e que demanda atenção da equipe para resolver é a sobrecarga dos membros na etapa final do desenvolvimento do MVP, pois, com a revisão de todo o jogo e dos materiais auxiliares do processo de criação, todos os membros participam ativamente para que a melhor versão possa ser entregue e acabam sobrecarregados com tarefas. Portanto, para resolver essas ameaças, medidas como a revisão constante da organização, a comunicação assertiva e o alinhamento de expectativas foram essenciais dentro da equipe.

  ### 1.1.6. 5 Forças de Porter

&nbsp;&nbsp;&nbsp;&nbsp;Desenvolvida pelo economista Michael E. Porter, as 5 Forças de Porter é uma poderosa ferramenta estratégica para analisar a competição dentro de uma indústria. Essa abordagem tem como objetivo principal determinar a intensidade da concorrência e, por consequência, a atratividade e a lucratividade de um mercado. As forças englobam a ameaça de novos entrantes, a ameaça de produtos ou serviços substitutos, o poder de barganha dos fornecedores e dos clientes, e a rivalidade entre concorrentes existentes. Compreender essas dinâmicas auxilia empresas e instituições a desenvolverem estratégias mais eficazes para competir, inovar e atingir sucesso no mercado.

&nbsp;&nbsp;&nbsp;&nbsp;Para a Faculdade de Medicina da USP, a aplicação das 5 Forças de Porter é extremamente benéfica visto que essa ferramenta permite uma análise profunda do ambiente competitivo, ressaltando a necessidade de compreender tanto as ameaças quanto as oportunidades no setor educacional médico. Assim, as forças de Porter, como observadas na Figura 5 [(GARAGE; VASQUES, 2023)](#GARAGE), atuam como uma bússola mercadológica estratégica, possibilitando a FM-USP manter sua posição como uma das principais faculdades de medicina do mundo.

<br>

<p align="center"> Figura 4: 5 forças de porter</p>
<p align="center">
  <img src="/assets/5forcasdeporter.png" alt="5 Forças de Porter"></img>
</p>
<p align="center">Fonte: Material produzido por Garage e Vasques (2023)</p>
<br>


**Ameaça de entrada de novos concorrentes** — Avaliação das dificuldades enfrentadas por novas faculdades de medicina para ingressar no mercado devido ao alto padrão de qualidade e prestígio estabelecidos pela USP:

* **Rigorosos requisitos de credenciamento:** Devido ao rigor de credenciamento exigido por órgãos governamentais como o MEC para a criação de uma instituição acadêmica de nível superior é complicada a inserção de novos entrantes no mercado de forma legitimada.
* **Elevados padrões acadêmicos e regulatórios:** Considerando o cenário em que o novo entrante obtém os requisitos legais necessários para estar no mercado, ainda assim, existem requisitos legais e de manutenção de status que dificultam a operação da instituição, como dificuldade de aprovação para criação de infraestrutura e investimento.
* **Necessidade de altos investimentos:** Baseado ainda na ideia que o novo entrante supera o estado inicial de adquirir legalidade, ainda faz-se necessário altos investimentos na infraestrutura e na compra de equipamentos técnicos, de maneira que a barreira de entrada torna-se quase insuperável.


**Conclusão da ameaça de novos entrantes:** Em razão dos fatores supramencionados, existe uma barreira alta que diminui a ameaça de novos entrantes no mercado, tornando-a baixa, visto que o mercado de faculdades de medicina é fundado em uma característica difícil de se adquirir — prestígio. Assim, o impacto potencial de novos entrantes é bem baixo, visto que a consolidação na indústria é improvável.



**Ameaça de produtos ou serviços substitutos** — Análise dos métodos de educação alternativos que podem competir com a oferta educacional tradicional da Faculdade de Medicina da USP:

* **Cursos online e programas de educação a distância:** Com o aumento de cursos online e programas EAD a prática da medicina é também ensinada no meio online, todavia, em razão da necessidade de prática, evidencia-se o baixo risco de substituição visto que o modelo online não permite de maneira igualmente proveitosa a prática médica na formação e nos fins educativos propostos na indústria tradicional da medicina.
* **Avanços em tecnologias de simulação e realidade virtual:** Seguindo os padrões do tópico anterior, o uso de realidade virtual e aumentada para os fins médicos torna-se cada vez mais uma realidade proeminente no ensino médico, no entanto, ainda não é possível dizer que esse modelo surja como um complemento forte o suficiente para a substituição do produto ofertado pelo modelo tradicional em vista dos impactos da dinâmica que o método de ensino atual propõe.

**Conclusão da ameaça de produtos ou serviços substitutos:** Em resumo, apesar dos avanços em cursos online, educação a distância, e tecnologias de simulação, a prática médica presencial continua sendo essencial na formação da medicina, tornando baixo o risco de substituição dos métodos educacionais tradicionais da Faculdade de Medicina da USP — todavia esse fator evidencia uma possível incorporação dessas tecnologia na área no futuro.



**Poder de negociação dos fornecedores** — Análise da relação entre a faculdade e os fornecedores de equipamentos médicos, tecnologia educacional e material didático:


* **Especificidades dos produtos necessários:** Na atualidade existem poucas empresas no mundo que tem a tecnologia e são legalmente capacitadas para produzir insumos e maquinário médico.
* **Baixa disponibilidade de docentes:** Para além da parte técnica, os poucos docentes altamente capacitados presentes no mercado também apresentam-se como fornecedores de um dos produtos mais requisitados pelas faculdades — conhecimento.

**Conclusão do poder de negociação dos fornecedores:** Visto a alta especificidade dos insumos e tecnologias necessárias para o avanço na área da tecnologia, em paralelo com a baixa disponibilidade de fornecedores, o poder de barganha dos fornecedores do ramo médico, principalmente tecnológico e de docentes é muito alto, de maneira que os orçamentos costumam ser pouco flexíveis e demandam grande investimento dos players.



**Poder de negociação dos clientes** — Exame do poder de barganha dos estudantes e pacientes atendidos pelas clínicas-escola da USP:

* **Expectativa dos estudantes:** Dado o prestígio associado à posição de médico na sociedade, existe uma expectativa dos estudantes (clientes) acerca do produto que querem receber, no entanto esses não tem muito poder de negociação em vista do poder que as instituições médicas detém e na burocracia envolvida nos processos de mudança estrutural dessas instituições.  

**Conclusão do poder de barganha do cliente:** Em resumo, mesmo que exista certo nível de poder barganha do cliente nessa indústria, de modo geral, a viabilidade das requisições, somado ao amplo desejo de status garantido pela título que faculdades de medicina concedem, reduzem significativamente o poder de barganha do cliente



**Rivalidade entre os concorrentes** — Avaliação da competição entre a Faculdade de Medicina da USP e outras instituições de ensino superior renomadas:

* **Faculdades Públicas de Medicina:** Há uma rivalidade significativa com outras instituições públicas de medicina (Unesp, Unicamp, Unifesp, etc), devido à semelhança na qualidade do ensino e ao prestígio associado às universidades públicas de maneira que apenas a excelência acadêmica pode gerar destaque entre elas.

* **Faculdades Privadas de Medicina:** A concorrência com faculdades privadas (Albert Einstein, PUC-SP, Santa Casa), por sua vez, também é relevante, especialmente devido aos recursos financeiros adicionais e à capacidade de investimento em infraestrutura e tecnologia que esses segundos players têm.

**Conclusão da rivalidade entre os concorrentes:** Dessa forma, um dos fatores que mais corroboram com o desenvolvimento e, ao mesmo tempo, os desafios de faculdades na área são a balança estabelecida com a menor burocracia e maior disponibilidade de recursos garantido a faculdades privadas; e, por outro lado, o prestígio e excelência acadêmica das faculdades públicas, principalmente no âmbito de pesquisa. Logo, a rivalidade entre concorrentes, em múltiplos campos (empresarial, industrial, acadêmico e etc) é acirrada de modo que cada vez mais vemos players dentro da indústria concorrendo por destaque

&nbsp;&nbsp;&nbsp;&nbsp;Em suma, a análise das 5 Forças de Porter revela que a Faculdade de Medicina da USP ocupa uma posição robusta e invejável no cenário educacional médico. Enfrentando ameaças limitadas de novos entrantes e produtos substitutos, exercendo poder sobre seus clientes com uma oferta educacional de alta demanda, e navegando em um ambiente de moderada rivalidade entre concorrentes, a USP se destaca como uma líder na educação médica. Para sustentar e fortalecer ainda mais esse renome, a instituição deve continuar investindo na inovação do seu currículo, na integração de novas tecnologias e métodos de ensino, e na expansão de suas parcerias e redes de pesquisa. Assim, mantendo-se adaptável, proativa e sempre à frente das tendências, a Faculdade de Medicina da USP pode não apenas preservar, mas também elevar seu prestígio no cenário educacional global.


## 1.2. Requisitos do Projeto

 &nbsp;&nbsp;&nbsp;&nbsp;Na elaboração de um projeto, os requisitos desempenham um papel central ao definirem o escopo e as expectativas do cliente. Eles abrangem elementos como conteúdo e jogabilidade, e são essenciais para garantir uma comunicação eficaz entre os desenvolvedores e o cliente, permitindo que as habilidades da equipe sejam empregadas de maneira eficiente para atender às necessidades do cliente. Os requisitos não apenas delineiam o que deve ser alcançado, mas também proporcionam uma estrutura para avaliar o progresso do projeto, garantindo que o produto final corresponda às expectativas e requisitos específicos do cliente [(PARK, 2024)](#PARK).

<p align="center"> Tabela 1 - requisitos do projeto</p>


\# | Requisito  
--- | ---
1 | O jogo deve ser lúdico;
2 | A interface do jogo deve ser atrativa para todas as idades;
3 | A interface do jogo deve ser intuitiva e simples para o usuário;
4 | O jogo deve funcionar em navegadores web;
5 | As ações serão realizadas por meio de cliques na tela;
6 | O jogo deve conscientizar a população através da prevenção de queimaduras;
7 | O jogo deve capacitar o jogador a prestar primeiros socorros para queimaduras de maneira apropriada;
8 | O jogo deve conter informações sobre as camadas da pele humana (Epiderme, derme e hipoderme);
9 | O jogo deve desmistificar as práticas inadequadas de tratamento de queimaduras, normalmente, difundidas na sociedade;
10| O jogo deve exemplificar como agir em situações cotidianas que podem gerar risco de queimaduras;
11| A jogabilidade deve ser simples para garantir o aprendizado do público-alvo.

 &nbsp;&nbsp;&nbsp;&nbsp;Com os requisitos apresentados define-se o escopo do projeto e entende-se o que está sendo solicitado pelo cliente. Esse entendimento colabora significativamente com a elaboração de um planejamento efetivo por parte dos desenvolvedores com o intuito de entregar um mínimo produto viável (MVP) de excelência.

## 1.3. Público-alvo do Projeto

 &nbsp;&nbsp;&nbsp;&nbsp;O conceito de público-alvo diz respeito a um grupo de consumidores que compartilham características em comum. Assim, para o projeto, compreender o público alvo faz-se necessário visando garantir o desenvolvimento de uma solução que atenda às necessidades e expectativas desse perfil de consumidores [(KOTLER, 2000)](#KOTLER). Ao entender o público-alvo, é possível direcionar os esforços de marketing, design e desenvolvimento para criar produtos ou serviços que sejam verdadeiramente relevantes e úteis para esses consumidores. Isso envolve a análise detalhada de características demográficas, comportamentais, psicográficas e outras informações relevantes sobre o público-alvo. Além disso, compreender o público-alvo ajuda a definir estratégias de comunicação mais eficazes, identificar canais de distribuição adequados e até mesmo ajustar o preço do produto para se adequar ao poder aquisitivo e às preferências dos consumidores.

 &nbsp;&nbsp;&nbsp;&nbsp;No caso do jogo Queimaduras Zero, o público-alvo do jogo são adolescentes que frequentam escolas públicas e enfrentam limitações no acesso a informações médicas de qualidade. Este grupo geralmente possui conhecimento limitado sobre queimaduras e é frequentemente exposto a informações incorretas sobre tratamento e prevenção, muitas vezes provenientes de suas próprias famílias. Além disso, devido ao contexto socioeconômico de baixa renda, esses adolescentes dependem principalmente de dispositivos digitais, como celulares, notebooks ou computadores, para acessar conteúdo educacional e de entretenimento.

 &nbsp;&nbsp;&nbsp;&nbsp;O jogo é projetado para ser jogado após uma apresentação informativa sobre queimaduras em escolas públicas. Portanto, é essencial que o jogo seja capaz de complementar os métodos de prevenção e primeiros socorros de queimaduras e reforçar os conceitos discutidos nesta apresentação de forma envolvente e acessível para este público-alvo específico. Os adolescentes buscam por experiências interativas que os prendam desde o início, com gráficos cativantes e mecânicas de jogo interessantes.

 &nbsp;&nbsp;&nbsp;&nbsp;Assim, o jogo deve oferecer uma abordagem educacional eficaz e, ao mesmo tempo, divertida e envolvente, garantindo que os adolescentes permaneçam engajados e aprendam os conceitos de forma significativa. Isso pode incluir elementos como desafios interativos, simulações realistas de situações relacionadas a queimaduras, feedback imediato sobre as decisões tomadas no jogo e uma progressão de dificuldade que mantenha os jogadores motivados a continuar jogando e aprendendo. Ademais, baseado nessa experiência, objetiva-se alcançar públicos que saem do âmbito primário apresentado e permeiam todas as comunidades, idades e classes econômicas, tendo em vista que a conscientização, é importante para todos.

# <a name="c2"></a>2. Visão Geral do Jogo

## 2.1. Objetivos do Jogo

 &nbsp;&nbsp;&nbsp;&nbsp;O objetivo de um jogo é variado entre diferentes gêneros. Em jogos como Doodle Jump, produzido pela Lima Sky, o objetivo é entreter. Já em outros gêneros há uma reflexão sobre temas pouco abordados pela comunidade. No caso de Queimaduras Zero, objetiva-se transmitir ao jogador meios de prevenção de queimaduras e acidentes, mostrar o tratamento básico antes de ir ao hospital e desmistificar crenças populares que, geralmente, agravam a situação clínica do queimado. Com o fim de atingir esse objetivo, utilizaremos de ferramentas e diálogos entre as personagens controláveis e não-controláveis.

## 2.2. Características do Jogo

### 2.2.1. Gênero do Jogo

 &nbsp;&nbsp;&nbsp;&nbsp;Jogos possuem diversos gêneros, que podem possuir inúmeras variações e subespécies. Essa categorização pode variar de acordo com os aspectos a  serem diferenciados como o estilo, a proposta e o público alvo. No caso de Queimaduras Zero, o gênero do jogo é a princípio do tipo simulador na subclasse "Serious Game", em que as mecânicas presentes servem, sobretudo, para conscientizar o jogador sobre um tema sério que são as queimaduras e colocá-lo na posição de protagonista dos atendimentos e prevenção.

### 2.2.2. Plataforma do Jogo

 &nbsp;&nbsp;&nbsp;&nbsp;A fim de jogar qualquer jogo, faz-se necessário uma plataforma, ou seja, um dispositivo onde o programa irá ser executado. Em Queimaduras Zero, os meios principais de funcionamento do jogo serão os computadores (laptops e desktops) como também os dispositivos móveis (celulares e tablets). O motivo para essa escolha de plataforma ocorre em consonância com o apresentado na seção de público-alvo (1.3). Nessa perspectiva, o jogo objetiva atingir adolescentes de escolas públicas tanto no ambiente escolar, em parceria com a apresentação da FM-USP, como no ambiente domiciliar, uma vez que Queimaduras Zero visa prender a atenção e engajar o jogador para além de ambientes supervisionados.

### 2.2.3. Número de jogadores

 &nbsp;&nbsp;&nbsp;&nbsp;Para melhor integrar diferentes dinâmicas e mecânicas, todo jogo precisa de ter um número mínimo ou máximo de jogadores, ou seja, pessoas que participarão da atividade. Em Queimaduras Zero, dada a natureza singular de aprendizado por meio de simulação proposta anteriormente, a jogatina é programada para que apenas uma jogador seja necessário, de maneira que as principais interações ocorrem com personagens não-controláveis (vide 3.2 Personagens). 

### 2.2.4. Títulos semelhantes e inspirações

 &nbsp;&nbsp;&nbsp;&nbsp;A principal inspiração para o desenvolvimento de Queimaduras Zero foi o jogo "Papers, Please". Neste jogo, o jogador é um agente de fronteira que trabalha como inspetor de imigração e sua função é controlar o fluxo de pessoas que entram em determinado lado da fronteira. No jogo, há diversos personagens aguardando sua avaliação, e entre eles encontram-se pessoas com documentos ilegítimos ou expirados. Através da verificação dos mesmos documentos fornecidos pelos viajantes e do ministério de admissão, o jogador pesquisa no banco de dados e determina quem pode entrar no país. Em paralelo, em Queimaduras Zero, a proposta é trazer uma experiência similar ao colocar o jogador na posição de um socorrista e, por meio da vivência do jogo, conscientizá-lo sobre queimaduras e os perigos criados pelas más práticas.

### 2.2.5. Tempo estimado de jogo 

 &nbsp;&nbsp;&nbsp;&nbsp;O tempo estimado para um jogo trata-se da proposta de limite máximo e mínimo de conclusão das interações do usuário com o produto e, muitas vezes, essa encontra-se em um meio termo entre o que é proposto pelo cliente e a necessidade do usuário. Como exemplo disso, os jogos educativos costumam ser repletos de conteúdo, todavia, para conseguir a atenção do público ainda é necessário que eles sejam curtos. 
 
 &nbsp;&nbsp;&nbsp;&nbsp;Assim, a proposta adotada por Queimaduras Zero, em vista dos requerimentos do cliente, foi de um tempo estimado de jogo próximo de 15 minutos, de maneira que o conteúdo a cerca de queimaduras e as camadas da pele possa ser implementado completamente durante a apresentação feita pela FM-USP em instituições de ensino. Visando atingir esse fim, Queimaduras Zero será disposto em 3 fases com casos simulados diferentes de queimados em situações cotidianas. O objetivo de cada um desses casos é ser concluído pelo usuário em, aproximadamente, 5 minutos, sendo 3 minutos para investigação do caso por meio das ferramentas de interação (Microfone, tablet, guia e termômetro) e 2 minutos para o quiz e feedback do quiz. Todavia, é notório que, dada a natureza educacional do jogo, os tempos estimulados tratam-se de uma estimativa mínima do tempo de interação, de maneira que o usuário tem total liberdade para explorar a interface além do tempo previsto.

# <a name="c3"></a>3. Game Design

## 3.1. Enredo do Jogo

 &nbsp;&nbsp;&nbsp;&nbsp;O enredo ou narrativa de uma história é crucial para que o jogador fique interessado em continuar a jogar. Com essa informação presente, Queimaduras Zero é um jogo com uma multiplicidade de histórias que, por meio de cutscenes e diálogos, contribuem para tecer o mosaico de experiências e pessoas representadas no enredo do jogo.

 &nbsp;&nbsp;&nbsp;&nbsp;Como exemplo dessa dinâmica, o primeiro cenário do jogo representa um acidente na cozinha onde uma criança derruba uma panela com água fervendo em si começando o primeiro nível do jogo. Em outras instâncias, o tópico de queimaduras é explorado por meio de cenários igualmente comuns ao cotidiano popular que apresentam riscos de queimaduras. Como exemplos, outros personagens sofrem com insolação e queimaduras elétricas em atividades comuns ao público geral como bronzeamento na praia e brincadeiras na rua. 

 &nbsp;&nbsp;&nbsp;&nbsp;Em conclusão, o jogo Queimaduras Zero utiliza a narrativa não só como uma maneira de prender a atenção do usuário, mas também para transmitir informações de prevenção para ele de uma maneira criativa e simples - garantindo que há uma conexão entre o cotidiano do usuário e os cenários relatados. 

## 3.2 Personagens

### 3.2.1. Personagens Controláveis

 &nbsp;&nbsp;&nbsp;&nbsp;Os personagens controláveis são aqueles pelos quais os jogadores vivenciam a experiência do jogo. Na maioria dos casos, esses personagens são os protagonistas controlados pelo jogador. Um exemplo dos controláveis mais clássicos da indústria é o personagem Sonic da série de jogos “Sonic the Hedgehog” da empresa [SEGA (2017)](#SEGA), conforme apresentado na Figura 5 a seguir:
<br>

<p align="center"> Figura 5: Sonic, protagonista dos jogos de plataforma</p>
<p align="center">
  <img src="/assets/sonic.jpeg" alt="sonic"></img>
</p>
<p align="center"> Fonte: Material produzido por SEGA (2017)</p>
<br>


 &nbsp;&nbsp;&nbsp;&nbsp;Todavia, no caso do jogo Queimaduras Zero, não haverá um personagem controlável visível como no exemplo anterior. Isso porque a função do protagonista é conscientizar o acidentado para prevenir futuros acidentes e, eventualmente, prestar os primeiros socorros. Dessa maneira, a ausência de um personagem controlável visível nesta aplicação proporciona uma dinâmica diferente para os jogadores. Sendo assim, ao assumir o papel de observador ativo durante as cutscenes, os jogadores têm a oportunidade de influenciar diretamente e indiretamente o desenrolar da história e auxiliar os Non-Playable Characters (NPCs)— Personagens Não-Jogáveis — tendo como objetivo oferecer suporte por meio de dicas de prevenção e primeiros socorros. 
 &nbsp;&nbsp;&nbsp;&nbsp;Nesse contexto, o jogador simula a função de um prestador de primeiros socorros aprendendo a como agir e como pedir ajuda nessas situações, tomando decisões que não só moldam a narrativa e o progresso do jogo, mas também educam o jogador sobre queimaduras.


### 3.2.2. Personagens Não-Controláveis - Non-Playable Characters (NPC)

 &nbsp;&nbsp;&nbsp;&nbsp;Os personagens não-controláveis, também referidos como NPCs, são os personagens presentes no jogo que não podem ser controlados pelo jogador. Todavia, mesmo não sendo controlados pelos usuários, esses possuem grande importância durante a gameplay, pois são uma maneira de interagir com o jogador [(BORGES; BARREIRA; SOUZA, 2020)](#BORGES).
 &nbsp;&nbsp;&nbsp;&nbsp;No caso de Queimaduras Zero, a interação com os NPCs ocorrerá durante todo o jogo, já que a função do jogador é oferecer ajuda ao queimado. Assim, o jogo se compromete a retratar nos personagens não-jogáveis uma ampla gama de fenótipos, idades e características pessoais. Isso porque objetiva-se ilustrar ao jogador que qualquer um pode correr o risco de se queimar de maneira que os sintomas recebam, igualmente, a devida atenção.

<p align="center"> Tabela 2 - Personagens Não-Controláveis</p>

\# | Imagem | Descrição | Localização | Tipo de queimadura | Grau
--- | --- | --- | --- | --- | --- 
1 | <img src="/assets/guizinho.png">| Uma criança que, acidentalmente derrama o líquido de uma panela sobre sua mão | Cozinha | Térmica | 2º
2 | <img src="/assets/gabriela.png">| Uma jovem que está se bronzeando em uma ilha sem proteção solar | Ilha | Térmica | 1º
3 | <img src="/assets/lucao.png">| Um homem brincando com um pipa em uma área com fios de alta tensão | Rua | Elétrica | 3º

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

 &nbsp;&nbsp;&nbsp;&nbsp;Portanto, conclui-se que os NPCs são de extrema importância para o jogo, pois serão o recurso visual mais utilizado na mecânica do jogo.

### 3.2.3. Diversidade e Representatividade dos Personagens

 &nbsp;&nbsp;&nbsp;&nbsp;A representatividade é um aspecto importante em relação ao impacto que o jogo deve causar na sociedade e na educação. Sendo assim, a intenção dos desenvolvedores ao criarem os personagens foi focada em mostrar ao público-alvo que acidentes relacionados a queimaduras podem acontecer com qualquer indivíduo e até mesmo em situações cotidianas. Partindo deste princípio, a necessidade de personagens diversos justifica-se porque, representando pessoas de etnias, gêneros e idades diferentes, os jogadores são capazes de enxergar no jogo algo mais próximo de suas realidades e conseguem se sentir incluídos, validados e representados durante a experiência. Assim, compreendendo a pluralidade do público-alvo, Queimaduras Zero desenvolve em seus personagens uma representação fidedigna da sociedade brasileira: um povo de diferentes fenótipos e histórias singulares. 

## 3.3. Mundo do jogo

### 3.3.1. Locações Principais e/ou Mapas

 &nbsp;&nbsp;&nbsp;&nbsp;Os ambientes do jogo são os cenários em que o jogador poderá interagir. No caso de Queimaduras Zero as seguintes ambientes podem ser observadas:

* Ilha:
  * Na ilha, um personagem estará bronzeando-se inadequadamente, uma vez que não está usando protetor solar, o que resultará em uma queimadura térmica por insolação de primeiro grau.
  
* Rua:
  * Na rua, um homem estará brincando com uma pipa. Durante a cena, a pipa ficará enroscada nos fios de alta tensão e esse evento resultará em uma queimadura elétrica de terceiro grau.
  
* Cozinha:
  * No fogão da cozinha uma panela estará com o cabo posicionado de forma inadequada. Durante a cena, uma criança vai estar na cozinha sem supervisão de um adulto e vai puxar o cabo da panela, derramando o conteúdo quente da panela sobre seu braço. Assim, essa ação resultará em uma queimadura térmica por escaldamento de segundo grau.

* Tela Principal:
  * A *tela principal* do jogo é dividida em duas partes: do lado esquerdo será ilustrado o personagem da cena anterior com um microfone na sua frente onde o jogador poderá entrevistar o personagem com diversas perguntas pré-programadas sobre o ocorrido e o estado do personagem. Do lado direito haverá as ferramentas que o jogador poderá utilizar durante o jogo (termômetro, tablet e guia).

* Tela de *Quiz*:
  * A tela quiz trata-se de um sistema de perguntas e respostas acessível pelo botão de quiz em que o jogador poderá utilizar o conhecimento adquirido na cena anterior (tela principal) para avaliar o seu aprendizado durante o período de interação com as ferramentas da tela principal. Enquanto o usuário interage com o quiz por meio da resolução de perguntas com 4 alternativas de resposta, será apresentado uma rápida resolução da questão evidenciando o porquê da resposta informada estar correta ou incorreta. 

* Tela de Feedback:
  * A tela feedback, por sua vez, aparece após a resposta de todas as questões do quiz, de maneira a garantir que o usuário possa ter acesso ao seu desempenho geral. Essa dinâmica se garante na apresentação de um resumo das questões que foram respondidas corretamente ou não.  

&nbsp;&nbsp;&nbsp;&nbsp;Com esses três cenários apresentados nas *cutscenes* será possível demonstrar algumas das diversas situações de risco de queimaduras frequentes no cotidiano popular. Ademais, o jogador será habilitado a reconhecer os sintomas do queimado e conscientizar-se sobre os melhores métodos de prevenção de queimaduras e prestação de primeiros socorros.
 
### 3.3.2. Navegação pelo mundo

 &nbsp;&nbsp;&nbsp;&nbsp;A navegação pelo mundo em jogos digitais é o que define a forma como os jogadores interagem com o jogo. Por meio da navegação, o personagem pode ser movimentado explorando os ambientes e passando pela história do jogo. No caso de Queimaduras Zero, a navegação será feita de duas formas, sendo elas:

* *Cutscenes*: Uma sequência de fotos utilizadas para contar histórias (MARTINS NETO, 2020). No jogo, as cutscenes serão utilizadas para introduzir a história dos acidentes aos jogadores. 
* Fases: Cenários ou locais onde o jogador realizará ações para concluir os objetivos do jogo. Em queimaduras zero, o jogador consegue liberar a próxima cena apenas após a exploração da tela principal na jogatina e da conclusão do quiz da fase anterior.
* Quiz: Por meio de 5 perguntas diferentes a cada jogatina, o objetivo do quiz é testar os conhecimentos adquiridos com a cutscene, com o guia e com a exploração dos objetos da tela principal.
* Feedback: Como retorno de um resumo das respostas com acertos/erros do quiz, o feedback encerra o ciclo de uma fase.

Assim, a navegação do jogo é finalizada de forma cíclica, garantindo que, entre uma fase e outra, o jogador possa interagir com elementos cada vez mais familiares e, por meio dessa interação, expandir o próprio conhecimento sobre prevenção.

### 3.3.3. Condições climáticas e temporais

 &nbsp;&nbsp;&nbsp;&nbsp;Em grande parte dos jogos, as condições temporais e climáticas são os fatores que podem ir de meramente decorativos até mesmo para cruciais para a jogabilidade, como em Death Stranding, no qual o jogador precisa lutar contra seus inimigos ao mesmo tempo que tenta evitar os eventos climáticos provenientes do cenário pós-apocalíptico do jogo, por exemplo, uma chuva ácida que é capaz de queimar ou envelhecer tudo aquilo que ela toca [(EDWARDS, 2022)](#EDWARDS).

 &nbsp;&nbsp;&nbsp;&nbsp;No caso do jogo Queimaduras Zero, o projeto se passa em diferentes locais pré-definidos pelo grupo e em cada um deles é apresentado um caso de queimadura para que o jogador possa avaliar posteriormente. Sendo assim, a condição climática não afeta a mecânica e nem a experiência do usuário entre os cenários, pois eles somente contextualizam os acidentes sem afetar diretamente a jogabilidade.

 &nbsp;&nbsp;&nbsp;&nbsp;Contudo, para que o usuário não pule toda a seção de exploração do projeto centrada na tela principal, uma trava de três minutos foi implementada ao botão de quiz por meio de um timer. Essa adaptação tem o objetivo de incentivar o jogador a descobrir e explorar as informações necessárias para responder o questionário de forma completa e correta. Sendo assim, a condição temporal do jogo está sendo utilizada a favor do incentivo ao aprendizado por meio da curiosidade e busca ativa pelo conhecimento.

### 3.3.4. Concept Art

 &nbsp;&nbsp;&nbsp;&nbsp;De acordo com a artista [Eiko (2020)](#EIKO), “concept art é todo o trabalho sujo que deve ser feito para estabelecer a visão inicial de um projeto”. 

 &nbsp;&nbsp;&nbsp;&nbsp;Dessa maneira, o termo “Concept Art”, refere-se a todo o trabalho artístico que foi feito como representação inicial de cenários, funções, personagens e outros elementos dinâmicos. Mecânicos e de design são esboços de uma ideia. Um exemplo disso são personagens, carros, paisagens ou qualquer outro elemento dentro de games, animações, filmes, etc. No jogo Queimaduras Zero, algumas das artes conceituais desenvolvidas em primeira instância podem ser vistas nas figuras abaixo.

<a name="CUTSCENEDACOZINHA"></a>
<br>
<p align="center"> Figura 6 - Cutscene de cozinha. </p>

<p align="center">
  <img src="/assets/conArt1.png" alt="cutscene da nossa cozinha"></img>
</p>

<p align="center"> Fonte: Material produzido pelos autores (2024).<br> </p> <br>

<br>

<p align="center"> Figura 7 - Primeira versão da tela de início do jogo</p>
<p align="center">
  <img src="/assets/conArt3.jpg" alt="tela de início do game"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores (2024). </p> <br>

<br>
<p align="center"> Figura 8 - Personagem "Guizinho"</p>
<p align="center">
  <img src="/assets/conArt4.gif" alt="nosso primeiro personagem chamado guizinho"></img>
</p>
<p align="center">Fonte: Material produzido pelos autores (2024).<br> </p> <br>

<br>
<p align="center"> Figura 9 - Concept Art da primeira ideia para o jogo</p>
<p align="center">
  <img src="/assets/conArt5.jpg" alt="desenho no quadro da nossa primeira ideia"></img>
</p>
<p align="center">Fonte: Material produzido pelos autores (2024).<br> </p> <br>

<br>
<p align="center"> Figura 10 - Cutscene da praia</p>
<p align="center">
  <img src="/assets/praia-versao1.png" alt="cutscene da nossa praia"></img>
</p>
<p align="center">Fonte: Material produzido pelos autores (2024).<br> </p> <br>

<br>
<p align="center"> Figura 11 - Página de pontuação</p>
<p align="center">
 <img src="/assets/pontuacao-versao1.png" alt="pagína de pontuação"></img>
</p>
<p align="center">Fonte: Material produzido pelos autores (2024).<br> </p> <br>

### 3.3.5. Trilha sonora

&nbsp;&nbsp;&nbsp;&nbsp;A trilha sonora desempenha um papel fundamental na experiência de jogo, influenciando diretamente as emoções e a imersão do jogador. De acordo com [A. J. Blood e R. J. Zatorre (2001)](#BLOOD), a música tem o poder de afetar nossas emoções de maneira profunda, ativando regiões específicas do cérebro associadas à recompensa e à emoção. Isso porque, respostas intensamente prazerosas à música correlacionam-se com a atividade em regiões cerebrais implicadas em recompensa e emoção, como o estriado ventral, amígdala e córtex pré-frontal medial [(JOFFWINKS, 2023)](#JOFFWINKS).

&nbsp;&nbsp;&nbsp;&nbsp;Além de seu impacto emocional, a música desempenha um papel essencial na narrativa e na imersão do jogo. Para colaborar com essa perspectiva, Hans Christian Andersen [(ANDERSEN, s.d.)](#ANDERSEN) capturou essa essência ao dizer: "Where words fail, music speaks" ("Quando as palavras falham em comunicar, a musica fala" - em tradução livre do inglês para o português). A música tem o poder de transmitir emoções e conceitos que podem ser difíceis de expressar apenas com palavras ou imagens visuais.

&nbsp;&nbsp;&nbsp;&nbsp;No contexto do desenvolvimento de jogos, a trilha sonora assume uma importância ainda maior. Pesquisas, como as realizadas por [A. J. Blood e R. J. Zatorre (2001)](#BLOOD), indicam que uma trilha sonora bem elaborada não só aumenta o engajamento do jogador, mas também mantém sua atenção, tornando o jogo mais envolvente e interativo.

&nbsp;&nbsp;&nbsp;&nbsp;Em Queimaduras Zero, a trilha sonora escolhida pode ser observada na Tabela 3 e consiste em oito faixas. A Faixa 1, "No Worries" (8-bit Music, 2021), é livre de *copyright* utilizada nas telas de menu inicial e tela de feedback sendo uma música com características do movimento de jogos com padrões sonoros 8-bit, em que o sentimento objetivado é tranquilidade e a ambientação prevista é de aprendizado que os jogos retrôs conseguem criar com maestria ao utilizar esses elementos.

&nbsp;&nbsp;&nbsp;&nbsp;A Faixa 2, "Sega Genesis Mini - Menu Music" [(SEGA, 2019)](#SEGA2), por sua vez, está sobre *Creative Commons (CC)* tem como característica ser mais aguda e mais acelerada, mesmo que siga o mesmo estilo de 8-bit retrô.  Dessa maneira, a segunda faixa propõe uma intensificação na dinâmica de jogo baseada na instigação do usuário de interagir e criar um senso de atenção no usuário.

&nbsp;&nbsp;&nbsp;&nbsp;Além das músicas, o jogo conta com efeitos sonoros específicos, como o pause_fx, um efeito de autoria própria inspirado no som de pausa do jogo MEGAMAN (1989) da CAPCOM. Apesar de sua simplicidade, a produção desse efeito apresentou desafios devido à inexperiência do grupo com a ferramenta BeepBox. O som inicia-se grave e torna-se mais agudo ao final, procurando simular a sensação de pausa no jogo.

&nbsp;&nbsp;&nbsp;&nbsp;Para os botões "Jogar" e "Quiz", foram criados efeitos que tocam em momentos de transição de cena, visando causar a impressão de um novo ciclo que se inicia. O efeito do botão "Jogar" é acionado na tela de início, enquanto o do botão "Quiz" assemelha-se a uma conquista, adequando-se perfeitamente ao momento em que é pressionado, após o jogador investigar o caso na "GameScene".

&nbsp;&nbsp;&nbsp;&nbsp;Durante a "QuizScene", onde o jogador testa seu conhecimento baseando-se no que foi investigado durante a "GameScene", efeitos sonoros que transmitem sentimentos de acerto ou falha são essenciais para a imersão. Os sons "Som de acertou a questão" e "Som de errou a questão" são utilizados para fornecer feedback imediato, sendo tocados após o jogador escolher uma das opções no quiz. Por fim, os sons "Som de acertou todas" e "Som de errou todas" destinam-se à tela de "Feedback", incentivando o jogador a melhorar ou a continuar se esforçando, dependendo do resultado alcançado. Esses elementos confirmam ao jogador que sua ação de clicar no jogo foi bem-sucedida, um retorno importante para um jogo do estilo Point and Click, onde o controle se dá exclusivamente via mouse.

<p align="center"> Tabela 3 - Trilha Sonora de Queimaduras Zero</p>

\# | Título | Nome da obra| Ocorrência | Autoria | Link
--- | --- | --- | --- | --- | ---
1 | Tema Inicial | No Worries! | Tela de início; Tela de feedback. | @Pixverses | [Tema 1](#https://www.youtube.com/watch?v=Dw6J1EbrzI0&list=PLdsGes2mFh92eHpOZVJQgoubb6rF0CcvU&index=23)
2 | Tema Principal | Sega Genesis Mini - Menu Music | Tela principal de jogo | Sega | [Tema 2](#https://www.youtube.com/watch?v=o266g0TcinA&list=PLw9AcE2IomDPgy1ao9nO10PGThm6HMBMz&index=40)
3| Efeito pause | pause_fx | Quando o jogador clicar no botão de pause | Própria | - |
4| Botão quiz | Video game treasure 2066 | Quando o jogador clica no botão "Quiz" | mixkit | [Tema 4](#https://assets.mixkit.co/active_storage/sfx/2066/2066-preview.mp3) |
5| Som de acertou todas | Completion of a level 2063 | Quando o jogador, depois de responder todo o quiz, acertar 100% das perguntas | mixkit | [Tema 5](#https://assets.mixkit.co/active_storage/sfx/2063/2063-preview.mp3) |
6| Som de errou todas | Player losing or failing 2042 | Quando o jogador, depois de responder todo o quiz, errar 100% das perguntas | mixkit | [Tema 6](#https://assets.mixkit.co/active_storage/sfx/2042/2042-preview.mp3) |
7| Som de acertou a questão | Retro game notification | Quando o jogador acerta uma questão no quiz | mixkit | [Tema 7](#https://mixkit.co/free-sound-effects/win/) |
8| Som de errou a questão | Failure arcade alert notification | Quando o jogador errar uma questão no quiz | mixkit | [Tema 8](#https://mixkit.co/free-sound-effects/wrong/) |

<p align="center"> Fonte: Material produzido pelos autores</p>

## 3.4. Inventário e Bestiário

### 3.4.1. Inventário

 &nbsp;&nbsp;&nbsp;&nbsp;O inventário do jogo é uma área onde os jogadores podem armazenar e gerenciar os itens que coletam durante a partida, geralmente entre esses itens estão incluídas armaduras, poções, madeira, armas e muito mais [(PCPERFORMANCE, 2022)](#PCPERFORMANCE). 

 &nbsp;&nbsp;&nbsp;&nbsp;Como o Queimaduras Zero é um jogo point and click, que são jogos de simples e fácil jogabilidade onde o jogador usa o mouse para interagir com o ambiente [(LISBOA, 2023)](#LISBOA) e, no caso desse projeto em específico, aprender sobre prevenção e primeiros socorros de queimaduras, o mapeamento dos itens e elementos que serão utilizados pelo jogador foi feito de forma organizada para que ele pudesse analisar essas ferramentas - que estarão fixas na tela do jogo - e, posteriormente, usar as informações fornecidas pelos elementos para o seu processo de aprendizagem. Sendo assim, o uso do inventário foi ressignificado para a mecânica do jogo em si e para atender todos os seus requisitos.

### 3.4.2. Bestiário

 &nbsp;&nbsp;&nbsp;&nbsp;O bestiário é um catálogo com todos os monstros e inimigos que serão utilizados no jogo com seus nomes, funções e impactos na narrativa e para o personagem. 

 &nbsp;&nbsp;&nbsp;&nbsp;Dentro de Queimaduras Zero, por meio da interação com o personagem e com os elementos do jogo, o jogador será capaz de aprender sobre os mitos e de se conscientizar sobre as queimaduras de acordo com a mecânica que foi construída durante o desenvolvimento básico do projeto para atender aos requisitos necessários. Portanto, a função dos inimigos de dificultar a jogatina e torná-la mais interessante [(DOUGLAS, 2023)](#DOUGLAS) foi realocada para o quiz relacionado à análise da cutscene feita pelo jogador e sua capacidade de interpretar o guia e os outros elementos presentes na tela principal.

## 3.5. Gameflow (Diagrama de cenas)

  &nbsp;&nbsp;&nbsp;&nbsp;No desenvolvimento de jogos, o termo *gameflow* refere-se a experiência geral de jogo do ponto de vista do jogador. Dessa maneira, é possível compreender esse termo como a junção de vários elementos que vão desde a sequência de cenas de um jogo, as interações do jogador com as funcionalidades do jogo, a progressão de dificuldade, até a clareza dos objetivos.  

 &nbsp;&nbsp;&nbsp;&nbsp;Assim, objetivando facilitar a compreensão do *Gameflow* de Queimaduras Zero, faz-se a utilização de um storyboard. De acordo com [Luke Leighfield (2024)](#LEIGHFIELD), termo “storyboard”, do inglês, refere-se a uma sequência de ilustrações ou imagens organizadas de forma cronológica, usada como guia visual para descrever o processo de funcionamento de algum produto, seja ele um jogo ou qualquer produção visual. O storyboard ajuda os usuários a visualizarem a sequência de eventos, os ângulos de câmera, os diálogos e os elementos visuais antes de iniciar a produção propriamente dita. A seguir serão apresentadas quatro cenas que compõe o Gameflow de Queimaduras Zero.

 &nbsp;&nbsp;&nbsp;&nbsp;Como pode ser visto na Figura 12, quando o jogo é iniciado, será apresentado ao jogador a “Tela Inicial” com o botão “Jogar”, ao ser selecionado o jogo navegará da “Tela Inicial” para as “*Cutscenes*”.

Lista de elementos:

* Botão “JOGAR”;
* Cursor do mouse.

<p align="center"> Figura 12 - Tela inicial do jogo.</p>
<p align="center">
  <img src="/assets/telaInicio.png" alt="telaInicio"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

 &nbsp;&nbsp;&nbsp;&nbsp;Após ser direcionado para uma cutscene, similar a apresentada na [Figura 6](#CUTSCENEDACOZINHA), na qual será mostrada aleatoriamente ao jogador uma cena entre três possibilidades nas quais são retratados situações do cotidiano que culminaram em queimaduras. A cena se trata de uma tela momentânea, utilizando um "Timer" para prosseguir para a próxima cena de maneira que o jogador não consegue tomar nenhuma ação nesse momento.

Lista de elementos:

* *Non-Playable Characters* (O NPC na tela varia de acordo com a cena).

 &nbsp;&nbsp;&nbsp;&nbsp;Após a cinemática inicial, o jogador tem como objetivo analisar o tipo de queimadura e avaliar corretamente a camada da pele atingida, utilizando as ferramentas disponíveis, como o tablet, o termômetro e o microfone, conforme mostrado na Figura 13. Durante esse processo, o jogador deve usar essas ferramentas para colher informações e após um tempo mínimo em que o jogador deve ficar nesta tela, um botão de quiz no canto inferior direito da tela será habilitado, permitindo que o jogador prossiga para a próxima cena ao selecioná-lo. Para auxiliar nessa tarefa, há um guia localizado à direita da tela -no formato de uma prancheta-, que o jogador pode consultar para orientação e apoio nas decisões. Além disso, é possível pausar a qualquer momento clicando no ícone no canto superior direito.

Lista de elementos:

* Tablet;
* Guia;
* *Quiz*;
* Botão de pause;
* Termômetro;
* Cursor do mouse.
* Microfone

<a name="TELAPRINCIPAL"></a>
<p align="center">Figura 13: Tela principal do jogo em que as análises do jogador e diálogos pré-programados ocorrem.</p>
<p align="center">

  <img src="/assets/gamescene Lucao.png" alt="Tela principal"></img>

</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

 &nbsp;&nbsp;&nbsp;&nbsp;Em seguida, após a investigação do caso apresentado, o usuário deve utilizar do conhecimento recém-adquirido para acessar o *quiz*. Por meio dessa ferramenta o jogador poderá validar o conhecimento adquirido e terá sua pontuação calculada com base na quantidade de acertos.

<p align="center">Figura 14: Tela Quiz.</p>
<p align="center">
  <img src="/assets/Tela de quiz.png" alt="Tela de quiz.png"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Para garantir que o jogador compreenda completamente o conteúdo, aparecerá sempre uma mensagem parabenizando-o ou incentivando-o a melhorar, junto com uma explicação da pergunta, conforme a Figura 15. A única ação do jogador nesse momento é apertar na seta, que fará com que a próxima pergunta apareça ou carregue a última cena do jogo.

<p align="center">Figura 15: Mensagem caso o jogador acerte.</p>
<p align="center">
  <img src="/assets/Mensagem_acertou.png" alt="Tela de feedback.png"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Visando integrar uma proposta de aumento da dificuldade, as perguntas do *quiz* se tornarão cada vez mais complexas e demandarão mais atenção na investigação. Assim, a métrica utilizada em Queimaduras Zero para o aumento da dificuldade será a ordem das perguntas, de maneira que as perguntas mais fáceis serão perguntadas primeiro, já as mais difíceis, posteriormente.

Lista de elementos:

* Opções 1 - 4
* Seta para prosseguir com o jogo

 &nbsp;&nbsp;&nbsp;&nbsp;Ao final da *tela de quiz*, o jogador terá acesso instantâneo a *tela de feedback* representada na Figura 15, em que poderá, por meio do menu simplificado, ter acesso ao seu desempenho durante a etapa avaliativa do *quiz*, repetir a fase atual ou seguir para a próxima fase. Para esse fim, os símbolos de *certo* e *errado* presentes na Figura 15 evidenciam a quantidade de acertos do jogador e performance geral.

<p align="center">Figura 16: Tela feedback.</p>
<p align="center">
  <img src="/assets/Tela de feedback.png" alt="Tela de feedback.png"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

Lista de elementos:

* Botão rejogar
* Seta para prosseguir com o jogo

 &nbsp;&nbsp;&nbsp;&nbsp;Baseado no objetivo do jogo (vide 2.1), Queimaduras Zero não apresentará uma tela de fim de jogo ou impedirá o avanço, caso o jogador tenha um desempenho baixo. Em vez disso, independentemente do seu desempenho geral na *tela de quiz*, o usuário poderá avançar para o próximo caso e, por meio da imersão em um caso diferente, será possível o reforço do aprendizado. Isso porque, com maior tempo de contato com o material construído para o aprendizado, espera-se que o usuário adquira maestria sobre o tópico e esteja mais informado sobre os pontos de atenção para a resolução dos *quizes*.

 &nbsp;&nbsp;&nbsp;&nbsp; Com a finalidade de expressar graficamente o fluxo do jogo e facilitar o entendimento do leitor, as Figuras 15 e 16 apresentam diagramas de fluxo do Gameflow. Os diagramas de fluxo são muito importantes nestes momentos de desenvolvimento, pois são representações gráficas do sistema, onde as formas representam as etapas e as setas as sequências do processo [(LENCINA, 2023)](#LENCINA). 


<p align="center">Figura 17: Diagrama de fluxo do jogo 1.</p>
<p align="center">
  <img src="/assets/Diagrama1.png" alt="Diagrama 1"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

<p align="center">Figura 18: Diagrama de fluxo do jogo 2</p>
<p align="center">
  <img src="/assets/Diagrama2.png" alt="Diagrama 2"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>


## 3.6. Regras do jogo

 &nbsp;&nbsp;&nbsp;&nbsp;As regras do jogo descrevem os meios que o jogador deve percorrer para alcançar o objetivo final. No caso de Queimaduras Zero, o objetivo do jogo é dar respostas precisas às perguntas sobre a prevenção e primeiros socorros de queimaduras apresentadas no quiz. A cada resposta correta, a quantidade de acertos do jogador aumenta e, no final do quiz, a tela de feedback apresentará o resumo de desempenho do jogador.

 &nbsp;&nbsp;&nbsp;&nbsp;Para responder as perguntas corretamente, o jogador deve usar as funcionalidades dos elementos dispostos na tela principal do jogo para analisar as informações relacionadas ao corpo do NPC e à sua cutscene. Além disso, o guia também deve ser utilizado para obter mais informações sobre queimaduras e quais são os seus tipos e especificidades. Os elementos da tela principal citados acima podem ser visualizados na Tabela 4:

<p align="center">Tabela 4: Tabela de elementos</p>
<p align="center">
 
\# | Elemento | Imagem | Função
--- | --- | --- | ---
1 | Tablet |<img src="/assets/tablet.gif" alt="Tablet">| Exibir as camadas da pele que foram atingidas na queimadura.
2 | Termômetro |<img src="/assets/termometro.gif" alt="Termômetro">| Exibir a temperatura corporal do acidentado.
3 | Guia |<img src="/assets/guia.gif" alt="Guia">| Abrir o guia de consulta para auxiliar nas respostas do *quiz*.
4 | Microfone |<img src="/assets/microfone.gif" alt="Microfone">| Abrir menu de perguntas ao acidentado.
 
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

 &nbsp;&nbsp;&nbsp;&nbsp;Por meio dessas análises, as informações serão passadas para o jogador que, por sua vez, aprende com elas e as utiliza como base para responder às perguntas do quiz.

## 3.7. Mecânicas do jogo

 &nbsp;&nbsp;&nbsp;&nbsp;As mecânicas de um jogo tem uma forte relação com as suas regras, pois a mecânica de um jogo é o que o jogador deve fazer para alcançar o objetivo. (SILVA et al., 2021).

 &nbsp;&nbsp;&nbsp;&nbsp;O conceito pode parecer similar às regras do jogo, porém quando são abordadas as mecânicas, é tratado como algo físico, do mundo real.

 &nbsp;&nbsp;&nbsp;&nbsp;A principal mecânica utilizada no jogo Queimaduras Zero é a ação de clicar. Esta remete-se ao gênero do jogo, um jogo "Point and Click", onde o jogador observa os elementos na tela e clica neles utilizando do cursor ou do toque na tela.

# <a name="c4"></a>4. Desenvolvimento do Jogo

## 4.1. Desenvolvimento preliminar do jogo

 &nbsp;&nbsp;&nbsp;&nbsp;Já conseguimos entregar um bom design para a experiência no nosso jogo. Desenhamos uma tela de início básica, nossa cutscene para demonstrar ao parceiro e também a tela principal do nosso jogo, onde a interface vai funcionar.

<p align="center">Figura 19: Primeira versão da tela inicial</p>
<p align="center">
  <img src="/assets/tela-inicio.png" alt="tela inicial"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>



 &nbsp;&nbsp;&nbsp;&nbsp;Em termos de código, já conseguimos realizar algumas ações dentro mesmo do jogo; já é possível transitar sobre as cenas ao clicar no botão jogar. Ao clicar no botão, será apresentada nossa cutscene e logo após isso o jogo começa.

 &nbsp;&nbsp;&nbsp;&nbsp;Abaixo, podemos ver como está o nosso código HTML no momento.

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Cabecalho-->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Derma Gaming</title>

    <!--CSS-->
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
    <!--adicionando a biblioteca phaser-->
  </head>
  <body>
    <!--Cenas do jogo-->
    <script src="cenas/TitleScene.js"></script>
    <script src="cenas/Cutscenes.js"></script>
    <script src="cenas/GameScene.js"></script>

    <script src="main.js"></script> <!--Logica do jogo-->
  </body>
</html>
```

 &nbsp;&nbsp;&nbsp;&nbsp;Ainda não escolhemos uma palheta de cores e nem o nome oficial do nosso jogo; pretendemos fazer isso na próxima semana sem falta. Também, como próximo passo, vamos desenolver ainda mais o design da tela de inicio, aumentar o número de cutscenes no nosso jogo, melhorar a interface e continuar no desenvolvimento da jogabilidade em si.

 &nbsp;&nbsp;&nbsp;&nbsp;A dificuldade que estamos enfrentando é o fato de este ser nosso primeiro projeto, e por isso, o grupo como um todo está um pouco perdido sobre o que esperar para as próximas semanas e também sobre o feedback do parceiro. Para isso, o ideal é controlar a ansiedade.

 &nbsp;&nbsp;&nbsp;&nbsp;Também tivemos grande dificuldade para realizar os desenhos em pixel art para o jogo uma vez que foi utilizado o Piskel como ferramenta de desenvolvimento gráfico do projeto que, por limitações inerentes a plataforma, dificultava a produção.

<p align="center">Figura 20: Ferramenta Piskel utilizada no desenvolvimento gráfico do projeto</p>
<p align="center">
  <img src="/assets/desenhando-tela-de-inicio.png" alt="tela inicial"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

## 4.2. Desenvolvimento básico do jogo

 &nbsp;&nbsp;&nbsp;&nbsp;Com o andamento das 4 semanas, o desenvolvimento do jogo avançou de acordo com as instruções e atividades do módulo 1. Sendo assim, todos os conhecimentos fornecidos acerca de Javascript, biblioteca Phaser, lógica de programação, orientação a objetos, gestão de projetos, entre vários outros foram aplicados dentro da criação, estrutura e desenvolvimento das ideias iniciais do projeto e do seu desenvolvimento básico.

 &nbsp;&nbsp;&nbsp;&nbsp;A partir do feedback da sprint 1 e dos comentários específicos do parceiro FMUSP para cada grupo do ateliê, houve um grande processo de refinamento de ideias e do escopo do projeto para que os futuros planos andassem de acordo com os objetivos e requisitos do parceiro. O desenvolvimento básico para a sprint 2 teve o foco redirecionado para a criação das telas de cada elemento dentro da tela principal (como o prontuário, as fichas de risco, o tablet, etc), para a simplificação da mecânica do jogo - já que um dos pontos negativos apontados pelo parceiro foi a complexidade do jogo - e para a integração entre as telas desenvolvidas.

 &nbsp;&nbsp;&nbsp;&nbsp;Além disso, por enquanto, as telas de cutscene não sofreram nenhuma alteração visual na aplicação, pois não houveram rejeições em relação ao feedback do parceiro. Já a tela principal [(Figura 13)](#TELAPRINCIPAL) foi alterada com a retirada dos ícones de microscópio e phmetro com a interatividade dos itens presentes dentro da tela.

<p align="center">Figura 21: Exemplo de menu dos novos elementos</p>
<p align="center">
  <img src="/assets/Exemplo_tablet.png" alt="Exemplo tablet"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

 &nbsp;&nbsp;&nbsp;&nbsp;No momento de implementar o funcionamento dos elementos no código, foi necessário o desenvolvimento de uma nova função que interpretasse o clique do jogador sobre determinados objetos e executasse a função pensada para aquele objeto.

 &nbsp;&nbsp;&nbsp;&nbsp;Para suprir essa necessidade, foi gerada a função “criarHitbox”, essa função desenha um retângulo invisível na tela e o torna interativo, então, caso o jogador clique naquela posição do retângulo, será executada uma função que será referenciada nos parâmetros. 

 &nbsp;&nbsp;&nbsp;&nbsp;Os parâmetros são as informações que devem ser declaradas durante a aplicação no código e que serão usados na função. Neste caso, foram utilizados “graphics”, ou seja,  uma constante que deve ser declarada na função create do código e que será o objeto retângulo. O “x” e “y” são as coordenadas do retângulo na tela, “width” e “height” são as dimensões do retângulo (largura e altura, respectivamente) e por fim, “funcao” que é a função que será executada quando clicar naquela região.

```javascript
//funcao para criar uma hitbox retangular
function criarHitbox(graphics,x,y,width,height,funcao){ 
  //cria o retangulo
  graphics.setInteractive(this.retangulo = new Phaser.Geom.Rectangle(x, y, width, height),Phaser.Geom.Rectangle.Contains);
  //realizar funcao ao clicar na hitbox
  graphics.on('pointerdown',funcao); 
  //ativa o debug
  graphics.strokeRectShape(this.retangulo);
}
```

 &nbsp;&nbsp;&nbsp;&nbsp;Segue um exemplo da aplicação da função na tela de início do jogo, onde a função é usada para trocar de cena quando o usuário clicar em “JOGAR”:

```javascript
//botao jogar
    //declarando o objeto
    const botaoJogar = this.add.graphics({lineStyle: { width: 2, color: 0xaa0000 },fillStyle: { color: 0x0000ff }, });
    //cria a hitbox
    criarHitbox(botaoJogar, largura / 2 - 270 / 2, 321, 270, 64, () => {
      //musica da tela de inicio para
      this.audioInicio.stop();  
      //começa as cutscenes
      this.scene.start("Cutscenes");
    });
```

 &nbsp;&nbsp;&nbsp;&nbsp;Essa nova função representa o principal método empregado na recente adição à mecânica do sistema. Nesse contexto, é importante salientar que os métodos, entendidos como as funções operacionais dentro das classes, desempenham um papel crucial. Cada elemento agora conta com uma constante específica, a qual é incorporada durante a declaração da função correspondente, promovendo uma abordagem mais organizada e estruturada para a implementação.

 &nbsp;&nbsp;&nbsp;&nbsp;Na tela de título do jogo, a função operou normalmente; no entanto, ao implementá-la na tela de Gameplay, surgiram diversos bugs. Isso ocorreu, em grande parte, porque, mesmo se outra tela estivesse aberta, ao tentar clicar em outros ícones, uma nova tela se abriria, ignorando a que já estava em exposição.

 &nbsp;&nbsp;&nbsp;&nbsp;Para solucionar esse problema, foram desenvolvidas as funções "desabilitarElementos" e "habilitarElementos". Estas funções utilizam de uma lista de elementos que é declarada após a adição de todos os elementos. Elas desativam e reativam a interação desses elementos, respectivamente.

 &nbsp;&nbsp;&nbsp;&nbsp;A primeira função é empregada quando uma nova janela é aberta, impedindo o jogador de tentar clicar em qualquer outra opção antes de interagir com aquele menu específico. Por outro lado, a segunda função é utilizada ao fechar o novo menu aberto, permitindo que o jogador retome a interação com os elementos do jogo.

 &nbsp;&nbsp;&nbsp;&nbsp;Essas medidas visam melhorar a experiência do jogador, garantindo um fluxo mais suave e evitando conflitos na interação com os elementos do jogo.

```javascript
//as duas funcoes abaixo, desabilitam e habilitam os elementos quando uma janela e aberta, isso serve para que nao seja aberta outra tela enquanto outra ja esta aberta
function desabilitarElementos(elements) {
  //para cada elemento do vetor/array elements
  elements.forEach(element => {
    //desabilitar a interacao
    element.disableInteractive(); 
  });
}

function habilitarElementos(elements) {
  elements.forEach(element => {
    //habilitar a interacao
    element.setInteractive(); 
  });
}
```

```javascript
const elementos = [
    tablet,
    guia,
    pause,
    termometro,
    classificacaoRisco
  ];
```

&nbsp;&nbsp;&nbsp;&nbsp;Além dessa medida contra bugs, foi desenvolvido um sistema que congela a tela do jogo quando o foco do jogador não está na janela em que o jogo está aberto. Estas medidas contra erros, são conhecidas como salvaguardas.

```javascript
// Adiciona o listener para o evento de visibilidade da página
    document.addEventListener("visibilitychange",this.mudancaDeVisibilidade.bind(this),false);
```

```javascript
mudancaDeVisibilidade() {
    if (document.hidden) {
      this.scene.pause(); // Pausa a cena atual quando a aba perde o foco
      console.log("Hello World");
    } else {
      this.scene.resume(); // Despausa a cena atual quando a aba ganha foco novamente
    }
  }
```

 &nbsp;&nbsp;&nbsp;&nbsp;Portanto, a partir dos resultados obtidos com a produção para a sprint 2, foi possível notar que uma das principais dificuldades no desenvolvimento foi em relação a biblioteca Phaser. Apesar de muito útil e prática para o desenvolvimento de jogos, a biblioteca phaser é complexa em sua estrutura de trabalho, até para aqueles que já possuíam experiência prévia em programação, então foi um grande impasse na progressão.

 &nbsp;&nbsp;&nbsp;&nbsp;Em conclusão, após os avanços e as novas dificuldades encontradas no projeto, os próximos passos serão direcionados para os artefatos 5 e 6. Ou seja, para o desenvolvimento e refinamento das cutscenes, o aprimoramento das mecânicas e integrações entre cenas, a entrega da lista de testes atualizada e o aprimoramento do microfone e do prontuário do jogo para que a entrega da sprint 3 seja concluída. Além disso, assegurar que o grupo esteja atualizado e compreenda o código do jogo, bem como o funcionamento do Phaser, resolverá os problemas relacionados à sprint 2, contribuindo para a evolução e desenvolvimento do grupo.


## 4.3. Desenvolvimento intermediário do jogo

&nbsp;&nbsp;&nbsp;&nbsp;O desenvolvimento intermediário do jogo baseia-se nas alterações e adaptações que foram realizadas no projeto com os feedbacks, reuniões, adaptações e trabalhos realizados até o momento de entrega da sprint 3. Dentro das semanas 5 e 6, o projeto esteve em seu desenvolvimento intermediário no qual o foco foi direcionado para que as mecânicas e ferramentas do jogo estivessem funcionando com a finalidade de conseguir realizar uma rodada de testes com alunos do inteli durante a aula de design. Com o feedback do cliente acerca da sprint 2 e com o resultado da seção de testes entre os alunos do Inteli, o planejamento do projeto sofreu algumas alterações em termos de design, documentação e, consequentemente, nos códigos também.

&nbsp;&nbsp;&nbsp;&nbsp;As principais alterações realizadas no jogo Queimaduras Zero foram a respeito de tópicos importantes como: elementos que devem permanecer disponíveis para exploração na tela principal e animação deles piscando na tela, a implementação de um quiz com cinco perguntas para cada cutscene com o objetivo de testar os conhecimentos adquiridos pelos jogadores, a implementação de um timer na tela principal, a adição de músicas, a definição de três perguntas dentro do microfone para coletar informações diretamente do personagem e a adaptação da ideia inicial do prontuário para que o design pudesse ser reutilizado para a produção do guia e para que a jogabilidade se tornasse menos complexa - conforme solicitado pelo parceiro FM-USP nos feedbacks das sprints passadas.
 
&nbsp;&nbsp;&nbsp;&nbsp;Cada um desses tópicos trabalhados durante o desenvolvimento intermediário teve o objetivo de simplificar o jogo e garantir que o projeto consiga atender às necessidades do público-alvo por meio da gamificação simples das informações sobre prevenção, primeiros-socorros e mitos contra as queimaduras. Sendo assim, deve ser levado em consideração que, após a realização das atividades das primeiras semanas de desenvolvimento do projeto, a ideia de criar um serious game de exploração e cruzamento de informações demonstrou-se complicada e pouco atraente ao público-alvo, tornando necessária e justificável a implementação do quiz e a retirada de elementos complexos da tela principal.

<a name="TELAPRINCIPAL2"></a>
<p align="center">Figura 22: Tela Principal Atual (sprint 3)</p>
<p align="center">
  <img src="/assets/tela_titulo_semana6.png" alt="Exemplo tablet"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Ao comparar a [Figura 21](#TELAPRINCIPAL2) com a [Figura 13](#TELAPRINCIPAL), nota-se uma melhoria significativa após a remoção das classificações de risco e o remanejamento dos elementos na tela. Ademais, a função do prontuário foi modificada para servir como um guia informativo, complementando a experiência do usuário juntamente com o rearranjo dos elementos na tela resultando em um design mais direto, simplificando a interação do usuário com o jogo - este aprimoramento foi validado durante os testes realizados entre os grupos de desenvolvimento. Apesar do feedback positivo em relação a simplificação da tela, ainda houveram alguns negativos em relação a interatividade dos elementos da tela, por essa razão foi adicionado o brilho. Além disso, na tela principal, o mecanismo do microfone foi refinado: ao pressionar o botão do microfone, uma tela lateral com três opções de perguntas agora ocupa metade da tela:

<p align="center">Figura 23: Tela do microfone (sprint 3)</p>
<p align="center">
  <img src="/assets/TelaLateralPerguntasMic.jpeg" alt="Exemplo tablet"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;O código que desenvolveu a mecânica do microfone consiste na criação de uma constante chamada “microfoneEstado” que, junto com uma Hitbox (detectores de colisão na tela), abre a tela de perguntas do microfone e desabilita os elementos da tela principal para que a nova tela possa ser habilitada:

```javascript
//microfone
    //cria o objeto microfone
    const microfoneEstado = this.add.graphics({lineStyle: { width: 2, color: 0xaa0000 },fillStyle: { color: 0x0000ff }, });
    //funcao criarHitbox() para utilizar o botao do microfone
    criarHitbox(microfoneEstado, 200, 330, 65, 120, () => {
      //desabilitando os elementos da tela principal
      desabilitarElementos(this, elementos);
      //adiciona a imagem lateral
      let imagem = this.add.image(largura / 2, altura / 2, "microfone").setScale(0.25);
```

&nbsp;&nbsp;&nbsp;&nbsp;Além da hitbox do microfone, uma hitbox foi criada para cada uma das três perguntas do microfone permitindo que, assim que o jogador pressione qualquer uma das perguntas, a respectiva resposta apareça no balão de fala acima do personagem.

```javascript
//varivavel para indicar que o menu do microfone esta aberto
      let menuMicrofone = true;

      //se o menu do microfone estiver aberto:
      if (menuMicrofone) {
        //cria a opcao 1
        const opcao1 = this.add.graphics({lineStyle: { width: 2, color: 0xaa0000 },fillStyle: { color: 0x0000ff }, });
        //hitbox para a opcao 1
        criarHitbox(opcao1, 481, 76, 350, 94, () => {
          //imagem e texto para a resposta 1
          let imagem = this.add.image(220, 90, "balaoFala").setScale(0.25);
          let resposta1 = this.add.text(220,90,"Eu estava na cozinha brincando" +"\n" +"e acabei derrubando uma panela" +"\n" +"com água fervendo em mim!",{
             fill: "#1D2A39", 
             fontSize: "17px" 
            }).setOrigin(0.5, 0.5);
          //funcao para pressionar o botao scroll
          this.input.on("pointerdown", function (botaoMeio) {
            //destruir imagem e resposta para reabilitar elementos
            // if para caso o botao scroll seja pressionado
            if (botaoMeio.middleButtonDown()) {
              //imagem sera destruida
              imagem.destroy();
              //resposta 1 sera destruida
              resposta1.destroy();
              //elementos da tela principal serao reabilitados
              habilitarElementos(elementos);
            }
          });
        });
```

&nbsp;&nbsp;&nbsp;&nbsp;Para o engajamento do usuário e aprimoramento das mecânicas do projeto, um timer de 1 minuto foi adicionado na tela principal para que o jogador siga o objetivo de explorar os elementos da tela para coletar mais informações sobre queimaduras e sobre o caso do personagem, além disso, a funcionalidade também faz com que o usuário não pule diretamente para o quiz após a cutscene que ele assistiu.

<a name="TEMPORIZADOR"></a>
<p align="center">Figura 24: Temporizador </p>
<p align="center">
  <img src="/assets/hud.png" alt="Exemplo tablet"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;A programação do timer foi feita criando uma variável que determina quanto tempo vai levará para desbloquear o quiz e a cada 1 segundo, é retirado 1 deste valor, no caso, foi definido que o tempo total para a exploração da tela será de 60 segundos (1 minuto).  Além disso, adicionamos um texto “Tempo para o quiz” que aparece acima do personagem como mostrado na [Figura 23](#TEMPORIZADOR). Essa contagem de tempo é feita utilizando um evento de tempo, propriedade da biblioteca Phaser, conforme o código a seguir.

```javascript
//Estruturacao do timer
    // Variável que define a duração do timer
    this.inicioTimer = 60;
    // Cria o texto que irá informar o tempo atual do timer
    timer = this.add.text(100,15,"Tempo para o quiz: " + formatarTempo(this.inicioTimer));
    // Cria o objeto de define a cada quantos segundos o valor do timer será alterado
    // A função "fimTimer" esta no local que define o que vai ser feito a cada 1000 ms (1 segundo)
    contagemTempo = this.time.addEvent({
      delay: 1000,
      callback: fimTimer,
      callbackScope: this,
      loop: true,
    });
    // Começa o timer no formato "pausado" para que ele seja iniciado apenas ao final do tutorial
    contagemTempo.paused = true;
```

&nbsp;&nbsp;&nbsp;&nbsp;Para eventuais interrupções do jogador durante a gameplay também foi adicionado um menu de pause que dá a opção de recomeçar o jogo e continuar jogando. Enquanto estiver no menu de pause, o timer é pausado, não prejudicando o jogador neste momento. A salvaguarda que é utilizada para caso o jogador saia da janela do jogo, também garante que o tempo do timer não diminua enquanto o foco do jogador não está totalmente no jogo.

<p align="center">Figura 25: tela de pause  </p>
<p align="center">
  <img src="/assets/pause.png" alt="Exemplo tablet"></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Além das mudanças relacionadas ao microfone e à adição do timer, um quiz com 5 perguntas por cutscene foi implementado no final da jogatina para que o jogador possa testar os seus conhecimentos de uma forma divertida e simples após a coleta de informações na cutscene e na tela principal.

&nbsp;&nbsp;&nbsp;&nbsp;Para que o quiz seja liberado, o jogador deve passar pelo tempo determinado no timer, conforme informado no começo da seção, para isso, foi colocada uma condicional, que adiciona uma hitbox na posição do quiz e liga a animação, assim que o tempo no timer zera. 

```javascript
// Cria a hitbox em cima do botão de quiz
    const quiz = this.add.graphics({lineStyle: { width: 2, color: 0xaa0000 },fillStyle: { color: 0x0000ff }, });
    criarHitbox(quiz, 761, 416.3, 147.9, 49.2, () => {
      //musica para
      this.audioPrincipal.stop();
      // Troca para a cena das perguntas
      this.scene.start("QuizScene",dadosPergunta1);
    });
```

&nbsp;&nbsp;&nbsp;&nbsp;Considerando que o código utilizado para as 5 perguntas dos 3 personagens é similar, pois todas manteriam uma estrutura padrão, mudando somente o texto, foi criado uma única cena que exibe todas as 5 perguntas daquela rodada de gameplay, então, para isso, foi desenvolvida uma lista, chamada pelo termo "dicionário" na programação, que contém o texto que preenche todas as perguntas, respostas e feedback do quiz.

```javascript
// Criando dicionário das perguntas que vai ser usada na cena pergunta.js
const dadosPergunta5 = {
  pergunta: "5.Quais produtos caseiros podem ser usados " +"\n"+"\n"+ "para melhorar a queimadura do guizinho?",
  textoOpcao1: "Hidratante",
  textoOpcao2: "Borra de café",
  textoOpcao3: "Pimenta",
  textoOpcao4: "Nenhum",
  certa: "Nenhum",
  feedback: "Nunca use produtos caseiros, como hidratante," +"\n"+"\n"+ "borra de café ou pimenta, em queimaduras." +"\n"+"\n"+ "Esses produtos causam infecção e " +"\n"+"\n"+ "podem piorar ainda mais a queimadura.",
  acertos: [],
  proximosDados: 'Feedback'
}
```

&nbsp;&nbsp;&nbsp;&nbsp;Com essas alterações em diversas partes do código, fica evidente que os esforços e prioridades da equipe durante a sprint 3 foram voltados para o replanejamento do projeto e para a programação dessas ideias adaptadas que foram incluídas no desenvolvimento. Por meio disso, todos os integrantes tiveram que se envolver no desenvolvimento para que a alta demanda fosse entregue, fazendo com que todos contribuíssem com as novas soluções que precisavam ser criadas e implementadas dentro de duas semanas. Em comparação com o desenvolvimento preliminar e básico do jogo, a equipe evoluiu as bases do projeto em termos do código e de sua organização, além de manter as cenas integradas, botões funcionando, entre outras funcionalidades que já haviam sido entregues em sprints anteriores.

&nbsp;&nbsp;&nbsp;&nbsp;Sendo assim, os objetivos citados anteriormente na seção de desenvolvimento básico do projeto para a sprint 3 foram concluídos com êxito, já que a equipe entregou o aprimoramento do código das mecânicas como o microfone, os elementos da tela principal, o quiz e as integrações entre cenas, entregou a atualização da lista de testes e acolheu os feedbacks do orientador e do parceiro FM-USP adaptando as antigas complexidades do jogo.

&nbsp;&nbsp;&nbsp;&nbsp;Dessa maneira, os próximos passos do projeto serão focados nos artefatos 7, 8 e 9 para garantir que a documentação do jogo permaneça atualizada e o desenvolvimento acompanhe todos os requisitos solicitados pelos artefatos. Portanto, espera-se que, para a sprint 4, o MVP de Queimaduras Zero esteja pronto e com o código atualizado de acordo com os aprendizados feitos durante todo o módulo até o momento de entrega. Além disso, o refinamento dos cenários das cutscenes e o desenvolvimento dos personagens restantes (Gabriela e Lucão) serão prioridade para que todas as áreas de trabalho do projeto continuem evoluindo na mesma proporção e para garantir uma boa entrega de MVP.


## 4.4. Desenvolvimento final do MVP 

 &nbsp;&nbsp;&nbsp;&nbsp;A sprint 4 é marcada pela entrega do MVP, ou seja, o jogo deve estar funcionando. Durante a sprint 3, todas as mecânicas foram adicionadas no jogo, mas suas dinâmicas, que é a forma como o jogo reage de acordo com as decisões do jogador, ainda não estavam consolidadas. Então, o principal foco foi polir ao máximo a gameplay com o personagem “Guizinho”, adicionar a personagem “Gabriela” e implementar melhorias de acordo com os feedbacks.

  &nbsp;&nbsp;&nbsp;&nbsp;Como proposto na seção 3.5, o NPC da cutscene é sorteado aleatoriamente, para isso foi desenvolvida uma função que sorteia um número de 0 a 2 utilizando a própria biblioteca do JavaScript, sorteado o número, e, com isso, é checada uma array - também conhecido como vetor - , que é um elemento da programação que funciona como uma lista, no caso desta aplicação, existe uma lista chamada personagens, onde os nomes dos personagens ficarão armazenados. Então, gera-se o número aleatório que checa a posição em personagens e assume aquela posição como personagemAtual.

  ```javascript
  // Função responsável por escolher um número aleatório entre 0 e o número colocado no imput -1
function numeroAleatorio(contagemMax) {
  return Math.floor(Math.random() * contagemMax);
}
```

```javascript
// Essas duas linhas criam a lista de personagens e de forma randomica escolhem o primeiro que irá aparecer
var personagens = ["gui", "gabriela", "lucao"];
var personagenAtual = personagens[numeroAleatorio(2)]; // Como Lucao nao esta pronto, sorteamos so entre 0 e 1
```

 &nbsp;&nbsp;&nbsp;&nbsp;Essa definição é importante, pois, a cutscene, que é a próxima cena após apertar “Jogar”, utilizará essa informação para criar os sprites corretos. Abordando mais sobre as mudanças nas Cutscenes, foi adicionado toda a cena da Gabriela. Diferente do “Guizinho”, a cena da Gabriela é um storyboard, portanto, dentro do período do timer vão se passando os quadros, estes que podem ser observados na figura 25:

<p align="center">Figura 26: Spritesheet da cutscene da Gabriela  </p>
<p align="center">
  <img src="/assets/praia.png" alt=""></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

```javascript
case "gabriela":
        this.praia = this.add.sprite(0, 480, "praia").setScale(0.125).setOrigin(0, 1);
        this.anims.create({
          key: "praiaAnimacao", //Nome para chamar a animacao
          frames: this.anims.generateFrameNumbers("praia", {
            start: 0,
            end: 6,
          }), //define quais sprites vao rodar na animacao
          frameRate: 1.25, //velocidade da animacao
          repeat: 0, //definindo para repeticao infinita
        });
        this.praia.anims.play("praiaAnimacao", true);
        setTimeout(() => {
          //musica da tela principal comeca
          this.audioPrincipal.play();
          //comeca proxima cena
          this.scene.start("GameScene", {
            audioPrincipal: this.audioPrincipal,
          });
        }, 6000); //tempo que vai durar a cena

```

 &nbsp;&nbsp;&nbsp;&nbsp;A GameScene foi o ambiente onde mais foram implementadas mudanças, as principais mudanças foram feitas se baseando nos feedbacks recebidos durante os testes de jogabilidade e na adição da nova personagem.

 &nbsp;&nbsp;&nbsp;&nbsp;Antes das melhorias, foi feito o design final da Gabriela na tela principal. Com ela, todas as respostas do microfone também foram alteradas conforme pode ser observado na figura 26:

 <p align="center">Figura 27: Gabriela na GameScene  </p>
<p align="center">
  <img src="/assets/GameScene com Gabriela.png" alt=""></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;No geral, os feedbacks de melhoria foram relacionados a falta do realce no microfone e pela falta de um botão para fechar. Então, foi repetido o código utilizado nas ferramentas e reaplicado no microfone, e para os botões de fechar, foi criada uma função que cria o botão de fechar e o deixa interativo, então, ao clicar nele, o menu aberto junto de seus elementos fecharão.

 <p align="center">Figura 28: Menu do tablet atualizado  </p>
<p align="center">
  <img src="/assets/menu c botao fechar.png" alt=""></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

```javascript
// Cria a função de fechar janelas
// Alteração na função fecharJanela para receber argumentos adicionais
function fecharJanela(cena,x,y,imagem,elementos,mic,pergunta1,pergunta2,pergunta3,opcao1,opcao2,opcao3) {
  const fechar = cena.add.image(x, y, "fechar").setScale(0.125);
  fechar.setInteractive();
  fechar.on("pointerdown", () => {
    // Verifica se o menu do microfone está aberto
    if (mic) {
      // Fecha o menu do microfone e suas perguntas
      fecharPerguntas(imagem,elementos,pergunta1,pergunta2,pergunta3,opcao1,opcao2,opcao3);
    } else {
      // Fecha apenas a imagem
      fechandoImagem(imagem, elementos);
    }
    fechar.destroy();
  });
}


// Faz com que o botão feche o menu selecionado e si mesma.
function fechandoImagem(imagem, elementos) {
  imagem.destroy(); // para apagar a imagem da tela e continuar a gameplay
  habilitarElementos(elementos); // reabilitando os elementos interativos
}


// Faz com que o botão de fechar janela também feche as perguntas do menu se ele estiver aberto.
// Função para fechar a janela do microfone e suas perguntas
function fecharPerguntas(imagem,elementos,pergunta1,pergunta2,pergunta3,opcao1,opcao2,opcao3) {
  pergunta1.destroy();
  pergunta2.destroy();
  pergunta3.destroy();
  opcao1.destroy();
  opcao2.destroy();
  opcao3.destroy();
  imagem.destroy(); // para apagar a imagem da tela e continuar a gameplay
  habilitarElementos(elementos); // reabilitando os elementos interativos
  menuMicrofone = false; // Define que o menu do microfone foi fechado
}
```

 &nbsp;&nbsp;&nbsp;&nbsp;Além desses fatores, os menus das ferramentas foram atualizados, agora estão animados evidenciando onde o jogador deve manter o foco e o guia agora contém os textos.

  <p align="center">Figura 29: Menu do termômetro atualizado  </p>
<p align="center">
  <img src="/assets/termometro atualizado.png" alt=""></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

 <p align="center">Figura 30: Menu do guia</p>
<p align="center">
  <img src="/assets/menu guia.png" alt=""></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Apesar do foco maior na dinâmica, o jogo passou por uma revisão nos textos exibidos no jogo, revisões tanto no conteúdo, quanto na ortografia. Na última rodada de testes, os testers encontraram erros ortográficos no jogo, o que rapidamente foi corrigido por conta da boa estrutura no código, mas o conteúdo levou um pouco mais de tempo já que a principal ideia foi em dificultar mais o quiz. Então, enquanto a fase do “Guizinho” era polida, as perguntas do quiz foram repensadas, exigindo do jogador mais atenção na exploração das ferramentas.

 <p align="center">Figura 31: Exemplo de nova pergunta no quiz</p>
<p align="center">
  <img src="/assets/Pergunta nova.png" alt=""></img>
</p>
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;No geral, a sprint 4 foi muito produtiva já que existe um jogo que atende às exigências do cliente. Para a sprint 5, os maiores desafios serão adicionar o último personagem (Lucão), sua cutscene e polir alguns erros encontrados na jogatina da personagem Gabriela. Além disso, também será necessário algumas alterações, conforme a última validação com o cliente, mas nada que impactará diretamente no funcionamento do jogo.

## 4.5. Revisão do MVP 

&nbsp;&nbsp;&nbsp;&nbsp;A sprint final do projeto tem como objetivo revisar o MVP atendendo aos feedbacks recolhidos durante os playtests e durante a validação com o parceiro. Até este momento, o jogo já estava completamente funcional, faltava apenas a implementação de um personagem novo para compor as três cenas prometidas ao cliente. Essa atividade demandou a maior carga em relação ao desenvolvimento e design durante a sprint, já que as avaliações do jogo foram muito positivas e as poucas mudanças foram em relação a pontos de melhorias pontuais na experiência do usuário.

&nbsp;&nbsp;&nbsp;&nbsp;Como o código do jogo já estava totalmente estruturado e bem modular, a implementação do último personagem, o Lucão, não foi difícil. Porém, por outro lado, o design da nova cutscene foi o maior desafio! Como a cutscene da Gabriela foi muito bem recebida pelos jogadores, a cena do Lucão também foi feita em modelo de storyboarding contendo 13 quadros e sendo mais dinâmica. Assim como a cutscene da Gabriela, na vez do Lucão não foi diferente, apenas foi programada uma animação em que os quadros passam durante um período de 6 segundos, regulados por um timer, e, então, inicia-se a cena de gameplay.

```javascript
case "lucao":
        this.rua = this.add.sprite(largura/2,altura/2,"rua").setScale(0.5);
        this.anims.create({
          key: "ruaAnimacao", //Nome para chamar a animacao
          frames: this.anims.generateFrameNumbers("rua", {
            start: 0,
            end: 12,
          }), //define quais sprites vao rodar na animacao
          frameRate: 2.125, //velocidade da animacao
          repeat: 0, //definindo para repeticao infinita
        });
        this.rua.anims.play("ruaAnimacao",true);
        setTimeout(() => {
          //musica da tela principal comeca
          this.audioPrincipal.play();
          //comeca proxima cena
          this.scene.start("GameScene", {
            audioPrincipal: this.audioPrincipal,
          });
        }, 6000); //tempo que vai durar a cena
        break;
```
<p align="center"> Figura 32: Cutscene do Lucão</p>
<br>

![Lucão](/src/assets/rua.png)

<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>
 <p align="center"> Figura 33: Lucão na gamescene</p>
<br>

![Lucão](/assets/lucao_gamescene.png)
<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Sendo assim, todos os personagens e cenas já estavam no jogo. A única funcionalidade que faltava neste momento era aquela que conectaria todo o fluxo, como foi explicado na seção anterior, o jogo possui uma seleção de fase randômica, porém não é interessante ao jogador que ele jogue a fase que acabou de acontecer, então, ao final de cada fase, caso o jogador aperte na seta, conforme mostrado na [Figura 16](#TELADEFEEDBACK), o jogo continuará com a próxima cutscene escolhendo randomicamente entre os personagens que sobraram até que sobre somente um. Após isso, quando a última fase acabar, caso o jogador clique na seta, voltará até a cena de título com a funcionalidade de escolher randomicamente entre todas as fases.

&nbsp;&nbsp;&nbsp;&nbsp;Para isso, foi criada uma situação condicional em que ao jogador clicar na seta, verifica-se se o tamanho da lista de personagens é diferente de 1 (ou seja, ainda faltam personagens para aparecer), caso seja, ele remove o personagem da fase que acabou de acontecer da lista de personagens e escolhe randomicamente entre os que sobraram e inicia a próxima cena. Se existir apenas um personagem na lista, todos os personagens são adicionados novamente à lista e, em seguida, um deles é escolhido randomicamente, retornando à tela de início.

```javascript
criarHitbox(botaoProximo, 579, posYBotao, larguraBotao, alturaBotao, () => {
      //remove da array os valores das respostas anteriores permetindo que novas possam ser escritas
      for (var i = 0; i < 5; i++) {
        this.acertos.pop();
      }
      if(personagens.length != 1){
        console.log("ainda faltam personagens")
        //remove o personagem atual da array d epersonagens possíveis
        let index = personagens.indexOf(personagemAtual);
        if (index !== -1) {
          personagens.splice(index, 1);
        }
        personagemAtual = personagens[Math.floor(Math.random() * personagens.length)];
        this.audioInicio.stop();
        this.scene.start("Cutscenes");
      }else{
        console.log("sem personagens novos")
        personagens = ["gui", "gabriela", "lucao"];
        personagemAtual = personagens[Math.floor(Math.random() * personagens.length)];
        this.audioInicio.stop();
        this.scene.start("TitleScene");
      }
    });
```

&nbsp;&nbsp;&nbsp;&nbsp;Assim, o jogo já é o MVP prometido ao cliente, mas o grupo DermaGaming não se limitou ao mínimo jogável. Era esperado pela equipe um produto que, além de divertido, proporcionasse alta imersão e aceitação do usuário. Nesse sentido, foram considerados todos os feedbacks fornecidos pelos testadores do jogo (os testes podem ser encontrados na seção 5.1) e mais alterações foram implementadas.

&nbsp;&nbsp;&nbsp;&nbsp;Entre elas, a primeira modificação foi no cursor do mouse que não agradou totalmente ao público. Sendo assim, optou-se por um estilo similar ao cursor padrão do Windows, porém, desenhado, como ilustrado na [Figura 33](#GAMESCENEDOLUCÃO).

&nbsp;&nbsp;&nbsp;&nbsp;As seguintes modificações foram sugeridas pelos parceiros da Faculdade de Medicina da USP durante as demonstrações do jogo, a equipe de validação da faculdade pontuou a superficialidade em relação aos feedbacks de acerto ou erro das perguntas, destacando a necessidade de uma resposta mais explicativa em cada texto.

&nbsp;&nbsp;&nbsp;&nbsp;Para suprir a necessidade, foram criados designs, como os das figuras abaixo, para quando o jogador erre ou acerte uma pergunta. Esses designs foram criados separadamente para cada jogatina, mostrando de forma gráfica, além do “Quase lá!” ou “Acertou” na tela, as reações de cada personagem com as respectivas respostas do jogador.

 <p align="center"> Figura 34: Nova tela de acerto da pergunta</p>
<br>

<p align="center">
  <img src="/assets/Acertou c gabi.png" alt="acertou gabi"></img>
</p>

<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>

 <p align="center"> Figura 35: Nova tela de erro da pergunta</p>
<br>

<p align="center">
  <img src="/assets/errou c gabi.png" alt="errou c gabi"></img>
</p>

<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Além disso, para que o jogador sinta o jogo e a sensação de imersão seja efetiva,  efeitos sonoros para acerto e erro de cada pergunta foram adicionados às jogatinas. No caso do usuário errar ou acertar todas as perguntas de algum dos quizzes, uma música específica tocará para cada um dos dois casos, garantindo ainda mais uma experiência divertida e agradável (a coleção de músicas e efeitos sonoros do jogo pode ser encontrada na seção 3.3.5).

&nbsp;&nbsp;&nbsp;&nbsp;Em termos de código para o feedback visual com os personagens, bastou verificar o personagemAtual e se a opção escolhida foi a correta, exibindo a imagem correspondente. Quanto aos efeitos sonoros, foram incorporados de forma semelhante, acionando o som adequado com base na resposta do jogador:

```javascript
//funcao que exibe o personagem feliz ou triste
function adicionarPersonagem(cena,personagem,a){
  switch(personagem){
    case "lucao":
      cena.add.sprite(0,altura,"lucaoExpressoes",a).setScale(0.25).setOrigin(0,1);
      break;
    case "gabriela":
      cena.add.sprite(0,altura,"gabiExpressoes",a).setScale(0.25).setOrigin(0,1);
      break;
    case "gui":
      cena.add.sprite(0,altura,"guiExpressoes",a).setScale(0.25).setOrigin(0,1);
      break;
    default:
      break;
  }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;No caso das músicas, a mesma lógica foi seguida, mas apenas tocando a música quando é necessário:

```javascript
if (textoOpcao === this.certa) {
        //efeito sonoro de acerto
        this.sound.add("acertou",{loop:false}).play();
        // Se a opção for correta, exibe "ACERTOU" na tela. Com a formatação específica
        this.add.text(largura / 2, 20 + 147 / 2, "Acertou", {
            fontSize: "40px",
            fill: "#52f067",
          }).setOrigin(0.5, 0.5);
          adicionarPersonagem(this,personagemAtual,0);
```

```javascript
//funcao para tocar a musica caso o jogador atinja um dos extremos
function tocarMusica(cena,respostas){
  let totalAcertos=0, totalErros=0;
  for(let i = 0; i<respostas.length;i++){
    if(respostas[i] == 0){
      totalAcertos++;
    }
    if(respostas[i]==1){
      totalErros++;
    }
    if(totalAcertos == 5){
      console.log("acertou todas");
      cena.sound.add("acertouTodas",{loop: false}).play();
    }else if(totalErros == 5){
      console.log("errou todas");
      cena.sound.add("errouTodas",{loop: false}).play();
    }
  }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;Apesar das maiores mudanças terem ocorrido no quiz, a GameScene também sofreu alterações. Uma sugestão feita por uma das professoras de UX Design do inteli, Julia Stateri, e adotada pela equipe foi a adição de alguns fatores que conduzirão o foco do jogador durante a jogatina, como, por exemplo, desativar o realce da ferramenta quando o jogador já tiver acessado o menu e a criação de algum desfoque na tela atrás do menu quando ele estiver aberto.
Sendo assim, máquinas de estado, que são sempre mudadas ao acionar a hitbox da ferramenta, foram adicionadas para que, quando o estado daquela ferramenta for verdadeiro, a animação de realce pare.

```javascript
if (tabletAcessado == false){
      cena.tabletRealce.anims.play("tabletAnimacao", true);
    }
    if (guiaAcessado == false){
      cena.guiaRealce.anims.play("guiaAnimacao", true);
    }
    if (termometroAcessado == false){
      cena.termometroRealce.anims.play("termometroAnimacao", true);
    }
    if (microfoneAcessado == false){
      cena.micRealce.anims.play("micAnimacao", true);
    }
```

 <p align="center"> Figura 36: Ferramenta após ser utilizada</p>
<br>


<p align="center">
  <img src="/assets/ferramenta s realce.png" alt="ferramenta sem realce"></img>
</p>

<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>



&nbsp;&nbsp;&nbsp;&nbsp;O desfoque foi feito adicionando um retângulo preto que cobre toda a tela com opacidade reduzida, ou seja, um retângulo preto quase transparente que apenas tira a evidência de tudo que está no fundo.

```javascript
//adiciona um fundo preto na tela do jogo
      const blackScreen = this.add.graphics();
      blackScreen.fillStyle(0x000000, 0.5);
      blackScreen.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
      blackScreen.setDepth(0);
```

 <p align="center"> Figura 37: Novo menu aberto</p>
<br>


<p align="center">
  <img src="/assets/menu c fundo.png" alt="menu com fundo"></img>
</p>

<p align="center"> Fonte: Material produzido pelos Autores (2024)</p>
<br>



&nbsp;&nbsp;&nbsp;&nbsp;Outra mudança implementada, mas, dessa vez, por dica da Pesquisadora e Doutora Cristina Camargo, pode ser visualizada na imagem acima que se relaciona com o jeito em que as informações do guia são disponibilizadas. Ela sugeriu que, ao invés de adicionar dois textos longos para duas páginas de guia, mais páginas fossem criadas para que os textos pudessem ser separados por temática e não desmotivassem o jogador na hora da leitura, além disso, facilitaria a busca do jogador pela informação que ele precisa ou mais se interessou.

&nbsp;&nbsp;&nbsp;&nbsp;Assim, Queimaduras Zero tem seu mínimo produto viável finalizado. O jogo possui três cenas com três casos de queimaduras diferentes, usando três personagens diversificados com um fluxo que propõe um aprendizado contínuo, tanto do jogo, quanto do conteúdo de prevenção de queimaduras. Isto tudo, utilizando de apoio artifícios de User Experience, que tornam o jogo mais imersivo e intuitivo, graças ao grande foco e atenção aos feedbacks dados pelos jogadores. Com o estado atual, o jogo cumpre todos os requisitos listados na seção 1.2. Todavia, ainda é um MVP, logo, pode ser aprimorado para que contemple novas situações envolvendo queimaduras e atualizações gerais conforme será mais aprofundado na seção 6 deste documento.

# <a name="c5"></a>5. Testes 

## 5.1. Casos de Teste

 &nbsp;&nbsp;&nbsp;&nbsp;Casos de teste são procedimentos essenciais no desenvolvimento de software, criados para garantir que um jogo, nesse caso, funcione como esperado. Em suma, o conceito envolve a realização de sequências de ações específicas para verificar se o software atende aos requisitos funcionais e não funcionais, e se alinha às expectativas do usuário. Utilizados por desenvolvedores e testadores, os casos de teste ajudam a identificar e corrigir falhas, assegurando que o software seja eficaz e de alta qualidade [(SCHWERING, 2023)](#SCHWERING), com isso, para o desenvolvimento de Queimaduras Zero, foram realizados os casos de teste presentes na Tabela 5.

<p align="center"> Tabela 5 - Casos de teste</p>

\# | pré-condição | descrição do teste | pós-condição 
--- | --- | --- | --- 
1 | Estar na tela inicial do jogo | Clicar no botão "jogar" | O jogo deve iniciar com uma das três *Cutscenes* 
2 | Estar na tela principal após uma das *Cutscenes* | Clicar no guia | Abrir a tela do guia 
3 | Estar na tela de tutorial após uma das *Cutscenes* | Clicar na seta para continuar | Abrir a tela principal do jogo
4 | Estar na tela principal | Clicar no botão de pausa | Abrir a tela de pausa e animações das ferramentas param
5 | Estar na tela de pausa | Clicar no botão de recomeçar | Voltar para tela principal 
6 | Estar na tela de pausa | Clicar no botão de reiniciar | Voltar para tela inicial do jogo  
7 | Estar na tela principal | Clicar no botão do guia | Abrir a tela do guia 
8 | Estar na tela do guia | Clicar no botão de fechar | Voltar para tela principal
9 | Estar na tela principal | Clicar no Tablet | Abrir a tela do Tablet
10 | Estar na tela do Tablet | Clicar no botão de fechar | Voltar para tela principal
11| Estar na tela principal | Clicar no termômetro | Abrir a tela do termômetro
12| Estar na tela do termômetro | Clicar no botão de fechar | Voltar para tela principal
13| Estar na tela principal | Clicar no microfone | Abrir a tela do microfone com as três perguntas 
14| Estar na tela do microfone | Clicar no botão de fechar | Voltar para a tela principal
15| Estar na tela principal | Clicar no botão de pause | Timer para a contagem
16| Estar na tela principal | Clicar no botão de reiniciar o jogo | Voltar para a tela inicial com o jogo e timer reiniciados 
17| Estar na tela principal | Clicar no botão de quiz antes do timer zerar | Não acontecer nada
18| Estar na tela principal | O timer zerar | Botão de quiz fica habilitado
19| Estar na tela da primeira pergunta do quiz | Clicar na resposta entre as 4 opções | Aparecer tela de feedback com a explicação
20| Estar na tela do feedback | Clicar no botão de seta para continuar | Aparecer segunda pergunta do quiz
21| Estar na tela da pergunta 2 do quiz | Clicar na resposta entre as 4 opções | Aparecer tela de feedback
22|  Estar na tela de feedback | Clicar no botão de seta para continuar | Aparecer terceira pergunta do quiz
23|  Estar na tela da pergunta 3 do quiz | Clicar na resposta entre as 4 opções | Aparecer tela de feedback
24| Estar na tela de feedback | Clicar no botão de seta para continuar | Aparecer quarta pergunta do quiz
25| Estar na tela da pergunta 4 do quiz | Clicar na resposta entre as 4 opções | Aparecer tela de feedback
26|  Estar na tela de feedback | Clicar no botão de seta para continuar | Aparecer quinta pergunta do quiz
27| Estar na tela da pergunta 5 do quiz | Clicar na resposta entre as 4 opções | Aparecer tela de feedback
28| Estar na tela de feedback | Clicar no botão de seta para continuar | Aparecer tela de feedback geral
29| Estar na tela do feedback geral que aparecerá uma pontuação referente às 5 respostas | Clicar para continuar | Voltar para a tela inicial, mas sem o personagem que apareceu na lista personagens
30| Estar na tela de feedback geral | Clicar no botão de reiniciar | Voltar para tela inicial
31| Estar na tela inicial do jogo após ter clicado no botão continuar na tela de feedback geral | Clicar no botão "jogar" | O jogo deve iniciar com uma *Cutscene* diferente da ultima 

## 5.2. Testes de jogabilidade (playtests) 

### 5.2.1 Registros de testes

&nbsp;&nbsp;&nbsp;&nbsp;O teste de jogabilidade, conceituado como uma metodologia essencial no âmbito da pesquisa em design de jogos, desempenha um papel vital ao permitir que designers e pesquisadores examinem minuciosamente aspectos como a jogabilidade e a interação entre o jogo e os jogadores, bem como a correspondência da experiência do jogo com as metas de design estabelecidas. Esse processo iterativo de testes, avaliações e ajustes busca não apenas assegurar que o jogo seja atraente e divertido, mas também que ele comunique eficazmente os conceitos propostos e induza as reações desejadas nos jogadores, alinhando entretenimento com a solução de problemas práticos através da criação de artefatos digitais inovadores [(MIURA, 2018)](#MIURA).

 &nbsp;&nbsp;&nbsp;&nbsp;Com o objetivo de entender a demanda do usuário e receber novos feedbacks, testes de jogabilidade com o público-alvo secundário do projeto foram realizados enquanto não foi possível realizar com o público-alvo primário e, por meio deles, foi possível coletar feedbacks em comum entre os estudantes do inteli que testaram o Queimaduras Zero. Entre eles, a maioria das reclamações foram para os elementos dispostos na tela principal, como o microfone, o tablet, etc. A discussão acerca desse tema abordava a falta de intuitividade devido a disposição desses elementos na tela e à dificuldade de compreensão sobre suas funcionalidades e objetivos dentro do jogo. Já os elogios foram voltados à área do design e do quiz ao final da jogatina.
 
 &nbsp;&nbsp;&nbsp;&nbsp; Vale ressaltar que todos os testes citados abaixo foram feitos no Campus do Inteli, por meio dos notebooks dos integrantes do grupo, durante a aula de UX design destinada para testes e durante o horário de desenvolvimento que é destinado para os alunos trabalharem com os seus respectivos grupos de projeto. Além disso, todos os nomes apresentados em cada caso de teste são fictícios a fim de preservar os direitos dos testadores.


<br>
<p align="center"> Tabela 6 - Tester 1</p>

Nome | Isadora Carvalho 
--- | ---
Já possuía experiência prévia com games? | Sim
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Ficou confusa com as intruções passadas no início do jogo
Conseguiu progredir no jogo? | Sim  
Apresentou dificuldades? | Sim, ficou com dificuldade de entender a utilização do botão de scroll no uso do jogo e as intruções 
Que nota deu ao jogo? | 10
O que gostou no jogo? | A jogadora gostou do quiz e design (estética), pois fugiu do básico
O que poderia melhorar no jogo? | Sugeriu que as instruções fossem passadas ao longo da jogatina

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 7 - Tester 2</p>

Nome | Bruno Mendes Alves
--- | ---
Já possuía experiência prévia com games? | Sim
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Não, pois tinha muita informação no tutorial e não entendeu o uso do botão scroll
Conseguiu progredir no jogo? | Sim  
Apresentou dificuldades? | Sim, pois não conseguiu compreender o tutorial inteiro
Que nota deu ao jogo? | 8
O que gostou no jogo? | Gostou da palheta de cores e elogiaram muito a arte e os personagens
O que poderia melhorar no jogo? | O jogador falou que as letras no balão de fala estavam pequenas e que seria bom alterar a forma de sair dos elementos sem ser com o botão scroll

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 8 - Tester 3</p>

Nome | Ícaro Ramos Fontes
--- | ---
Já possuía experiência prévia com games? | Sim
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Não, teve dificuldade na compreensão de que os objetos serviam para extrair informações 
Conseguiu progredir no jogo? | Sim  
Apresentou dificuldades? | Sim
Que nota deu ao jogo? | Design 10 e Jogabilidade 7
O que gostou no jogo? | Gostou principalmete da ideia do quiz
O que poderia melhorar no jogo? | O jogador falou que o tutorial poderia ser mais detalhado
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 9 - Tester 4</p>

Nome | Eloá Pereira
--- | ---
Já possuía experiência prévia com games? | Sim, mas básica
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Não, teve dificuldade na compreensão do tutorial 
Conseguiu progredir no jogo? | Sim  
Apresentou dificuldades? | Não 
Que nota deu ao jogo? | Design 10 e Jogabilidade 8.5
O que gostou no jogo? | A proposta para ensinar foi boa, a mecânica bem pensada e um bom design
O que poderia melhorar no jogo? | O jogador falou que o tutorial poderia aparecer na tela principal do jogo e melhorar o detalhamento do tutorial
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 10 - Tester 5</p>

Nome | Laura Porto Cavalcanti
--- | ---
Já possuía experiência prévia com games? | Sim, mas básica
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Não, teve dificuldade na compreensão para entender como sai dos elementos usando o botão do scroll
Conseguiu progredir no jogo? | Sim  
Apresentou dificuldades? | Sim, para sair dos elementos 
Que nota deu ao jogo? | 9
O que gostou no jogo? | Design está muito bom
O que poderia melhorar no jogo? | A jogadora falou para alterar a escrita das respostas do microfone, alterar a cor e o tipo da fonte utilizada, arrumar o design da tela inicial que está muito limpo e padronizar o Guizinho
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 11 - Tester 6</p>

Nome | Raquel Franco Neves
--- | ---
Já possuía experiência prévia com games? | Sim
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Não, teve dificuldade para entender como sai do tutorial pela seta e como sai dos elementos usando o botão do scroll
Conseguiu progredir no jogo? | Sim  
Apresentou dificuldades? | Sim 
Que nota deu ao jogo? | 10 
O que gostou no jogo? | Design está muito bom e a ideia também
O que poderia melhorar no jogo? | A jogadora falou que a jogabilidade do jogo está difícil e pouco intuitivo. Também falou para alterar a tela de início. E, por fim, deu a ideia que ao invés de liberar o quiz com tempo, fazer com que fique disponível apenas se o jogador clicar em todos os elementos, pois o tempo acaba deixando o jogador nervoso e ansioso. 
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 12 - Tester 7</p>

Nome | Roberto Duarte
--- | ---
Já possuía experiência prévia com games? | Sim
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Não, teve problema para entender o botão de scroll e pulou o microfone na tela principal
Conseguiu progredir no jogo? | Sim  
Apresentou dificuldades? | Sim, com a mecânica e não utilizou o microfone
Que nota deu ao jogo? | 8
O que gostou no jogo? | Design está muito bom
O que poderia melhorar no jogo? | O jogador falou  para tirar a palheta de cores da tela inicial, pois achou que era para alterar a cor do fundo da tela. Também falou para fazer o microfone piscar para saber que dá para utilizar ele.
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 13 - Tester 8</p>

Nome | Estênio
--- | ---
Já possuía experiência prévia com games? | Sim
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Não, teve problema para entender o botão de scroll para sair dos elementos e pulou o microfone na tela principal assim como o testador anterior
Conseguiu progredir no jogo? | Sim  
Apresentou dificuldades? | Sim 
Que nota deu ao jogo? | 7 
O que gostou no jogo? | Design do Guizinho
O que poderia melhorar no jogo? | O jogador falou para tirar a palheta de cores da tela inicial e alterar a explicação da segunda questão do quiz do guizinho

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 14 - Tester 9</p>

Nome | Fefê
--- | ---
Já possuía experiência prévia com games? | Sim
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Não, teve problema para entender o botão de scroll para sair dos elementos
Conseguiu progredir no jogo? | Sim  
Apresentou dificuldades? | Sim 
Que nota deu ao jogo? | 10 
O que gostou no jogo? | Design do Guizinho durante a cutscene
O que poderia melhorar no jogo? | A jogadora falou para fazer os elementos da tela piscando ou com realce
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Após a coleta dos feedbacks acima, a equipe realizou melhorias e adaptações no jogo como a implementação de realce para indicar que os elementos da tela principal são interativos, a mudança no uso do botão scroll para fechar as telas de cada elemento com a criação de um "x" no canto superior direito de cada tela e, além disso, a retirada da palheta de cores na tela inicial. Com essas mudanças e com o aprimoramento do MVP para a realização da entrega, um novo teste de jogabilidade foi realizado durante a aula de UX Design, novamente entre os alunos do inteli que ainda não tinham testado o jogo, sobre as especificidades da primeira rodada de testes, e o resultado demonstra grande melhoria acerca da compreensão do jogo e de suas regras, além de diversos elogios sobre o design e evolução do projeto em pouco tempo.

<p align="center"> Tabela 15 - Tester 10</p>

Nome | Isabela Oliveira
--- | ---
Já possuía experiência prévia com games? |  Sim
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Não, achou que quando o tempo acabasse, ela seria redirecionada para o quiz e não foi pra segunda página do guia
Conseguiu progredir no jogo? |  Sim
Apresentou dificuldades? | Não
Que nota deu ao jogo? |  8.5
O que gostou no jogo? |  Gostou, achou as animações ótimas
O que poderia melhorar no jogo? | Arrumar o tempo do quiz para saber o que acontece quando acaba o tempo

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 16 - Tester 11</p>

Nome | Gabriela Santos
--- | ---
Já possuía experiência prévia com games? |  Não
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Sim
Conseguiu progredir no jogo? |  Sim
Apresentou dificuldades? | Não
Que nota deu ao jogo? |  9 
O que gostou no jogo? | Jogo intuitivo
O que poderia melhorar no jogo? | Melhorar o tamanho do texto do guia
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 17 - Tester 12</p>


Nome | Marina Silva
--- | ---
Já possuía experiência prévia com games? | Sim
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? |  Sim
Conseguiu progredir no jogo? |  Sim
Apresentou dificuldades? | Não
Que nota deu ao jogo? |  10 
O que gostou no jogo? |  As alternativas do quiz
O que poderia melhorar no jogo? | Diminuir o tempo do timer para o quiz

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 18 - Tester 13</p>

Nome | Larissa Costa
--- | ---
Já possuía experiência prévia com games? | Sim 
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? |  Ficou confusa em relação ao tempo para o quiz, pois pensou que o jogo ia acabar quando o tempo acabasse
Conseguiu progredir no jogo? |  Sim
Apresentou dificuldades? | Sim, passou muito rápido pelos elementos da tela e não absorveu as informacões por causa do timer
Que nota deu ao jogo? |  8 
O que gostou no jogo? |  Gostou que os personagens interagem por meio do microfone
O que poderia melhorar no jogo? | Distribuir melhor as informações do guia e arrumar a ortografia, colocar legendas no tablet, mudar a escrita de algumas respostas da gabriela no quiz, menos texto (resumir).

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 19 - Tester 14</p>

Nome | Rafael Almeida
--- | ---
Já possuía experiência prévia com games? |  Sim, muita
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? |  Sim
Conseguiu progredir no jogo? |  Sim
Apresentou dificuldades? | Não
Que nota deu ao jogo? |  9 
O que gostou no jogo? |  Interação com personagem e as cutscenes
O que poderia melhorar no jogo? | menos informações juntas no timer e no guia
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 20 - Tester 15</p>

Nome | Gustavo Ferreira
--- | ---
Já possuía experiência prévia com games? |  Sim
Conseguiu iniciar o jogo? |  Sim
Entendeu as regras e mecânicas do jogo? |  Sim
Conseguiu progredir no jogo? |  Sim
Apresentou dificuldades? | Não
Que nota deu ao jogo? |  8
O que gostou no jogo? |  Está com a proposta educacional e informacional clara
O que poderia melhorar no jogo? | Distribuição das informações já que espera-se que o usuário não queira ler muita informação, arrumar programação do microfone, tirar a seta que não dá pra clicar no guia para diminuir as chances do usuário ficar perdido.
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

&nbsp;&nbsp;&nbsp;&nbsp;Após as rodadas de testes com o público-alvo secundário, a equipe decidiu realizar novos testes com um público mais próximo do público-alvo primário para que feedbacks mais precisos pudessem ser implementados no projeto antes da sprint 5. Entre os três testes a seguir, o primeiro apresentado foi feito com um(a) aluno(a) da 3º série do ensino médio e os outros dois foram feitos com alunos do ensino fundamental Ⅱ.


<p align="center"> Tabela 21 - Tester 16</p>

 Nome | Fernanda Carvalho
--- | ---
Já possuía experiência prévia com games? |  Sim
Conseguiu iniciar o jogo? |  Sim
Entendeu as regras e mecânicas do jogo? |  Sim, na primeira fase ela se perdeu bastante e não verificou o microfone e o tablet, mas na segunda já sabia onde procurar as informações importantes
Conseguiu progredir no jogo? |  Sim
Apresentou dificuldades? | Um pouco
Que nota deu ao jogo? |  10
O que gostou no jogo? |  Gostou do guia, pois acha que é possível aprender bastante e conseguir responder a maioria das perguntas por meio dele
O que poderia melhorar no jogo? | Falta de música durante algumas sessões durante o jogo.
<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

<p align="center"> Tabela 22 - Tester 17</p>

Nome | Isabela Gomes
--- | ---
Já possuía experiência prévia com games? |  Não
Conseguiu iniciar o jogo? |  Sim
Entendeu as regras e mecânicas do jogo? | Sim, mas ficou confusa com a função do tablet e tentou clicar nas camadas da pele diversas vezes por elas estarem piscando
Conseguiu progredir no jogo? |  Sim
Apresentou dificuldades? | não
Que nota deu ao jogo? |  10
O que gostou no jogo? | A possibilidade de interagir com o personagem por meio do microfone e responder o quiz
O que poderia melhorar no jogo? | Colocar tempo e música durante o quiz para o jogo ficar mais divertido


<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 23 - Tester 18</p>

Nome | Victor Santos
--- | ---
Já possuía experiência prévia com games? |  Sim
Conseguiu iniciar o jogo? |  Sim
Entendeu as regras e mecânicas do jogo? | Não entendeu a função do tablet
Conseguiu progredir no jogo? |  Sim
Apresentou dificuldades? | não
Que nota deu ao jogo? |  9
O que gostou no jogo? | A interação com os elementos na tela principal para pegar as informações e depois testar elas no quiz, identificou que é um jogo de aprendizado.
O que poderia melhorar no jogo? | Deixar a resposta do microfone por mais tempo na tela e escrever os nomes das camadas da pele no tablet para ser mais fácil de identificar para o que ele serve 

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 24 - Tester 19</p>

Nome | Ana Carvalho
--- | ---
Já possuía experiência prévia com games? |  Não 
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Sim conseguiu utilizar todas as ferramentas
Conseguiu progredir no jogo? | Sim
Apresentou dificuldades? | Não
Que nota deu ao jogo? |  10
O que gostou no jogo? | Gostou que ela conseguiu entender e aprender com as informações na tela principal para responder o quiz
O que poderia melhorar no jogo? | Deixar o jogo mais leve pois está travando

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>
<p align="center"> Tabela 25 - Tester 20</p>

Nome | Fernanda Camargo
--- | ---
Já possuía experiência prévia com games? |  Não 
Conseguiu iniciar o jogo? | Sim
Entendeu as regras e mecânicas do jogo? | Sim
Conseguiu progredir no jogo? | Não
Apresentou dificuldades? | Não
Que nota deu ao jogo? |  9
O que gostou no jogo? |  Gostou pois é um jogo dinâmico que passa as informações de uma forma divertida 
O que poderia melhorar no jogo? | Arrumar página 4 do guia que esta "quimadura" ao invés de "queimadura"

<p align="center"> Fonte: Material produzido pelos autores</p>
<br>

### 5.2.2 Melhorias

 &nbsp;&nbsp;&nbsp;&nbsp;Com base nos resultados dos testes de jogabilidade, o plano de melhoria para o jogo Queimaduras Zero priorizou por alterar as cores das escritas e o tamanho da fonte, além de reduzir textos desnecessários, melhorar a disposição dos textos, editar alguns erros encontrados na jogatina da personagem "Gabriela", aprimorar as telas de feedback das perguntas, melhorar a mecânica do tablet para garantir que os usuários entendam sua função no jogo, entre outras tarefas necessárias para entregar o MVP . Ademais, novos  testes realizados na sprint 5 serão destinados ao público-alvo primário para que novos pontos de melhorias apareçam tornando possível uma entrega fiel às necessidades do público e que permita o melhor aproveitamento possível do jogo.


# <a name="c6"></a>6. Conclusões e trabalhos futuros 
  &nbsp;&nbsp;&nbsp;&nbsp;O jogo "Queimaduras Zero" é uma solução para conscientizar e ensinar a população sobre a prevenção, primeiros socorros e desmistificação acerca de queimaduras, atendendo principalmente ao público-alvo do projeto, no caso, adolescentes de escola pública. No início do desenvolvimento, o escopo do projeto foi idealizado de maneira complexa para um período de desenvolvimento de 10 semanas, também considerando as solicitações do parceiro para o jogo.

  &nbsp;&nbsp;&nbsp;&nbsp;Nas primeiras semanas, o jogo contava com muitas ferramentas na tela principal, como um pHmetro, fichas de classificação de grau da queimadura, prontuário, microscópio, entre outros. Além disso, a mecânica complexa, juntamente com o funcionamento do prontuário, dificultava o entendimento de como jogar o "Queimaduras Zero" e quão efetiva a solução apresentada poderia ser para que o aprendizado fosse completo e divertido.

  &nbsp;&nbsp;&nbsp;&nbsp;Após os feedbacks do orientador e do parceiro da FMUSP, a ideia inicial foi adaptada para garantir que o jogo ficasse intuitivo e interessante para os jogadores, por meio da implementação de um quiz para cada partida, da retirada de elementos que tornavam a jogabilidade difícil, da implementação de um tutorial sobre como explorar a tela principal e da criação de um guia com todas as informações necessárias sobre queimaduras para responder ao quiz.

  &nbsp;&nbsp;&nbsp;&nbsp;Com estas modificações implementadas, os requisitos mencionados na seção 1 deste documento são atendidos e, apesar das múltiplas alterações e adaptações realizadas desde a primeira semana, a inspiração em "Papers, Please" também foi mantida. A ideia da tela principal em forma de ambiente de exploração promove a autonomia e estimula o pensamento crítico do jogador ao permitir a interação com os diversos elementos da tela. Além disso, a inclusão de um feedback informativo com as respostas corretas do quiz não só facilita o aprendizado, mas também ajuda os jogadores a identificar e corrigir seus erros, promovendo um ciclo de melhoria contínua. Sendo assim, mecânicas como as apresentadas diferenciam o jogo "Queimaduras Zero" e destacam-se como o ponto forte do jogo, prometendo uma experiência envolvente e educativa para os jogadores.

  &nbsp;&nbsp;&nbsp;&nbsp;Entre as possíveis melhorias sugeridas durante os testes do jogo, que foram definidas como planos futuros, temos a diminuição do tempo do quiz, um maior detalhamento do tutorial da tela principal, um sistema de ranqueamento online para incentivar a competitividade, ferramentas de análise mais complexas e estruturadas de acordo com novos casos, adição de novas perguntas aos quizzes, entre outros aprimoramentos possíveis que são capazes de complementar e garantir a manutenção da excelência do aprendizado dos usuários.


# <a name="c7"></a>7. Referências 

<a name="ANDERSEN"></a>
ANDERSEN, H. C. (s.d.). "Where words fail, music speaks". 2022.

<a name="BLOOD"></a>
BLOOD, A. J.; ZATORRE, R. J. "Intensely pleasurable responses to music correlate with activity in brain regions implicated in reward and emotion". 25 set. 2001. Disponível em: https://www.pnas.org/doi/full/10.1073/pnas.191355898. Acesso em: 15 mar. 2024.

<a name="BORGES"></a>
BORGES, Deise Miranda; BARREIRA, Rafael Gonçalves; SOUZA, Jackson Gomes de. "Comportamento de personagens em jogos de computador". Março, 2020. Disponível em: https://ulbra-to.br/encoinfo/wp-content/uploads/2020/03/Comportamento-de-personagens-em-jogos-de-computador.pdf. Acesso em: 21 Fev. 2024.

<a name="CARDOSO"></a>
CARDOSO, Aparicio; "Menino de 11 anos que sofreu queimaduras por choque elétrico por fio de pipa recebe alta". Disponível em:https://www.showdenoticias.com.br/noticia/juara-e-regiao/menino-de-11-anos-que-sofreu-queimaduras-por-choque-eltrico-por-fio-de-pipa-recebe-alta. Acesso em: 7 Mar. 2024.

<a name="DOUGLAS"></a>
DOUGLAS. “Inimigos || Planejamento Correto.” Crie Seus Jogos, 23 June 2023, www.crieseusjogos.com.br/inimigos-planejamento-correto/#:~:text=Inimigos%3A%20Estabele%C3%A7a%20caracter%C3%ADsticas%20e%20habilidades%3A&text=E%20pense%20em%20como%20ele. Acesso em 6 Mar. 2024.

<a name="EDWARDS"></a>
EDWARDS, Wagner. “Seis Jogos Para Refletir Sobre Preservação E Distopias Climáticas.” Um Só Planeta, 3 Abril. 2022,
https://umsoplaneta.globo.com/clima/noticia/2022/04/03/seis-jogos-para-refletir-sobre-preservacao-e-distopias-climaticas.ghtml. Acesso em: 5 Mar. 2024.

<a name="EIKO"></a>
EIKO, Julia . “O Que é Concept Art? ⋆ Revo Space.” Revo Space, 26 Maio 2020, https://revospace.com.br/artigo/o-que-e-concept-art/. Acesso em: 27 Fev. 2024. 

<a name="FERREIRA"></a>
FERREIRA, Kellison. “Canvas de Proposta de Valor: Para Que Serve E Como Preencher.” Blog.somostera.com, 2024, https://blog.somostera.com/product-management/canvas-de-proposta-de-valor. Acesso em: 27 Fev. 2024.

<a name="GARAGE"></a>
GARAGE, B. N.; VASQUES, C. 2023. "O Comprador Atual e As 5 Forças de Porter". Disponível em: https://blognagarage.com.br/artigos/comprador-atual-e-5-forcas-de-porter. Acesso em: 29 mar. 2024.

‌
<a name="JOFFWINKS"></a>
JOFFWINKS. "Why Is Music In Video Games So Important?" Disponível em: https://www.joffwinks.com/blog/why-is-music-in-video-games-so-important. Acesso em: 15 mar. 2024.

<a name="KOTLER"></a>
KOTLER, Philip. "Administração de Marketing" – 10ª Edição, 7ª reimpressão – Tradução Bazán Tecnologia e Linguística; revisão técnica Arão Sapiro. São Paulo:
Prentice Hall, 2000. Acesso em: 20 Fev. 2024

<a name="LEIGHFIELD"></a>
LEIGHFIELD, Luke. 3 Mar. 2024. "Video Game Storyboarding: Step-by-Step Guide for 2022". Disponível em: https://boords.com/how-to-storyboard/video-game-storyboarding-step-by-step-guide-for-2022.Acesso em: 15 Mar. 2024.

<a name="LENCINA"></a>
LENCINA, Walter. “O Que é Um Diagrama de Fluxo E Como Fazer Um?” Ebac, 31 Ago. 2023, https://ebaconline.com.br/blog/diagrama-de-fluxo-seo. Acesso em: 28 Fev. 2024.

<a name="LISBOA"></a>
LISBOA, Alveni. "Os 10 melhores jogos point and click". Disponível em: https://www.terra.com.br/gameon/os-10-melhores-jogos-point-and-click,41268adeb1b8662cdae4cbcfd62a9c23wnw4pi16.html. Acesso em 05/05/2024. 

<a name="MARTINSNETO"></a>
MARTINS NETO, José das graças. “Cutscene.” Wiki Jogabilidade, 2024, https://gameplay.fandom.com/pt-br/wiki/Cutscene. Acesso em: 27 Fev. 2024.

<a name="MIURA"></a>
MIURA, Marco Akira. "Playtest e Design Science Research: o teste do jogo sob a perspectiva da pesquisa de ciência do projeto". Dissertação (Mestrado em Design)—Universidade de Brasília, Brasília, 2017, http://www.realp.unb.br/jspui/handle/10482/32133?locale=fr. Acesso em: 20 Mar 2024.

<a name="MIXKIT"></a>
MIXKIT. "Failure arcade alert notification" Mixkit, https://mixkit.co/free-sound-effects/wrong/. Acesso em 05 Abr. 2024

<a name="MIXKIT"></a>
MIXKIT. "Retro game notification" Mixkit, https://mixkit.co/free-sound-effects/win/. Acesso em 05 Abr. 2024

<a name="MIXKIT"></a>
MIXKIT. "Player losing or failing 2042" Mixkit, https://assets.mixkit.co/active_storage/sfx/2042/2042-preview.mp3. Acesso em 05 Abr. 2024

<a name="MIXKIT"></a>
MIXKIT. "Completion of a level 2063" Mixkit, https://assets.mixkit.co/active_storage/sfx/2063/2063-preview.mp3. Acesso em 05 Abr. 2024

<a name="MIXKIT"></a>
MIXKIT. "Video game treasure 2066" Mixkit, https://assets.mixkit.co/active_storage/sfx/2066/2066-preview.mp3. Acesso em 05 Abr. 2024

<a name="PARK"></a>
PARK, Lucids . “Como Determinar Os Requisitos de Um Projeto.” Lucidspark, 2024, https://lucidspark.com/pt/blog/requisitos-do-projeto-e-expectativas-das-partes-interessadas. Acesso em:  27 Fev. 2024

<a name="PCPERFORMANCE"></a>
PCPERFORMANCE. “O Que é O Inventário Em Jogos de PC? • PC Performance.” PcPerformance, 2022, www.pcperformance.com.br/glossario/o-que-e-o-inventario-em-jogos-de-pc/#:~:text=O%20invent%C3%A1rio%20%C3%A9%20uma%20%C3%A1rea. Acesso em: 5 Mar. 2024.

<a name="SEGA2"></a>
SEGA. “Genesis Mini - Menu Music”, 2019. https://asia.sega.com/genesismini/. Acesso em: 15 Mar 2024.

<a name="SEGA"></a>
SEGA. “Sonic, the Hedgehog”, 2024, .Https://Play.google.com/Store/Apps/Details?Id=Com.sega.sonic1px&Pcampaignid=Web_share, 7 Nov. 2023. Acesso em: 21 Fev 2024.

<a name="SILVA"></a>
SILVA, Tatyane Souza Calixto; SILVA, Gabriel Fonseca; FILHO, Michele Perrone; ARRIVABENE, Rafael Mariano; SPERANZA, Ygor. "GAME DESIGN". 2021.

<a name="SCHWERING"></a>
SCHWERING, Ramona . “Como Definir Casos de Teste E Prioridades | Articles.” Web.dev, 9 Ago. 2023, https://web.dev/articles/ta-test-cases?hl=pt-br. Acesso em: 27 Fev. 2024. 

<a name="STRATEGYZER"></a>
STRATEGYZER. "The Value Proposition Canvas", 2024, www.strategyzer.com/. Acesso em: 10 Fev. 2024.


# <a name="c8"></a>Anexos

Não se aplica.
