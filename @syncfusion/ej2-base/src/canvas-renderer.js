define(["require", "exports", "./util"], function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CanvasRenderer = (function () {
        function CanvasRenderer(rootID) {
            this.rootId = rootID;
        }
        CanvasRenderer.prototype.getOptionValue = function (options, key) {
            return options[key];
        };
        CanvasRenderer.prototype.createCanvas = function (options) {
            var canvasObj = document.createElement('canvas');
            canvasObj.setAttribute('id', this.rootId + '_canvas');
            this.ctx = canvasObj.getContext('2d');
            this.canvasObj = canvasObj;
            this.setCanvasSize(options.width, options.height);
            return this.canvasObj;
        };
        CanvasRenderer.prototype.setCanvasSize = function (width, height) {
            var element = document.getElementById(this.rootId);
            var size = !util_1.isNullOrUndefined(element) ? element.getBoundingClientRect() : null;
            if (util_1.isNullOrUndefined(this.width)) {
                this.canvasObj.setAttribute('width', width ? width.toString() : size.width.toString());
            }
            else {
                this.canvasObj.setAttribute('width', this.width.toString());
            }
            if (util_1.isNullOrUndefined(this.height)) {
                this.canvasObj.setAttribute('height', height ? height.toString() : '450');
            }
            else {
                this.canvasObj.setAttribute('height', this.height.toString());
            }
        };
        CanvasRenderer.prototype.setAttributes = function (options) {
            this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
            var dashArray = this.getOptionValue(options, 'stroke-dasharray');
            if (!util_1.isNullOrUndefined(dashArray)) {
                var dashArrayString = dashArray.split(',');
                this.ctx.setLineDash([parseInt(dashArrayString[0], 10), parseInt(dashArrayString[1], 10)]);
            }
            this.ctx.strokeStyle = this.getOptionValue(options, 'stroke');
        };
        CanvasRenderer.prototype.drawLine = function (options) {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
            this.ctx.strokeStyle = options.stroke;
            this.ctx.moveTo(options.x1, options.y1);
            this.ctx.lineTo(options.x2, options.y2);
            this.ctx.stroke();
            this.ctx.restore();
            this.dataUrl = this.canvasObj.toDataURL();
        };
        CanvasRenderer.prototype.drawRectangle = function (options) {
            var canvasCtx = this.ctx;
            var cornerRadius = options.rx;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.globalAlpha = this.getOptionValue(options, 'opacity');
            this.setAttributes(options);
            this.ctx.rect(options.x, options.y, options.width, options.height);
            if (cornerRadius !== null && cornerRadius >= 0) {
                this.drawCornerRadius(options);
            }
            else {
                if (options.fill === 'none') {
                    options.fill = 'transparent';
                }
                this.ctx.fillStyle = options.fill;
                this.ctx.fillRect(options.x, options.y, options.width, options.height);
                this.ctx.stroke();
            }
            this.ctx.restore();
            this.ctx = canvasCtx;
            this.dataUrl = this.canvasObj.toDataURL();
        };
        CanvasRenderer.prototype.drawCornerRadius = function (options) {
            var cornerRadius = options.rx;
            var x = options.x;
            var y = options.y;
            var width = options.width;
            var height = options.height;
            if (options.fill === 'none') {
                options.fill = 'transparent';
            }
            this.ctx.fillStyle = options.fill;
            if (width < 2 * cornerRadius) {
                cornerRadius = width / 2;
            }
            if (height < 2 * cornerRadius) {
                cornerRadius = height / 2;
            }
            this.ctx.beginPath();
            this.ctx.moveTo(x + width - cornerRadius, y);
            this.ctx.arcTo(x + width, y, x + width, y + height, cornerRadius);
            this.ctx.arcTo(x + width, y + height, x, y + height, cornerRadius);
            this.ctx.arcTo(x, y + height, x, y, cornerRadius);
            this.ctx.arcTo(x, y, x + width, y, cornerRadius);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
            this.dataUrl = this.canvasObj.toDataURL();
        };
        CanvasRenderer.prototype.drawPath = function (options, canvasTranslate) {
            var path = options.d;
            var dataSplit = path.split(' ');
            var borderWidth = this.getOptionValue(options, 'stroke-width');
            var canvasCtx = this.ctx;
            var flag = true;
            this.ctx.save();
            this.ctx.beginPath();
            if (canvasTranslate) {
                this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
            }
            this.ctx.globalAlpha = options.opacity ? options.opacity : this.getOptionValue(options, 'fill-opacity');
            this.setAttributes(options);
            for (var i = 0; i < dataSplit.length; i = i + 3) {
                var x1 = parseFloat(dataSplit[i + 1]);
                var y1 = parseFloat(dataSplit[i + 2]);
                switch (dataSplit[i]) {
                    case 'M':
                        if (!options.innerR && !options.cx) {
                            this.ctx.moveTo(x1, y1);
                        }
                        break;
                    case 'L':
                        if (!options.innerR) {
                            this.ctx.lineTo(x1, y1);
                        }
                        break;
                    case 'C':
                        var c1 = parseFloat(dataSplit[i + 3]);
                        var c2 = parseFloat(dataSplit[i + 4]);
                        var c3 = parseFloat(dataSplit[i + 5]);
                        var c4 = parseFloat(dataSplit[i + 6]);
                        this.ctx.bezierCurveTo(x1, y1, c1, c2, c3, c4);
                        i = i + 4;
                        break;
                    case 'A':
                        if (!options.innerR) {
                            if (options.cx) {
                                this.ctx.arc(options.cx, options.cy, options.radius, 0, 2 * Math.PI, options.counterClockWise);
                            }
                            else {
                                this.ctx.moveTo(options.x, options.y);
                                this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                                this.ctx.lineTo(options.x, options.y);
                            }
                        }
                        else if (flag) {
                            this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                            this.ctx.arc(options.x, options.y, options.innerR, options.end, options.start, !options.counterClockWise);
                            flag = false;
                        }
                        i = i + 5;
                        break;
                    case 'z':
                        this.ctx.closePath();
                        break;
                }
            }
            if (options.fill !== 'none' && options.fill !== undefined) {
                this.ctx.fillStyle = options.fill;
                this.ctx.fill();
            }
            if (borderWidth > 0) {
                this.ctx.stroke();
            }
            this.ctx.restore();
            this.ctx = canvasCtx;
            this.dataUrl = this.canvasObj.toDataURL();
        };
        CanvasRenderer.prototype.drawText = function (options, label) {
            var fontWeight = this.getOptionValue(options, 'font-weight');
            if (!util_1.isNullOrUndefined(fontWeight) && fontWeight.toLowerCase() === 'regular') {
                fontWeight = 'normal';
            }
            var fontSize = this.getOptionValue(options, 'font-size');
            var fontFamily = this.getOptionValue(options, 'font-family');
            var fontStyle = this.getOptionValue(options, 'font-style').toLowerCase();
            var font = (fontStyle + ' ' + fontWeight + ' ' + fontSize + ' ' + fontFamily);
            var anchor = this.getOptionValue(options, 'text-anchor');
            var opacity = options.opacity !== undefined ? options.opacity : 1;
            if (anchor === 'middle') {
                anchor = 'center';
            }
            this.ctx.save();
            this.ctx.fillStyle = options.fill;
            this.ctx.font = font;
            this.ctx.textAlign = anchor;
            this.ctx.globalAlpha = opacity;
            if (options.baseline) {
                this.ctx.textBaseline = options.baseline;
            }
            var txtlngth = 0;
            this.ctx.translate(options.x + (txtlngth / 2), options.y);
            this.ctx.rotate(options.labelRotation * Math.PI / 180);
            this.ctx.fillText(label, 0, 0);
            this.ctx.restore();
            this.dataUrl = this.canvasObj.toDataURL();
        };
        CanvasRenderer.prototype.drawCircle = function (options) {
            var canvasCtx = this.ctx;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(options.cx, options.cy, options.r, 0, 2 * Math.PI);
            this.ctx.fillStyle = options.fill;
            this.ctx.globalAlpha = options.opacity;
            this.ctx.fill();
            this.setAttributes(options);
            this.ctx.stroke();
            this.ctx.restore();
            this.ctx = canvasCtx;
            this.dataUrl = this.canvasObj.toDataURL();
        };
        CanvasRenderer.prototype.drawPolyline = function (options) {
            this.ctx.save();
            this.ctx.beginPath();
            var points = options.points.split(' ');
            for (var i = 0; i < points.length - 1; i++) {
                var point = points[i].split(',');
                var x = parseFloat(point[0]);
                var y = parseFloat(point[1]);
                if (i === 0) {
                    this.ctx.moveTo(x, y);
                }
                else {
                    this.ctx.lineTo(x, y);
                }
            }
            this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
            this.ctx.strokeStyle = options.stroke;
            this.ctx.stroke();
            this.ctx.restore();
            this.dataUrl = this.canvasObj.toDataURL();
        };
        CanvasRenderer.prototype.drawEllipse = function (options) {
            var canvasCtx = this.ctx;
            var circumference = Math.max(options.rx, options.ry);
            var scaleX = options.rx / circumference;
            var scaleY = options.ry / circumference;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.translate(options.cx, options.cy);
            this.ctx.save();
            this.ctx.scale(scaleX, scaleY);
            this.ctx.arc(0, 0, circumference, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = options.fill;
            this.ctx.fill();
            this.ctx.restore();
            this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
            this.ctx.strokeStyle = options.stroke;
            this.ctx.stroke();
            this.ctx.restore();
            this.ctx = canvasCtx;
            this.dataUrl = this.canvasObj.toDataURL();
        };
        CanvasRenderer.prototype.drawImage = function (options) {
            this.ctx.save();
            var imageObj = new Image();
            if (!util_1.isNullOrUndefined(options.href)) {
                imageObj.src = options.href;
                this.ctx.drawImage(imageObj, options.x, options.y, options.width, options.height);
            }
            this.ctx.restore();
            this.dataUrl = this.canvasObj.toDataURL();
        };
        CanvasRenderer.prototype.createLinearGradient = function (colors) {
            var myGradient;
            if (!util_1.isNullOrUndefined(colors[0].colorStop)) {
                myGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasObj.height);
            }
            var color = this.setGradientValues(colors, myGradient);
            return color;
        };
        CanvasRenderer.prototype.createRadialGradient = function (colors) {
            var myGradient;
            if (!util_1.isNullOrUndefined(colors[0].colorStop)) {
                myGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.canvasObj.height);
            }
            var colorName = this.setGradientValues(colors, myGradient);
            return colorName;
        };
        CanvasRenderer.prototype.setGradientValues = function (colors, myGradient) {
            var colorName;
            if (!util_1.isNullOrUndefined(colors[0].colorStop)) {
                for (var i = 0; i <= colors.length - 1; i++) {
                    var color = colors[i].color;
                    var newColorStop = (colors[i].colorStop).slice(0, -1);
                    var stopColor = parseInt(newColorStop, 10) / 100;
                    myGradient.addColorStop(stopColor, color);
                }
                colorName = myGradient.toString();
            }
            else {
                colorName = colors[0].color.toString();
            }
            this.dataUrl = this.canvasObj.toDataURL();
            return colorName;
        };
        CanvasRenderer.prototype.setElementAttributes = function (options, element) {
            var keys = Object.keys(options);
            var values = Object.keys(options).map(function (key) { return options[key]; });
            for (var i = 0; i < keys.length; i++) {
                element.setAttribute(keys[i], values[i]);
            }
            return element;
        };
        CanvasRenderer.prototype.updateCanvasAttributes = function (options) {
            this.setElementAttributes(options, this.canvasObj);
            var ctx = this.ctx;
            if (!util_1.isNullOrUndefined(this.dataUrl)) {
                var img_1 = new Image;
                img_1.onload = function () {
                    ctx.drawImage(img_1, 0, 0);
                };
                img_1.src = this.dataUrl;
            }
        };
        return CanvasRenderer;
    }());
    exports.CanvasRenderer = CanvasRenderer;
});
