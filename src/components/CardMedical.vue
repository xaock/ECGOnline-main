<template>
    <div class="background-custom">
      <div class="custom-text" id="cardmedical">
        <h1 style="color: #dc4949; font-weight: bolder; font-size: 30px; margin-bottom: 1vh;">CONHEÇA NOSSOS MÉDICOS:</h1>
        <h3 style="color: #503636; font-weight: 300; font-size: 16px;">Vamos além do convencional e apresentamos nossa equipe, onde a excelência é padrão.</h3>
      </div>
  
      <div>
        <v-row class="justify-center align-center">
          <v-col class="custom-col" cols="12" sm="3" style="margin-right:5vh; margin-left:5vh;">
            <v-card class="custom-card" width="350" height="500" rounded="xl" style="border: 5px solid white;">
              <v-avatar size="150" style="margin-top: 2vh; background-color: white;">
                <v-img src="../assets/drgui.png" alt="Dr. Guilherme Mendes Chaves" style="width: 100%; height: 100%; object-fit: cover; object-position: 10% 100%;"></v-img>
              </v-avatar>
  
              <v-card-title class="custom-font-title" align="center" style="margin-top: 1vh; margin-bottom: -0.6vh; color: white;">Dr. Guilherme Mendes Chaves</v-card-title>
              <v-card-text class="custom-font-title" align="center" style="font-weight: 200; color: white;">Médico Cardiologista</v-card-text>
  
              <div class="custom-div" style="background-color: white;">
                <div class="line-with-texts">
                  <v-card-text class="custom-font-text" align="center" style="color: #763B3B;"><strong>Cardiologista</strong> pelo Instituto do coração (INCOR - HCFMUSP)</v-card-text>
                  <v-card-text class="custom-font-text" align="center" style="color: #763B3B;"><strong>Métodos gráficos e ergometria</strong> pelo Hospital Israelita Albert Einstein</v-card-text>
                </div>
              </div>
            </v-card>
          </v-col>
  
          <v-col class="custom-col" cols="12" sm="3">
            <v-card class="custom-card" width="350" height="500" rounded="xl" style="border: 5px solid white;">
              <v-avatar size="150" style="margin-top: 2vh;">
                <v-img src="../assets/drjao.jpg" alt="Dr. João Antônio" style="width: 100%; height: 100%; object-fit: cover; object-position: 10% 100%;"></v-img>
              </v-avatar>
  
              <v-card-title class="custom-font-title" align="center" style="margin-top: 1vh; margin-bottom: -0.6vh; color: white;">Dr. João Antônio</v-card-title>
              <v-card-text class="custom-font-title" align="center" style="font-weight: 200; color: white;">Médico Cardiologista</v-card-text>
  
              <div class="custom-div" style="background-color: white;">
                <div class="line-with-texts">
                  <v-card-text class="custom-font-text" align="center" style="color: #763B3B;"><strong>Cardiologista</strong> pelo Instituto do coração (INCOR - HCFMUSP)</v-card-text>
                  <v-card-text class="custom-font-text" align="center" style="color: #763B3B;"><strong>Métodos gráficos, ergometria e reabilitação cardíaca</strong> pelo Instituto Dante Pazzanese de Cardiologia (IDPC)</v-card-text>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Sem alterações no script
  }
  </script>
  
  <style scoped>
  .background-custom {
    font-family: "Inter", sans-serif;
    background-color: #f4f4f4;
    margin-top: 5vh;
    height: auto; 
    text-align: center;
    min-height: 800px;
  }
  
  .custom-text {
    padding: 6vh;
    font-weight: bolder;
  }
  
  .custom-card {
    background-color: #AE1613;
    border: 5px solid white; /* Adicionando a borda branca */
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.45);
    margin-right: 2vh;
  }
  
  .custom-font-title {
    color: white; /* Alteração para branco */
    padding: 0;
  }
  
  .custom-div {
    background-color: #FFFFFF;
    margin: 2vh;
    border-radius: 3vh;
    padding: 1vh;
  }
  
  .line-with-texts {
    position: relative;
    padding-left: 20px;
  }
  
  .line-with-texts::before {
    content: "";
    position: absolute;
    left: 20px;
    top: 15%;
    height: 70%;
    width: 2px;
    background-color: #763B3B;
  }
  
  .line-with-texts::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 16px;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #763B3B;
  }
  
  .custom-font-text {
    color: #763B3B;
    text-align: start;
  }
  </style>