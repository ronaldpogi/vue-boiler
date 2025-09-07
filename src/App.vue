<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Toast from "@/components/Toasts/ToastComponent.vue";
import Alert from "@/components/Alerts/AlertComponent.vue";
import useToastComposable from "@/composables/useToastComposable.ts";
import useAlertComposable from "@/composables/useAlertComposable.ts";
import { computed } from 'vue';

const { currentRoute } = useRouter()

const defaultLayout = 'main'

const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`)

const $toastComposable = useToastComposable()
const $alertComposable = useAlertComposable()
</script>

<template>
    <div>
        <div class="absolute w-full" v-if="$alertComposable.$hasItems()">
            <template v-for="alert in $alertComposable.$itemList.value" :key="alert.id">
                <Alert :id="alert.id" :type="alert.type">{{ alert.message }}</Alert>
            </template>
        </div>

        <div v-if="$toastComposable.$hasItems()">
            <template v-for="toast in $toastComposable.$itemList.value" :key="toast.id">
                <Toast :id="toast.id" :type="toast.type" :position="toast.position">{{ toast.message }}</Toast>
            </template>
        </div>
        
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<style scoped>
</style>
