function	get_square_color(id)
{
    var		color_tab;

    if (id == 1)
	color_tab = [255, 255, 87, 255];
    else if (id == 2)
	color_tab = [87, 192, 255, 255];
    else if (id == 3)
	color_tab = [0, 255, 128, 255];
    else if (id == 4)
	color_tab = [255, 97, 97, 255];
    else if (id == 5)
	color_tab = [255, 173, 91, 255];
    else if (id == 6)
	color_tab = [47, 112, 255, 255];
    else if (id == 7)
	color_tab = [128, 87, 255, 255];
    else if (id == -1)
	color_tab = [255, 255, 255, 255];
    else
	color_tab = [40, 40, 40, 255];
    return (color_tab);
}
