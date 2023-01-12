var Sidebar = pc.createScript('sidebar');
Sidebar.attributes.add("selectColor",{type:"rgb"});
Sidebar.attributes.add("unSelectColor",{type:"rgb"});

// initialize code called once per entity
Sidebar.prototype.initialize = function() {
    this.isMousePressed = false;
    this.entity.element.on("mousedown",this._mdown,this);
    this.app.mouse.on("mousemove",this._mmove,this);
    this.app.mouse.on("mouseup",this._mup,this);
};

// update code called every frame
Sidebar.prototype.update = function(dt) {
    this.entity.element.anchor = new pc.Vec4(1,1-camera.cameraPosition,1,1-camera.cameraPosition);
    this.entity.element.pivot = new pc.Vec2(1,1-camera.cameraPosition);
    if(this.isMousePressed){
        this.entity.element.color = this.selectColor;
    }else{
        this.entity.element.color = this.unSelectColor;
    }
};

Sidebar.prototype._mdown = function(ev){
    if(ev.button === 0){
        this.isMousePressed = true;        
    }
};

Sidebar.prototype._mup = function(ev){
    this.isMousePressed = false;
};

Sidebar.prototype._mmove = function(ev){
    if(!ev.buttons[0]){
        this.isMousePressed = false;
    }
    if(this.isMousePressed){
        camera.cameraPosition = (ev.y / window.innerHeight);
    }
};