var wms_layers = [];
var format_snelstestation_0 = new ol.format.GeoJSON();
var features_snelstestation_0 = format_snelstestation_0.readFeatures(json_snelstestation_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_snelstestation_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_snelstestation_0.addFeatures(features_snelstestation_0);var lyr_snelstestation_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_snelstestation_0, 
                style: style_snelstestation_0,
    title: 'snelstestation<br />\
    <img src="styles/legend/snelstestation_0_0.png" /> Zuid<br />\
    <img src="styles/legend/snelstestation_0_1.png" /> Centraal<br />'
        });

var osm = new ol.layer.Tile({
            source: new ol.source.OSM()
        });

var layersList = [osm, lyr_snelstestation_0];
lyr_snelstestation_0.set('fieldAliases', {'snelstestation': 'snelstestation', });
lyr_snelstestation_0.set('fieldImages', {'snelstestation': 'Range', });
lyr_snelstestation_0.set('fieldLabels', {'snelstestation': 'no label', });
lyr_snelstestation_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});