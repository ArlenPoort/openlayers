var wms_layers = [];
var format_zuidna_0 = new ol.format.GeoJSON();
var features_zuidna_0 = format_zuidna_0.readFeatures(json_zuidna_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zuidna_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_zuidna_0.addFeatures(features_zuidna_0);var lyr_zuidna_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zuidna_0, 
                style: style_zuidna_0,
    title: 'zuidna<br />\
    <img src="styles/legend/zuidna_0_0.png" /> <20 minuten<br />\
    <img src="styles/legend/zuidna_0_1.png" /> 20-30 minuten<br />\
    <img src="styles/legend/zuidna_0_2.png" /> 30-45 minuten<br />\
    <img src="styles/legend/zuidna_0_3.png" /> 45-60 minuten<br />\
    <img src="styles/legend/zuidna_0_4.png" /> >60 minuten<br />'
        });

var osm = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

var layersList = [osm, lyr_zuidna_0];
lyr_zuidna_0.set('fieldAliases', {'modussecvoorzuid': 'modussecvoorzuid', 'modussecnazuid': 'modussecnazuid', });
lyr_zuidna_0.set('fieldImages', {'modussecvoorzuid': 'Range', 'modussecnazuid': 'Range', });
lyr_zuidna_0.set('fieldLabels', {'modussecvoorzuid': 'no label', 'modussecnazuid': 'no label', });
lyr_zuidna_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});