var	g_signal;

c_game.prototype.drop = function(delay)
{
    g_signal = setInterval(this.drop_func.bind(this), delay);
}

function	drop_stop()
{
    clearInterval(g_signal);
}

function	check_one_line(line)
{
    var		x;

    x = 1;
    while (line[x + 1] != null)
    {
	if (line[x] == 0)
	    return (0);
	x++;
    }
    return (1);
}

c_game.prototype.del_square = function(y, delay)
{
    var	x;
    var	count;

    x = 1;
    count = 1;
    while (game.display.map[y][x + 1] != null)
    {
	setTimeout(this.display.display_anim.bind(this.display, x, y),
		   delay * count);
	count++;
	x++;
    }
}

c_game.prototype.show_score = function()
{
    document.getElementById("p_score").innerHTML = game.score.score;
    document.getElementById("p_level").innerHTML = game.score.level;
}

c_game.prototype.del_line = function()
{
    var	y;
    var	count;
    var	delay;

    y = count = 0;
    delay = 70;
    g_key_stop = 1;
    drop_stop();
    while (this.display.map[y + 1] != null)
    {
	if (check_one_line(this.display.map[y]) == 1)
	{
	    setTimeout(this.del_square.bind(this, y, delay), delay * count * 10);
	    setTimeout(this.reassign.bind(this, y), delay * (count + 1) * 10 + 200);
	    count++;
	    game.score.score += 100;
	    if (game.score.score != 0 && game.score.score % 1000 == 0)
	    {
		if (game.speed > 10)
		    game.speed -= 10;
		game.score.level += 1;
	    }
	}
	y++;
    }
    setTimeout(this.drop.bind(this, this.speed), delay * count * 10 + 250);
    setTimeout(function() { g_key_stop = 0; }, delay * count * 10 + 255);
}

c_game.prototype.drop_func = function()
{
    this.show_score();
    this.piece.del(this.display.map);
    this.piece.origin.y += 1;
    if (this.piece.col(this.display.map) == -1)
    {
	this.piece.origin.y -= 1;
	this.piece.add(this.display.map);
    	if (this.piece.init(this.display) == -1)
	    return (-1);
	this.del_line();
	this.display.show_map();
    	return (0);
    }
    this.piece.add(this.display.map);
    this.display.show_map();
}
