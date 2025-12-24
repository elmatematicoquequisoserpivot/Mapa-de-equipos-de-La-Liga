var config = {
    style: 'mapbox://styles/deporteymates/cmjj9441p002g01sg4q7j0is6',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZGVwb3J0ZXltYXRlcyIsImEiOiJjbWppdTFnNWYxbjk0M2NxemthOWw1ZXhqIn0.QL2UkJk2oVAzkdvkyrwkxw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Distribución de los equipos de La Liga de Fútbol Profesional',
    subtitle: 'Mapa de los equipos de fútbol de "La Liga"',
    byline: 'Diego Alonso Santamaría',
    footer: 'Fuente de datos: Diego Alonso Santamaría, elaboración propia',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'La Liga de Fútbol Profesional',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/LaLiga_EA_Sports_2023_Horizontal_Logo.svg/960px-LaLiga_EA_Sports_2023_Horizontal_Logo.svg.png',
            description: 'A pesar de lo que muchos puedan pensar, el mapa, el mapa de equipos de La Liga muestra grandes diferencias entre los territorios del país',
            location: {
                center: [-6.66560, 40.18793],
                zoom: 5.55,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Noroeste de España',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Campnou_1.jpg/1500px-Campnou_1.jpg',
            description: 'El Noroeste de la península aparece densamente poblado, concéntrandose los equipos en el País Vasco (3) y Cataluña (3), siendo Barcelona la ciudad con dos equipos en la competición.',
            location: {
                center: [-2.35546, 41.70090],
                zoom: 6.31,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Este de España',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/CAMP_DE_MESTALLA_GRADA_DE_LA_MAR_2014.JPG',
            description: 'El este de España cuenta con la representación de 4 equipos distribuidos por toda su geografía',
            location: {
                center: [-0.38060, 39.46827]
,
                zoom: 6.31,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Madrid',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Estadio_Santiago_Bernab%C3%A9u_39.jpg/500px-Estadio_Santiago_Bernab%C3%A9u_39.jpg',
            description: 'En cambio, Madrid contiene la misma cantidad de equipos que todo el Este de España (4), situándose 3 de ellos en la capital y uno en pueblo cercano (Getafe).',
            location: {
                center: [-3.70453, 40.41209],
                zoom: 10.55,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Resto de España ¿Una desigualdad fruto de la economía?',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/1930s_soccer_ball_-_Skagit_County_Historical_Museum.jpg/500px-1930s_soccer_ball_-_Skagit_County_Historical_Museum.jpg',
            description: 'En el resto de España, apenas dos equipos en el noreste y y los eternos sevillanos (Sevilla y Betis) sobreviven en el fútbol profesional. Viendo el mapa en todo su contexto ¿Acaso no existe una correlación entre el nivel económico de las regiones del país y su presencia en La Liga?',
            location: {
                center: [-6.66560, 40.18793],
                zoom: 5.55,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        
    ]
};
