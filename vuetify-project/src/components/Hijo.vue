<!-- HijoComponent.vue -->
<template>
    <v-container>
        <h2>Hijo Component</h2>
        <v-alert :value="true" type="info">{{ mensaje }}</v-alert>
        <p>Contador des de hijo: {{ numero }}</p>
        <p>Boton del padre info al darle es Hijo: {{ accion }}</p>
        <p>Resultado de la operacion: {{ result }}</p>
    </v-container>
</template>
  
<script>
export default {
    props: {
        numero: Number,
        mensaje: String,
        accion: String,
        result: Number,
    }
};
</script>
  