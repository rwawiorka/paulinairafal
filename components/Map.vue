<template>
    <div class="map w-1/2" :class="props.place.nameId">
        <GMapMap :center="mapData.center" :zoom="15" :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
        }" style="width: 100%; height: 300px; margin: auto">
            <GMapMarker :key="index" v-for="(marker, index) in mapData.markers" :position="marker.position"
                :clickable="true" :draggable="false" @click="openMarker(marker.id)">
                <GMapInfoWindow :closeclick="true" @closeclick="openMarker(null)"
                    :opened="mapData.openedMarkerID === marker.id">
                    <div>{{ marker.description }}</div>
                </GMapInfoWindow>
            </GMapMarker>
        </GMapMap>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    place: {
        type: Object,
        required: true,
    },
});

const mapData: { openedMarkerID: string | null, center: { lat: number, lng: number }, markers: { description: string, id: string, position: { lat: number, lng: number } }[] } = {
    openedMarkerID: null,
    center: props.place.position,
    markers: [
        props.place as { description: string; id: string; position: { lat: number; lng: number; }; }
    ],
};

// Define methods
const openMarker = (id: string | null) => {
    mapData.openedMarkerID = id;
};
</script>