function	c_game(piece, display, score)
{
    this.piece = piece;
    this.display = display;
    this.score = score;
    this.speed = 250;
}

c_game.prototype.reassign = function(y)
{
    var		x;
    var		tmp;

    while (y > 0)
    {
	tmp = y - 1;
	x = 1;
	while (this.display.map[tmp][x] != null)
	{
	    this.display.map[y][x] = this.display.map[tmp][x];
	    x++;
	}
	y--;
    }
}
