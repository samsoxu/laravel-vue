<template>
    <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
        <GuestLayout title="Set new password">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-2" action="#" method="POST">
                    <div class="mt-2 flex flex-row-reverse items-center">
                        <div class="text-sm">
                            <a
                                href="login"
                                class="font-semibold text-indigo-600 hover:text-indigo-500"
                                >Go back to Login</a
                            >
                        </div>
                    </div>
                    <div>
                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="New Password"
                        />
                    </div>
                    <div>
                        <input
                            id="repeatPassword"
                            name="repeatPassword"
                            type="password"
                            required=""
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Repeat Password"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    </div>
</template>
<script setup>
import GuestLayout from "../components/GuestLayout.vue";
</script>

<style></style>
