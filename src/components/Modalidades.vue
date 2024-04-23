<template>
    <div class="custom-background-modal">

        <div class="custom-titulo" id="modalidades">
            <h1 style="padding-top: 5vh;">Conheça as modalidades de exames que realizamos para Telemedicina</h1>
            <div class="horizontal-line"></div>
        </div>

        <div class="custom-div-text">
            <v-container >
                <v-row class="justify-center align-center">
                    <v-col cols="12" sm="7">
                        <v-card class="custom-card-modal" rounded="lg">
                            <v-row no-gutters>
                                <v-col class="custom-right-div" cols="6">
                                    <v-card-title class="custom-title-top">Mapa</v-card-title>
                                    <v-card-text class="custom-text-mid">O <strong>mapa cardíaco</strong> é uma representação da atividade elétrica do coração, capturada por dispositivos portáteis e enviada remotamente para avaliação médica. Ele oferece informações sobre ritmo cardíaco, batimentos e arritmias, permitindo diagnósticos precoces e monitoramento contínuo à distância. Essa tecnologia agiliza a tomada de decisões médicas, melhorando o cuidado cardiovascular, especialmente em áreas remotas ou em situações de emergência.</v-card-text>
                                </v-col>

                                <v-col cols="6">
                                    <v-img src="../assets/Doctors.png" aspect-ratio="1.1"></v-img>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col cols="12" sm="7">
                        <v-card class="custom-card-modal" rounded="lg">
                            <v-row no-gutters>

                                <v-col cols="6">
                                    <v-img src="../assets/onDoctor.png" aspect-ratio="1.2"></v-img>
                                </v-col>

                                <v-col class="custom-right-div" cols="6">
                                    <v-card-title class="custom-title-top">Holter</v-card-title>
                                    <v-card-text class="custom-text-mid"> O aparelho holter é utilizado para exame cardiológico, sendo formado por um monitor conectado por cabos a eletrodos.
                                        Em geral são empregados de três a oito eletrodos, que ficam fixados no tórax do paciente.
                                        Essas pequenas peças captam sinais elétricos que fazem o coração bater e os enviam ao monitor holter através dos cabos.
                                        Esses sinais são amplificados e registrados pelo dispositivo em forma de traçado, compondo os gráficos do holter de ECG.
                                    </v-card-text>
                                </v-col>

                                
                            </v-row>
                        </v-card>
                    </v-col>

                    <v-col cols="12" sm="7">
                        <v-card class="custom-card-modal" rounded="lg">
                            <v-row no-gutters>
                                <v-col class="custom-right-div" cols="6">
                                    <v-card-title class="custom-title-top">Eletrocardiograma</v-card-title>
                                    <v-card-text class="custom-text-mid">O eletrocardiograma (ECG) é um exame que registra a atividade elétrica do coração, indicando seu ritmo e funcionamento. Essa ferramenta fornece informações cruciais sobre a saúde cardíaca, auxiliando no diagnóstico de arritmias, doenças cardíacas e outros problemas cardiovasculares. É uma técnica não invasiva e amplamente utilizada por médicos para avaliar a função cardíaca dos pacientes.</v-card-text>
                                </v-col>

                                <v-col cols="6">
                                    <v-img src="../assets/Doctor.png" aspect-ratio="1.3"></v-img>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </div>
</template>
<script>
export default {

}
</script>

<style scoped>

.custom-background-modal {
    background-color: #AE1613;
}

.custom-card-modal{
    box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.45);
}
.custom-titulo{
    font-family: "Inter", sans-serif;
    font-weight: lighter;
    color: white;
    margin: 0 auto;
    text-align: center;
    max-width: 100vh;
}

.horizontal-line {
    border-top: 2px solid white;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 5vh;
}

.custom-right-div{
    padding: 5vh !important;
    padding-top: 7vh !important;

}
.custom-title-top{
    font-family: "Inter", sans-serif;
    font-weight: bold;
    color: #C33E3E;
    margin-bottom: 1vh;
}

.custom-text-mid{
    font-family: "Inter", sans-serif;
    color: #763B3B;
    font-size:larger;
    text-align: justify;
    
}



</style>