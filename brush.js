var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  // Contributed by Patrick Webster
  // http://patrickwebster.blogspot.com/2009/04/javafx-brush-for-syntaxhighlighter.html
  var datatypes = 'Boolean Byte Character Double Duration ' + 'Float Integer Long Number Short String Void';

  var keywords = 'abstract after and as assert at before bind bound break catch class ' + 'continue def delete else exclusive extends false finally first for from ' + 'function if import in indexof init insert instanceof into inverse last ' + 'lazy mixin mod nativearray new not null on or override package postinit ' + 'protected public public-init public-read replace return reverse sizeof ' + 'step super then this throw true try tween typeof var where while with ' + 'attribute let private readonly static trigger';

  this.regexList = [
    {
      regex: regexLib.singleLineCComments,
      css: 'comments'
    },
    {
      regex: regexLib.multiLineCComments,
      css: 'comments'
    },
    {
      regex: regexLib.singleQuotedString,
      css: 'string'
    },
    {
      regex: regexLib.doubleQuotedString,
      css: 'string'
    },
    {
      regex: /(-?\.?)(\b(\d*\.?\d+|\d+\.?\d*)(e[+-]?\d+)?|0x[a-f\d]+)\b\.?/gi,
      css: 'color2'
    },
    {
      regex: new RegExp(this.getKeywords(datatypes), 'gm'),
      css: 'variable'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    }
	];
  this.forHtmlScript(regexLib.aspScriptTags);
};

Brush.prototype = new BrushBase();
Brush.aliases = ['jfx', 'javafx'];
module.exports = Brush;