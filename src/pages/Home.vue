<template>
   <div id="home" class="cover-container d-flex w-100 h-100 pt-5 mx-auto flex-column">

         <!-- Header Component -->
         <header-comp></header-comp>

         <main class="main">
            <h1 class="cover-heading">Diyet Portal'a Hoşgeldiniz.</h1>
            <p class="lead">Amacımız tüm diyetisyenleri ve diyetisten ihtiyacı olanları bir araya getirmek, ziyaretçilerimize en doğru diyet danışmanlığı ve hizmeti sunmayı amaçlıyor bu doğrultuda diyetisyenleri veritabanımıza kayıt ediyoruz</p>
            <p class="lead">
               <a href="#" class="btn btn-lg btn-secondary">Devam Et</a>
            </p>
         </main>
         
         <!-- Footer Component -->
         <footer-comp></footer-comp>

   </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";

export default {
  name: "Home",
  components: {
    HeaderComp,
    FooterComp
  }
};
</script>

<style scoped>
.main {
  text-align: center;
}
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  /* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
  border: .05rem solid #fff;
  background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
}
</style>
