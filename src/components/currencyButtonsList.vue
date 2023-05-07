<template>
    <nav
            v-if="listCurrency"
            class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 border rounded-lg border-slate-500"
            data-te-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <div
                    class="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                    id="navbarSupportedContent1"
                    data-te-collapse-item>
                <ul
                        class="list-style-none mr-auto flex pl-0 flex-row"
                        data-te-navbar-nav-ref>
                    <li v-for="item in listCurrency"
                        :key="'item-'+item"
                        class="my-2 px-2 lg:px-4"
                        data-te-nav-item-ref>
                        <a class="text-black border-none py-1"
                           :class="{ active: item === activeCurrency }"
                           @click.prevent.stop="$emit('clickCurrency', item)"
                           href="#"
                           data-te-nav-link-ref
                        >{{ item }}</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        listCurrency: {
            type: Array,
            default: null
        },
        activeCurrency: String
    }
}
</script>

<style scoped lang="scss">
nav {
  li {
    a {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0;
        background-color: transparent;
        transition: all ease-in-out .35s;
      }

      &:hover,
      &.active {
        &:after {
          width: 100%;
          background-color: rgb(0 0 0);
        }
      }
    }
  }
}
</style>