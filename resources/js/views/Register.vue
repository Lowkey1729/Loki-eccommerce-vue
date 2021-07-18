<template>
        <main>
    <section class="relative mt-12 block  bg-gray-900">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center lg:mt-15 ">
                        <div class="w-full lg:w-6/12 px-4">
                            <div
                                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 mt-11">
                                <div class="flex-auto p-5 lg:p-10">
                                    <h4 class="   text-2xl lg:text-4xl font-bold text-center">Register</h4>
                                    <p class="leading-relaxed mt-1 mb-4 text-gray-600">

                                    </p>
                                    <form class="register" @submit.prevent="register">

                                            <div class="relative w-full mb-3 mt-8">
                                        <label class=" leading-loose block uppercase text-gray-700 text-xs font-bold mb-2"
                                            for="name">Full Name</label><input type="text" v-model="name"
                                            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Full Name" style="transition: all 0.15s ease 0s;" id="name" required autofocus />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            for="email">Email</label><input type="email" v-model="email"
                                            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Email" style="transition: all 0.15s ease 0s;" id="email" required />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            for="password">Password</label><input type="password" v-model="password"
                                            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Password" style="transition: all 0.15s ease 0s;" id="password"  required/>
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            for="c-password">Confirm Password</label><input type="password" v-model="confirm_password"
                                            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Confirm Password" style="transition: all 0.15s ease 0s;" id="c-password" required />
                                    </div>
                                    <div class="text-center mt-6">
                                        <button
                                            class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                            type="button" style="transition: all 0.15s ease 0s;" required>
                                            Register
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

        return {

            name: "",
            email: "",
            password: "",
            confirm_password: "",

        }
    },

    methods: {

        register: function(){

            let data = {

                    name: this.name,
                    email: this.email,
                    password: this.password,

            }

            this.$store.dispatch('register',data)
            .then(()=> this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }

}
</script>
