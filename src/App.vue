<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue-demi';
import HelloWorld from './components/HelloWorld.vue'
import { VAlert, VAvatar, VButton, VCollapse, VResizer, VSpinner, VTextInput, VPagination, VSkeletonListItem } from '@vuwi/vue'
const text = ref('')
const currentPage = ref(0)
</script>

<template>
  <div class="wi-main">
    <div class="flex flex-col w-full items-center">
      <div class="w-full max-w-lg p-4 space-y-6">
        <VAlert class="bg-purple-200 text-purple-500 text-sm font-medium" role="alert">
          <span class="p-3">I'm an alert that informs you of stuff.</span>
        </VAlert>
        <VAvatar
          name="Eddie Van Halen"
          size="xl"
          class="wi-avatar-xl rounded-full bg-purple-600 text-white"
        />
        <VTextInput
          label="Name"
          placeholder="Hi there"
          v-model="text"
          multiline
          class="border wi-border"
        />
        <VButton size="xl" class="wi-primary w-full">Submit</VButton>
        <VSpinner class="animate-spin" />
        <div class="w-full h-50 bg-dark-700">
          <VResizer class="h-full min-w-50 max-w-full bg-dark-100">
            <div class="relative h-full">
              <div class="absolute wi-tl h-10 w-10 bg-teal-500 text-white wi-center font-bold">TL</div>
              <div class="absolute wi-tr h-10 w-10 bg-teal-500 text-white wi-center font-bold">TR</div>
              <div class="absolute wi-bl h-10 w-10 bg-teal-500 text-white wi-center font-bold">BL</div>
              <div class="absolute wi-br h-10 w-10 bg-teal-500 text-white wi-center font-bold">BR</div>
            </div>
          </VResizer>
        </div>
        <div class="flex justify-center items-center gap-8">
          <VSpinner
            class="w-4 h-4 min-w-4 min-h-4 border-2 border-green-400 border-r-transparent border-t-transparent"
          />

          <VSpinner
            class="wi-fastest w-10 h-10 min-w-10 min-h-10 border-3 border-blue-500 border-r-transparent border-l-transparent"
          />

          <VSpinner
            class="wi-fast w-16 h-16 min-w-10 min-h-10 border-16 border-purple-500 border-r-purple-800 border-l-purple-800"
          />

          <VSpinner
            class="wi-slowest w-20 h-20 min-w-8 min-h-8 border-10 border-r-yellow-400 border-l-green-400 border-t-blue-400 border-b-red-400"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </VSpinner>
        </div>
        <VPagination v-model="currentPage" :length="12" :total-visible="5" class-name="app-pagination" />
        <div>
          <VCollapse v-for="i in 3" :key="i" group="myCustomGroup" class="w-full -mb-1 last:mb-0">
            <template #header="{ open: isOpen }">
              <div
                class="relative p-3 flex items-center gap-4 w-full border wi-border z-0 wi-light-dark"
              >
                <span class="font-bold flex-grow">Title here</span>
                <!-- <tabler-chevron-up
              class="transition duration-150 transform"
              :class="{ 'rotate-180': isOpen }"
                />-->
                >
              </div>
            </template>
            <div class="border-b border-r border-l wi-border wi-light-dark p-4">
              <VSkeletonListItem />
              <VSkeletonListItem />
            </div>
          </VCollapse>
        </div>
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
