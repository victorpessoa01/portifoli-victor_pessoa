<script>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const darkMode = useDark()
const toggleDarkMode = useToggle(darkMode)

</script>

<template>
    <v-switch 
        v-model="darkMode"
        @change="toggleDarkMode"
        label="Dark Mode"
    ></v-switch>    
</template>

<style lang="scss" scoped>
.swicth-modo {
    margin: 16px;
}
</style>