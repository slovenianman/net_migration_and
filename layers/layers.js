ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([13032.121162, 3959411.427638, 629650.267214, 4286664.542288]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Netmigration1_1 = new ol.format.GeoJSON();
var features_Netmigration1_1 = format_Netmigration1_1.readFeatures(json_Netmigration1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Netmigration1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netmigration1_1.addFeatures(features_Netmigration1_1);
var lyr_Netmigration1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Netmigration1_1, 
                style: style_Netmigration1_1,
                interactive: true,
                title: 'Net migration 1'
            });
var format_Netmigration2_2 = new ol.format.GeoJSON();
var features_Netmigration2_2 = format_Netmigration2_2.readFeatures(json_Netmigration2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Netmigration2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netmigration2_2.addFeatures(features_Netmigration2_2);
var lyr_Netmigration2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Netmigration2_2, 
                style: style_Netmigration2_2,
                interactive: true,
                title: 'Net migration 2'
            });
var format_Netmigration3_3 = new ol.format.GeoJSON();
var features_Netmigration3_3 = format_Netmigration3_3.readFeatures(json_Netmigration3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Netmigration3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netmigration3_3.addFeatures(features_Netmigration3_3);
var lyr_Netmigration3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Netmigration3_3, 
                style: style_Netmigration3_3,
                interactive: true,
                title: 'Net migration 3'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Netmigration1_1.setVisible(true);lyr_Netmigration2_2.setVisible(true);lyr_Netmigration3_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Netmigration1_1,lyr_Netmigration2_2,lyr_Netmigration3_3];
lyr_Netmigration1_1.set('fieldAliases', {'code': 'code', 'Name': 'Name', 'Province': 'Province', 'sp_km2': 'sp_km2', 'Migra_net3': 'Migra_net3', 'Migra_net2': 'Migra_net2', 'Migra_net1': 'Migra_net1', });
lyr_Netmigration2_2.set('fieldAliases', {'code': 'code', 'Name': 'Name', 'Province': 'Province', 'sp_km2': 'sp_km2', 'Migra_net3': 'Migra_net3', 'Migra_net2': 'Migra_net2', 'Migra_net1': 'Migra_net1', });
lyr_Netmigration3_3.set('fieldAliases', {'code': 'code', 'Name': 'Name', 'Province': 'Province', 'sp_km2': 'sp_km2', 'Migra_net3': 'Migra_net3', 'Migra_net2': 'Migra_net2', 'Migra_net1': 'Migra_net1', });
lyr_Netmigration1_1.set('fieldImages', {'code': 'TextEdit', 'Name': 'TextEdit', 'Province': 'TextEdit', 'sp_km2': 'TextEdit', 'Migra_net3': 'TextEdit', 'Migra_net2': 'TextEdit', 'Migra_net1': 'TextEdit', });
lyr_Netmigration2_2.set('fieldImages', {'code': 'TextEdit', 'Name': 'TextEdit', 'Province': 'TextEdit', 'sp_km2': 'TextEdit', 'Migra_net3': 'TextEdit', 'Migra_net2': 'TextEdit', 'Migra_net1': 'TextEdit', });
lyr_Netmigration3_3.set('fieldImages', {'code': 'TextEdit', 'Name': 'TextEdit', 'Province': 'TextEdit', 'sp_km2': 'TextEdit', 'Migra_net3': 'TextEdit', 'Migra_net2': 'TextEdit', 'Migra_net1': 'TextEdit', });
lyr_Netmigration1_1.set('fieldLabels', {'code': 'inline label', 'Name': 'inline label', 'Province': 'inline label', 'sp_km2': 'inline label', 'Migra_net3': 'inline label', 'Migra_net2': 'inline label', 'Migra_net1': 'inline label', });
lyr_Netmigration2_2.set('fieldLabels', {'code': 'inline label', 'Name': 'inline label', 'Province': 'inline label', 'sp_km2': 'inline label', 'Migra_net3': 'inline label', 'Migra_net2': 'inline label', 'Migra_net1': 'inline label', });
lyr_Netmigration3_3.set('fieldLabels', {'code': 'inline label', 'Name': 'inline label', 'Province': 'inline label', 'sp_km2': 'inline label', 'Migra_net3': 'inline label', 'Migra_net2': 'inline label', 'Migra_net1': 'inline label', });
lyr_Netmigration3_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});