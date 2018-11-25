<template>
   <div id="contact" class="cover-container d-flex w-100 h-100 pt-3 mx-auto flex-column">
      
      <!-- Header Component -->
      <header-comp></header-comp>
      
      <main class="main rounded p-2 bg-light">
         İletişim
      </main>
      
      <!-- Footer Component -->
      <footer-comp></footer-comp>

   </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";

export default {
  name: "Contact",
  components: {
    HeaderComp, FooterComp
  }
};
</script>

<style scoped>

</style>
