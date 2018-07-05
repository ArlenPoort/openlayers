ol.proj.get("EPSG:28992").setExtent([110976.093373, 477981.632430, 130966.846443, 494981.632430]);
var wms_layers = [];
var format_snelstestation_0 = new ol.format.GeoJSON();
var features_snelstestation_0 = format_snelstestation_0.readFeatures(json_snelstestation_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
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
        });var format_centraalna_1 = new ol.format.GeoJSON();
var features_centraalna_1 = format_centraalna_1.readFeatures(json_centraalna_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_centraalna_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_centraalna_1.addFeatures(features_centraalna_1);var lyr_centraalna_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centraalna_1, 
                style: style_centraalna_1,
    title: 'centraalna<br />\
    <img src="styles/legend/centraalna_1_0.png" /> <20 minuten<br />\
    <img src="styles/legend/centraalna_1_1.png" /> 20-30 minuten<br />\
    <img src="styles/legend/centraalna_1_2.png" /> 30-45 minuten<br />\
    <img src="styles/legend/centraalna_1_3.png" /> 45-60 minuten<br />\
    <img src="styles/legend/centraalna_1_4.png" /> >60 minuten<br />'
        });var format_zuidna_2 = new ol.format.GeoJSON();
var features_zuidna_2 = format_zuidna_2.readFeatures(json_zuidna_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_zuidna_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_zuidna_2.addFeatures(features_zuidna_2);var lyr_zuidna_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zuidna_2, 
                style: style_zuidna_2,
    title: 'zuidna<br />\
    <img src="styles/legend/zuidna_2_0.png" /> <20 minuten<br />\
    <img src="styles/legend/zuidna_2_1.png" /> 20-30 minuten<br />\
    <img src="styles/legend/zuidna_2_2.png" /> 30-45 minuten<br />\
    <img src="styles/legend/zuidna_2_3.png" /> 45-60 minuten<br />\
    <img src="styles/legend/zuidna_2_4.png" /> >60 minuten<br />'
        });var format_secverschilcentraal_3 = new ol.format.GeoJSON();
var features_secverschilcentraal_3 = format_secverschilcentraal_3.readFeatures(json_secverschilcentraal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_secverschilcentraal_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_secverschilcentraal_3.addFeatures(features_secverschilcentraal_3);var lyr_secverschilcentraal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_secverschilcentraal_3, 
                style: style_secverschilcentraal_3,
    title: 'secverschilcentraal<br />\
    <img src="styles/legend/secverschilcentraal_3_0.png" /> >20 minuten sneller<br />\
    <img src="styles/legend/secverschilcentraal_3_1.png" /> 10-20 minuten sneller<br />\
    <img src="styles/legend/secverschilcentraal_3_2.png" /> 2-10 minuten sneller<br />\
    <img src="styles/legend/secverschilcentraal_3_3.png" /> nauwelijks verschil<br />\
    <img src="styles/legend/secverschilcentraal_3_4.png" /> 2-10 minuten trager<br />\
    <img src="styles/legend/secverschilcentraal_3_5.png" /> 10-20 minuten trager<br />\
    <img src="styles/legend/secverschilcentraal_3_6.png" /> meer dan 20 minuten trager<br />'
        });var format_secverschilzuid_4 = new ol.format.GeoJSON();
var features_secverschilzuid_4 = format_secverschilzuid_4.readFeatures(json_secverschilzuid_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_secverschilzuid_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_secverschilzuid_4.addFeatures(features_secverschilzuid_4);var lyr_secverschilzuid_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_secverschilzuid_4, 
                style: style_secverschilzuid_4,
    title: 'secverschilzuid<br />\
    <img src="styles/legend/secverschilzuid_4_0.png" /> >20 minuten sneller<br />\
    <img src="styles/legend/secverschilzuid_4_1.png" /> 10-20 minuten sneller<br />\
    <img src="styles/legend/secverschilzuid_4_2.png" /> 2-10 minuten sneller<br />\
    <img src="styles/legend/secverschilzuid_4_3.png" /> nauwelijks verschil<br />\
    <img src="styles/legend/secverschilzuid_4_4.png" /> 2-10 minuten trager<br />\
    <img src="styles/legend/secverschilzuid_4_5.png" /> 10-20 minuten trager<br />\
    <img src="styles/legend/secverschilzuid_4_6.png" /> meer dan 20 minuten trager<br />'
        });

lyr_centraalna_1.setVisible(true);lyr_zuidna_2.setVisible(true);lyr_secverschilcentraal_3.setVisible(true);lyr_secverschilzuid_4.setVisible(true);
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
var layersList = [osm, lyr_snelstestation_0,lyr_centraalna_1,lyr_zuidna_2,lyr_secverschilcentraal_3,lyr_secverschilzuid_4];
lyr_snelstestation_0.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'totale': 'totale', 'aantal': 'aantal', 'avgsecvoorcentraal': 'avgsecvoorcentraal', 'modussecvoorcentraal': 'modussecvoorcentraal', 'damsecvoorcentraal': 'damsecvoorcentraal', 'avgsecvoorzuid': 'avgsecvoorzuid', 'modussecvoorzuid': 'modussecvoorzuid', 'damsecvoorzuid': 'damsecvoorzuid', 'avgsecnacentraal': 'avgsecnacentraal', 'modussecnacentraal': 'modussecnacentraal', 'damsecnacentraal': 'damsecnacentraal', 'avgsecnazuid': 'avgsecnazuid', 'modussecnazuid': 'modussecnazuid', 'damsecnazuid': 'damsecnazuid', 'avgmetervoorcentraal': 'avgmetervoorcentraal', 'modusmetervoorcentraal': 'modusmetervoorcentraal', 'dammetervoorcentraal': 'dammetervoorcentraal', 'avgmetervoorzuid': 'avgmetervoorzuid', 'modusmetervoorzuid': 'modusmetervoorzuid', 'dammetervoorzuid': 'dammetervoorzuid', 'avgmeternacentraal': 'avgmeternacentraal', 'modusmeternacentraal': 'modusmeternacentraal', 'dammeternacentraal': 'dammeternacentraal', 'avgmeternazuid': 'avgmeternazuid', 'modusmeternazuid': 'modusmeternazuid', 'dammeternazuid': 'dammeternazuid', 'snelstestation': 'snelstestation', });
lyr_centraalna_1.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'totale': 'totale', 'aantal': 'aantal', 'avgsecvoorcentraal': 'avgsecvoorcentraal', 'modussecvoorcentraal': 'modussecvoorcentraal', 'damsecvoorcentraal': 'damsecvoorcentraal', 'avgsecvoorzuid': 'avgsecvoorzuid', 'modussecvoorzuid': 'modussecvoorzuid', 'damsecvoorzuid': 'damsecvoorzuid', 'avgsecnacentraal': 'avgsecnacentraal', 'modussecnacentraal': 'modussecnacentraal', 'damsecnacentraal': 'damsecnacentraal', 'avgsecnazuid': 'avgsecnazuid', 'modussecnazuid': 'modussecnazuid', 'damsecnazuid': 'damsecnazuid', 'avgmetervoorcentraal': 'avgmetervoorcentraal', 'modusmetervoorcentraal': 'modusmetervoorcentraal', 'dammetervoorcentraal': 'dammetervoorcentraal', 'avgmetervoorzuid': 'avgmetervoorzuid', 'modusmetervoorzuid': 'modusmetervoorzuid', 'dammetervoorzuid': 'dammetervoorzuid', 'avgmeternacentraal': 'avgmeternacentraal', 'modusmeternacentraal': 'modusmeternacentraal', 'dammeternacentraal': 'dammeternacentraal', 'avgmeternazuid': 'avgmeternazuid', 'modusmeternazuid': 'modusmeternazuid', 'dammeternazuid': 'dammeternazuid', });
lyr_zuidna_2.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'totale': 'totale', 'aantal': 'aantal', 'avgsecvoorcentraal': 'avgsecvoorcentraal', 'modussecvoorcentraal': 'modussecvoorcentraal', 'damsecvoorcentraal': 'damsecvoorcentraal', 'avgsecvoorzuid': 'avgsecvoorzuid', 'modussecvoorzuid': 'modussecvoorzuid', 'damsecvoorzuid': 'damsecvoorzuid', 'avgsecnacentraal': 'avgsecnacentraal', 'modussecnacentraal': 'modussecnacentraal', 'damsecnacentraal': 'damsecnacentraal', 'avgsecnazuid': 'avgsecnazuid', 'modussecnazuid': 'modussecnazuid', 'damsecnazuid': 'damsecnazuid', 'avgmetervoorcentraal': 'avgmetervoorcentraal', 'modusmetervoorcentraal': 'modusmetervoorcentraal', 'dammetervoorcentraal': 'dammetervoorcentraal', 'avgmetervoorzuid': 'avgmetervoorzuid', 'modusmetervoorzuid': 'modusmetervoorzuid', 'dammetervoorzuid': 'dammetervoorzuid', 'avgmeternacentraal': 'avgmeternacentraal', 'modusmeternacentraal': 'modusmeternacentraal', 'dammeternacentraal': 'dammeternacentraal', 'avgmeternazuid': 'avgmeternazuid', 'modusmeternazuid': 'modusmeternazuid', 'dammeternazuid': 'dammeternazuid', });
lyr_secverschilcentraal_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'totale': 'totale', 'aantal': 'aantal', 'avgsecvoorcentraal': 'avgsecvoorcentraal', 'modussecvoorcentraal': 'modussecvoorcentraal', 'damsecvoorcentraal': 'damsecvoorcentraal', 'avgsecvoorzuid': 'avgsecvoorzuid', 'modussecvoorzuid': 'modussecvoorzuid', 'damsecvoorzuid': 'damsecvoorzuid', 'avgsecnacentraal': 'avgsecnacentraal', 'modussecnacentraal': 'modussecnacentraal', 'damsecnacentraal': 'damsecnacentraal', 'avgsecnazuid': 'avgsecnazuid', 'modussecnazuid': 'modussecnazuid', 'damsecnazuid': 'damsecnazuid', 'avgmetervoorcentraal': 'avgmetervoorcentraal', 'modusmetervoorcentraal': 'modusmetervoorcentraal', 'dammetervoorcentraal': 'dammetervoorcentraal', 'avgmetervoorzuid': 'avgmetervoorzuid', 'modusmetervoorzuid': 'modusmetervoorzuid', 'dammetervoorzuid': 'dammetervoorzuid', 'avgmeternacentraal': 'avgmeternacentraal', 'modusmeternacentraal': 'modusmeternacentraal', 'dammeternacentraal': 'dammeternacentraal', 'avgmeternazuid': 'avgmeternazuid', 'modusmeternazuid': 'modusmeternazuid', 'dammeternazuid': 'dammeternazuid', 'secverschilcentraal': 'secverschilcentraal', });
lyr_secverschilzuid_4.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'totale': 'totale', 'aantal': 'aantal', 'avgsecvoorcentraal': 'avgsecvoorcentraal', 'modussecvoorcentraal': 'modussecvoorcentraal', 'damsecvoorcentraal': 'damsecvoorcentraal', 'avgsecvoorzuid': 'avgsecvoorzuid', 'modussecvoorzuid': 'modussecvoorzuid', 'damsecvoorzuid': 'damsecvoorzuid', 'avgsecnacentraal': 'avgsecnacentraal', 'modussecnacentraal': 'modussecnacentraal', 'damsecnacentraal': 'damsecnacentraal', 'avgsecnazuid': 'avgsecnazuid', 'modussecnazuid': 'modussecnazuid', 'damsecnazuid': 'damsecnazuid', 'avgmetervoorcentraal': 'avgmetervoorcentraal', 'modusmetervoorcentraal': 'modusmetervoorcentraal', 'dammetervoorcentraal': 'dammetervoorcentraal', 'avgmetervoorzuid': 'avgmetervoorzuid', 'modusmetervoorzuid': 'modusmetervoorzuid', 'dammetervoorzuid': 'dammetervoorzuid', 'avgmeternacentraal': 'avgmeternacentraal', 'modusmeternacentraal': 'modusmeternacentraal', 'dammeternacentraal': 'dammeternacentraal', 'avgmeternazuid': 'avgmeternazuid', 'modusmeternazuid': 'modusmeternazuid', 'dammeternazuid': 'dammeternazuid', 'secverschilzuid': 'secverschilzuid', });
lyr_snelstestation_0.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'totale': 'TextEdit', 'aantal': 'TextEdit', 'avgsecvoorcentraal': 'TextEdit', 'modussecvoorcentraal': 'Range', 'damsecvoorcentraal': 'TextEdit', 'avgsecvoorzuid': 'TextEdit', 'modussecvoorzuid': 'Range', 'damsecvoorzuid': 'TextEdit', 'avgsecnacentraal': 'TextEdit', 'modussecnacentraal': 'Range', 'damsecnacentraal': 'TextEdit', 'avgsecnazuid': 'TextEdit', 'modussecnazuid': 'Range', 'damsecnazuid': 'TextEdit', 'avgmetervoorcentraal': 'TextEdit', 'modusmetervoorcentraal': 'Range', 'dammetervoorcentraal': 'TextEdit', 'avgmetervoorzuid': 'TextEdit', 'modusmetervoorzuid': 'Range', 'dammetervoorzuid': 'TextEdit', 'avgmeternacentraal': 'TextEdit', 'modusmeternacentraal': 'Range', 'dammeternacentraal': 'TextEdit', 'avgmeternazuid': 'TextEdit', 'modusmeternazuid': 'Range', 'dammeternazuid': 'TextEdit', 'snelstestation': 'Range', });
lyr_centraalna_1.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'totale': 'TextEdit', 'aantal': 'TextEdit', 'avgsecvoorcentraal': 'TextEdit', 'modussecvoorcentraal': 'Range', 'damsecvoorcentraal': 'TextEdit', 'avgsecvoorzuid': 'TextEdit', 'modussecvoorzuid': 'Range', 'damsecvoorzuid': 'TextEdit', 'avgsecnacentraal': 'TextEdit', 'modussecnacentraal': 'Range', 'damsecnacentraal': 'TextEdit', 'avgsecnazuid': 'TextEdit', 'modussecnazuid': 'Range', 'damsecnazuid': 'TextEdit', 'avgmetervoorcentraal': 'TextEdit', 'modusmetervoorcentraal': 'Range', 'dammetervoorcentraal': 'TextEdit', 'avgmetervoorzuid': 'TextEdit', 'modusmetervoorzuid': 'Range', 'dammetervoorzuid': 'TextEdit', 'avgmeternacentraal': 'TextEdit', 'modusmeternacentraal': 'Range', 'dammeternacentraal': 'TextEdit', 'avgmeternazuid': 'TextEdit', 'modusmeternazuid': 'Range', 'dammeternazuid': 'TextEdit', });
lyr_zuidna_2.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'totale': 'TextEdit', 'aantal': 'TextEdit', 'avgsecvoorcentraal': 'TextEdit', 'modussecvoorcentraal': 'Range', 'damsecvoorcentraal': 'TextEdit', 'avgsecvoorzuid': 'TextEdit', 'modussecvoorzuid': 'Range', 'damsecvoorzuid': 'TextEdit', 'avgsecnacentraal': 'TextEdit', 'modussecnacentraal': 'Range', 'damsecnacentraal': 'TextEdit', 'avgsecnazuid': 'TextEdit', 'modussecnazuid': 'Range', 'damsecnazuid': 'TextEdit', 'avgmetervoorcentraal': 'TextEdit', 'modusmetervoorcentraal': 'Range', 'dammetervoorcentraal': 'TextEdit', 'avgmetervoorzuid': 'TextEdit', 'modusmetervoorzuid': 'Range', 'dammetervoorzuid': 'TextEdit', 'avgmeternacentraal': 'TextEdit', 'modusmeternacentraal': 'Range', 'dammeternacentraal': 'TextEdit', 'avgmeternazuid': 'TextEdit', 'modusmeternazuid': 'Range', 'dammeternazuid': 'TextEdit', });
lyr_secverschilcentraal_3.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'totale': 'TextEdit', 'aantal': 'TextEdit', 'avgsecvoorcentraal': 'TextEdit', 'modussecvoorcentraal': 'Range', 'damsecvoorcentraal': 'TextEdit', 'avgsecvoorzuid': 'TextEdit', 'modussecvoorzuid': 'Range', 'damsecvoorzuid': 'TextEdit', 'avgsecnacentraal': 'TextEdit', 'modussecnacentraal': 'Range', 'damsecnacentraal': 'TextEdit', 'avgsecnazuid': 'TextEdit', 'modussecnazuid': 'Range', 'damsecnazuid': 'TextEdit', 'avgmetervoorcentraal': 'TextEdit', 'modusmetervoorcentraal': 'Range', 'dammetervoorcentraal': 'TextEdit', 'avgmetervoorzuid': 'TextEdit', 'modusmetervoorzuid': 'Range', 'dammetervoorzuid': 'TextEdit', 'avgmeternacentraal': 'TextEdit', 'modusmeternacentraal': 'Range', 'dammeternacentraal': 'TextEdit', 'avgmeternazuid': 'TextEdit', 'modusmeternazuid': 'Range', 'dammeternazuid': 'TextEdit', 'secverschilcentraal': 'Range', });
lyr_secverschilzuid_4.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'totale': 'TextEdit', 'aantal': 'TextEdit', 'avgsecvoorcentraal': 'TextEdit', 'modussecvoorcentraal': 'Range', 'damsecvoorcentraal': 'TextEdit', 'avgsecvoorzuid': 'TextEdit', 'modussecvoorzuid': 'Range', 'damsecvoorzuid': 'TextEdit', 'avgsecnacentraal': 'TextEdit', 'modussecnacentraal': 'Range', 'damsecnacentraal': 'TextEdit', 'avgsecnazuid': 'TextEdit', 'modussecnazuid': 'Range', 'damsecnazuid': 'TextEdit', 'avgmetervoorcentraal': 'TextEdit', 'modusmetervoorcentraal': 'Range', 'dammetervoorcentraal': 'TextEdit', 'avgmetervoorzuid': 'TextEdit', 'modusmetervoorzuid': 'Range', 'dammetervoorzuid': 'TextEdit', 'avgmeternacentraal': 'TextEdit', 'modusmeternacentraal': 'Range', 'dammeternacentraal': 'TextEdit', 'avgmeternazuid': 'TextEdit', 'modusmeternazuid': 'Range', 'dammeternazuid': 'TextEdit', 'secverschilzuid': 'Range', });
lyr_snelstestation_0.set('fieldLabels', {'id': 'inline label', 'fid': 'inline label', 'totale': 'inline label', 'aantal': 'inline label', 'avgsecvoorcentraal': 'inline label', 'modussecvoorcentraal': 'inline label', 'damsecvoorcentraal': 'inline label', 'avgsecvoorzuid': 'inline label', 'modussecvoorzuid': 'inline label', 'damsecvoorzuid': 'inline label', 'avgsecnacentraal': 'inline label', 'modussecnacentraal': 'inline label', 'damsecnacentraal': 'inline label', 'avgsecnazuid': 'inline label', 'modussecnazuid': 'inline label', 'damsecnazuid': 'inline label', 'avgmetervoorcentraal': 'inline label', 'modusmetervoorcentraal': 'inline label', 'dammetervoorcentraal': 'inline label', 'avgmetervoorzuid': 'inline label', 'modusmetervoorzuid': 'inline label', 'dammetervoorzuid': 'inline label', 'avgmeternacentraal': 'inline label', 'modusmeternacentraal': 'inline label', 'dammeternacentraal': 'inline label', 'avgmeternazuid': 'inline label', 'modusmeternazuid': 'inline label', 'dammeternazuid': 'inline label', 'snelstestation': 'inline label', });
lyr_centraalna_1.set('fieldLabels', {'id': 'inline label', 'fid': 'inline label', 'totale': 'inline label', 'aantal': 'inline label', 'avgsecvoorcentraal': 'inline label', 'modussecvoorcentraal': 'inline label', 'damsecvoorcentraal': 'inline label', 'avgsecvoorzuid': 'inline label', 'modussecvoorzuid': 'inline label', 'damsecvoorzuid': 'inline label', 'avgsecnacentraal': 'inline label', 'modussecnacentraal': 'inline label', 'damsecnacentraal': 'inline label', 'avgsecnazuid': 'inline label', 'modussecnazuid': 'inline label', 'damsecnazuid': 'inline label', 'avgmetervoorcentraal': 'inline label', 'modusmetervoorcentraal': 'inline label', 'dammetervoorcentraal': 'inline label', 'avgmetervoorzuid': 'inline label', 'modusmetervoorzuid': 'inline label', 'dammetervoorzuid': 'inline label', 'avgmeternacentraal': 'inline label', 'modusmeternacentraal': 'inline label', 'dammeternacentraal': 'inline label', 'avgmeternazuid': 'inline label', 'modusmeternazuid': 'inline label', 'dammeternazuid': 'inline label', });
lyr_zuidna_2.set('fieldLabels', {'id': 'inline label', 'fid': 'inline label', 'totale': 'inline label', 'aantal': 'inline label', 'avgsecvoorcentraal': 'inline label', 'modussecvoorcentraal': 'inline label', 'damsecvoorcentraal': 'inline label', 'avgsecvoorzuid': 'inline label', 'modussecvoorzuid': 'inline label', 'damsecvoorzuid': 'inline label', 'avgsecnacentraal': 'inline label', 'modussecnacentraal': 'inline label', 'damsecnacentraal': 'inline label', 'avgsecnazuid': 'inline label', 'modussecnazuid': 'inline label', 'damsecnazuid': 'inline label', 'avgmetervoorcentraal': 'inline label', 'modusmetervoorcentraal': 'inline label', 'dammetervoorcentraal': 'inline label', 'avgmetervoorzuid': 'inline label', 'modusmetervoorzuid': 'inline label', 'dammetervoorzuid': 'inline label', 'avgmeternacentraal': 'inline label', 'modusmeternacentraal': 'inline label', 'dammeternacentraal': 'inline label', 'avgmeternazuid': 'inline label', 'modusmeternazuid': 'inline label', 'dammeternazuid': 'inline label', });
lyr_secverschilcentraal_3.set('fieldLabels', {'id': 'inline label', 'fid': 'inline label', 'totale': 'inline label', 'aantal': 'inline label', 'avgsecvoorcentraal': 'inline label', 'modussecvoorcentraal': 'inline label', 'damsecvoorcentraal': 'inline label', 'avgsecvoorzuid': 'inline label', 'modussecvoorzuid': 'inline label', 'damsecvoorzuid': 'inline label', 'avgsecnacentraal': 'inline label', 'modussecnacentraal': 'inline label', 'damsecnacentraal': 'inline label', 'avgsecnazuid': 'inline label', 'modussecnazuid': 'inline label', 'damsecnazuid': 'inline label', 'avgmetervoorcentraal': 'inline label', 'modusmetervoorcentraal': 'inline label', 'dammetervoorcentraal': 'inline label', 'avgmetervoorzuid': 'inline label', 'modusmetervoorzuid': 'inline label', 'dammetervoorzuid': 'inline label', 'avgmeternacentraal': 'inline label', 'modusmeternacentraal': 'inline label', 'dammeternacentraal': 'inline label', 'avgmeternazuid': 'inline label', 'modusmeternazuid': 'inline label', 'dammeternazuid': 'inline label', 'secverschilcentraal': 'inline label', });
lyr_secverschilzuid_4.set('fieldLabels', {'id': 'inline label', 'fid': 'inline label', 'totale': 'inline label', 'aantal': 'inline label', 'avgsecvoorcentraal': 'inline label', 'modussecvoorcentraal': 'inline label', 'damsecvoorcentraal': 'inline label', 'avgsecvoorzuid': 'inline label', 'modussecvoorzuid': 'inline label', 'damsecvoorzuid': 'inline label', 'avgsecnacentraal': 'inline label', 'modussecnacentraal': 'inline label', 'damsecnacentraal': 'inline label', 'avgsecnazuid': 'inline label', 'modussecnazuid': 'inline label', 'damsecnazuid': 'inline label', 'avgmetervoorcentraal': 'inline label', 'modusmetervoorcentraal': 'inline label', 'dammetervoorcentraal': 'inline label', 'avgmetervoorzuid': 'inline label', 'modusmetervoorzuid': 'inline label', 'dammetervoorzuid': 'inline label', 'avgmeternacentraal': 'inline label', 'modusmeternacentraal': 'inline label', 'dammeternacentraal': 'inline label', 'avgmeternazuid': 'inline label', 'modusmeternazuid': 'inline label', 'dammeternazuid': 'inline label', 'secverschilzuid': 'inline label', });
lyr_secverschilzuid_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});