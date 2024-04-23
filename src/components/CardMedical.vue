<template>
    <div class="background-custom">
      <div class="custom-text" id="cardmedical">
        <h1 class="title-text">CONHEÇA NOSSOS MÉDICOS:</h1>
        <h3 class="description-text">
          Vamos além do convencional e apresentamos nossa equipe, onde a excelência é padrão.
        </h3>
      </div>
  
      <v-row class="justify-center align-center">
        <!-- Primeiro card -->
        <v-col cols="12" sm="6" md="4" class="card-col">
          <v-card class="custom-card">
            <v-avatar size="150" class="avatar-custom">
              <v-img src="../assets/drgui.jpg" alt="Dr. Guilherme Mendes Chaves"></v-img>
            </v-avatar>
            <v-card-title class="custom-font-title">Dr. Guilherme Mendes Chaves</v-card-title>
            <v-card-text class="custom-font-title">Médico Cardiologista</v-card-text>
            <div class="custom-div">
              <v-card-text class="custom-font-text"><strong>Cardiologista</strong> pelo Instituto do coração (INCOR - HCFMUSP)</v-card-text>
              <v-card-text class="custom-font-text"><strong>Métodos gráficos e ergometria</strong> pelo Hospital Israelita Albert Einstein</v-card-text>
            </div>
          </v-card>
        </v-col>
  
        <!-- Segundo card -->
        <v-col cols="12" sm="6" md="4" class="card-col">
          <v-card class="custom-card">
            <v-avatar size="150" class="avatar-custom">
              <v-img src="../assets/drjao.jpg" alt="Dr. João Antônio"></v-img>
            </v-avatar>
            <v-card-title class="custom-font-title">Dr. João Antônio</v-card-title>
            <v-card-text class="custom-font-title">Médico Cardiologista</v-card-text>
            <div class="custom-div">
              <v-card-text class="custom-font-text"><strong>Cardiologista</strong> pelo Instituto do coração (INCOR - HCFMUSP)</v-card-text>
              <v-card-text class="custom-font-text"><strong>Métodos gráficos, ergometria e reabilitação cardíaca</strong> pelo Instituto Dante Pazzanese de cardiologia (IDPC)</v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    // Nenhum código especial para este componente.
  }
  </script>
  
  <style scoped>
  .background-custom {
    background-color: #f4f4f4;
    padding: 4vh; /* Menos padding para reduzir a altura */
    text-align: center;
    min-height: 100vh; /* Altura mínima para o layout */
  }
  
  .custom-card {
    background-color: #AE1613;
    border: 6px sólido branco;
    box-shadow: 10px 10px 30px 0 rgba(0, 0, 0, 0.45);
    margin-top: 4vh
  }
  
  .card-col {
    padding-bottom: 4vh; /* Espaço entre as seções */
  }
  
  .custom-font-title {
    color: branco;
  }
  
  .avatar-custom {
    margin-top: 2vh;
  }
  
  .custom-div {
    background-color: branco;
    border-radius: 2vh; /* Redução do raio para manter a proporção */
    padding: 2vh;
  }
  
  .title-text {
    color: #dc4949;
    font-weight: bold;
    font-size: 3vh;
  }
  
  .description-text {
    color: #503636;
    font-weight: 300;
    font-size: 3vh;
    margin-bottom: 2vh;
  }
  </style>
  