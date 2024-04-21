require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/MapImageLayer",
    //"esri/layers/Slider"
], function(esriConfig, Map, MapView, MapImageLayer) {
    
    esriConfig.apiKey = "AAPK9879eb4bae1544bf8e837ae8876b86b3gFrZzC_td_GEFs9d5D6kP0DThKjDta2fLgiXU-62d11lXdG6t9jBJn4GkBNZptER";

    const rasterLayer = new MapImageLayer({
        url:"https://tiles.arcgis.com/tiles/133a00biU9FItiqJ/arcgis/rest/services/mnt_bleu_plain_9a18/MapServer"
    });

    const map2 = new Map({
        layers: [rasterLayer]
    });

    const view = new MapView({
        container: "viewDiv",
        map: map2,
        center:[-73.7, 45.55],
        zoom: 9
    });
});