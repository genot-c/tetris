c_piece.prototype.del = function(map)
{
    var x;
    var y;

    y = 0;
    while (map[y] != null)
    {
        x = 0;
        while (map[y][x] != null)
        {
            if (this.in_case(x, y) && this.in_elem(x, y))
                map[y][x] = 0;
            x++;
        }
        y++;
    }
}
