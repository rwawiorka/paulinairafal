<template>
    <div id="maps" class="bg-wedding-400 w-full h-screen"
        :class="{ 'opacity-0': isLoading, 'hidden': isLoading, 'opacity-100': !isLoading, 'visible': !isLoading }">
        <div class="w-full h-full">
            <Map :place="[church, wedding]" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const church = useChurch();
const wedding = useWedding();

const props = defineProps({
    isLoading: Boolean,
});
</script>

