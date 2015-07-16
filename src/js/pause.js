c_display.prototype.show_square_gray = function(x, y, id)
{
    var         tmp_x;
    var         max_x;
    var         max_y;
    var         color_tab;

    max_x = x + this.screen.width / this.screen.width_elem;
    max_y = y + this.screen.height / this.screen.height_elem;
    color_tab = [70, 70, 70, 255];
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

c_display.prototype.show_map_gray = function()
{
    var         x;
    var         y;
    var         square_size;

    square_size = this.screen.width / this.screen.width_elem;
    y = 0;
    while (y < this.screen.height_elem)
    {
        x = 0;
        while (x < this.screen.width_elem)
        {
            if (this.map[y][x] > 0 && this.map[y][x] < 10)
                this.show_square_gray(x * square_size, y * square_size, this.map[y][x]);
            x++;
        }
        y++;
    }
    mlj_put_image_to_window(this.win, this.img, 0, 0);
}

function        key_space(game)
{
    if (g_pause == 0)
    {
        drop_stop();
        game.display.show_map_gray();
        g_pause = 1;
    }
    else
    {
        game.drop(game.speed);
        g_pause = 0;
    }
}
