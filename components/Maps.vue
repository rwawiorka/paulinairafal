<template>
    <div class="maps p-8 bg-wedding-400">
        <div class="w-full h-screen flex">
            <Map :place="church" />
            <Map :place="wedding" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const church = useChurch();
const wedding = useWedding();
</script>

