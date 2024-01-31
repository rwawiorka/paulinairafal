<template>
    <div id="maps" class="bg-wedding-400 w-full h-screen">
        <div class="w-full h-full">
            <Map :place="[church, wedding]" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const church = useChurch();
const wedding = useWedding();
</script>

