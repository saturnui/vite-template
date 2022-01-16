<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue-demi';
import HelloWorld from './components/HelloWorld.vue'
// import VTextInput from './modules/vuwi/components/TextInput/VTextInput.vue';
// import VLine from './modules/vuwi/components/Line/VLine.vue';
// import VSpinner from './modules/vuwi/components/Spinner/VSpinner.vue';
import { VButton, VResizer, VSpinner, VTextInput, VPagination } from 'vuwi'
const text = ref('')
const currentPage = ref(0)
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="flex flex-col w-full items-center">
    <div class="w-full max-w-lg p-4 space-y-2">
      <VTextInput label="Name" v-model="text" :multiline="true"  class="border wi-border" />
      <VButton size="xl" class="wi-primary w-full">Submit</VButton>
      <VSpinner class="animate-spin" />
      <div class="w-full h-50 wi-highlight">
        <VResizer class="h-full min-w-50 max-w-full">
          <div class="relative h-full doc-preview">
            <div class="absolute wi-tl h-10 w-10 bg-teal-500 wi-center wi-dark font-bold">TL</div>
            <div class="absolute wi-tr h-10 w-10 bg-teal-500 wi-center wi-dark font-bold">TR</div>
            <div class="absolute wi-tl h-10 w-10 bg-teal-500 wi-center wi-dark font-bold">TL</div>
            <div class="absolute wi-bl h-10 w-10 bg-teal-500 wi-center wi-dark font-bold">BL</div>
            <div class="absolute wi-br h-10 w-10 bg-teal-500 wi-center wi-dark font-bold">BR</div>
          </div>
        </VResizer>
      </div>
      <div class="bg-red-500 p-4 rounded">
        <VPagination v-model="currentPage" :length="12" />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
