var wms_layers = [];
var format_secverschilcentraal_0 = new ol.format.GeoJSON();
var features_secverschilcentraal_0 = format_secverschilcentraal_0.readFeatures(json_secverschilcentraal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secverschilcentraal_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_secverschilcentraal_0.addFeatures(features_secverschilcentraal_0);var lyr_secverschilcentraal_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_secverschilcentraal_0, 
                style: style_secverschilcentraal_0,
    title: 'secverschilcentraal<br />\
    <img src="styles/legend/secverschilcentraal_0_0.png" /> >20 minuten sneller<br />\
    <img src="styles/legend/secverschilcentraal_0_1.png" /> 10-20 minuten sneller<br />\
    <img src="styles/legend/secverschilcentraal_0_2.png" /> 2-10 minuten sneller<br />\
    <img src="styles/legend/secverschilcentraal_0_3.png" /> nauwelijks verschil<br />\
    <img src="styles/legend/secverschilcentraal_0_4.png" /> 2-10 minuten trager<br />\
    <img src="styles/legend/secverschilcentraal_0_5.png" /> 10-20 minuten trager<br />\
    <img src="styles/legend/secverschilcentraal_0_6.png" /> meer dan 20 minuten trager<br />'
        });

var osm = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

var layersList = [osm, lyr_secverschilcentraal_0];
lyr_secverschilcentraal_0.set('fieldAliases', {'modussecvoorcentraal': 'modussecvoorcentraal', 'modussecnacentraal': 'modussecnacentraal', 'secverschilcentraal': 'secverschilcentraal', });
lyr_secverschilcentraal_0.set('fieldImages', {'modussecvoorcentraal': 'Range', 'modussecnacentraal': 'Range', 'secverschilcentraal': 'Range', });
lyr_secverschilcentraal_0.set('fieldLabels', {'modussecvoorcentraal': 'no label', 'modussecnacentraal': 'no label', 'secverschilcentraal': 'no label', });
lyr_secverschilcentraal_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});