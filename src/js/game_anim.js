c_display.prototype.display_anim_bis = function(x, y)
{
    this.map[y][x] = 0;
    this.show_map();
}

c_display.prototype.display_anim = function(x, y)
{
    this.map[y][x] = -1;
    setTimeout(this.display_anim_bis.bind(this, x, y), 50);
    this.show_map();
}
