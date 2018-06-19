var wms_layers = [];
var format_reistijdnaarCSinminuten_0 = new ol.format.GeoJSON();
var features_reistijdnaarCSinminuten_0 = format_reistijdnaarCSinminuten_0.readFeatures(json_reistijdnaarCSinminuten_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reistijdnaarCSinminuten_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_reistijdnaarCSinminuten_0.addFeatures(features_reistijdnaarCSinminuten_0);var lyr_reistijdnaarCSinminuten_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reistijdnaarCSinminuten_0, 
                style: style_reistijdnaarCSinminuten_0,
    title: 'reistijd naar CS in minuten<br />\
    <img src="styles/legend/reistijdnaarCSinminuten_0_0.png" /> < 10 minuten<br />\
    <img src="styles/legend/reistijdnaarCSinminuten_0_1.png" /> 10 tot 30<br />\
    <img src="styles/legend/reistijdnaarCSinminuten_0_2.png" /> 30 tot 45<br />\
    <img src="styles/legend/reistijdnaarCSinminuten_0_3.png" /> 45 tot 60<br />\
    <img src="styles/legend/reistijdnaarCSinminuten_0_4.png" /> 60 tot 75<br />\
    <img src="styles/legend/reistijdnaarCSinminuten_0_5.png" /> > 75 minuten<br />'
        });var format_nztesttijdenperhex_1 = new ol.format.GeoJSON();
var features_nztesttijdenperhex_1 = format_nztesttijdenperhex_1.readFeatures(json_nztesttijdenperhex_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nztesttijdenperhex_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nztesttijdenperhex_1.addFeatures(features_nztesttijdenperhex_1);var lyr_nztesttijdenperhex_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nztesttijdenperhex_1, 
                style: style_nztesttijdenperhex_1,
    title: 'nztesttijdenperhex<br />\
    <img src="styles/legend/nztesttijdenperhex_1_0.png" />  21 - 600 <br />\
    <img src="styles/legend/nztesttijdenperhex_1_1.png" />  600 - 1200 <br />\
    <img src="styles/legend/nztesttijdenperhex_1_2.png" />  1200 - 1800 <br />\
    <img src="styles/legend/nztesttijdenperhex_1_3.png" />  1800 - 2400 <br />\
    <img src="styles/legend/nztesttijdenperhex_1_4.png" />  2400 - 3000 <br />\
    <img src="styles/legend/nztesttijdenperhex_1_5.png" />  3000 - 3600 <br />\
    <img src="styles/legend/nztesttijdenperhex_1_6.png" />  3600 - 4200 <br />\
    <img src="styles/legend/nztesttijdenperhex_1_7.png" />  4200 - 5547 <br />'
        });

lyr_nztesttijdenperhex_1.setVisible(true);
var osm = new ol.layer.Tile({
	source: new ol.source.XYZ({
		attributions: [
			new ol.Attribution({
				html: 'Bron: Google Maps Distance Matrix | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
			}),
			//ol.source.OSM.ATTRIBUTION
		],
		url: 'https://cartodb-basemaps-{1-4}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
		})
});
var layersList = [osm, lyr_reistijdnaarCSinminuten_0,lyr_nztesttijdenperhex_1];
lyr_reistijdnaarCSinminuten_0.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'totale': 'totale', 'aantal': 'aantal', 'sumsecvoorcentraal': 'sumsecvoorcentraal', 'avgsecvoorcentraal': 'avgsecvoorcentraal', 'minsecvoorcentraal': 'minsecvoorcentraal', 'maxsecvoorcentraal': 'maxsecvoorcentraal', });
lyr_nztesttijdenperhex_1.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'totale': 'totale', 'aantal': 'aantal', 'sumsecvoorcentraal': 'sumsecvoorcentraal', 'avgsecvoorcentraal': 'avgsecvoorcentraal', 'minsecvoorcentraal': 'minsecvoorcentraal', 'maxsecvoorcentraal': 'maxsecvoorcentraal', });
lyr_reistijdnaarCSinminuten_0.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'totale': 'TextEdit', 'aantal': 'TextEdit', 'sumsecvoorcentraal': 'TextEdit', 'avgsecvoorcentraal': 'TextEdit', 'minsecvoorcentraal': 'Range', 'maxsecvoorcentraal': 'Range', });
lyr_nztesttijdenperhex_1.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'totale': 'TextEdit', 'aantal': 'TextEdit', 'sumsecvoorcentraal': 'TextEdit', 'avgsecvoorcentraal': 'TextEdit', 'minsecvoorcentraal': 'Range', 'maxsecvoorcentraal': 'Range', });
lyr_reistijdnaarCSinminuten_0.set('fieldLabels', {'id': 'inline label', 'fid': 'inline label', 'totale': 'inline label', 'aantal': 'inline label', 'sumsecvoorcentraal': 'inline label', 'avgsecvoorcentraal': 'inline label', 'minsecvoorcentraal': 'inline label', 'maxsecvoorcentraal': 'inline label', });
lyr_nztesttijdenperhex_1.set('fieldLabels', {'id': 'inline label', 'fid': 'inline label', 'totale': 'inline label', 'aantal': 'inline label', 'sumsecvoorcentraal': 'inline label', 'avgsecvoorcentraal': 'inline label', 'minsecvoorcentraal': 'inline label', 'maxsecvoorcentraal': 'inline label', });
lyr_nztesttijdenperhex_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});