var config = {
    style: 'mapbox://styles/mmt86/clo5vnxfm00i401qsdjd75ayz',
    accessToken: 'pk.eyJ1IjoibW10ODYiLCJhIjoiY2xuMXVkazRrMDF0aTJqbXc1dWxnemFndiJ9.-Cn6UqEvKLq5Ybw1SQ6-OQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public Housing and Flood Risk in NYC',
    subtitle: 'Are people in Public Housing more at risk to flooding?',
    byline: 'Marina Tadrous',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Flood Zones in NYC',
            image: 'https://i.abcnewsfe.com/a/f23193b3-a3b8-4a1e-9e31-f586e2ec5dda/new-york-flood-weather-ap-moe-003-230930_1696083916990_hpMain.jpg',
            description: 'New York City is divided into multiple flood zones, each designated based on its vulnerability to storm surges and coastal flooding, with Zone 1 being the most susceptible to inundation. These flood zone designations are crucial for disaster preparedness and emergency management efforts in the city.',
            location: {
              center: [-73.97716, 40.78090],
zoom: 11.00,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'pluto-hous-type-master-featu-7b5u7f',
              opacity: 0}],
            onChapterExit: [{layer: 'pluto-hous-type-master-featu-7b5u7f',
                opacity: 1}]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Public Housing in NYC',
            image: 'https://cdn.cityandstateny.com/media/img/cd/2021/06/29/housing.shutterstock_0/860x394.jpg',
            description:'New York Citys public housing, managed by the New York City Housing Authority, is one of the largest in the nation, providing affordable housing to thousands of low and moderate-income residents. Despite its critical role in addressing housing needs, NYCHA has faced numerous challenges, including maintenance and financial issues, highlighting the ongoing need for investment and reform in public housing infrastructure.',
            location: {
              center: [-73.94111, 40.77172],
      zoom: 11.18,
      pitch: 45.00,
      bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{layer: 'pluto-hous-type-master-featu-7b5u7f',
              opacity: 1}],
            onChapterExit: [{layer: 'pluto-hous-type-master-featu-7b5u7f',
                opacity: 1}]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Red Hook Housing',
            image: 'https://untappedcities.com/wp-content/uploads/2021/12/Fairway-Building-Red-Hook-Brooklyn-NYC-1.jpg',
            description: 'Red Hook Houses, situated in the vibrant Red Hook neighborhood of Brooklyn, stands as one of the citys largest public housing complexes, providing affordable homes to a diverse community. With a storied history and a unique waterfront location, it has played a significant role in the local community. However, like many public housing developments, Red Hook Houses grapples with infrastructure issues, economic disparities, and the need for revitalization to ensure a better quality of life for its residents. It remains a focal point for discussions on affordable housing and urban development within the Brooklyn borough.',
            location: {
              center: [-74.00915, 40.67551],
zoom: 14.23,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
