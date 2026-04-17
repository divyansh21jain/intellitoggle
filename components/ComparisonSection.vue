<template>
  <section class="bg-white py-[120px]">
    <div class="px-[120px]">
      <!-- Title -->
      <h2 class="font-satoshi font-bold text-[40px] gradient-text text-center">
        Dart-Powered Feature Flag
      </h2>

      <!-- Subtitle Area -->
      <div class="max-w-[826px] mx-auto text-center mt-[48px]">
        <h3 class="font-inter font-semibold text-[32px] text-heading-2">
          Not Another Generic Feature Flag Tool
        </h3>
        <p class="font-inter font-normal text-[18px] text-body-2 mt-[8px]">
          Most tools are built for every language, which means extra layers and slower toggles.
          IntelliToggle is built in Dart, for Dart -- so it's faster, safer, and built for your stack.
        </p>
      </div>

      <!-- Table -->
      <div class="max-w-[1440px] mx-auto mt-[32px] overflow-x-auto">
        <div class="min-w-[700px] bg-primary-light border-[0.5px] border-primary rounded-[8px] shadow-card overflow-hidden">
          <!-- Header Row -->
          <div class="bg-gradient-to-b from-primary to-primary-dark rounded-t-[12px] flex">
            <div class="w-[378px] shrink-0 p-[10px]">
              <span class="font-inter font-semibold text-[24px] text-[#FEFEFF]">Features</span>
            </div>
            <div class="flex-1 p-[10px] text-center">
              <span class="font-inter font-semibold text-[24px] text-[#FEFEFF]">IntelliToggle</span>
            </div>
            <div class="flex-1 p-[10px] text-center">
              <span class="font-inter font-semibold text-[24px] text-[#FEFEFF]">Other Feature Flag</span>
            </div>
          </div>

          <!-- Data Rows -->
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex border-t border-primary/20 bg-primary-light"
            :class="{ 'rounded-b-[12px]': index === features.length - 1 }"
          >
            <div class="w-[378px] shrink-0 p-[10px] flex items-center">
              <span class="font-inter font-semibold text-[18px] text-body-2">{{ feature }}</span>
            </div>
            <div class="flex-1 p-[10px] flex items-center justify-center">
              <img src="/images/icon-tick.svg" alt="Supported" class="w-5 h-5" />
            </div>
            <div class="flex-1 p-[10px] flex items-center justify-center">
              <img src="/images/icon-cancel.svg" alt="Not supported" class="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Dart-native SDK & server',
  'End-to-end type safety',
  'AI-assisted roll-outs & cleanup',
  'A/B testing built-in',
  'Dart-Powered SDKs',
]
</script>
