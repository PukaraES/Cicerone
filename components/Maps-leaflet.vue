<template>
    <div id="map-wrap" style="height: 20rem; width:60%; display:flex; justify-content: center;">
        <client-only>
            <l-map :zoom=15 :center="[40.4166,-3.7038]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker :lat-lng="[40.4166,-3.7038]"></l-marker>
            </l-map>
        </client-only>
    </div>
</template>
