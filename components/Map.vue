<template>
    <div class="map w-full h-full" :class="props.place.nameId">
        <GMapMap ref="weddingMap" :center="mapData.center" :zoom="14" :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
        }" style="width: 100%; height: 100%; margin: auto">
            <GMapMarker :key="index" v-for="(marker, index) in mapData.markers" :position="marker.position"
                :clickable="true" :draggable="false" :icon="'/spotlight-poi3.png'" @click="openMarker(marker.id)">
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
import { defineProps, ref } from 'vue';
import { decode } from '@googlemaps/polyline-codec';

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

const weddingMap = ref(null);

const config = useRuntimeConfig();

const origin = mapData.markers[0].position;
const destination = mapData.markers[mapData.markers.length - 1].position;

const headers = {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': config.public.GOOGLE_ROUTES_API_KEY,
    'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline'
};

const decodedPolyline = ref([]);

onMounted(async () => {
    if (weddingMap.value) {
        const maps = await weddingMap.value.$mapPromise;

        const { data, pending, error, refresh } = await useFetch('https://routes.googleapis.com/directions/v2:computeRoutes', {
            method: 'POST',
            headers,
            body: {
                origin: {
                    location: {
                        latLng: {
                            latitude: origin.lat,
                            longitude: origin.lng
                        }
                    }
                },
                destination: {
                    location: {
                        latLng: {
                            latitude: destination.lat,
                            longitude: destination.lng
                        }
                    }
                },
                travelMode: "DRIVE",
                routingPreference: "TRAFFIC_AWARE",
                departureTime: "2024-09-14T15:00:00.045123456Z",
                computeAlternativeRoutes: false,
                routeModifiers: {
                    avoidTolls: false,
                    avoidHighways: false,
                    avoidFerries: false
                },
                languageCode: "en-US",
                units: "IMPERIAL"
            },
            onRequest({ request, options }) {
                options.headers = options.headers || {}
            },
            onRequestError({ request, options, error }) {
                console.log(request, options, error);
            },
            onResponse({ request, response, options }) {

            },
            onResponseError({ request, response, options }) {
                console.log(request, response, options);
            }
        });

        if (data && data.value && data.value.routes) {
            const encodedPolyline = data.value.routes[0].polyline.encodedPolyline;
            decodedPolyline.value = decode(encodedPolyline);
        }
        //TODO: remove @fawmi
        //TODO: use google maps js api
    }
});
</script>