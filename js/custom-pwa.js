//这个文件方便脚本批量替换js自定义
(function (url, id) {
  var _paq = [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  _paq.push(['setTrackerUrl', url + 'matomo.php']);
  _paq.push(['setSiteId', id]);
  var g = document.createElement('script');
  g.type = 'text/javascript';
  g.async = true;
  g.defer = true;
  g.src = url + 'matomo.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(g, s);
  window.pwaEventTrack = function (name, value) {
    _paq.push(['trackEvent', 'PWA事件', name, value]);
  };
})('https://matomo.diudie.com/', '40');
