const myLayers = ['annee2014', 'annee2019', 'annee2020', 'annee2021', 'annee2022', 'annee2023'];

var slider = document.getElementById("myRange");
function addLayerByYear(year) {
  var stepValue = parseInt(value);
  addLayerByYear(stepValue)
  removeAllLayersAndSources(year)
    if (year == 2014) {
        map.addSource('annee2014-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2014/{z}/{x}/{y}.pbf']
        });

        // Ajouter la couche une fois la source chargée
        map.addLayer({
            "id": "annee2014",
            "type": "circle",
            "source": "annee2014-source",
            "source-layer": "HE391000.Point_2014",
            "visibility": "none",
            "filter": ["all"],
            "paint": {
                "circle-color": {
                    "property": "score",
                    "type": "interval",
                    "stops": [
                        [{ "value": 4942, "zoom": 10 }, "rgba(242, 233, 1, 1)"],
                        [{ "value": 14329, "zoom": 10 }, "rgba(245, 190, 17, 1)"],
                        [{ "value": 25664, "zoom": 10 }, "rgba(249, 147, 33, 1)"],
                        [{ "value": 45003, "zoom": 10 }, "rgba(252, 104, 48, 1)"],
                        [{ "value": 1422146, "zoom": 10 }, "rgba(255, 61, 64, 1)"]
                    ],
                    "default": "#F2e901"
                },
                "circle-opacity": 1
            }
        });
    } else if (year == 2019) {
        map.addSource('annee2019-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2019/{z}/{x}/{y}.pbf']
        });

        // Ajouter la couche une fois la source chargée
        map.addLayer({
            "id": "annee2019",
            "type": "circle",
            "source": "annee2019-source",
            "source-layer": "HE391000.Point_2019",
            "visibility": "none",
            "filter": ["all"],
            "paint": {
                "circle-color": {
                    "property": "score",
                    "type": "interval",
                    "stops": [
                        [{ "value": 4942, "zoom": 10 }, "rgba(242, 233, 1, 1)"],
                        [{ "value": 14329, "zoom": 10 }, "rgba(245, 190, 17, 1)"],
                        [{ "value": 25664, "zoom": 10 }, "rgba(249, 147, 33, 1)"],
                        [{ "value": 45003, "zoom": 10 }, "rgba(252, 104, 48, 1)"],
                        [{ "value": 1422146, "zoom": 10 }, "rgba(255, 61, 64, 1)"]
                    ],
                    "default": "#F2e901"
                },
                "circle-opacity": 1
            }
        });
    } else if (year == 2020) {
        map.addSource('annee2020-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2020/{z}/{x}/{y}.pbf']
        });

        // Ajouter la couche une fois la source chargée
        map.addLayer({
            "id": "annee2020",
            "type": "circle",
            "source": "annee2020-source",
            "source-layer": "HE391000.Point_2020",
            "visibility": "none",
            "filter": ["all"],
            "paint": {
                "circle-color": {
                    "property": "score",
                    "type": "interval",
                    "stops": [
                        [{ "value": 4942, "zoom": 10 }, "rgba(242, 233, 1, 1)"],
                        [{ "value": 14329, "zoom": 10 }, "rgba(245, 190, 17, 1)"],
                        [{ "value": 25664, "zoom": 10 }, "rgba(249, 147, 33, 1)"],
                        [{ "value": 45003, "zoom": 10 }, "rgba(252, 104, 48, 1)"],
                        [{ "value": 1422146, "zoom": 10 }, "rgba(255, 61, 64, 1)"]
                    ],
                    "default": "#F2e901"
                },
                "circle-opacity": 1
            }
        });
    } else if (year == 2021) {
        map.addSource('annee2021-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2021/{z}/{x}/{y}.pbf']
        });

        // Ajouter la couche une fois la source chargée
        map.addLayer({
            "id": "annee2021",
            "type": "circle",
            "source": "annee2021-source",
            "source-layer": "HE391000.Point_2021",
            "visibility": "none",
            "filter": ["all"],
            "paint": {
                "circle-color": {
                    "property": "score",
                    "type": "interval",
                    "stops": [
                        [{ "value": 4942, "zoom": 10 }, "rgba(242, 233, 1, 1)"],
                        [{ "value": 14329, "zoom": 10 }, "rgba(245, 190, 17, 1)"],
                        [{ "value": 25664, "zoom": 10 }, "rgba(249, 147, 33, 1)"],
                        [{ "value": 45003, "zoom": 10 }, "rgba(252, 104, 48, 1)"],
                        [{ "value": 1422146, "zoom": 10 }, "rgba(255, 61, 64, 1)"]
                    ],
                    "default": "#F2e901"
                },
                "circle-opacity": 1
            }
        });
    } else if (year == 2022) {
        map.addSource('annee2022-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2022/{z}/{x}/{y}.pbf']
        });

        // Ajouter la couche une fois la source chargée
        map.addLayer({
            "id": "annee2022",
            "type": "circle",
            "source": "annee2022-source",
            "source-layer": "HE391000.Point_2022",
            "visibility": "none",
            "filter": ["all"],
            "paint": {
                "circle-color": {
                    "property": "score",
                    "type": "interval",
                    "stops": [
                        [{ "value": 4942, "zoom": 10 }, "rgba(242, 233, 1, 1)"],
                        [{ "value": 14329, "zoom": 10 }, "rgba(245, 190, 17, 1)"],
                        [{ "value": 25664, "zoom": 10 }, "rgba(249, 147, 33, 1)"],
                        [{ "value": 45003, "zoom": 10 }, "rgba(252, 104, 48, 1)"],
                        [{ "value": 1422146, "zoom": 10 }, "rgba(255, 61, 64, 1)"]
                    ],
                    "default": "#F2e901"
                },
                "circle-opacity": 1
            }
        });
    } else if (year == 2023) {
        map.addSource('annee2023-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2023/{z}/{x}/{y}.pbf']
        });

        // Ajouter la couche une fois la source chargée
        map.addLayer({
            "id": "annee2023",
            "type": "circle",
            "source": "annee2023-source",
            "source-layer": "HE391000.Point_2023",
            "visibility": "none",
            "filter": ["all"],
            "paint": {
                "circle-color": {
                    "property": "score",
                    "type": "interval",
                    "stops": [
                        [{ "value": 4942, "zoom": 10 }, "rgba(242, 233, 1, 1)"],
                        [{ "value": 14329, "zoom": 10 }, "rgba(245, 190, 17, 1)"],
                        [{ "value": 25664, "zoom": 10 }, "rgba(249, 147, 33, 1)"],
                        [{ "value": 45003, "zoom": 10 }, "rgba(252, 104, 48, 1)"],
                        [{ "value": 1422146, "zoom": 10 }, "rgba(255, 61, 64, 1)"]
                    ],
                    "default": "#F2e901"
                },
                "circle-opacity": 1
            }
        });
    } else {
        console.error("Année non prise en charge: ", year);
    }
}

slider.addEventListener("input", function () {
    var value = slider.value;
    addLayerByYear(parseInt(value));
});
