<template>
  <section class="bg-primary-light w-full p-[120px]" aria-labelledby="plans-heading">
    <div class="flex flex-col items-center max-w-[1394px] mx-auto">
      <h2 id="plans-heading" class="font-satoshi font-bold text-[40px] gradient-text text-center w-full">
        Plans Built For Every Stage Of Growth
      </h2>

      <!-- Pricing Card + Link -->
      <div class="flex flex-col items-center mt-[48px]">
        <div class="bg-gradient-to-b from-primary to-primary-dark rounded-[12px] p-[24px] w-[370px] h-[154px] flex flex-col items-center justify-center gap-[21px]">
          <p class="font-merriweather font-bold text-xl text-[#FEFEFF] text-center">Prices starts at</p>
          <div class="flex items-center gap-[18px] text-[#FEFEFF]">
            <span class="font-merriweather font-bold text-[48px]">$10</span>
            <span class="font-normal text-2xl">/month</span>
          </div>
        </div>

        <!-- View Subscription Details — bg #F9A71E, gradient text on nested span -->
        <a href="#" class="flex items-center justify-center bg-[#F9A71E] rounded-[8px] h-[59px] w-[371px] px-[20px] py-[10px] mt-[16px] hover:opacity-90 transition-opacity whitespace-nowrap">
          <span class="font-inter font-semibold text-lg gradient-text">View Subscription Details</span>
        </a>
      </div>

      <!-- Content Card -->
      <div class="bg-white border-[0.2px] border-primary rounded-[12px] shadow-card w-full max-w-[1394px] px-[32px] py-[64px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mt-[32px]">
        <div class="flex flex-col gap-[16px] w-full lg:w-[589px]">
          <h3 class="font-inter font-semibold text-[32px] text-heading-2">Start Your 7-Day Free Sandbox Plan</h3>
          <p class="font-inter font-normal text-lg text-body-2">Join over 1,000+ startups already growing with Untitled.</p>
        </div>
        <div class="flex items-center gap-[32px] flex-wrap">
          <!-- Get Started — bg #F9A71E, gradient text on nested span -->
          <a href="#" class="flex items-center justify-center bg-[#F9A71E] rounded-[8px] shadow-card h-[55px] w-[184px] px-[24px] py-[12px] hover:opacity-90 transition-opacity whitespace-nowrap">
            <span class="font-inter font-semibold text-lg gradient-text">Get Started</span>
          </a>
          <a href="#" class="flex items-center justify-center border border-[#F9A71E] rounded-[8px] shadow-card h-[55px] w-[184px] px-[24px] py-[12px] font-inter font-semibold text-lg text-[#F9A71E] hover:bg-[#F9A71E]/10 transition-colors whitespace-nowrap">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
