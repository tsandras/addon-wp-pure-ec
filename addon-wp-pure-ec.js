jQuery.noConflict();
jQuery(window).load(function () {
  
  var $container = jQuery(".isotope_init");
  $container.isotope({
    itemSelector: ".portfolio_item",
    filter: ".optionset"
  });
  
  var url = window.location.href, idx = url.indexOf("#");
  var hash = idx != -1 ? url.substring(idx+1) : "";
  var filter = jQuery("ul").find("[data-option-value='."+hash+"']");
  
  if (filter.length > 0 && hash != "filter") {
    var filter = jQuery("ul").find("[data-option-value='."+hash+"']");
    var filterValue = "."+hash;
    jQuery(".optionset li").removeClass("selected");
    jQuery(filter).parent().addClass("selected");
    $container.isotope({ filter: filterValue });
  } else {
    jQuery(".optionset li").eq(2).find("a").click();
    $container.isotope( "once", "layoutComplete", function(){ jQuery(".isotope_preloader").removeClass("isotope_preloader")} ); 
  }
});
