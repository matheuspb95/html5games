var CreditosLayer = cc.Layer.extend({
    init:function()
    {
        this._super();
        
        if ('touches' in sys.capabilities)
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities)
            this.setMouseEnabled(true);

        var tela = cc.Director.getInstance().getWinSizeInPixels();
        
        var fundo = cc.Sprite.create("assets/Telas/creditos.png");
        fundo.setPositionX(tela.width/2);
        fundo.setPositionY(tela.height/2);
        this.addChild(fundo);
        
        return this;

    },
        
    onMouseUp: function (event) {
        this.mudaCena();
    },
        
    onTouchesEnded: function (touches, event) {
        this.mudaCena();
    },

    mudaCena: function (dt) {
        var scene = cc.Scene.create();
        scene.addChild(new Menu());
        cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.0,scene));
    }

});

var CreditosScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layerJogo = new CreditosLayer();
        layerJogo.init();
        this.addChild(layerJogo);
    }
});