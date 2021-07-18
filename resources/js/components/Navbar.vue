<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3  " :class="darkModeClass"
   >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          to="/"
          >Loki Store</router-link
        ><button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <!-- User is Logged in -->
        <li class="flex items-center leading-8" v-if="IsLoggedIn" >
            <a :click="logout"
              class="lg:text-white  lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"

              >
              Logout</a
            >
          </li>

          <li class="flex items-center leading-8">
            <router-link to="/login"
              class="lg:text-white  lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"

              >
              Login</router-link
            >
          </li>

          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/register"
              ><i
                class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
              ></i>
              Register</router-link
            >
          </li>

          <li class="flex items-center">
            <router-link
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/shop"
              ><i
                class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
              ></i>
              Shop</router-link
            >
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Share</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Tweet</span></a
            >
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "
              ></i
              ><span class="lg:hidden inline-block ml-2">Star</span></a
            >
          </li>
          <li class="flex items-center">
            <button
              class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
              type="button"
              style="transition: all 0.15s ease 0s;"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  },


  computed: {
  darkModeClass() {

    return { dark: !!this.$route.meta?.darkmode };

  },

  IsLoggedIn: function(){
      return this.$store.getters.IsLoggedIn
  }
}
}
</script>

<style scoped>
  .dark {
      --tw-bg-opacity: 1;
            background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  }
</style>
