<template>

  <div>

    <web3-modal-vue
        ref="web3modal"
        :theme="theme"
        :provider-options="providerOptions"
        cache-provider
    />

    <div class="text-center container shadow-md bg-four text-gray-500 text-sm rounded-sm p-4 sm:px-8 py-10 border-t border-gray-800 rounded-b-2xl">
        
          <div class="text-center max-w-sm mx-auto">

              <button class="button pushable font-bold inline text-lg sm:text-3xl tracking-widest w-full " @click="connect()">

                  <span class="mint-front">
                    Connect
                  </span>

              </button>

          </div>

      </div>

  </div>

</template>

<script>


import Web3ModalVue from "web3modal-vue";

import WalletConnectProvider from "@walletconnect/web3-provider";

const INFURA_ID = process.env.INFURA_ID


export default {
    components: {
        Web3ModalVue
    },
    mixins: [],
    data() {
        return {
            theme: 'light',
            providerOptions: {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: INFURA_ID,
                    }
                }
            },
            number: 0,
            balance: 0,
        }
    },
    created() {

    },
    mounted() {

        this.$nextTick(async () => {
            const web3modal = this.$refs.web3modal;
            this.$store.commit('setWeb3Modal', web3modal)
            if (web3modal.cachedProvider) {
                this.connect()
            }
        })
        
    },
    methods: {
        connect() {
            this.$store.dispatch('connect')
        },
    }
}

</script>
