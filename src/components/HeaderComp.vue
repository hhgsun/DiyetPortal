<template>
  <header id="header" class="cover-container container masthead fixed-top pt-3 pb-3 rounded-bottom">
    <div class="inner">
      <h3 class="masthead-brand">DiyetPortal</h3>
      <nav class="nav nav-masthead justify-content-center">
        <a class="nav-link" v-bind:class="$route.path == '/' ? 'active' : ''" @click="$router.push({ path: '/' })">Anasayfa</a>
        <a class="nav-link" href="#">Öne Çıkanlar</a>
        <a class="nav-link" v-bind:class="$route.path == '/diyetisyenler' ? 'active' : ''" @click="$router.push({ path: '/diyetisyenler' })">Diyetisyenler</a>
        <a class="nav-link" v-bind:class="$route.path == '/iletisim' ? 'active' : ''" @click="$router.push({ path: '/iletisim' })">İletişim</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  mounted() {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    window.onscroll = function() {
      if (window.pageYOffset > (sticky + 30)) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  }
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
  cursor: pointer;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

.sticky {
  background-image: linear-gradient(to top, #b5c1ed 0%, #a6c1ee 100%);
  /* transition: all 0.25s; */
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
