class Smoker {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Smoker.png"), 0, 0, 64, 96, 14, 0.28);

    };
    update() {

    };
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25)
        //ctx.drawImage(ASSET_MANAGER.getAsset("./Smoker.png"), 0, 0)
    };
}
