<template>
    <div class="background-custom">
        <!-- Título e subtítulo da seção -->
        <div class="custom-text" id="cardmedical">
            <h1 class="main-title">CONHEÇA NOSSOS MÉDICOS:</h1>
            <h3 class="sub-title">Vamos além do convencional e apresentamos nossa equipe, onde a excelência é padrão.</h3>
        </div>

        <!-- Cards dos médicos -->
        <v-row class="justify-center align-center">
            <v-col cols="12" sm="3" class="custom-col">
                <v-card class="custom-card">
                    <v-avatar size="150" class="avatar-img">
                        <v-img src="../assets/drgui.png" alt="Dr. Guilherme Mendes Chaves" />
                    </v-avatar>

                    <v-card-title class="custom-font-title" align="center">Dr. Guilherme Mendes Chaves</v-card-title>
                    <v-card-text class="custom-font-title" align="center">Médico Cardiologista</v-card-text>

                    <div class="custom-div">
                        <div class="line-with-texts">
                            <v-card-text class="custom-font-text"><strong>Cardiologista</strong> pelo Instituto do Coração (INCOR - HCFMUSP)</v-card-text>
                            <v-card-text class="custom-font-text"><strong>Métodos gráficos e ergometria</strong> pelo Hospital Israelita Albert Einstein</v-card-text>
                        </div>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" sm="3" class="custom-col">
                <v-card class="custom-card" style="margin-top: 6vh;">
                    <v-avatar size="150" class="avatar-img">
                        <v-img src="../assets/drjao.jpg" alt="Dr. João Antônio" />
                    </v-avatar>

                    <v-card-title class="custom-font-title" align="center">Dr. João Antônio</v-card-title>
                    <v-card-text class="custom-font-title" align="center">Médico Cardiologista</v-card-text>

                    <div class="custom-div">
                        <div class="line-with-texts">
                            <v-card-text class="custom-font-text"><strong>Cardiologista</strong> pelo Instituto do Coração (INCOR - HCFMUSP)</v-card-text>
                            <v-card-text class="custom-font-text"><strong>Métodos gráficos, ergometria e reabilitação cardíaca</strong> pelo Instituto Dante Pazzanese de Cardiologia (IDPC)</v-card-text>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    // Configurações do script
}
</script>

<style scoped>
.background-custom {
    font-family: "Inter", sans-serif;
    background-color: #f4f4f4;
    text-align: center;
    padding: 6vh; /* Adiciona espaçamento superior */
}

.main-title {
    color: #dc4949;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 1vh;
}

.sub-title {
    color: #503636;
    font-weight: 300;
    font-size: 16px;
}

.custom-card {
    background-color: #AE1613;
    border: 5px solid white;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.45);
    transition: transform 0.3s ease-in-out; /* Animação suave ao passar o mouse */
}

.custom-card:hover {
    transform: scale(1.05); /* Efeito de zoom ao passar o mouse */
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

.custom-font-title {
    color: white;
    font-weight: 200;
}

.custom-font-text {
    color: #763B3B;
}

.avatar-img {
    margin-top: 2vh;
    background-color: white;
}

.custom-col {
    margin-right: 5vh;
    margin-left: 5vh;
}

</style>
