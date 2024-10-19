<script>
import { useDark } from '@vueuse/core';
import { ref } from 'vue'

const darkMode = useDark()

function toggleDarkMode() {
    darkMode.value = !darkMode.value
    console.log('Darkmode Alterado');
    
} 

watch(darkMode, (modeValue) => {
    darkMode.value = modeValue
    console.log('Darkmode Atual: ', modeValue.value);

})

</script>

<template class="d-flex">
    <v-switch 
        v-model="darkMode"
        class="swicth-modo"
        @change="toggleDarkMode"
    ></v-switch>    
</template>

<style lang="scss" scoped>
.swicth-modo {
    margin: 16px;
}
</style>