<template>
    <div class="custom-background-modal">
        <!-- Adjusted Spacing for Title -->
        <div class="custom-titulo" id="modalidades">
            <h1 class="title-main">Conheça as modalidades de exames para Telemedicina</h1>
            <div class="horizontal-line"></div>
        </div>

        <v-container>
            <!-- Adjusted Spacing Between Cards -->
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <v-card class="custom-card-modal" rounded="lg">
                        <v-row>
                            <v-col cols="4">
                                <v-img src="../assets/Eq1.png" aspect-ratio="1.1" class="card-img" />
                            </v-col>
                            <v-col cols="8">
                                <v-card-title class="custom-title-top">Mapa</v-card-title>
                                <v-card-text class="custom-text-mid">
                                    O <strong>mapa cardíaco</strong> é uma representação da atividade elétrica do coração, capturada por dispositivos portáteis e enviada remotamente para avaliação médica. Ele oferece informações sobre ritmo cardíaco, batimentos e arritmias, permitindo diagnósticos precoces e monitoramento contínuo à distância.
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Second Card -->
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <v-card class="custom-card-modal" rounded="lg">
                        <v-row>
                            <v-col cols="4">
                                <v-img src="../assets/onDoctor.png" aspect-ratio="1.2" class="card-img" />
                            </v-col>
                            <v-col cols="8">
                                <v-card-title class="custom-title-top">Holter</v-card-title>
                                <v-card-text class="custom-text-mid">
                                    O aparelho holter é utilizado para exame cardiológico, sendo formado por um monitor conectado por cabos a eletrodos. Em geral, são empregados de três a oito eletrodos, que ficam fixados no tórax do paciente. Esses sinais são amplificados e registrados pelo dispositivo em forma de traçado, compondo os gráficos do holter de ECG.
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Third Card -->
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <v-card class="custom-card-modal" rounded="lg">
                        <v-row>
                            <v-col cols="4">
                                <v-img src="../assets/Doctor.png" aspect-ratio="1.3" class="card-img" />
                            </v-col>
                            <v-col cols="8">
                                <v-card-title class="custom-title-top">Eletrocardiograma</v-card-title>
                                <v-card-text class="custom-text-mid">
                                    O eletrocardiograma (ECG) é um exame que registra a atividade elétrica do coração, indicando seu ritmo e funcionamento. É uma técnica não invasiva amplamente utilizada por médicos para avaliar a função cardíaca dos pacientes.
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.custom-background-modal {
    background-color: #AE1613;
}

.custom-titulo {
    font-family: "Inter", sans-serif;
    text-align: center;
    margin-top: 5vh; /* Adds space at the top */
    padding-bottom: 3vh; /* Ensures space before content */
    color: white;
}

.title-main {
    padding-top: 2vh; /* Extra space between title and top */
}

.horizontal-line {
    border-top: 2px solid white;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 3vh; /* Adds space between line and next content */
}

.custom-card-modal {
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.45);
    margin-bottom: 20px;
}

.custom-title-top {
    font-family: "Inter", sans-serif;
    color: #C33E3E;
    font-weight: bold;
    margin-bottom: 1vh; /* Adds space above text */
}

.card-img {
    height: auto;
    width: 100%;
}

.custom-text-mid {
    text-align: justify;
    margin-top: 1vh; /* Extra space to avoid closeness with the image */
}
</style>
