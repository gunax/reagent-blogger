["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/math/size.js"],"~:js","goog.provide(\"goog.math.Size\");\n/**\n * @struct\n * @constructor\n * @param {number} width\n * @param {number} height\n */\ngoog.math.Size = function(width, height) {\n  /** @type {number} */ this.width = width;\n  /** @type {number} */ this.height = height;\n};\n/**\n * @param {goog.math.Size} a\n * @param {goog.math.Size} b\n * @return {boolean}\n */\ngoog.math.Size.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.width == b.width && a.height == b.height;\n};\n/**\n * @return {!goog.math.Size}\n */\ngoog.math.Size.prototype.clone = function() {\n  return new goog.math.Size(this.width, this.height);\n};\nif (goog.DEBUG) {\n  /**\n   * @return {string}\n   * @override\n   */\n  goog.math.Size.prototype.toString = function() {\n    return \"(\" + this.width + \" x \" + this.height + \")\";\n  };\n}\n/**\n * @return {number}\n */\ngoog.math.Size.prototype.getLongest = function() {\n  return Math.max(this.width, this.height);\n};\n/**\n * @return {number}\n */\ngoog.math.Size.prototype.getShortest = function() {\n  return Math.min(this.width, this.height);\n};\n/**\n * @return {number}\n */\ngoog.math.Size.prototype.area = function() {\n  return this.width * this.height;\n};\n/**\n * @return {number}\n */\ngoog.math.Size.prototype.perimeter = function() {\n  return (this.width + this.height) * 2;\n};\n/**\n * @return {number}\n */\ngoog.math.Size.prototype.aspectRatio = function() {\n  return this.width / this.height;\n};\n/**\n * @return {boolean}\n */\ngoog.math.Size.prototype.isEmpty = function() {\n  return !this.area();\n};\n/**\n * @return {!goog.math.Size}\n */\ngoog.math.Size.prototype.ceil = function() {\n  this.width = Math.ceil(this.width);\n  this.height = Math.ceil(this.height);\n  return this;\n};\n/**\n * @param {!goog.math.Size} target\n * @return {boolean}\n */\ngoog.math.Size.prototype.fitsInside = function(target) {\n  return this.width <= target.width && this.height <= target.height;\n};\n/**\n * @return {!goog.math.Size}\n */\ngoog.math.Size.prototype.floor = function() {\n  this.width = Math.floor(this.width);\n  this.height = Math.floor(this.height);\n  return this;\n};\n/**\n * @return {!goog.math.Size}\n */\ngoog.math.Size.prototype.round = function() {\n  this.width = Math.round(this.width);\n  this.height = Math.round(this.height);\n  return this;\n};\n/**\n * @param {number} sx\n * @param {number=} opt_sy\n * @return {!goog.math.Size}\n */\ngoog.math.Size.prototype.scale = function(sx, opt_sy) {\n  var sy = goog.isNumber(opt_sy) ? opt_sy : sx;\n  this.width *= sx;\n  this.height *= sy;\n  return this;\n};\n/**\n * @param {!goog.math.Size} target\n * @return {!goog.math.Size}\n */\ngoog.math.Size.prototype.scaleToCover = function(target) {\n  var s = this.aspectRatio() <= target.aspectRatio() ? target.width / this.width : target.height / this.height;\n  return this.scale(s);\n};\n/**\n * @param {!goog.math.Size} target\n * @return {!goog.math.Size}\n */\ngoog.math.Size.prototype.scaleToFit = function(target) {\n  var s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;\n  return this.scale(s);\n};\n","~:source","// Copyright 2007 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview A utility class for representing two-dimensional sizes.\n * @author brenneman@google.com (Shawn Brenneman)\n */\n\n\ngoog.provide('goog.math.Size');\n\n\n\n/**\n * Class for representing sizes consisting of a width and height. Undefined\n * width and height support is deprecated and results in compiler warning.\n * @param {number} width Width.\n * @param {number} height Height.\n * @struct\n * @constructor\n */\ngoog.math.Size = function(width, height) {\n  /**\n   * Width\n   * @type {number}\n   */\n  this.width = width;\n\n  /**\n   * Height\n   * @type {number}\n   */\n  this.height = height;\n};\n\n\n/**\n * Compares sizes for equality.\n * @param {goog.math.Size} a A Size.\n * @param {goog.math.Size} b A Size.\n * @return {boolean} True iff the sizes have equal widths and equal\n *     heights, or if both are null.\n */\ngoog.math.Size.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.width == b.width && a.height == b.height;\n};\n\n\n/**\n * @return {!goog.math.Size} A new copy of the Size.\n */\ngoog.math.Size.prototype.clone = function() {\n  return new goog.math.Size(this.width, this.height);\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a nice string representing size.\n   * @return {string} In the form (50 x 73).\n   * @override\n   */\n  goog.math.Size.prototype.toString = function() {\n    return '(' + this.width + ' x ' + this.height + ')';\n  };\n}\n\n\n/**\n * @return {number} The longer of the two dimensions in the size.\n */\ngoog.math.Size.prototype.getLongest = function() {\n  return Math.max(this.width, this.height);\n};\n\n\n/**\n * @return {number} The shorter of the two dimensions in the size.\n */\ngoog.math.Size.prototype.getShortest = function() {\n  return Math.min(this.width, this.height);\n};\n\n\n/**\n * @return {number} The area of the size (width * height).\n */\ngoog.math.Size.prototype.area = function() {\n  return this.width * this.height;\n};\n\n\n/**\n * @return {number} The perimeter of the size (width + height) * 2.\n */\ngoog.math.Size.prototype.perimeter = function() {\n  return (this.width + this.height) * 2;\n};\n\n\n/**\n * @return {number} The ratio of the size's width to its height.\n */\ngoog.math.Size.prototype.aspectRatio = function() {\n  return this.width / this.height;\n};\n\n\n/**\n * @return {boolean} True if the size has zero area, false if both dimensions\n *     are non-zero numbers.\n */\ngoog.math.Size.prototype.isEmpty = function() {\n  return !this.area();\n};\n\n\n/**\n * Clamps the width and height parameters upward to integer values.\n * @return {!goog.math.Size} This size with ceil'd components.\n */\ngoog.math.Size.prototype.ceil = function() {\n  this.width = Math.ceil(this.width);\n  this.height = Math.ceil(this.height);\n  return this;\n};\n\n\n/**\n * @param {!goog.math.Size} target The target size.\n * @return {boolean} True if this Size is the same size or smaller than the\n *     target size in both dimensions.\n */\ngoog.math.Size.prototype.fitsInside = function(target) {\n  return this.width <= target.width && this.height <= target.height;\n};\n\n\n/**\n * Clamps the width and height parameters downward to integer values.\n * @return {!goog.math.Size} This size with floored components.\n */\ngoog.math.Size.prototype.floor = function() {\n  this.width = Math.floor(this.width);\n  this.height = Math.floor(this.height);\n  return this;\n};\n\n\n/**\n * Rounds the width and height parameters to integer values.\n * @return {!goog.math.Size} This size with rounded components.\n */\ngoog.math.Size.prototype.round = function() {\n  this.width = Math.round(this.width);\n  this.height = Math.round(this.height);\n  return this;\n};\n\n\n/**\n * Scales this size by the given scale factors. The width and height are scaled\n * by `sx` and `opt_sy` respectively.  If `opt_sy` is not\n * given, then `sx` is used for both the width and height.\n * @param {number} sx The scale factor to use for the width.\n * @param {number=} opt_sy The scale factor to use for the height.\n * @return {!goog.math.Size} This Size object after scaling.\n */\ngoog.math.Size.prototype.scale = function(sx, opt_sy) {\n  var sy = goog.isNumber(opt_sy) ? opt_sy : sx;\n  this.width *= sx;\n  this.height *= sy;\n  return this;\n};\n\n\n/**\n * Uniformly scales the size to perfectly cover the dimensions of a given size.\n * If the size is already larger than the target, it will be scaled down to the\n * minimum size at which it still covers the entire target. The original aspect\n * ratio will be preserved.\n *\n * This function assumes that both Sizes contain strictly positive dimensions.\n * @param {!goog.math.Size} target The target size.\n * @return {!goog.math.Size} This Size object, after optional scaling.\n */\ngoog.math.Size.prototype.scaleToCover = function(target) {\n  var s = this.aspectRatio() <= target.aspectRatio() ?\n      target.width / this.width :\n      target.height / this.height;\n\n  return this.scale(s);\n};\n\n\n/**\n * Uniformly scales the size to fit inside the dimensions of a given size. The\n * original aspect ratio will be preserved.\n *\n * This function assumes that both Sizes contain strictly positive dimensions.\n * @param {!goog.math.Size} target The target size.\n * @return {!goog.math.Size} This Size object, after optional scaling.\n */\ngoog.math.Size.prototype.scaleToFit = function(target) {\n  var s = this.aspectRatio() > target.aspectRatio() ?\n      target.width / this.width :\n      target.height / this.height;\n\n  return this.scale(s);\n};\n","~:compiled-at",1567957500041,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.math.size.js\",\n\"lineCount\":135,\n\"mappings\":\"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\",\n\"sources\":[\"goog/math/size.js\"],\n\"sourcesContent\":[\"// Copyright 2007 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview A utility class for representing two-dimensional sizes.\\n * @author brenneman@google.com (Shawn Brenneman)\\n */\\n\\n\\ngoog.provide('goog.math.Size');\\n\\n\\n\\n/**\\n * Class for representing sizes consisting of a width and height. Undefined\\n * width and height support is deprecated and results in compiler warning.\\n * @param {number} width Width.\\n * @param {number} height Height.\\n * @struct\\n * @constructor\\n */\\ngoog.math.Size = function(width, height) {\\n  /**\\n   * Width\\n   * @type {number}\\n   */\\n  this.width = width;\\n\\n  /**\\n   * Height\\n   * @type {number}\\n   */\\n  this.height = height;\\n};\\n\\n\\n/**\\n * Compares sizes for equality.\\n * @param {goog.math.Size} a A Size.\\n * @param {goog.math.Size} b A Size.\\n * @return {boolean} True iff the sizes have equal widths and equal\\n *     heights, or if both are null.\\n */\\ngoog.math.Size.equals = function(a, b) {\\n  if (a == b) {\\n    return true;\\n  }\\n  if (!a || !b) {\\n    return false;\\n  }\\n  return a.width == b.width && a.height == b.height;\\n};\\n\\n\\n/**\\n * @return {!goog.math.Size} A new copy of the Size.\\n */\\ngoog.math.Size.prototype.clone = function() {\\n  return new goog.math.Size(this.width, this.height);\\n};\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a nice string representing size.\\n   * @return {string} In the form (50 x 73).\\n   * @override\\n   */\\n  goog.math.Size.prototype.toString = function() {\\n    return '(' + this.width + ' x ' + this.height + ')';\\n  };\\n}\\n\\n\\n/**\\n * @return {number} The longer of the two dimensions in the size.\\n */\\ngoog.math.Size.prototype.getLongest = function() {\\n  return Math.max(this.width, this.height);\\n};\\n\\n\\n/**\\n * @return {number} The shorter of the two dimensions in the size.\\n */\\ngoog.math.Size.prototype.getShortest = function() {\\n  return Math.min(this.width, this.height);\\n};\\n\\n\\n/**\\n * @return {number} The area of the size (width * height).\\n */\\ngoog.math.Size.prototype.area = function() {\\n  return this.width * this.height;\\n};\\n\\n\\n/**\\n * @return {number} The perimeter of the size (width + height) * 2.\\n */\\ngoog.math.Size.prototype.perimeter = function() {\\n  return (this.width + this.height) * 2;\\n};\\n\\n\\n/**\\n * @return {number} The ratio of the size's width to its height.\\n */\\ngoog.math.Size.prototype.aspectRatio = function() {\\n  return this.width / this.height;\\n};\\n\\n\\n/**\\n * @return {boolean} True if the size has zero area, false if both dimensions\\n *     are non-zero numbers.\\n */\\ngoog.math.Size.prototype.isEmpty = function() {\\n  return !this.area();\\n};\\n\\n\\n/**\\n * Clamps the width and height parameters upward to integer values.\\n * @return {!goog.math.Size} This size with ceil'd components.\\n */\\ngoog.math.Size.prototype.ceil = function() {\\n  this.width = Math.ceil(this.width);\\n  this.height = Math.ceil(this.height);\\n  return this;\\n};\\n\\n\\n/**\\n * @param {!goog.math.Size} target The target size.\\n * @return {boolean} True if this Size is the same size or smaller than the\\n *     target size in both dimensions.\\n */\\ngoog.math.Size.prototype.fitsInside = function(target) {\\n  return this.width <= target.width && this.height <= target.height;\\n};\\n\\n\\n/**\\n * Clamps the width and height parameters downward to integer values.\\n * @return {!goog.math.Size} This size with floored components.\\n */\\ngoog.math.Size.prototype.floor = function() {\\n  this.width = Math.floor(this.width);\\n  this.height = Math.floor(this.height);\\n  return this;\\n};\\n\\n\\n/**\\n * Rounds the width and height parameters to integer values.\\n * @return {!goog.math.Size} This size with rounded components.\\n */\\ngoog.math.Size.prototype.round = function() {\\n  this.width = Math.round(this.width);\\n  this.height = Math.round(this.height);\\n  return this;\\n};\\n\\n\\n/**\\n * Scales this size by the given scale factors. The width and height are scaled\\n * by `sx` and `opt_sy` respectively.  If `opt_sy` is not\\n * given, then `sx` is used for both the width and height.\\n * @param {number} sx The scale factor to use for the width.\\n * @param {number=} opt_sy The scale factor to use for the height.\\n * @return {!goog.math.Size} This Size object after scaling.\\n */\\ngoog.math.Size.prototype.scale = function(sx, opt_sy) {\\n  var sy = goog.isNumber(opt_sy) ? opt_sy : sx;\\n  this.width *= sx;\\n  this.height *= sy;\\n  return this;\\n};\\n\\n\\n/**\\n * Uniformly scales the size to perfectly cover the dimensions of a given size.\\n * If the size is already larger than the target, it will be scaled down to the\\n * minimum size at which it still covers the entire target. The original aspect\\n * ratio will be preserved.\\n *\\n * This function assumes that both Sizes contain strictly positive dimensions.\\n * @param {!goog.math.Size} target The target size.\\n * @return {!goog.math.Size} This Size object, after optional scaling.\\n */\\ngoog.math.Size.prototype.scaleToCover = function(target) {\\n  var s = this.aspectRatio() <= target.aspectRatio() ?\\n      target.width / this.width :\\n      target.height / this.height;\\n\\n  return this.scale(s);\\n};\\n\\n\\n/**\\n * Uniformly scales the size to fit inside the dimensions of a given size. The\\n * original aspect ratio will be preserved.\\n *\\n * This function assumes that both Sizes contain strictly positive dimensions.\\n * @param {!goog.math.Size} target The target size.\\n * @return {!goog.math.Size} This Size object, after optional scaling.\\n */\\ngoog.math.Size.prototype.scaleToFit = function(target) {\\n  var s = this.aspectRatio() > target.aspectRatio() ?\\n      target.width / this.width :\\n      target.height / this.height;\\n\\n  return this.scale(s);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"math\",\"Size\",\"goog.math.Size\",\"width\",\"height\",\"equals\",\"goog.math.Size.equals\",\"a\",\"b\",\"prototype\",\"clone\",\"goog.math.Size.prototype.clone\",\"DEBUG\",\"toString\",\"goog.math.Size.prototype.toString\",\"getLongest\",\"goog.math.Size.prototype.getLongest\",\"Math\",\"max\",\"getShortest\",\"goog.math.Size.prototype.getShortest\",\"min\",\"area\",\"goog.math.Size.prototype.area\",\"perimeter\",\"goog.math.Size.prototype.perimeter\",\"aspectRatio\",\"goog.math.Size.prototype.aspectRatio\",\"isEmpty\",\"goog.math.Size.prototype.isEmpty\",\"ceil\",\"goog.math.Size.prototype.ceil\",\"fitsInside\",\"goog.math.Size.prototype.fitsInside\",\"target\",\"floor\",\"goog.math.Size.prototype.floor\",\"round\",\"goog.math.Size.prototype.round\",\"scale\",\"goog.math.Size.prototype.scale\",\"sx\",\"opt_sy\",\"sy\",\"isNumber\",\"scaleToCover\",\"goog.math.Size.prototype.scaleToCover\",\"s\",\"scaleToFit\",\"goog.math.Size.prototype.scaleToFit\"]\n}\n"]