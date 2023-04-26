<template>
    <Navbar></Navbar>
    <div class="bg-white">
        <div class="relative overflow-hidden bg-white">
            <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div
                    class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"
                >
                    <div class="sm:max-w-lg">
                        <h1
                            class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                        >
                            Summer styles are finally here
                        </h1>
                        <p class="mt-4 text-xl text-gray-500">
                            This year, our new summer collection will shelter
                            you from the harsh elements of a world that doesn't
                            care if you live or die.
                        </p>
                    </div>
                    <div>
                        <div class="mt-10">
                            <!-- Decorative image grid -->
                            <div
                                aria-hidden="true"
                                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div
                                    class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                                >
                                    <div
                                        class="flex items-center space-x-6 lg:space-x-8"
                                    >
                                        <div
                                            class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                                        >
                                            <div
                                                class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                                            >
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div
                                                class="h-64 w-44 overflow-hidden rounded-lg"
                                            >
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                                        >
                                            <div
                                                class="h-64 w-44 overflow-hidden rounded-lg"
                                            >
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div
                                                class="h-64 w-44 overflow-hidden rounded-lg"
                                            >
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div
                                                class="h-64 w-44 overflow-hidden rounded-lg"
                                            >
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                                        >
                                            <div
                                                class="h-64 w-44 overflow-hidden rounded-lg"
                                            >
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div
                                                class="h-64 w-44 overflow-hidden rounded-lg"
                                            >
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                    alt=""
                                                    class="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="#"
                                class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                >Shop Collection</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
        >
            <h2 class="sr-only">Products</h2>

            <div
                class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
            >
                <a
                    v-for="product in products"
                    :key="product.id"
                    :href="product.href"
                    class="group"
                >
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                    >
                        <img
                            :src="product.imageSrc"
                            :alt="product.imageAlt"
                            class="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">
                        {{ product.name }}
                    </h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">
                        {{ product.price }}
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";

const products = [
    {
        id: 1,
        name: "Earthen Bottle",
        href: "product",
        price: "$48",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
];
</script>

<style scoped></style>
