<template>
    <GuestLayout title="Create your account">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-2" action="#" method="POST">
                <div>
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            placeholder="Email Address"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <input
                            id="phone-input"
                            type="tel"
                            ref="input"
                            name="PhoneIn"
                            v-mask="'+62 ___ ____ ____'"
                            value=""
                            autocomplete="phone"
                            required=""
                            placeholder="+62"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <input
                            id="repassword"
                            name="repassword"
                            type="password"
                            required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Re-Password"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from "../components/GuestLayout.vue";

// Vue.directive('mask', {
//   inserted: function (el, binding) {

//     var mask = binding.value,
//         first = mask.indexOf('_'),
//         fieldsL = mask.replace(/[^_]/gm, '').length,
//         clean = mask.replace(/[^0-9_]/gm, ''),
//         indexes = []

//     for(var i = 0; i < clean.length; i++){
//       if(!isNaN(clean[i])){
//         indexes.push(i)
//       }
//     }

//     el.value = mask
//     el.clean = mask.replace(/[^0-9]/gm, '')

//     function maskIt(event, start){
//       var value = el.value,
//           filtred = value.replace(/[^0-9]/gm, ''),
//           result = ''

//       if(value.length < first){
//         value = mask + value
//         filtred = value.replace(/[^0-9]/gm, '')
//       }

//       for(var i = 0; i < filtred.length; i++){
//         if(indexes.indexOf(i) == -1){
//           result += filtred[i]
//         }
//       }

//       value = ''
//       var cursor = 0

//       for(var i = 0; i < mask.length; i++){
//         if(mask[i] == '_' && result){
//           value += result[0]
//           result = result.slice(1)
//           cursor = i + 1

//         }else{
//           value += mask[i]
//         }
//       }

//       if(cursor < first){
//         cursor = first
//       }

//       el.value = value

//       el.clean = el.value.replace(/[^0-9]/gm, '')

//       el.setSelectionRange(cursor,cursor)
//     }

//     el.addEventListener('focus', function(event){
//       event.preventDefault()
//     })

//     el.addEventListener('click', function(event){
//       event.preventDefault()
//       var start = el.value.indexOf('_')

//       if(start == -1){
//         start = el.value.length
//       }

//       el.setSelectionRange(start,start)

//     })

//     el.addEventListener('paste', function(event){
//       var start = el.selectionStart

//       if(start < first){
//         el.value = '_' + el.value
//       }
//     })

//     el.addEventListener('input', function(event){
//       var start = el.selectionStart
//       maskIt(event, start)
//     })

//   }
// })

// new Vue({
//   el: '#app',
//   methods: {
//     unmaskedValue: function(){
//       var val = this.$refs.input.clean
//       console.log(val)
//     }
//   }
// })
</script>

<style scoped></style>
