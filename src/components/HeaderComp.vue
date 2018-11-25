<template>
   <header id="header" class="masthead mb-auto">
      <div class="inner">
         <h3 class="masthead-brand">DiyetPortal</h3>
         <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Anasayfa</a>
            <a class="nav-link" href="#">Öne Çıkanlar</a>
            <a class="nav-link" href="#">İletişim</a>
         </nav>
      </div>
   </header>
</template>

<script>
export default {
  name: "HeaderComp"
};
</script>

<style scoped>
.masthead {
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-bottom: 0;
  color: #fff;
}

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: right;
  }
}
</style>
