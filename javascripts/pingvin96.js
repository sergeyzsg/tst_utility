LazyLoad=function(x,h){function r(b,a){var c=h.createElement(b),d;for(d in a)a.hasOwnProperty(d)&&c.setAttribute(d,a[d]);return c}function k(b){var a=i[b],c,d;if(a){c=a.callback;d=a.urls;d.shift();l=0;if(!d.length){c&&c.call(a.context,a.obj);i[b]=null;j[b].length&&m(b)}}}function w(){if(!e){var b=navigator.userAgent;e={async:h.createElement("script").async===true};(e.webkit=/AppleWebKit\//.test(b))||(e.ie=/MSIE/.test(b))||(e.opera=/Opera/.test(b))||(e.gecko=/Gecko\//.test(b))||(e.unknown=true)}}function m(b,
a,c,d,s){var n=function(){k(b)},o=b==="css",f,g,p;w();if(a){a=typeof a==="string"?[a]:a.concat();if(o||e.async||e.gecko||e.opera)j[b].push({urls:a,callback:c,obj:d,context:s});else{f=0;for(g=a.length;f<g;++f)j[b].push({urls:[a[f]],callback:f===g-1?c:null,obj:d,context:s})}}if(!(i[b]||!(p=i[b]=j[b].shift()))){q||(q=h.head||h.getElementsByTagName("head")[0]);a=p.urls;f=0;for(g=a.length;f<g;++f){c=a[f];if(o)c=r("link",{charset:"utf-8","class":"lazyload",href:c,rel:"stylesheet",type:"text/css"});else{c=
r("script",{charset:"utf-8","class":"lazyload",src:c});c.async=false}if(e.ie)c.onreadystatechange=function(){var t=this.readyState;if(t==="loaded"||t==="complete"){this.onreadystatechange=null;n()}};else if(o&&(e.gecko||e.webkit))if(e.webkit){p.urls[f]=c.href;u()}else setTimeout(n,50*g);else c.onload=c.onerror=n;q.appendChild(c)}}}function u(){var b=i.css,a;if(b){for(a=v.length;a&&--a;)if(v[a].href===b.urls[0]){k("css");break}l+=1;if(b)l<200?setTimeout(u,50):k("css")}}var e,q,i={},l=0,j={css:[],js:[]},
v=h.styleSheets;return{css:function(b,a,c,d){m("css",b,a,c,d)},js:function(b,a,c,d){m("js",b,a,c,d)}}}(this,this.document);

LazyLoad.css('http://sergeyzsg.github.io/buissnes_utility/stylesheets/pingvin96.css', function () {
});

function log() {
  if (console) {
    console.log.apply(console, arguments);
  }
}

////
$(function() {
// Begin

$('body').on('click', '.cart.select_variant', function() {
  yaCounter27482889.reachGoal('Cart_Click_Product_List');
});

$('body').on('click', '.cart:not(.select_variant)', function() {
  yaCounter27482889.reachGoal('Drop_In_Cart');
});

$('.block_info .b_pr_tabs').before(
'<div class="clear"></div>' +
'<div class="" style="padding: 0; margin: 0; padding-bottom: 10px;">' +
  '<button class="js-ask-question mybtn mybtn-bblue"><span>Задать вопрос</span></button>' +
'</div>'
);

$('.js-ask-question').click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  $("a.feedback").first().click();
});

var contestText = '<div class="wrapper_main_block" style="text-align: center; padding: 1em;"><span style="color: red">Внимание</span> конкурс! Получи Каймано по оптовой цене!!! <a href="https://vk.com/caimano96?w=wall-77800706_332">Условия здесь. Жми!</a></div>';
$('#header').after(contestText);

// End
});
