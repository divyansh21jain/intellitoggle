<template>
  <section class="bg-primary-light px-5 sm:px-10 lg:px-[120px] py-14 lg:py-[120px]" aria-labelledby="openfeature-heading">
    <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-[275px]">
      <!-- Left — White Card -->
      <div class="w-full lg:flex-1 lg:min-w-[400px] lg:max-w-[830px] bg-white border-[0.5px] border-primary rounded-[12px] shadow-card flex items-center justify-center px-10 lg:px-[71px] py-12 lg:py-[77px]">
        <img src="/images/openfeature-logo.png" alt="OpenFeature Logo" width="362" height="183" class="max-w-full h-auto" />
      </div>

      <!-- Right — Text -->
      <div class="w-full lg:flex-1 lg:min-w-[300px] lg:max-w-[575px]">
        <h3 id="openfeature-heading" class="font-inter font-semibold text-2xl lg:text-[32px] text-heading-1 leading-tight">
          Seamless Feature Management with OpenFeature
        </h3>
        <p class="mt-[16px] font-inter font-normal text-base lg:text-[18px] text-body-2 leading-relaxed">
          Aortem now integrates with OpenFeature to provide developers with a powerful, standardized approach to feature flagging and dynamic configuration. Ship features faster, test safely, and optimize user experiences effortlessly.
        </p>
        <div class="mt-[32px]">
          <a href="#" class="inline-flex items-center gap-[10px] bg-[#F9A71E] rounded-[8px] shadow-btn px-[24px] py-[12px] hover:opacity-90 transition-opacity">
            <span class="font-merriweather font-bold text-lg lg:text-[20px] gradient-text">Learn More</span>
            <img src="/images/icon-arrow.svg" alt="" class="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
