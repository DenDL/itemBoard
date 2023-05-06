<template>
    <nav
            v-if="listCurrency"
            class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 border rounded-lg border-slate-500"
            data-te-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <!-- Hamburger button for mobile view -->
            <button
                    class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <!-- Hamburger icon -->
                <span class="[&>svg]:w-7">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7">
          <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"/>
        </svg>
      </span>
            </button>

            <!-- Collapsible navigation container -->
            <div
                    class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                    id="navbarSupportedContent1"
                    data-te-collapse-item>
                <ul
                        class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                        data-te-navbar-nav-ref>
                    <li v-for="item in listCurrency"
                        :key="'item-'+item"
                        class="mb-4 lg:mb-0 lg:px-4"
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