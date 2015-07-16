c_display.prototype.put_pixel_to_img = function(x, y, tab_color)
{
    var		pixel;

    pixel = (y * this.screen.width * 4) + (x * 4);
    this.img.data[pixel++] = tab_color[0];
    this.img.data[pixel++] = tab_color[1];
    this.img.data[pixel++] = tab_color[2];
    this.img.data[pixel] = tab_color[3];
}

c_display.prototype.show_square = function(x, y, id)
{
    var		tmp_x;
    var		max_x;
    var		max_y;
    var		color_tab;

    max_x = x + this.screen.width / this.screen.width_elem;
    max_y = y + this.screen.height / this.screen.height_elem;
    color_tab = get_square_color(id);
    while (y <= max_y)
    {
	tmp_x = x;
	while (tmp_x <= max_x)
	{
	    this.put_pixel_to_img(tmp_x, y, color_tab);
	    tmp_x++;
	}
	y++;
    }
}

c_display.prototype.show_map = function()
{
    var		x;
    var		y;
    var		square_size;

    square_size = this.screen.width / this.screen.width_elem;
    y = 0;
    while (y < this.screen.height_elem)
    {
    	x = 0;
    	while (x < this.screen.width_elem)
    	{
    	    this.show_square(x * square_size, y * square_size, this.map[y][x]);
    	    x++;
    	}
    	y++;
    }
    mlj_put_image_to_window(this.win, this.img, 0, 0);
}

function	c_display(screen)
{
    this.screen = screen;
    this.map = new_map();
    mlj_init("--- Epi'TETRIS ---");
    this.win = mlj_new_window(screen.width, screen.height, "#282828", "win");
    this.img = mlj_new_image(this.win, screen.width, screen.height);
}
