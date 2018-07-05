var wms_layers = [];
var format_secverschilzuid_0 = new ol.format.GeoJSON();
var features_secverschilzuid_0 = format_secverschilzuid_0.readFeatures(json_secverschilzuid_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secverschilzuid_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_secverschilzuid_0.addFeatures(features_secverschilzuid_0);var lyr_secverschilzuid_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_secverschilzuid_0, 
                style: style_secverschilzuid_0,
    title: 'secverschilzuid<br />\
    <img src="styles/legend/secverschilzuid_0_0.png" /> >20 minuten sneller<br />\
    <img src="styles/legend/secverschilzuid_0_1.png" /> 10-20 minuten sneller<br />\
    <img src="styles/legend/secverschilzuid_0_2.png" /> 2-10 minuten sneller<br />\
    <img src="styles/legend/secverschilzuid_0_3.png" /> nauwelijks verschil<br />\
    <img src="styles/legend/secverschilzuid_0_4.png" /> 2-10 minuten trager<br />\
    <img src="styles/legend/secverschilzuid_0_5.png" /> 10-20 minuten trager<br />\
    <img src="styles/legend/secverschilzuid_0_6.png" /> meer dan 20 minuten trager<br />'
        });

var osm = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

var layersList = [osm, lyr_secverschilzuid_0];
lyr_secverschilzuid_0.set('fieldAliases', {'modussecvoorzuid': 'modussecvoorzuid', 'modussecnazuid': 'modussecnazuid', 'secverschilzuid': 'secverschilzuid', });
lyr_secverschilzuid_0.set('fieldImages', {'modussecvoorzuid': 'Range', 'modussecnazuid': 'Range', 'secverschilzuid': 'Range', });
lyr_secverschilzuid_0.set('fieldLabels', {'modussecvoorzuid': 'no label', 'modussecnazuid': 'no label', 'secverschilzuid': 'no label', });
lyr_secverschilzuid_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});