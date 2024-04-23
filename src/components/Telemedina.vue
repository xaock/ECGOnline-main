<template>
    <div id="telemedicina" data-aos="fade-down" data-aos-delay="100" class="custom-text">
      <h1 class="custom-font" style="color: #763B3B; margin-bottom: 4vh;">Telemedicina</h1>
      <h3 class="custom-font" style="text-align: center;">
        Você já ouviu falar de um sistema de Telemedicina? Atualmente, este termo é usado para
        definir um sistema on-line de troca de informações médicas e análise de resultados de diferentes exames.
        Estes exames são avaliados e entregues de forma digital, dando apoio para a medicina tradicional e
        funcionando de forma mais rápida e eficaz.
      </h3>
  

        <button @click="toggleSaibaMais" class="botao-saiba-mais">
        Saiba mais
        </button>
  
      <!-- Adicionando uma transição suave para a seção explicativa -->
      <transition name="fade" mode="out-in">
        <!-- Seção que será exibida ou ocultada dependendo do estado da variável -->
        <div v-if="mostrarSaibaMais" class="explicacao custom-font">
          <h3 style="color: #763B3B; text-align: center;">Mais Sobre Telemedicina</h3>
          <br>
          <p>
            A Telemedicina envolve a troca on-line de informações médicas e análise de resultados de exames
            para agilizar processos médicos e fornecer suporte à medicina tradicional.
            Conheça mais detalhes sobre seus benefícios e aplicações nesta seção.
            A mesma é uma abordagem que utiliza tecnologias eletrônicas para fornecer serviços de saúde 
            de alta qualidade. Está se tornando cada vez mais comum para expandir o alcance do atendimento, 
            monitorar pacientes, compartilhar informações médicas e analisar resultados de exames. 
            O processo vai além do atendimento clínico, contribuindo para a educação em saúde 
            (ao capacitar continuamente os profissionais da área), pesquisa, prevenção de doenças 
            e promoção da saúde.
            <br>
            <br>
            <p>Veja na prática como é feito o laudo de um Holter através da Telemedicina:</p>
            <h1>           </h1><img src="@/assets/expli.png"  alt="Exemplo de Telemedicina" style="max-width: 100%; height: auto;"/>
            <br>
            <br>
            Os atestados e laudos de exames podem ser gerados e entregues digitalmente, oferecendo um suporte 
            valioso para a medicina tradicional. Um especialista pode contribuir para o diagnóstico ou 
            tratamento conduzido por outro profissional em qualquer parte do mundo, desde que ambos tenham 
            acesso à internet para troca de informações.
            <br>
            A telemedicina já é praticada globalmente, sendo segura e legalizada, em conformidade com a 
            legislação e normas médicas. Ela garante sigilo profissional, armazenamento e proteção de dados 
            relacionados ao atendimento, em consonância com a Lei de Proteção de Dados. A telemedicina 
            abrange educação, consultas e assistência médica.
          </p>
        </div>
      </transition>
  
      <div class="vertical-line"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'; // 'ref' para criar variáveis reativas
  import AOS from "aos";
  
  // Variável reativa para controlar a visibilidade da seção "Saiba Mais"
  const mostrarSaibaMais = ref(false);
  
  // Função para alternar a visibilidade da seção
  const toggleSaibaMais = () => {
    mostrarSaibaMais.value = !mostrarSaibaMais.value;
  };
  
  onMounted(() => {
    AOS.init();
  });
  </script>
  
<style scoped>
    .custom-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200vh;
    margin: 0 auto;
    }

    .custom-font {
    font-family: "Inter", sans-serif;
    font-weight: normal;
    }

    .vertical-line {
    height: 100px;
    width: 2px;
    background-color: #AE1613;
    margin: 0 auto;
    margin-top: 7vh;
    margin-bottom: 12vh;
    }

    .explicacao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px; 
    margin-top: 4vh; 
    background-color: #f2f2f2; 
    border-radius: 10px; 
    }

    .fade-enter-active, .fade-leave-active {
    transition: all 0.7s ease-in-out;  
    }

    .fade-enter {
    opacity: 0;                          
    transform: translateY(-15px);        
    }

    .fade-enter-to {
    opacity: 1;                          
    transform: translateY(0);            
    }

    .fade-leave {
    opacity: 1;                          
    transform: translateY(0);            
    }

    .fade-leave-to {
    opacity: 0;                          
    transform: translateY(15px);         
    }

    .botao-saiba-mais {
    font-family: "Inter", sans-serif;
    background-color: #763B3B;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: 4vh;
    }

    .botao-saiba-mais:hover {
    background-color: #5A292A;
    }

    .botao-saiba-mais:active {
    background-color: #421C1D;
    }

    /* Estilos para elementos principais */
    .custom-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 70%;
    margin: 0 auto;
    }

    /* Estilos para as fontes */
    .custom-font {
    font-family: "Inter", sans-serif;
    font-weight: normal;
    }

    /* Estilos para a linha vertical */
    .vertical-line {
    height: 100px;
    width: 2px;
    background-color: #AE1613;
    margin: 0 auto;
    margin-top: 7vh;
    margin-bottom: 12vh;
    }

    /* Estilos para a seção explicativa */
    .explicacao {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
    transition: all 0.5s ease-in-out; /* Transição para tornar a animação mais fluida */
    }

    /* Animações para a transição de fade */
    .fade-enter-active, .fade-leave-active {
    transition: all 0.7s ease-in-out;
    }

    .fade-enter {
    opacity: 0;
    transform: translateY(-10px); /* Ajuste para tornar a entrada mais suave */
    }

    .fade-leave {
    opacity: 1;
    }

    /* Estilos para o botão "Saiba Mais" */
    .botao-saiba-mais {
    font-family: "Inter", sans-serif;
    background-color: #763B3B;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out; /* Transição para tornar a animação do botão mais suave */
    }

    .botao-saiba-mais:hover {
    background-color: #a71217;
    }

    .botao-saiba-mais:active {
    background-color: #a71217;
    }

    /* Responsividade para telas menores*/ 
    @media (max-width: 600px) {
    .custom-text {
        max-width: 90%; /* Reduz a largura máxima para telas menores */
    }

    .explicacao {
        padding: 15px; /* Ajusta o padding para telas menores */
    }

    .vertical-line {
        height: 50px; /* Diminui o tamanho da linha vertical em telas menores */
    }
    }
</style>