<template>
  <!-- Toolbar simples para garantir que não haja espaços brancos -->
  <v-toolbar height="80" color="#ffffff" :elevation="5" class="no-margin no-padding">
    <v-toolbar-title class="text-h5">
      <strong style="color: #D80000;">ECG</strong>
      <span style="color: #763B3B;"> ONLINE</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <!-- Menu sem esconder ou colapsar -->
      <v-btn @click="scrollToElement('inicio')" flat color="#763B3B">Inicio</v-btn>
      <v-btn @click="scrollToElement('telemedicina')" flat color="#763B3B">Telemedicina</v-btn>
      <v-btn @click="scrollToElement('cardmedical')" flat color="#763B3B">Equipe</v-btn>
      <v-btn @click="scrollToElement('modalidades')" flat color="#763B3B">Modalidades</v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id);
      if (element) {
        const topOffset = element.getBoundingClientRect().top;
        window.scrollBy({ top: topOffset - 0, behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.font-nave {
  font-size: x-large;
}

.v-toolbar-title {
  color: #D80000;
}

.v-toolbar {
  padding-left: 20%;
  padding-right: 20%;
}

.v-toolbar-items {
  margin: 0;
  padding: 0;
}

.no-margin {
  margin: 0 !important;
}

.no-padding {
  padding: 0 !important;
}
</style>
