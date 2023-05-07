<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "cardItem",
    props: {
        cardTitle: String,
        addClass: Array,
        totalAmount: String,
        tableDescription: null,
    }
})
</script>

<template>
    <div class="flex flex-col lg:w-1/2 border rounded-lg border-slate-500 bg-white p-6 dark:bg-neutral-700 mb-2"
         :class="addClass">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {{ cardTitle }}
        </h5>
        <p v-if="tableDescription"
           class="mb-4 text-base text-neutral-600 dark:text-neutral-200 mb-auto pt-2 pb-4"
           v-html="tableDescription" />
        <p v-else
           class="mb-auto pt-2 pb-4">No checked item</p>
        <div class="flex justify-between columns-2">
            <div class="w-0 lg:w-1/3">

            </div>
            <div class="w-full lg:w-2/3 flex items-center columns-2">
                <div class="text-2xl text-cyan-600">Summary:</div>
                <div class="px-[2rem]" v-html="totalAmount"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>