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
    title: 'Welk station wordt sneller bereikbaar?<br />\
    <img src="styles/legend/snelstestation_0_0.png" /> Zuid<br />\
    <img src="styles/legend/snelstestation_0_1.png" /> Centraal<br />'
        });var format_centraalna_1 = new ol.format.GeoJSON();
var features_centraalna_1 = format_centraalna_1.readFeatures(json_centraalna_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centraalna_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_centraalna_1.addFeatures(features_centraalna_1);var lyr_centraalna_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centraalna_1, 
                style: style_centraalna_1,
    title: 'Hoe lang gaat een reis naar Centraal duren?<br />\
    <img src="styles/legend/centraalna_1_0.png" /> <20 minuten<br />\
    <img src="styles/legend/centraalna_1_1.png" /> 20-30 minuten<br />\
    <img src="styles/legend/centraalna_1_2.png" /> 30-45 minuten<br />\
    <img src="styles/legend/centraalna_1_3.png" /> 45-60 minuten<br />\
    <img src="styles/legend/centraalna_1_4.png" /> >60 minuten<br />'
        });var format_zuidna_2 = new ol.format.GeoJSON();
var features_zuidna_2 = format_zuidna_2.readFeatures(json_zuidna_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zuidna_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_zuidna_2.addFeatures(features_zuidna_2);var lyr_zuidna_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zuidna_2, 
                style: style_zuidna_2,
    title: 'Hoe lang gaat een reis naar Zuid duren?<br />\
    <img src="styles/legend/zuidna_2_0.png" /> <20 minuten<br />\
    <img src="styles/legend/zuidna_2_1.png" /> 20-30 minuten<br />\
    <img src="styles/legend/zuidna_2_2.png" /> 30-45 minuten<br />\
    <img src="styles/legend/zuidna_2_3.png" /> 45-60 minuten<br />\
    <img src="styles/legend/zuidna_2_4.png" /> >60 minuten<br />'
        });var format_secverschilcentraal_3 = new ol.format.GeoJSON();
var features_secverschilcentraal_3 = format_secverschilcentraal_3.readFeatures(json_secverschilcentraal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secverschilcentraal_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_secverschilcentraal_3.addFeatures(features_secverschilcentraal_3);var lyr_secverschilcentraal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_secverschilcentraal_3, 
                style: style_secverschilcentraal_3,
    title: 'Hoeveel sneller of langzamer wordt een reis naar Centraal?<br />\
    <img src="styles/legend/secverschilcentraal_3_0.png" /> >20 minuten sneller<br />\
    <img src="styles/legend/secverschilcentraal_3_1.png" /> 10-20 minuten sneller<br />\
    <img src="styles/legend/secverschilcentraal_3_2.png" /> 2-10 minuten sneller<br />\
    <img src="styles/legend/secverschilcentraal_3_3.png" /> nauwelijks verschil<br />\
    <img src="styles/legend/secverschilcentraal_3_4.png" /> 2-10 minuten trager<br />\
    <img src="styles/legend/secverschilcentraal_3_5.png" /> 10-20 minuten trager<br />\
    <img src="styles/legend/secverschilcentraal_3_6.png" /> >20 minuten trager<br />'
        });var format_secverschilzuid_4 = new ol.format.GeoJSON();
var features_secverschilzuid_4 = format_secverschilzuid_4.readFeatures(json_secverschilzuid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secverschilzuid_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_secverschilzuid_4.addFeatures(features_secverschilzuid_4);var lyr_secverschilzuid_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_secverschilzuid_4, 
                style: style_secverschilzuid_4,
    title: 'Hoeveel sneller of langzamer wordt een reis naar Zuid?<br />\
    <img src="styles/legend/secverschilzuid_4_0.png" /> >20 minuten sneller<br />\
    <img src="styles/legend/secverschilzuid_4_1.png" /> 10-20 minuten sneller<br />\
    <img src="styles/legend/secverschilzuid_4_2.png" /> 2-10 minuten sneller<br />\
    <img src="styles/legend/secverschilzuid_4_3.png" /> nauwelijks verschil<br />\
    <img src="styles/legend/secverschilzuid_4_4.png" /> 2-10 minuten trager<br />\
    <img src="styles/legend/secverschilzuid_4_5.png" /> 10-20 minuten trager<br />\
    <img src="styles/legend/secverschilzuid_4_6.png" /> >20 minuten trager<br />'
        });

lyr_centraalna_1.setVisible(true);lyr_zuidna_2.setVisible(true);lyr_secverschilcentraal_3.setVisible(true);lyr_secverschilzuid_4.setVisible(true);
var osm = new ol.layer.Tile({
            source: new ol.source.OSM()
        });
var layersList = [lyr_snelstestation_0,lyr_centraalna_1,lyr_zuidna_2,lyr_secverschilcentraal_3,lyr_secverschilzuid_4];
// lyr_snelstestation_0.set('fieldAliases', {'snelstestation': 'snelstestation', });
lyr_centraalna_1.set('fieldAliases', {'modussecvoorcentraal': 'naar centraal was', 'modussecnacentraal': 'naar centraal wordt', });
lyr_zuidna_2.set('fieldAliases', {'modussecvoorzuid': 'naar zuid was', 'modussecnazuid': 'naar zuid wordt', });
lyr_secverschilcentraal_3.set('fieldAliases', {'modussecvoorcentraal': 'naar centraal was', 'modussecnacentraal': 'naar centraal wordt', 'secverschilcentraal': 'verschil', });
lyr_secverschilzuid_4.set('fieldAliases', {'modussecvoorzuid': 'naar zuid was', 'modussecnazuid': 'naar zuid wordt', 'secverschilzuid': 'verschil', });
// lyr_snelstestation_0.set('fieldImages', {'snelstestation': 'Range', });
lyr_centraalna_1.set('fieldImages', {'modussecvoorcentraal': 'Range', 'modussecnacentraal': 'Range', });
lyr_zuidna_2.set('fieldImages', {'modussecvoorzuid': 'Range', 'modussecnazuid': 'Range', });
lyr_secverschilcentraal_3.set('fieldImages', {'modussecvoorcentraal': 'Range', 'modussecnacentraal': 'Range', 'secverschilcentraal': 'Range', });
lyr_secverschilzuid_4.set('fieldImages', {'modussecvoorzuid': 'Range', 'modussecnazuid': 'Range', 'secverschilzuid': 'Range', });
// lyr_snelstestation_0.set('fieldLabels', {'snelstestation': 'inline label', });
lyr_centraalna_1.set('fieldLabels', {'modussecvoorcentraal': 'inline label', 'modussecnacentraal': 'inline label', });
lyr_zuidna_2.set('fieldLabels', {'modussecvoorzuid': 'inline label', 'modussecnazuid': 'inline label', });
lyr_secverschilcentraal_3.set('fieldLabels', {'modussecvoorcentraal': 'inline label', 'modussecnacentraal': 'inline label', 'secverschilcentraal': 'inline label', });
lyr_secverschilzuid_4.set('fieldLabels', {'modussecvoorzuid': 'inline label', 'modussecnazuid': 'inline label', 'secverschilzuid': 'inline label', });
lyr_secverschilzuid_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});