<template>
  <v-app>
    
    <NavBar/>

    <v-main>
      <HeaderPage/>
      <Telemedicina/>
      <CardMedical/>
      <Modalidades/>
    </v-main>
    
  </v-app>
</template>

<script setup>

import HeaderPage from './components/HeaderPage.vue';
import NavBar from './components/NavBar.vue';
import Telemedicina from './components/Telemedina.vue';
import CardMedical from './components/CardMedical.vue';
import Modalidades from './components/Modalidades.vue';

  //
</script>

<style>

</style>
