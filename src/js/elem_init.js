function	display_image()
{
    document.getElementById("loose_label").style.visibility = "visible";
}

c_piece.prototype.end = function()
{
    window.location = "index.html";
}

c_display.prototype.anim_end = function()
{
    var	delay;
    var	count;
    var	y;
    var	x;

    y = 0;
    delay = 70;
    count = 1;
    while (this.map[y] != null)
    {
	x = 0;
	while (this.map[y][x] != null)
	{
	    if (this.map[y][x] > 0 &&
		this.map[y][x] < 10)
	    {
		setTimeout(this.display_anim.bind(this, x, y), delay * count);
		count++;
	    }
	    x++;
	}
	y++;
    }
    return (delay * count);
}

c_piece.prototype.init = function(display)
{
    var	anim_delay;

    this.id = Math.floor((Math.random() * this.elem.length));
    this.dir = 0;
    this.origin.x = 5;
    this.origin.y = 0;
    if (this.col(display.map) == -1)
    {
    	display.show_map();
    	drop_stop();
    	display_image();
	g_key_stop = 1;
	anim_delay = display.anim_end();
        g_signal = setTimeout(this.end, anim_delay);
	setTimeout(function() { g_key_stop = 0; }, anim_delay + 5);
    	return (-1);
    }
}
