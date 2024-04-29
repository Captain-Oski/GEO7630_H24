// On ajoute toutes les sources des couches
    
    
    map.addSource('autos-source', {
        type:"vector",
        tiles:['https://stunning-funicular-977rqvvjp4w6f7wjx-8801.app.github.dev/GK191080.troncons_compte_voitures/{z}/{x}/{y}.pbf'] // les tiles (V3)
    });
    
    map.addSource('bus-source', {
        type:"vector",
        tiles: ["https://stunning-funicular-977rqvvjp4w6f7wjx-8801.app.github.dev/GK191080.troncons_compte_bus/{z}/{x}/{y}.pbf"] // les tiles (V3)

    });
    
    map.addSource('camions-source', {
        type:"vector",
        tiles: ['https://stunning-funicular-977rqvvjp4w6f7wjx-8801.app.github.dev/GK191080.troncons_compte_camions/{z}/{x}/{y}.pbf'] // les tiles (V3)

    });
     
    map.addSource('pietons-source', {
        type:"vector",
        tiles: ['https://stunning-funicular-977rqvvjp4w6f7wjx-8801.app.github.dev/GK191080.troncons_compte_pietons/{z}/{x}/{y}.pbf'] // les tiles (V3)

    });
     
    map.addSource('velos-source', {
        type:"vector",
        tiles: ["https://stunning-funicular-977rqvvjp4w6f7wjx-8801.app.github.dev/GK191080.troncons_compte_velos/{z}/{x}/{y}.pbf"] // les tiles (V3)

    });
    
    console.log('sources chargees')