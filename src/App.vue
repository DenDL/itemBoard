<template>
    <div class="container mx-auto">
        <div class="flex mb-8">
            <div class="w-0 lg:w-1/4" />
            <div class="w-full lg:w-3/4">
                <currencyButtonList :listCurrency="createListCurrency()"
                                    :activeCurrency="activeCurrency"
                                    @clickCurrency="changeActiveCurrency"/>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/4 lg:pr-[2rem] mb-4">
                <listItems :listItems="task2.data" @addItem="addItem"/>
            </div>
            <div class="w-full lg:w-3/4">
                <div class="flex flex-col lg:flex-row lg:column-2">
                    <cardItem :addClass="['lg:mr-2']"
                              cardTitle="Last Checked Item"
                              :tableDescription="htmlDescription(activeListItem[activeListItem.length - 1])"
                              :totalAmount="convertCurrencyFull(activeListItem[activeListItem.length - 1]) ? convertCurrencyFull(activeListItem[activeListItem.length - 1]) + ' ' + activeCurrency : null"/>
                    <cardItem :addClass="['lg:ml-2']"
                              cardTitle="Total"
                              :tableDescription="htmlDescription(activeListItem)"
                              :totalAmount="convertCurrencyFull(activeListItem) ? `<span class='inline-block truncate w-10/12 text-base max-w-prose'>`+convertCurrencyFull(activeListItem) + '</span> ' + activeCurrency : null"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import task2 from './data/task2.json';
import currencyButtonList from '@/components/currencyButtonsList.vue';
import listItems from "@/components/listItems.vue";
import cardItem from '@/components/cardItem.vue';

export default {
    name: 'App',
    data() {
        return {
            task2,
            activeCurrency: 'USDT',
            activeListItem: []
        }
    },
    components: {
        currencyButtonList,
        listItems,
        cardItem
    },
    methods: {
        createListCurrency() {
            let ListCurrency = [];

            this.task2.data.forEach(item => {
                if (!ListCurrency.includes(item.currency)) {
                    ListCurrency.push(item.currency)
                }
            })

            return ListCurrency;
        },
        changeActiveCurrency(value) {
            this.activeCurrency = value;
        },
        addItem(item) {
            if (this.activeListItem.some(obj => obj.id === item.id)) {
                this.activeListItem = this.activeListItem.filter( obj => obj.id !== item.id );
            } else {
                this.activeListItem.push(item);
            }
        },
        _checkArray(items) {
            let itemsLoc = [];
            if (items) {
                if (items instanceof Array) {
                    itemsLoc = items;
                } else {
                    itemsLoc.push(items)
                }
            }

            return itemsLoc;
        },
        htmlDescription(items) {
            let itemsLoc = this._checkArray(items);

            let bodyHtml = '';

            if(itemsLoc && itemsLoc.length >= 1) {
                bodyHtml += `<div class="flex py-2 border-y">
                                <div class='w-1/3'>Name</div>
                                <div class="w-1/3">Item currency</div>
                                <div class="w-1/3">Computed currency</div>
                              </div>`;

                itemsLoc.forEach(item => {
                    bodyHtml += `<div class="flex py-2 border-b">
                                    <div class="w-1/3">Id: ` + item.id + `</div>
                                    <div class="w-1/3">` + item.price + ' ' + item.currency + `</div>
                                    <div class="w-1/3">` + this.convertCurrency(item, true) + `</div>
                                 </div>`;
                });
            }

            return bodyHtml;

        },
        convertCurrency(item, boolCurrency = false, number = false) {
            if (item.currency === this.activeCurrency) {
                return item.price + (boolCurrency ? " " + item.currency : '');
            } else if (number) {
                return item.price * this.task2['currencies-pairs'][item.currency+'-'+this.activeCurrency];
            } else {
                return '<span class="inline-block truncate w-10/12 text-base max-w-prose">' + item.price * this.task2['currencies-pairs'][item.currency+'-'+this.activeCurrency] + '</span>' + (boolCurrency ? " " + this.activeCurrency : '');
            }
        },
        convertCurrencyFull(items) {
            let itemsLoc = this._checkArray(items),
                fullPrice = 0;

            if(itemsLoc && itemsLoc.length >= 1) {
                itemsLoc.forEach(item => {
                    fullPrice += +this.convertCurrency(item, false, true);
                });
            }

            return fullPrice;
        }
    }
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
}
</style>
