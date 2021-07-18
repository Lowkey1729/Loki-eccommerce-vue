<template>
        <main>
    <section class="relative mt-12 block  bg-gray-900">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center lg:mt-15 ">
                        <div class="w-full lg:w-6/12 px-4">
                            <div
                                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 mt-11">
                                <div class="flex-auto p-5 lg:p-10">
                                    <h4 class="   text-2xl lg:text-4xl font-bold text-center">Login</h4>
                                    <p class="leading-relaxed mt-1 mb-4 text-gray-600">

                                    </p>
                                    <form class="login" @submit.prevent="login">
                                              <div class="relative w-full mb-3 mt-8">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            for="email">Email</label><input type="email" v-model="email"
                                            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Enter email address" style="transition: all 0.15s ease 0s;" />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            for="password">Password</label><input type="password" v-model="password"
                                            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Enter password" style="transition: all 0.15s ease 0s;" />
                                    </div>

                                    <div class="text-center mt-6">
                                        <button
                                            class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="submit" style="transition: all 0.15s ease 0s;">
                                            Login
                                        </button>
                                    </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </main>
</template>

<script>

export default{

    data(){
        return{
            email: "",
            password: "",
        }
    },

    methods:{

        login: function(){
            let email = this.email
            let password = this.password
            this.$store.dispatch('login', {email, password})
            .then(()=> this.$router.push('/'))
            .catch(err=> console.log(err))
        }
    }


}


</script>
