c_piece.prototype.in_case = function(x, y)
{
    return (x >= this.origin.x - 2 && x <= this.origin.x + 1 &&
	    y >= this.origin.y - 1 && y <= this.origin.y + 2);
}

c_piece.prototype.in_elem = function(x, y)
{
    ratio = new c_origin(this.origin.x - 2, this.origin.y - 1);
    return (this.elem[this.id].dir[this.dir][y - ratio.y][x - ratio.x] > 0);
}

c_piece.prototype.add = function(map)
{
    var	x;
    var	y;

    y = 0;
    while (map[y] != null)
    {
    	x = 0;
    	while (map[y][x] != null)
    	{
	    if (this.in_case(x, y) && this.in_elem(x, y))
		map[y][x] = this.id + 1;
    	    x++;
    	}
    	y++;
    }
}
