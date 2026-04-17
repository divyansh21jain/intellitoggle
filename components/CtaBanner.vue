<template>
  <section id="cta" class="relative w-full overflow-hidden" :style="{ background: 'linear-gradient(135deg, #42389E 0%, #0F1026 100%)' }" aria-labelledby="cta-heading">
    <!-- Grid Pattern -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true" :style="{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 33px, rgba(255,255,255,0.06) 33px, rgba(255,255,255,0.06) 34px), repeating-linear-gradient(90deg, transparent, transparent 33px, rgba(255,255,255,0.06) 33px, rgba(255,255,255,0.06) 34px)', backgroundSize: '34px 34px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }" />

    <div class="relative flex flex-col items-center py-[120px] px-6">
      <div class="flex flex-col items-center text-center max-w-[649px]">
        <h2 id="cta-heading" class="font-inter font-semibold text-[32px] text-white leading-[1.25]">
          Launch Features Confidently With AI Driven Feature Flags
        </h2>
        <p class="font-inter font-normal text-lg text-[#FAFAFA] opacity-90 mt-[16px]">Start for free, scale as your team grows</p>
      </div>

      <div class="flex flex-col sm:flex-row items-center gap-[32px] w-full max-w-[649px] mt-[32px]">
        <!-- Start for $1/mo — bg #F9A71E, gradient text on nested span -->
        <a href="#" class="flex-1 flex items-center justify-center bg-[#F9A71E] rounded-[5px] shadow-btn h-[55px] px-8 hover:opacity-90 transition-opacity w-full sm:w-auto whitespace-nowrap">
          <span class="font-dm font-bold text-xl gradient-text">Start for $1/mo</span>
        </a>
        <a href="#" class="flex-1 flex items-center justify-center border border-[#F9A71E] rounded-[5px] shadow-btn h-[55px] px-8 font-dm font-bold text-xl text-[#F9A71E] hover:opacity-90 transition-opacity w-full sm:w-auto whitespace-nowrap">
          Join AI Early Access
        </a>
      </div>
    </div>
  </section>
</template>
