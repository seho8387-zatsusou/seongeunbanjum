window.onload = function initMap() {
    var LAT = 34.6144013;
    var LNG = 127.7212085;

    var map = new naver.maps.Map('naver-map', {
        center: new naver.maps.LatLng(LAT, LNG),
        zoom: 17,
        mapTypeControl: false,
        scaleControl: false,
        logoControl: true,
        mapDataControl: false
    });

    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(LAT, LNG),
        map: map,
        title: '성은반점'
    });

    var infoWindow = new naver.maps.InfoWindow({
        content: [
            '<div style="padding:14px 16px;font-family:\'Noto Sans KR\',sans-serif;min-width:160px;">',
            '  <div style="font-size:14px;font-weight:500;margin-bottom:4px;">성은반점</div>',
            '  <div style="font-size:12px;color:#888;">전라남도 여수시 돌산읍 남외길 21-1</div>',
            '  <div style="font-size:12px;color:#888;margin-top:2px;">061-644-2223</div>',
            '</div>'
        ].join(''),
        borderWidth: 1,
        borderColor: '#e2e2e2',
        disableAnchor: false,
        backgroundColor: '#fff'
    });

    infoWindow.open(map, marker);

    naver.maps.Event.addListener(marker, 'click', function () {
        if (infoWindow.getMap()) {
            infoWindow.close();
        } else {
            infoWindow.open(map, marker);
        }
    });
};
