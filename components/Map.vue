<template>
    <div class="map w-full h-full" :class="props.place.nameId">
        <GMapMap :center="mapData.center" :zoom="14" :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
        }" style="width: 100%; height: 100%; margin: auto">

            <GMapMarker :key="index" v-for="(marker, index) in mapData.markers" :position="marker.position"
                :clickable="true" :draggable="false" :title="marker.address" :icon='{
                    url: "marker.icon", scaledSize: { width: 77, height: 77 }, labelOrigin: { x: 16, y: -10 }
                }'
                @click="openMarker(marker.id)">
                <GMapInfoWindow :closeclick="true" :opened="true">
                    <div class="text-slate-950">
                        <p class="text-l">{{ marker.description }}</p>
                        <p class="text-m">{{ marker.address }}</p>
                    </div>
                </GMapInfoWindow>
            </GMapMarker>
        </GMapMap>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const getSVGURL = (icon: string) => {
    return `/icons/map/${icon}.svg`;
};

const props = defineProps({
    place: {
        type: Object,
        required: true,
    },
});

const center = () => {
    const positionX: number[] = [];
    const positionY: number[] = [];
    props.place.forEach((place: { position: { lat: number, lng: number } }) => {
        positionX.push(place.position.lat);
        positionY.push(place.position.lng);
    });

    return {
        lat: (Math.min(...positionX) + Math.max(...positionX)) / 2,
        lng: (Math.min(...positionY) + Math.max(...positionY)) / 2,
    };
}

const markers = () => {
    return props.place.map((place: { position: { lat: number, lng: number }, description: string, id: string, icon: string, address: string }) => ({
        position: place.position,
        description: place.description,
        id: place.id,
        icon: getSVGURL(place.icon),
        address: place.address
    }));
}

const mapData: { openedMarkerID: string | null, center: { lat: number, lng: number }, markers: { description: string, id: string, position: { lat: number, lng: number }, icon: string, address: string }[] } = {
    openedMarkerID: null,
    center: center(),
    markers: markers(),
};

const openMarker = (id: string | null) => {
    mapData.openedMarkerID = id;
};
</script>