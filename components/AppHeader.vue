<template>
  <header class="w-full bg-primary">
    <nav
      class="relative flex items-center justify-between w-full h-[80px] sm:h-[100px] lg:h-[133px] px-5 sm:px-10 lg:px-[120px] py-5 sm:py-7 lg:py-[40px]"
      role="navigation"
      aria-label="Main navigation"
    >
      <a href="/" class="flex items-center gap-2" aria-label="IntelliToggle home">
        <img src="/images/logo-icon.svg" alt="" class="w-[36px] h-[34px] lg:w-[54.5px] lg:h-[50.8px]" aria-hidden="true" />
        <span class="font-merriweather font-bold text-lg lg:text-[24px] text-white">IntelliToggle</span>
      </a>

      <ul class="hidden md:flex items-center gap-[27px] list-none" role="menubar">
        <li role="none"><a href="#home" class="font-dm font-bold text-base lg:text-[20px] text-white hover:text-accent transition-colors" role="menuitem">Home</a></li>
        <li role="none"><a href="#about" class="font-dm font-light text-base lg:text-[20px] text-white hover:text-accent transition-colors" role="menuitem">About</a></li>
        <li role="none"><a href="#pricing" class="font-dm font-light text-base lg:text-[20px] text-white hover:text-accent transition-colors" role="menuitem">Pricing</a></li>
      </ul>

      <!-- Desktop CTA — bg-accent with gradient text on nested span -->
      <a href="#sandbox" class="hidden md:inline-flex items-center justify-center bg-[#F9A71E] rounded-[8px] px-[24px] py-[12px] shadow-card hover:opacity-90 transition-opacity whitespace-nowrap">
        <span class="font-inter font-semibold text-lg lg:text-[24px] gradient-text">Start Sandbox</span>
      </a>

      <button
        class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        :aria-expanded="mobileOpen" aria-controls="mobile-menu" aria-label="Toggle navigation menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
        <div v-show="mobileOpen" id="mobile-menu" class="absolute top-full left-0 right-0 bg-primary shadow-lg z-50 px-5 py-4 flex flex-col gap-2 md:hidden" role="menu">
          <a href="#home" class="block rounded-lg px-4 py-3 font-dm font-bold text-base text-white hover:bg-white/10" role="menuitem" @click="mobileOpen = false">Home</a>
          <a href="#about" class="block rounded-lg px-4 py-3 font-dm font-light text-base text-white hover:bg-white/10" role="menuitem" @click="mobileOpen = false">About</a>
          <a href="#pricing" class="block rounded-lg px-4 py-3 font-dm font-light text-base text-white hover:bg-white/10" role="menuitem" @click="mobileOpen = false">Pricing</a>
          <a href="#sandbox" class="block w-full rounded-[8px] bg-[#F9A71E] px-6 py-3 text-center mt-2" @click="mobileOpen = false"><span class="font-inter font-semibold text-base gradient-text">Start Sandbox</span></a>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
</script>
