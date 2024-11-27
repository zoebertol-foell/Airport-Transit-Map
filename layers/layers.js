var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Positronlabelsonly_1 = new ol.layer.Tile({
            'title': 'Positron [labels only]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
            })
        });
var format_232_2 = new ol.format.GeoJSON();
var features_232_2 = format_232_2.readFeatures(json_232_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_232_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_232_2.addFeatures(features_232_2);
var lyr_232_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_232_2, 
                style: style_232_2,
                popuplayertitle: "232",
                interactive: false,
                title: '<img src="styles/legend/232_2.png" /> 232'
            });
var format_120_3 = new ol.format.GeoJSON();
var features_120_3 = format_120_3.readFeatures(json_120_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_120_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_120_3.addFeatures(features_120_3);
var lyr_120_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_120_3, 
                style: style_120_3,
                popuplayertitle: "120",
                interactive: false,
                title: '<img src="styles/legend/120_3.png" /> 120'
            });
var format_117_4 = new ol.format.GeoJSON();
var features_117_4 = format_117_4.readFeatures(json_117_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_117_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_117_4.addFeatures(features_117_4);
var lyr_117_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_117_4, 
                style: style_117_4,
                popuplayertitle: "117",
                interactive: false,
                title: '<img src="styles/legend/117_4.png" /> 117'
            });
var format_111_5 = new ol.format.GeoJSON();
var features_111_5 = format_111_5.readFeatures(json_111_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_111_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_111_5.addFeatures(features_111_5);
var lyr_111_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_111_5, 
                style: style_111_5,
                popuplayertitle: "111",
                interactive: false,
                title: '<img src="styles/legend/111_5.png" /> 111'
            });
var format_K_6 = new ol.format.GeoJSON();
var features_K_6 = format_K_6.readFeatures(json_K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_6.addFeatures(features_K_6);
var lyr_K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_K_6, 
                style: style_K_6,
                popuplayertitle: "K",
                interactive: false,
                title: '<img src="styles/legend/K_6.png" /> K'
            });
var format_C_7 = new ol.format.GeoJSON();
var features_C_7 = format_C_7.readFeatures(json_C_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_7.addFeatures(features_C_7);
var lyr_C_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_7, 
                style: style_C_7,
                popuplayertitle: "C ",
                interactive: false,
                title: '<img src="styles/legend/C_7.png" /> C '
            });
var format_237_8 = new ol.format.GeoJSON();
var features_237_8 = format_237_8.readFeatures(json_237_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_237_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_237_8.addFeatures(features_237_8);
var lyr_237_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_237_8, 
                style: style_237_8,
                popuplayertitle: "237",
                interactive: false,
                title: '<img src="styles/legend/237_8.png" /> 237'
            });
var format_169_9 = new ol.format.GeoJSON();
var features_169_9 = format_169_9.readFeatures(json_169_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_169_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_169_9.addFeatures(features_169_9);
var lyr_169_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_169_9, 
                style: style_169_9,
                popuplayertitle: "169",
                interactive: false,
                title: '<img src="styles/legend/169_9.png" /> 169'
            });
var format_487_10 = new ol.format.GeoJSON();
var features_487_10 = format_487_10.readFeatures(json_487_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_487_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_487_10.addFeatures(features_487_10);
var lyr_487_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_487_10, 
                style: style_487_10,
                popuplayertitle: "487",
                interactive: false,
                title: '<img src="styles/legend/487_10.png" /> 487'
            });
var format_106_11 = new ol.format.GeoJSON();
var features_106_11 = format_106_11.readFeatures(json_106_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_106_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_106_11.addFeatures(features_106_11);
var lyr_106_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_106_11, 
                style: style_106_11,
                popuplayertitle: "106",
                interactive: false,
                title: '<img src="styles/legend/106_11.png" /> 106'
            });
var format_96_12 = new ol.format.GeoJSON();
var features_96_12 = format_96_12.readFeatures(json_96_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_96_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_96_12.addFeatures(features_96_12);
var lyr_96_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_96_12, 
                style: style_96_12,
                popuplayertitle: "96",
                interactive: false,
                title: '<img src="styles/legend/96_12.png" /> 96'
            });
var format_76_13 = new ol.format.GeoJSON();
var features_76_13 = format_76_13.readFeatures(json_76_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_13.addFeatures(features_76_13);
var lyr_76_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_13, 
                style: style_76_13,
                popuplayertitle: "76",
                interactive: false,
                title: '<img src="styles/legend/76_13.png" /> 76'
            });
var format_AntelopeValley_14 = new ol.format.GeoJSON();
var features_AntelopeValley_14 = format_AntelopeValley_14.readFeatures(json_AntelopeValley_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntelopeValley_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntelopeValley_14.addFeatures(features_AntelopeValley_14);
var lyr_AntelopeValley_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntelopeValley_14, 
                style: style_AntelopeValley_14,
                popuplayertitle: "Antelope Valley",
                interactive: false,
                title: '<img src="styles/legend/AntelopeValley_14.png" /> Antelope Valley'
            });
var format_VenturaCounty_15 = new ol.format.GeoJSON();
var features_VenturaCounty_15 = format_VenturaCounty_15.readFeatures(json_VenturaCounty_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VenturaCounty_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VenturaCounty_15.addFeatures(features_VenturaCounty_15);
var lyr_VenturaCounty_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VenturaCounty_15, 
                style: style_VenturaCounty_15,
                popuplayertitle: "Ventura County",
                interactive: false,
                title: '<img src="styles/legend/VenturaCounty_15.png" /> Ventura County'
            });
var format_222_16 = new ol.format.GeoJSON();
var features_222_16 = format_222_16.readFeatures(json_222_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_222_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_222_16.addFeatures(features_222_16);
var lyr_222_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_222_16, 
                style: style_222_16,
                popuplayertitle: "222",
                interactive: false,
                title: '<img src="styles/legend/222_16.png" /> 222'
            });
var format_294_17 = new ol.format.GeoJSON();
var features_294_17 = format_294_17.readFeatures(json_294_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_294_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_294_17.addFeatures(features_294_17);
var lyr_294_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_294_17, 
                style: style_294_17,
                popuplayertitle: "294",
                interactive: false,
                title: '<img src="styles/legend/294_17.png" /> 294'
            });
var format_169_18 = new ol.format.GeoJSON();
var features_169_18 = format_169_18.readFeatures(json_169_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_169_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_169_18.addFeatures(features_169_18);
var lyr_169_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_169_18, 
                style: style_169_18,
                popuplayertitle: "169",
                interactive: false,
                title: '<img src="styles/legend/169_18.png" /> 169'
            });
var format_165_19 = new ol.format.GeoJSON();
var features_165_19 = format_165_19.readFeatures(json_165_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_165_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_165_19.addFeatures(features_165_19);
var lyr_165_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_165_19, 
                style: style_165_19,
                popuplayertitle: "165",
                interactive: false,
                title: '<img src="styles/legend/165_19.png" /> 165'
            });
var format_FlyawayLocation_20 = new ol.format.GeoJSON();
var features_FlyawayLocation_20 = format_FlyawayLocation_20.readFeatures(json_FlyawayLocation_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlyawayLocation_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlyawayLocation_20.addFeatures(features_FlyawayLocation_20);
var lyr_FlyawayLocation_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlyawayLocation_20, 
                style: style_FlyawayLocation_20,
                popuplayertitle: "Flyaway Location",
                interactive: true,
                title: '<img src="styles/legend/FlyawayLocation_20.png" /> Flyaway Location'
            });
var format_LAX_21 = new ol.format.GeoJSON();
var features_LAX_21 = format_LAX_21.readFeatures(json_LAX_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAX_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAX_21.addFeatures(features_LAX_21);
var lyr_LAX_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAX_21, 
                style: style_LAX_21,
                popuplayertitle: "LAX",
                interactive: true,
                title: '<img src="styles/legend/LAX_21.png" /> LAX'
            });
var format_BUR_22 = new ol.format.GeoJSON();
var features_BUR_22 = format_BUR_22.readFeatures(json_BUR_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUR_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUR_22.addFeatures(features_BUR_22);
var lyr_BUR_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUR_22, 
                style: style_BUR_22,
                popuplayertitle: "BUR",
                interactive: true,
                title: '<img src="styles/legend/BUR_22.png" /> BUR'
            });
var group_Airports = new ol.layer.Group({
                                layers: [lyr_LAX_21,lyr_BUR_22,],
                                fold: "open",
                                title: "Airports"});
var group_BusLinestoBUR = new ol.layer.Group({
                                layers: [lyr_222_16,lyr_294_17,lyr_169_18,lyr_165_19,],
                                fold: "open",
                                title: "Bus Lines to BUR"});
var group_RailtoBUR = new ol.layer.Group({
                                layers: [lyr_AntelopeValley_14,lyr_VenturaCounty_15,],
                                fold: "open",
                                title: "Rail to BUR"});
var group_BusLinesUnionStation = new ol.layer.Group({
                                layers: [lyr_487_10,lyr_106_11,lyr_96_12,lyr_76_13,],
                                fold: "open",
                                title: "Bus Lines Union Station"});
var group_BusLinestoVanNuys = new ol.layer.Group({
                                layers: [lyr_237_8,lyr_169_9,],
                                fold: "open",
                                title: "Bus Lines to Van Nuys"});
var group_RailtoLAX = new ol.layer.Group({
                                layers: [lyr_K_6,lyr_C_7,],
                                fold: "open",
                                title: "Rail to LAX"});
var group_BusLinestoLAX = new ol.layer.Group({
                                layers: [lyr_232_2,lyr_120_3,lyr_117_4,lyr_111_5,],
                                fold: "open",
                                title: "Bus Lines to LAX"});

lyr_ESRIGraylight_0.setVisible(true);lyr_Positronlabelsonly_1.setVisible(true);lyr_232_2.setVisible(true);lyr_120_3.setVisible(true);lyr_117_4.setVisible(true);lyr_111_5.setVisible(true);lyr_K_6.setVisible(true);lyr_C_7.setVisible(true);lyr_237_8.setVisible(true);lyr_169_9.setVisible(true);lyr_487_10.setVisible(true);lyr_106_11.setVisible(true);lyr_96_12.setVisible(true);lyr_76_13.setVisible(true);lyr_AntelopeValley_14.setVisible(true);lyr_VenturaCounty_15.setVisible(true);lyr_222_16.setVisible(true);lyr_294_17.setVisible(true);lyr_169_18.setVisible(true);lyr_165_19.setVisible(true);lyr_FlyawayLocation_20.setVisible(true);lyr_LAX_21.setVisible(true);lyr_BUR_22.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Positronlabelsonly_1,group_BusLinestoLAX,group_RailtoLAX,group_BusLinestoVanNuys,group_BusLinesUnionStation,group_RailtoBUR,group_BusLinestoBUR,lyr_FlyawayLocation_20,group_Airports];
lyr_232_2.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_120_3.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_117_4.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_111_5.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_K_6.set('fieldAliases', {'Id': 'Id', });
lyr_C_7.set('fieldAliases', {'Id': 'Id', 'shape_id': 'shape_id', 'route_id': 'route_id', 'agency_id': 'agency_id', 'rt_shrt_nm': 'rt_shrt_nm', 'rt_long_nm': 'rt_long_nm', 'route_desc': 'route_desc', 'route_type': 'route_type', 'rt_typ_txt': 'rt_typ_txt', 'route_url': 'route_url', 'rt_color': 'rt_color', 'rt_col_fmt': 'rt_col_fmt', 'rt_txt_col': 'rt_txt_col', 'rt_txt_fmt': 'rt_txt_fmt', });
lyr_237_8.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_169_9.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_487_10.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_106_11.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_96_12.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_76_13.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_AntelopeValley_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ELEVATION': 'ELEVATION', 'FID_': 'FID_', 'LAYER': 'LAYER', 'LAYER_1': 'LAYER_1', 'LAYER_2': 'LAYER_2', 'TRK_CODE': 'TRK_CODE', 'UID': 'UID', 'MP_DIR': 'MP_DIR', 'TRK_TYPE': 'TRK_TYPE', 'TRK_NAME': 'TRK_NAME', 'RR_NAME': 'RR_NAME', 'RR_CODE': 'RR_CODE', 'SBDV_NAME': 'SBDV_NAME', 'LAYER1': 'LAYER1', 'LAYER_12': 'LAYER_12', 'SBDV_CODE': 'SBDV_CODE', 'LAYER_123': 'LAYER_123', 'YEAR': 'YEAR', 'DataWareho': 'DataWareho', 'Shapelen': 'Shapelen', 'Name': 'Name', });
lyr_VenturaCounty_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ELEVATION': 'ELEVATION', 'FID_': 'FID_', 'LAYER': 'LAYER', 'LAYER_1': 'LAYER_1', 'LAYER_2': 'LAYER_2', 'TRK_CODE': 'TRK_CODE', 'UID': 'UID', 'MP_DIR': 'MP_DIR', 'TRK_TYPE': 'TRK_TYPE', 'TRK_NAME': 'TRK_NAME', 'RR_NAME': 'RR_NAME', 'RR_CODE': 'RR_CODE', 'SBDV_NAME': 'SBDV_NAME', 'LAYER1': 'LAYER1', 'LAYER_12': 'LAYER_12', 'SBDV_CODE': 'SBDV_CODE', 'LAYER_123': 'LAYER_123', 'YEAR': 'YEAR', 'DataWareho': 'DataWareho', 'Shapelen': 'Shapelen', 'Name': 'Name', });
lyr_222_16.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_294_17.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_169_18.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_165_19.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_FlyawayLocation_20.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zipcode': 'Zipcode', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accuracy Score': 'Accuracy Score', 'Accuracy Type': 'Accuracy Type', 'Number': 'Number', 'Street': 'Street', 'Unit Type': 'Unit Type', 'Unit Number': 'Unit Number', 'City_1': 'City_1', 'State_1': 'State_1', 'County': 'County', 'Zip': 'Zip', 'Country': 'Country', 'Source': 'Source', });
lyr_LAX_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'CAT1': 'CAT1', 'CAT2': 'CAT2', 'CAT3': 'CAT3', 'SOURCE': 'SOURCE', 'LMS_ID': 'LMS_ID', 'DESCRIPTIO': 'DESCRIPTIO', 'DATE_UPDAT': 'DATE_UPDAT', 'Shapearea': 'Shapearea', 'Shapelen': 'Shapelen', });
lyr_BUR_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'CAT1': 'CAT1', 'CAT2': 'CAT2', 'CAT3': 'CAT3', 'SOURCE': 'SOURCE', 'LMS_ID': 'LMS_ID', 'DESCRIPTIO': 'DESCRIPTIO', 'DATE_UPDAT': 'DATE_UPDAT', 'Shapearea': 'Shapearea', 'Shapelen': 'Shapelen', });
lyr_232_2.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_120_3.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_117_4.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_111_5.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_K_6.set('fieldImages', {'Id': 'Range', });
lyr_C_7.set('fieldImages', {'Id': 'Range', 'shape_id': '', 'route_id': '', 'agency_id': '', 'rt_shrt_nm': '', 'rt_long_nm': '', 'route_desc': '', 'route_type': '', 'rt_typ_txt': '', 'route_url': '', 'rt_color': '', 'rt_col_fmt': '', 'rt_txt_col': '', 'rt_txt_fmt': '', });
lyr_237_8.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_169_9.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_487_10.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_106_11.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_96_12.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_76_13.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_AntelopeValley_14.set('fieldImages', {'OBJECTID': 'Range', 'ELEVATION': 'Range', 'FID_': 'Range', 'LAYER': 'TextEdit', 'LAYER_1': 'TextEdit', 'LAYER_2': 'TextEdit', 'TRK_CODE': 'Range', 'UID': 'TextEdit', 'MP_DIR': 'TextEdit', 'TRK_TYPE': 'TextEdit', 'TRK_NAME': 'TextEdit', 'RR_NAME': 'TextEdit', 'RR_CODE': 'Range', 'SBDV_NAME': 'TextEdit', 'LAYER1': 'TextEdit', 'LAYER_12': 'TextEdit', 'SBDV_CODE': 'TextEdit', 'LAYER_123': 'TextEdit', 'YEAR': 'Range', 'DataWareho': 'TextEdit', 'Shapelen': 'TextEdit', 'Name': 'TextEdit', });
lyr_VenturaCounty_15.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ELEVATION': 'Range', 'FID_': 'Range', 'LAYER': 'TextEdit', 'LAYER_1': 'TextEdit', 'LAYER_2': 'TextEdit', 'TRK_CODE': 'Range', 'UID': 'TextEdit', 'MP_DIR': 'TextEdit', 'TRK_TYPE': 'TextEdit', 'TRK_NAME': 'TextEdit', 'RR_NAME': 'TextEdit', 'RR_CODE': 'Range', 'SBDV_NAME': 'TextEdit', 'LAYER1': 'TextEdit', 'LAYER_12': 'TextEdit', 'SBDV_CODE': 'TextEdit', 'LAYER_123': 'TextEdit', 'YEAR': 'Range', 'DataWareho': 'TextEdit', 'Shapelen': 'TextEdit', 'Name': 'TextEdit', });
lyr_222_16.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_294_17.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_169_18.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_165_19.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_FlyawayLocation_20.set('fieldImages', {'Name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zipcode': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Accuracy Score': 'CheckBox', 'Accuracy Type': 'TextEdit', 'Number': 'Range', 'Street': 'TextEdit', 'Unit Type': 'TextEdit', 'Unit Number': 'TextEdit', 'City_1': 'TextEdit', 'State_1': 'TextEdit', 'County': 'TextEdit', 'Zip': 'Range', 'Country': 'TextEdit', 'Source': 'TextEdit', });
lyr_LAX_21.set('fieldImages', {'OBJECTID': 'Range', 'NAME': 'TextEdit', 'CAT1': 'TextEdit', 'CAT2': 'TextEdit', 'CAT3': 'TextEdit', 'SOURCE': 'TextEdit', 'LMS_ID': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'DATE_UPDAT': 'DateTime', 'Shapearea': 'TextEdit', 'Shapelen': 'TextEdit', });
lyr_BUR_22.set('fieldImages', {'OBJECTID': 'Range', 'NAME': 'TextEdit', 'CAT1': 'TextEdit', 'CAT2': 'TextEdit', 'CAT3': 'TextEdit', 'SOURCE': 'TextEdit', 'LMS_ID': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'DATE_UPDAT': 'DateTime', 'Shapearea': 'TextEdit', 'Shapelen': 'TextEdit', });
lyr_232_2.set('fieldLabels', {'VAR_ROUTE': 'header label - visible with data', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_120_3.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_117_4.set('fieldLabels', {'VAR_ROUTE': 'header label - visible with data', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_111_5.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_K_6.set('fieldLabels', {'Id': 'header label - visible with data', });
lyr_C_7.set('fieldLabels', {'Id': 'header label - visible with data', 'shape_id': 'no label', 'route_id': 'no label', 'agency_id': 'no label', 'rt_shrt_nm': 'no label', 'rt_long_nm': 'no label', 'route_desc': 'no label', 'route_type': 'no label', 'rt_typ_txt': 'no label', 'route_url': 'no label', 'rt_color': 'no label', 'rt_col_fmt': 'no label', 'rt_txt_col': 'no label', 'rt_txt_fmt': 'no label', });
lyr_237_8.set('fieldLabels', {'VAR_ROUTE': 'header label - visible with data', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_169_9.set('fieldLabels', {'VAR_ROUTE': 'header label - visible with data', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_487_10.set('fieldLabels', {'VAR_ROUTE': 'header label - visible with data', 'VAR_IDENT': 'header label - always visible', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_106_11.set('fieldLabels', {'VAR_ROUTE': 'header label - visible with data', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_96_12.set('fieldLabels', {'VAR_ROUTE': 'header label - visible with data', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_76_13.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_AntelopeValley_14.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'ELEVATION': 'header label - visible with data', 'FID_': 'no label', 'LAYER': 'no label', 'LAYER_1': 'no label', 'LAYER_2': 'no label', 'TRK_CODE': 'no label', 'UID': 'no label', 'MP_DIR': 'no label', 'TRK_TYPE': 'no label', 'TRK_NAME': 'no label', 'RR_NAME': 'no label', 'RR_CODE': 'no label', 'SBDV_NAME': 'no label', 'LAYER1': 'no label', 'LAYER_12': 'no label', 'SBDV_CODE': 'no label', 'LAYER_123': 'no label', 'YEAR': 'no label', 'DataWareho': 'no label', 'Shapelen': 'no label', 'Name': 'no label', });
lyr_VenturaCounty_15.set('fieldLabels', {'fid': 'header label - visible with data', 'OBJECTID': 'no label', 'ELEVATION': 'no label', 'FID_': 'no label', 'LAYER': 'no label', 'LAYER_1': 'no label', 'LAYER_2': 'no label', 'TRK_CODE': 'no label', 'UID': 'no label', 'MP_DIR': 'no label', 'TRK_TYPE': 'no label', 'TRK_NAME': 'no label', 'RR_NAME': 'no label', 'RR_CODE': 'no label', 'SBDV_NAME': 'no label', 'LAYER1': 'no label', 'LAYER_12': 'no label', 'SBDV_CODE': 'no label', 'LAYER_123': 'no label', 'YEAR': 'no label', 'DataWareho': 'no label', 'Shapelen': 'no label', 'Name': 'no label', });
lyr_222_16.set('fieldLabels', {'VAR_ROUTE': 'header label - visible with data', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_294_17.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_169_18.set('fieldLabels', {'VAR_ROUTE': 'hidden field', 'VAR_IDENT': 'hidden field', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_165_19.set('fieldLabels', {'VAR_ROUTE': 'header label - visible with data', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_FlyawayLocation_20.set('fieldLabels', {'Name': 'header label - visible with data', 'Address': 'inline label - always visible', 'City': 'inline label - always visible', 'State': 'hidden field', 'Zipcode': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Accuracy Score': 'hidden field', 'Accuracy Type': 'hidden field', 'Number': 'hidden field', 'Street': 'hidden field', 'Unit Type': 'hidden field', 'Unit Number': 'hidden field', 'City_1': 'hidden field', 'State_1': 'hidden field', 'County': 'hidden field', 'Zip': 'hidden field', 'Country': 'hidden field', 'Source': 'hidden field', });
lyr_LAX_21.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'header label - always visible', 'CAT1': 'hidden field', 'CAT2': 'hidden field', 'CAT3': 'hidden field', 'SOURCE': 'hidden field', 'LMS_ID': 'hidden field', 'DESCRIPTIO': 'hidden field', 'DATE_UPDAT': 'hidden field', 'Shapearea': 'hidden field', 'Shapelen': 'hidden field', });
lyr_BUR_22.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAME': 'header label - always visible', 'CAT1': 'hidden field', 'CAT2': 'hidden field', 'CAT3': 'hidden field', 'SOURCE': 'hidden field', 'LMS_ID': 'hidden field', 'DESCRIPTIO': 'hidden field', 'DATE_UPDAT': 'hidden field', 'Shapearea': 'hidden field', 'Shapelen': 'hidden field', });
lyr_BUR_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});