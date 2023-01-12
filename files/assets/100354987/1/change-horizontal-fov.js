var ChangeHorizontalFov = pc.createScript('changeHorizontalFov');

// initialize code called once per entity
ChangeHorizontalFov.prototype.initialize = function () {
    var self = this; 
    var onResize = function(w, h) {
        self.entity.camera.horizontalFov = h > w;
    };

    this.app.graphicsDevice.on('resizecanvas', onResize, this);

    this.on('destroy', function() {
        this.app.graphicsDevice.off('resizecanvas', onResize, this);
    });

    onResize(this.app.graphicsDevice.width, this.app.graphicsDevice.height);
};

// swap method called for script hot-reloading
// inherit your script state here
// ChangeHorizontalFov.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/