<template>
    <div class="custom-div">

        <h2 class="custom-h2">Como funciona o laudo de Holter a distância?</h2>

        <v-row class="justify-center align-center">
            <v-col class="custom-col" cols="10" sm="3">
                <v-card class="custom-card" width="250" height="300">
                    <v-card-text class="custom-background">
                        <v-img src="../assets/card1.png" height="130"></v-img>
                    </v-card-text>

                    <v-card-title class="custom-font-title" align="center">PASSO 1</v-card-title>
                    <v-card-text class="custom-font-text" align="center">Realize o Holter e salve-o em arquivo</v-card-text>

                </v-card>
            </v-col>

            <v-col class="custom-col" cols="10" sm="3">
                <v-card class="custom-card" width="250" height="300">
                    <v-card-text class="custom-background">
                        <v-img src="../assets/card2.png" height="130"></v-img>
                    </v-card-text>

                    <v-card-title class="custom-font-title" align="center">PASSO 2</v-card-title>
                    <v-card-text class="custom-font-text" align="center">Encaminhe o exame de Holter em nosso sistema online.</v-card-text>
                </v-card>
            </v-col>

            <v-col class="custom-col" cols="10" sm="3">
                <v-card class="custom-card" width="250" height="300">
                    <v-card-text class="custom-background" style="padding-left: 4vh;">
                        <v-img src="../assets/card3.png" height="130"></v-img>
                    </v-card-text>

                    <v-card-title class="custom-font-title" align="center" >PASSO 3</v-card-title>
                    <v-card-text class="custom-font-text" align="center">Um de nossos cardiologistas analisa o exame.</v-card-text>
                </v-card>
            </v-col>

            <v-col class="custom-col" cols="10" sm="3">
                <v-card class="custom-card" width="250" height="300">
                    <v-card-text class="custom-background" >
                        <v-img src="../assets/card4.png" height="130"></v-img>
                    </v-card-text>

                    <v-card-title class="custom-font-title" align="center">PASSO 4</v-card-title>
                    <v-card-text class="custom-font-text" align="center">O laudo estará disponivel para impressão em menos de 12 horas.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>

    <div class="vertical-line"></div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    .custom-div{
        background-color: #F8F8F8;
        padding-top: 5vh;
        padding-bottom: 4vh;
        padding-left: 3vh;
        text-align: center;
        max-width: 140vh;
        margin: 0 auto;
    }

    .custom-h2{
        font-family: "Inter", sans-serif;
        font-weight: normal;
        font-size: 2.3vh;
        color: #444444;
        margin-bottom: 5vh;
    }

    .custom-card{
        border: 1.7px solid #AE1613; 
        border-radius: 20px;
    }

    .custom-background {
        background-color: #c2302d; 
        border-radius: 0px 0px 20px 20px;
    }

    .custom-font-title{
        padding-top: 25px;
        font-family: "Inter", sans-serif;
        font-size: 1.9vh;
        font-weight: bold;
        color: #444444;
    }

    .custom-font-text{
        font-family: "Inter", sans-serif;
        font-weight: light;
        color: #444444;
    }

    .vertical-line {
        height: 80px; 
        width: 2px; 
        background-color: #AE1613;
        margin: auto; 
        margin-top: 3vh;
    }
</style>