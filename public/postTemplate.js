(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"post\">\r\n  <div class=\"post-contents\">\r\n    <div class=\"post-image-container\">\r\n      <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"imageSrc") || (depth0 != null ? lookupProperty(depth0,"imageSrc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageSrc","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":27}}}) : helper)))
    + ">\r\n    </div>\r\n    <div class=\"post-text-container\">\r\n      <div href=\"#\" class=\"post-text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"imageText") || (depth0 != null ? lookupProperty(depth0,"imageText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageText","hash":{},"data":data,"loc":{"start":{"line":7,"column":38},"end":{"line":7,"column":51}}}) : helper)))
    + "</div>\r\n      <div class=\"post-info-containter\">\r\n        <p hidden class=\"like_num\">0</p>\r\n        <p hidden class=\"dislike_num\">0</p>\r\n        <span href=\"#\" class=\"post-username\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"username") || (depth0 != null ? lookupProperty(depth0,"username") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data,"loc":{"start":{"line":11,"column":45},"end":{"line":11,"column":57}}}) : helper)))
    + "</span> <button type=\"button\" id=\"like-button\"\r\n          class=\"like-button\">Likes: "
    + alias4(((helper = (helper = lookupProperty(helpers,"likes") || (depth0 != null ? lookupProperty(depth0,"likes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"likes","hash":{},"data":data,"loc":{"start":{"line":12,"column":37},"end":{"line":12,"column":46}}}) : helper)))
    + "</button> <button type=\"button\" id=\"dislike-button\"\r\n          class=\"dislike-button\">Dislikes: "
    + alias4(((helper = (helper = lookupProperty(helpers,"dislikes") || (depth0 != null ? lookupProperty(depth0,"dislikes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dislikes","hash":{},"data":data,"loc":{"start":{"line":13,"column":43},"end":{"line":13,"column":55}}}) : helper)))
    + "</button><span class=\"post-date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":13,"column":88},"end":{"line":13,"column":96}}}) : helper)))
    + "</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});
})();