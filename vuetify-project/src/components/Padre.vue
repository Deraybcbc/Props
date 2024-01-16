<!-- PadreComponent.vue -->
<template>
    <v-container>
        <h1>Padre Component</h1>

        <v-row>
            <v-col cols="2">
                <v-btn @click="pular('Suma')">Sumar</v-btn>

            </v-col>
            <v-col>
                <v-btn @click="pular('Resta')">Restar</v-btn>
            </v-col>

        </v-row>

        <br><br>
        <v-row>
            <v-col cols="3">
                <v-text-field class="barra no-margin-bottom" v-model="numero1" :clearable="true"
                    placeholder="Ingrese el número 1"></v-text-field>
            </v-col>
            <v-col>
                <v-text-field class="barra no-margin-bottom" v-model="numero2" :clearable="true"
                    placeholder="Ingrese el número 2"></v-text-field>
            </v-col>
        </v-row>

        <HijoComponent :mensaje="mensajeDesdePadre" :numero="contador" :accion="accion" :result="resultado" />
    </v-container>
</template>
  
<script>
import HijoComponent from "@/components/Hijo.vue";

export default {
    components: {
        HijoComponent
    },
    data() {
        return {
            contador: 0,
            mensajeDesdePadre: "Hola desde el padre",
            accion: "",
            numero1: null,
            numero2: null,
            resultado: 0,
            texto: "Ingrese un numero",
        };

    },

    methods: {
        pular(accion) {

            // Convierte los valores a números antes de realizar la suma o resta
            const num1 = parseFloat(this.numero1);
            const num2 = parseFloat(this.numero2);
            if (this.numero1 != null || this.numero2 != null) {
                if (!isNaN(num1) && !isNaN(num2)) {
                    if (accion == 'Suma') {
                        this.contador++;
                        this.accion = accion;
                        this.resultado = num1 + num2;
                        console.log(this.numero1);
                        console.log(this.numero2);
                        console.log(this.resultado);

                    }
                    else {
                        this.contador--;
                        this.resultado = num1 - num2;
                        this.accion = accion;
                        console.log(this.numero1);
                        console.log(this.numero2);
                        console.log(this.resultado);
                    }
                    this.numero1 = null;
                    this.numero2 = null;
                } else {
                    window.alert("Solo numeros")
                }
            } else {
                window.alert("Por favor complete ambos campos");
            }

        }
    }
};
</script>

<style scoped>
.barra {
    width: 20dvh;
}

.no-margin-bottom {
    margin-bottom: 0;
}

.botones {
    display: flex;
    justify-content: space-between;
}
</style>
  