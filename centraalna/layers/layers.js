var wms_layers = [];
var format_centraalna_0 = new ol.format.GeoJSON();
var features_centraalna_0 = format_centraalna_0.readFeatures(json_centraalna_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centraalna_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_centraalna_0.addFeatures(features_centraalna_0);var lyr_centraalna_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centraalna_0, 
                style: style_centraalna_0,
    title: 'centraalna<br />\
    <img src="styles/legend/centraalna_0_0.png" /> <20 minuten<br />\
    <img src="styles/legend/centraalna_0_1.png" /> 20-30 minuten<br />\
    <img src="styles/legend/centraalna_0_2.png" /> 30-45 minuten<br />\
    <img src="styles/legend/centraalna_0_3.png" /> 45-60 minuten<br />\
    <img src="styles/legend/centraalna_0_4.png" /> >60 minuten<br />'
        });

var osm = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

var layersList = [osm, lyr_centraalna_0];
lyr_centraalna_0.set('fieldAliases', {'modussecvoorcentraal': 'modussecvoorcentraal', 'modussecnacentraal': 'modussecnacentraal', });
lyr_centraalna_0.set('fieldImages', {'modussecvoorcentraal': 'Range', 'modussecnacentraal': 'Range', });
lyr_centraalna_0.set('fieldLabels', {'modussecvoorcentraal': 'no label', 'modussecnacentraal': 'no label', });
lyr_centraalna_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});