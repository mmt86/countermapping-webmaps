
    mapboxgl.accessToken = 'pk.eyJ1IjoibW10ODYiLCJhIjoiY2xuMXVkazRrMDF0aTJqbXc1dWxnemFndiJ9.-Cn6UqEvKLq5Ybw1SQ6-OQ',
constmap = new mapboxgl.Map({
  container: 'MARINA',
  style: 'mapbox://styles/mmt86/clo5vnxfm00i401qsdjd75ayz',
  center: [-122.42285, 37.76869],
zoom: 13,
pitch: 25.5,
bearing: 0.00});

map.on('load', function () {
map.addSource('restaurant',{
  'type':'vector',
  'url': 'mmt86.9phi6ytd'

});

map.addLayer({
  'id':'inspections',
  'type': 'circle',
  'source' :'inspectionSource',
  'source-layer' : 'Restaurant_Scores_-_LIVES_Sta-d44ziq',

})
})
