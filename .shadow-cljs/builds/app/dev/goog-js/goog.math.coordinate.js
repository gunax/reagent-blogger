["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/math/coordinate.js"],"~:js","goog.provide(\"goog.math.Coordinate\");\ngoog.require(\"goog.math\");\n/**\n * @struct\n * @constructor\n * @param {number=} opt_x\n * @param {number=} opt_y\n */\ngoog.math.Coordinate = function(opt_x, opt_y) {\n  /** @type {number} */ this.x = goog.isDef(opt_x) ? opt_x : 0;\n  /** @type {number} */ this.y = goog.isDef(opt_y) ? opt_y : 0;\n};\n/**\n * @return {!goog.math.Coordinate}\n */\ngoog.math.Coordinate.prototype.clone = function() {\n  return new goog.math.Coordinate(this.x, this.y);\n};\nif (goog.DEBUG) {\n  /**\n   * @return {string}\n   * @override\n   */\n  goog.math.Coordinate.prototype.toString = function() {\n    return \"(\" + this.x + \", \" + this.y + \")\";\n  };\n}\n/**\n * @param {*} other\n * @return {boolean}\n */\ngoog.math.Coordinate.prototype.equals = function(other) {\n  return other instanceof goog.math.Coordinate && goog.math.Coordinate.equals(this, other);\n};\n/**\n * @param {goog.math.Coordinate} a\n * @param {goog.math.Coordinate} b\n * @return {boolean}\n */\ngoog.math.Coordinate.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.x == b.x && a.y == b.y;\n};\n/**\n * @param {!goog.math.Coordinate} a\n * @param {!goog.math.Coordinate} b\n * @return {number}\n */\ngoog.math.Coordinate.distance = function(a, b) {\n  var dx = a.x - b.x;\n  var dy = a.y - b.y;\n  return Math.sqrt(dx * dx + dy * dy);\n};\n/**\n * @param {!goog.math.Coordinate} a\n * @return {number}\n */\ngoog.math.Coordinate.magnitude = function(a) {\n  return Math.sqrt(a.x * a.x + a.y * a.y);\n};\n/**\n * @param {!goog.math.Coordinate} a\n * @return {number}\n */\ngoog.math.Coordinate.azimuth = function(a) {\n  return goog.math.angle(0, 0, a.x, a.y);\n};\n/**\n * @param {!goog.math.Coordinate} a\n * @param {!goog.math.Coordinate} b\n * @return {number}\n */\ngoog.math.Coordinate.squaredDistance = function(a, b) {\n  var dx = a.x - b.x;\n  var dy = a.y - b.y;\n  return dx * dx + dy * dy;\n};\n/**\n * @param {!goog.math.Coordinate} a\n * @param {!goog.math.Coordinate} b\n * @return {!goog.math.Coordinate}\n */\ngoog.math.Coordinate.difference = function(a, b) {\n  return new goog.math.Coordinate(a.x - b.x, a.y - b.y);\n};\n/**\n * @param {!goog.math.Coordinate} a\n * @param {!goog.math.Coordinate} b\n * @return {!goog.math.Coordinate}\n */\ngoog.math.Coordinate.sum = function(a, b) {\n  return new goog.math.Coordinate(a.x + b.x, a.y + b.y);\n};\n/**\n * @return {!goog.math.Coordinate}\n */\ngoog.math.Coordinate.prototype.ceil = function() {\n  this.x = Math.ceil(this.x);\n  this.y = Math.ceil(this.y);\n  return this;\n};\n/**\n * @return {!goog.math.Coordinate}\n */\ngoog.math.Coordinate.prototype.floor = function() {\n  this.x = Math.floor(this.x);\n  this.y = Math.floor(this.y);\n  return this;\n};\n/**\n * @return {!goog.math.Coordinate}\n */\ngoog.math.Coordinate.prototype.round = function() {\n  this.x = Math.round(this.x);\n  this.y = Math.round(this.y);\n  return this;\n};\n/**\n * @param {(number|goog.math.Coordinate)} tx\n * @param {number=} opt_ty\n * @return {!goog.math.Coordinate}\n */\ngoog.math.Coordinate.prototype.translate = function(tx, opt_ty) {\n  if (tx instanceof goog.math.Coordinate) {\n    this.x += tx.x;\n    this.y += tx.y;\n  } else {\n    this.x += Number(tx);\n    if (goog.isNumber(opt_ty)) {\n      this.y += opt_ty;\n    }\n  }\n  return this;\n};\n/**\n * @param {number} sx\n * @param {number=} opt_sy\n * @return {!goog.math.Coordinate}\n */\ngoog.math.Coordinate.prototype.scale = function(sx, opt_sy) {\n  var sy = goog.isNumber(opt_sy) ? opt_sy : sx;\n  this.x *= sx;\n  this.y *= sy;\n  return this;\n};\n/**\n * @param {number} radians\n * @param {!goog.math.Coordinate=} opt_center\n */\ngoog.math.Coordinate.prototype.rotateRadians = function(radians, opt_center) {\n  var center = opt_center || new goog.math.Coordinate(0, 0);\n  var x = this.x;\n  var y = this.y;\n  var cos = Math.cos(radians);\n  var sin = Math.sin(radians);\n  this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;\n  this.y = (x - center.x) * sin + (y - center.y) * cos + center.y;\n};\n/**\n * @param {number} degrees\n * @param {!goog.math.Coordinate=} opt_center\n */\ngoog.math.Coordinate.prototype.rotateDegrees = function(degrees, opt_center) {\n  this.rotateRadians(goog.math.toRadians(degrees), opt_center);\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview A utility class for representing two-dimensional positions.\n */\n\n\ngoog.provide('goog.math.Coordinate');\n\ngoog.require('goog.math');\n\n\n\n/**\n * Class for representing coordinates and positions.\n * @param {number=} opt_x Left, defaults to 0.\n * @param {number=} opt_y Top, defaults to 0.\n * @struct\n * @constructor\n */\ngoog.math.Coordinate = function(opt_x, opt_y) {\n  /**\n   * X-value\n   * @type {number}\n   */\n  this.x = goog.isDef(opt_x) ? opt_x : 0;\n\n  /**\n   * Y-value\n   * @type {number}\n   */\n  this.y = goog.isDef(opt_y) ? opt_y : 0;\n};\n\n\n/**\n * Returns a new copy of the coordinate.\n * @return {!goog.math.Coordinate} A clone of this coordinate.\n */\ngoog.math.Coordinate.prototype.clone = function() {\n  return new goog.math.Coordinate(this.x, this.y);\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a nice string representing the coordinate.\n   * @return {string} In the form (50, 73).\n   * @override\n   */\n  goog.math.Coordinate.prototype.toString = function() {\n    return '(' + this.x + ', ' + this.y + ')';\n  };\n}\n\n\n/**\n * Returns whether the specified value is equal to this coordinate.\n * @param {*} other Some other value.\n * @return {boolean} Whether the specified value is equal to this coordinate.\n */\ngoog.math.Coordinate.prototype.equals = function(other) {\n  return other instanceof goog.math.Coordinate &&\n      goog.math.Coordinate.equals(this, other);\n};\n\n\n/**\n * Compares coordinates for equality.\n * @param {goog.math.Coordinate} a A Coordinate.\n * @param {goog.math.Coordinate} b A Coordinate.\n * @return {boolean} True iff the coordinates are equal, or if both are null.\n */\ngoog.math.Coordinate.equals = function(a, b) {\n  if (a == b) {\n    return true;\n  }\n  if (!a || !b) {\n    return false;\n  }\n  return a.x == b.x && a.y == b.y;\n};\n\n\n/**\n * Returns the distance between two coordinates.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @param {!goog.math.Coordinate} b A Coordinate.\n * @return {number} The distance between `a` and `b`.\n */\ngoog.math.Coordinate.distance = function(a, b) {\n  var dx = a.x - b.x;\n  var dy = a.y - b.y;\n  return Math.sqrt(dx * dx + dy * dy);\n};\n\n\n/**\n * Returns the magnitude of a coordinate.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @return {number} The distance between the origin and `a`.\n */\ngoog.math.Coordinate.magnitude = function(a) {\n  return Math.sqrt(a.x * a.x + a.y * a.y);\n};\n\n\n/**\n * Returns the angle from the origin to a coordinate.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @return {number} The angle, in degrees, clockwise from the positive X\n *     axis to `a`.\n */\ngoog.math.Coordinate.azimuth = function(a) {\n  return goog.math.angle(0, 0, a.x, a.y);\n};\n\n\n/**\n * Returns the squared distance between two coordinates. Squared distances can\n * be used for comparisons when the actual value is not required.\n *\n * Performance note: eliminating the square root is an optimization often used\n * in lower-level languages, but the speed difference is not nearly as\n * pronounced in JavaScript (only a few percent.)\n *\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @param {!goog.math.Coordinate} b A Coordinate.\n * @return {number} The squared distance between `a` and `b`.\n */\ngoog.math.Coordinate.squaredDistance = function(a, b) {\n  var dx = a.x - b.x;\n  var dy = a.y - b.y;\n  return dx * dx + dy * dy;\n};\n\n\n/**\n * Returns the difference between two coordinates as a new\n * goog.math.Coordinate.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @param {!goog.math.Coordinate} b A Coordinate.\n * @return {!goog.math.Coordinate} A Coordinate representing the difference\n *     between `a` and `b`.\n */\ngoog.math.Coordinate.difference = function(a, b) {\n  return new goog.math.Coordinate(a.x - b.x, a.y - b.y);\n};\n\n\n/**\n * Returns the sum of two coordinates as a new goog.math.Coordinate.\n * @param {!goog.math.Coordinate} a A Coordinate.\n * @param {!goog.math.Coordinate} b A Coordinate.\n * @return {!goog.math.Coordinate} A Coordinate representing the sum of the two\n *     coordinates.\n */\ngoog.math.Coordinate.sum = function(a, b) {\n  return new goog.math.Coordinate(a.x + b.x, a.y + b.y);\n};\n\n\n/**\n * Rounds the x and y fields to the next larger integer values.\n * @return {!goog.math.Coordinate} This coordinate with ceil'd fields.\n */\ngoog.math.Coordinate.prototype.ceil = function() {\n  this.x = Math.ceil(this.x);\n  this.y = Math.ceil(this.y);\n  return this;\n};\n\n\n/**\n * Rounds the x and y fields to the next smaller integer values.\n * @return {!goog.math.Coordinate} This coordinate with floored fields.\n */\ngoog.math.Coordinate.prototype.floor = function() {\n  this.x = Math.floor(this.x);\n  this.y = Math.floor(this.y);\n  return this;\n};\n\n\n/**\n * Rounds the x and y fields to the nearest integer values.\n * @return {!goog.math.Coordinate} This coordinate with rounded fields.\n */\ngoog.math.Coordinate.prototype.round = function() {\n  this.x = Math.round(this.x);\n  this.y = Math.round(this.y);\n  return this;\n};\n\n\n/**\n * Translates this box by the given offsets. If a `goog.math.Coordinate`\n * is given, then the x and y values are translated by the coordinate's x and y.\n * Otherwise, x and y are translated by `tx` and `opt_ty`\n * respectively.\n * @param {number|goog.math.Coordinate} tx The value to translate x by or the\n *     the coordinate to translate this coordinate by.\n * @param {number=} opt_ty The value to translate y by.\n * @return {!goog.math.Coordinate} This coordinate after translating.\n */\ngoog.math.Coordinate.prototype.translate = function(tx, opt_ty) {\n  if (tx instanceof goog.math.Coordinate) {\n    this.x += tx.x;\n    this.y += tx.y;\n  } else {\n    this.x += Number(tx);\n    if (goog.isNumber(opt_ty)) {\n      this.y += opt_ty;\n    }\n  }\n  return this;\n};\n\n\n/**\n * Scales this coordinate by the given scale factors. The x and y values are\n * scaled by `sx` and `opt_sy` respectively.  If `opt_sy`\n * is not given, then `sx` is used for both x and y.\n * @param {number} sx The scale factor to use for the x dimension.\n * @param {number=} opt_sy The scale factor to use for the y dimension.\n * @return {!goog.math.Coordinate} This coordinate after scaling.\n */\ngoog.math.Coordinate.prototype.scale = function(sx, opt_sy) {\n  var sy = goog.isNumber(opt_sy) ? opt_sy : sx;\n  this.x *= sx;\n  this.y *= sy;\n  return this;\n};\n\n\n/**\n * Rotates this coordinate clockwise about the origin (or, optionally, the given\n * center) by the given angle, in radians.\n * @param {number} radians The angle by which to rotate this coordinate\n *     clockwise about the given center, in radians.\n * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults\n *     to (0, 0) if not given.\n */\ngoog.math.Coordinate.prototype.rotateRadians = function(radians, opt_center) {\n  var center = opt_center || new goog.math.Coordinate(0, 0);\n\n  var x = this.x;\n  var y = this.y;\n  var cos = Math.cos(radians);\n  var sin = Math.sin(radians);\n\n  this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;\n  this.y = (x - center.x) * sin + (y - center.y) * cos + center.y;\n};\n\n\n/**\n * Rotates this coordinate clockwise about the origin (or, optionally, the given\n * center) by the given angle, in degrees.\n * @param {number} degrees The angle by which to rotate this coordinate\n *     clockwise about the given center, in degrees.\n * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults\n *     to (0, 0) if not given.\n */\ngoog.math.Coordinate.prototype.rotateDegrees = function(degrees, opt_center) {\n  this.rotateRadians(goog.math.toRadians(degrees), opt_center);\n};\n","~:compiled-at",1567957500040,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.math.coordinate.js\",\n\"lineCount\":171,\n\"mappings\":\"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\",\n\"sources\":[\"goog/math/coordinate.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview A utility class for representing two-dimensional positions.\\n */\\n\\n\\ngoog.provide('goog.math.Coordinate');\\n\\ngoog.require('goog.math');\\n\\n\\n\\n/**\\n * Class for representing coordinates and positions.\\n * @param {number=} opt_x Left, defaults to 0.\\n * @param {number=} opt_y Top, defaults to 0.\\n * @struct\\n * @constructor\\n */\\ngoog.math.Coordinate = function(opt_x, opt_y) {\\n  /**\\n   * X-value\\n   * @type {number}\\n   */\\n  this.x = goog.isDef(opt_x) ? opt_x : 0;\\n\\n  /**\\n   * Y-value\\n   * @type {number}\\n   */\\n  this.y = goog.isDef(opt_y) ? opt_y : 0;\\n};\\n\\n\\n/**\\n * Returns a new copy of the coordinate.\\n * @return {!goog.math.Coordinate} A clone of this coordinate.\\n */\\ngoog.math.Coordinate.prototype.clone = function() {\\n  return new goog.math.Coordinate(this.x, this.y);\\n};\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a nice string representing the coordinate.\\n   * @return {string} In the form (50, 73).\\n   * @override\\n   */\\n  goog.math.Coordinate.prototype.toString = function() {\\n    return '(' + this.x + ', ' + this.y + ')';\\n  };\\n}\\n\\n\\n/**\\n * Returns whether the specified value is equal to this coordinate.\\n * @param {*} other Some other value.\\n * @return {boolean} Whether the specified value is equal to this coordinate.\\n */\\ngoog.math.Coordinate.prototype.equals = function(other) {\\n  return other instanceof goog.math.Coordinate &&\\n      goog.math.Coordinate.equals(this, other);\\n};\\n\\n\\n/**\\n * Compares coordinates for equality.\\n * @param {goog.math.Coordinate} a A Coordinate.\\n * @param {goog.math.Coordinate} b A Coordinate.\\n * @return {boolean} True iff the coordinates are equal, or if both are null.\\n */\\ngoog.math.Coordinate.equals = function(a, b) {\\n  if (a == b) {\\n    return true;\\n  }\\n  if (!a || !b) {\\n    return false;\\n  }\\n  return a.x == b.x && a.y == b.y;\\n};\\n\\n\\n/**\\n * Returns the distance between two coordinates.\\n * @param {!goog.math.Coordinate} a A Coordinate.\\n * @param {!goog.math.Coordinate} b A Coordinate.\\n * @return {number} The distance between `a` and `b`.\\n */\\ngoog.math.Coordinate.distance = function(a, b) {\\n  var dx = a.x - b.x;\\n  var dy = a.y - b.y;\\n  return Math.sqrt(dx * dx + dy * dy);\\n};\\n\\n\\n/**\\n * Returns the magnitude of a coordinate.\\n * @param {!goog.math.Coordinate} a A Coordinate.\\n * @return {number} The distance between the origin and `a`.\\n */\\ngoog.math.Coordinate.magnitude = function(a) {\\n  return Math.sqrt(a.x * a.x + a.y * a.y);\\n};\\n\\n\\n/**\\n * Returns the angle from the origin to a coordinate.\\n * @param {!goog.math.Coordinate} a A Coordinate.\\n * @return {number} The angle, in degrees, clockwise from the positive X\\n *     axis to `a`.\\n */\\ngoog.math.Coordinate.azimuth = function(a) {\\n  return goog.math.angle(0, 0, a.x, a.y);\\n};\\n\\n\\n/**\\n * Returns the squared distance between two coordinates. Squared distances can\\n * be used for comparisons when the actual value is not required.\\n *\\n * Performance note: eliminating the square root is an optimization often used\\n * in lower-level languages, but the speed difference is not nearly as\\n * pronounced in JavaScript (only a few percent.)\\n *\\n * @param {!goog.math.Coordinate} a A Coordinate.\\n * @param {!goog.math.Coordinate} b A Coordinate.\\n * @return {number} The squared distance between `a` and `b`.\\n */\\ngoog.math.Coordinate.squaredDistance = function(a, b) {\\n  var dx = a.x - b.x;\\n  var dy = a.y - b.y;\\n  return dx * dx + dy * dy;\\n};\\n\\n\\n/**\\n * Returns the difference between two coordinates as a new\\n * goog.math.Coordinate.\\n * @param {!goog.math.Coordinate} a A Coordinate.\\n * @param {!goog.math.Coordinate} b A Coordinate.\\n * @return {!goog.math.Coordinate} A Coordinate representing the difference\\n *     between `a` and `b`.\\n */\\ngoog.math.Coordinate.difference = function(a, b) {\\n  return new goog.math.Coordinate(a.x - b.x, a.y - b.y);\\n};\\n\\n\\n/**\\n * Returns the sum of two coordinates as a new goog.math.Coordinate.\\n * @param {!goog.math.Coordinate} a A Coordinate.\\n * @param {!goog.math.Coordinate} b A Coordinate.\\n * @return {!goog.math.Coordinate} A Coordinate representing the sum of the two\\n *     coordinates.\\n */\\ngoog.math.Coordinate.sum = function(a, b) {\\n  return new goog.math.Coordinate(a.x + b.x, a.y + b.y);\\n};\\n\\n\\n/**\\n * Rounds the x and y fields to the next larger integer values.\\n * @return {!goog.math.Coordinate} This coordinate with ceil'd fields.\\n */\\ngoog.math.Coordinate.prototype.ceil = function() {\\n  this.x = Math.ceil(this.x);\\n  this.y = Math.ceil(this.y);\\n  return this;\\n};\\n\\n\\n/**\\n * Rounds the x and y fields to the next smaller integer values.\\n * @return {!goog.math.Coordinate} This coordinate with floored fields.\\n */\\ngoog.math.Coordinate.prototype.floor = function() {\\n  this.x = Math.floor(this.x);\\n  this.y = Math.floor(this.y);\\n  return this;\\n};\\n\\n\\n/**\\n * Rounds the x and y fields to the nearest integer values.\\n * @return {!goog.math.Coordinate} This coordinate with rounded fields.\\n */\\ngoog.math.Coordinate.prototype.round = function() {\\n  this.x = Math.round(this.x);\\n  this.y = Math.round(this.y);\\n  return this;\\n};\\n\\n\\n/**\\n * Translates this box by the given offsets. If a `goog.math.Coordinate`\\n * is given, then the x and y values are translated by the coordinate's x and y.\\n * Otherwise, x and y are translated by `tx` and `opt_ty`\\n * respectively.\\n * @param {number|goog.math.Coordinate} tx The value to translate x by or the\\n *     the coordinate to translate this coordinate by.\\n * @param {number=} opt_ty The value to translate y by.\\n * @return {!goog.math.Coordinate} This coordinate after translating.\\n */\\ngoog.math.Coordinate.prototype.translate = function(tx, opt_ty) {\\n  if (tx instanceof goog.math.Coordinate) {\\n    this.x += tx.x;\\n    this.y += tx.y;\\n  } else {\\n    this.x += Number(tx);\\n    if (goog.isNumber(opt_ty)) {\\n      this.y += opt_ty;\\n    }\\n  }\\n  return this;\\n};\\n\\n\\n/**\\n * Scales this coordinate by the given scale factors. The x and y values are\\n * scaled by `sx` and `opt_sy` respectively.  If `opt_sy`\\n * is not given, then `sx` is used for both x and y.\\n * @param {number} sx The scale factor to use for the x dimension.\\n * @param {number=} opt_sy The scale factor to use for the y dimension.\\n * @return {!goog.math.Coordinate} This coordinate after scaling.\\n */\\ngoog.math.Coordinate.prototype.scale = function(sx, opt_sy) {\\n  var sy = goog.isNumber(opt_sy) ? opt_sy : sx;\\n  this.x *= sx;\\n  this.y *= sy;\\n  return this;\\n};\\n\\n\\n/**\\n * Rotates this coordinate clockwise about the origin (or, optionally, the given\\n * center) by the given angle, in radians.\\n * @param {number} radians The angle by which to rotate this coordinate\\n *     clockwise about the given center, in radians.\\n * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults\\n *     to (0, 0) if not given.\\n */\\ngoog.math.Coordinate.prototype.rotateRadians = function(radians, opt_center) {\\n  var center = opt_center || new goog.math.Coordinate(0, 0);\\n\\n  var x = this.x;\\n  var y = this.y;\\n  var cos = Math.cos(radians);\\n  var sin = Math.sin(radians);\\n\\n  this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;\\n  this.y = (x - center.x) * sin + (y - center.y) * cos + center.y;\\n};\\n\\n\\n/**\\n * Rotates this coordinate clockwise about the origin (or, optionally, the given\\n * center) by the given angle, in degrees.\\n * @param {number} degrees The angle by which to rotate this coordinate\\n *     clockwise about the given center, in degrees.\\n * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults\\n *     to (0, 0) if not given.\\n */\\ngoog.math.Coordinate.prototype.rotateDegrees = function(degrees, opt_center) {\\n  this.rotateRadians(goog.math.toRadians(degrees), opt_center);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"math\",\"Coordinate\",\"goog.math.Coordinate\",\"opt_x\",\"opt_y\",\"x\",\"isDef\",\"y\",\"prototype\",\"clone\",\"goog.math.Coordinate.prototype.clone\",\"DEBUG\",\"toString\",\"goog.math.Coordinate.prototype.toString\",\"equals\",\"goog.math.Coordinate.prototype.equals\",\"other\",\"goog.math.Coordinate.equals\",\"a\",\"b\",\"distance\",\"goog.math.Coordinate.distance\",\"dx\",\"dy\",\"Math\",\"sqrt\",\"magnitude\",\"goog.math.Coordinate.magnitude\",\"azimuth\",\"goog.math.Coordinate.azimuth\",\"angle\",\"squaredDistance\",\"goog.math.Coordinate.squaredDistance\",\"difference\",\"goog.math.Coordinate.difference\",\"sum\",\"goog.math.Coordinate.sum\",\"ceil\",\"goog.math.Coordinate.prototype.ceil\",\"floor\",\"goog.math.Coordinate.prototype.floor\",\"round\",\"goog.math.Coordinate.prototype.round\",\"translate\",\"goog.math.Coordinate.prototype.translate\",\"tx\",\"opt_ty\",\"Number\",\"isNumber\",\"scale\",\"goog.math.Coordinate.prototype.scale\",\"sx\",\"opt_sy\",\"sy\",\"rotateRadians\",\"goog.math.Coordinate.prototype.rotateRadians\",\"radians\",\"opt_center\",\"center\",\"cos\",\"sin\",\"rotateDegrees\",\"goog.math.Coordinate.prototype.rotateDegrees\",\"degrees\",\"toRadians\"]\n}\n"]