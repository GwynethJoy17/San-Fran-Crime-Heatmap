var map = L.map('mapid').setView([38.6270, -90.1994], 13);
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

var marker = L.marker([38.6450677978642, -90.26170132181247]).addTo(map);
marker.bindPopup("Drunken Fish - Central West End").openPopup();

var marker = L.marker([38.62990709219426, -90.19214815573241]).addTo(map);
marker.bindPopup("Sauce on the Side").openPopup();

var marker = L.marker([38.60842617075752, -90.20984355439138]).addTo(map);
marker.bindPopup("John D. McGurks Irish Pub and Garden").openPopup();

var marker = L.marker([38.60132854215099, -90.24214614446257]).addTo(map);
marker.bindPopup("Rooster").openPopup();

var marker = L.marker([38.63251291876637, -90.19925077733251]).addTo(map);
marker.bindPopup("Medina Mediterranean Grill").openPopup();
