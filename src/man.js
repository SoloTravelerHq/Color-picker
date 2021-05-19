function getStyle(id){
    var rgb = getComputedStyle(id,null)['background-color'].split(',');//获取标签颜色属性值
    var r = parseInt(rgb[0].split('(')[1]);
    var g = parseInt(rgb[1]);
    var b = parseInt(rgb[2].split(')')[0]);
    var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);//rgb转换为HEX
    document.getElementById('getColor').value = hex;
    document.getElementById('displayColor').setAttribute("style","background-color: " + hex);
 }