var	g_pause;
var	g_key_stop;

function	key_up(game)
{
    var		rotation;

    rotation = game.piece.elem[game.piece.id].dir.length;
    game.piece.del(game.display.map);
    if (game.piece.dir == rotation - 1)
	game.piece.dir = 0;
    else
	game.piece.dir += 1;
    if (game.piece.col(game.display.map) == -1)
    {
	if (game.piece.dir == 0)
	    game.piece.dir = rotation - 1;
	else
	    game.piece.dir -= 1;
	return (0);
    }
    game.piece.add(game.display.map);
    game.display.show_map();
}

function	key_down(game)
{
    game.piece.del(game.display.map);
    game.piece.origin.y += 1;
    if (game.piece.col(game.display.map) == -1)
    {
        game.piece.origin.y -= 1;
        return (0);
    }
    game.piece.add(game.display.map);
    game.display.show_map();
}

function	key_left(game)
{
    game.piece.del(game.display.map);
    game.piece.origin.x -= 1;
    if (game.piece.col(game.display.map) == -1)
    {
        game.piece.origin.x += 1;
        return (0);
    }
    game.piece.add(game.display.map);
    game.display.show_map();
}

function	key_right(game)
{
    game.piece.del(game.display.map);
    game.piece.origin.x += 1;
    if (game.piece.col(game.display.map) == -1)
    {
        game.piece.origin.x -= 1;
        return (0);
    }
    game.piece.add(game.display.map);
    game.display.show_map();
}

function	my_keyboard(key, game)
{
    if (g_key_stop)
    	return (0);
    if (!g_pause && key == 38)
	key_up(game);
    else if (!g_pause && key == 40)
	key_down(game);
    else if (!g_pause && key == 37)
	key_left(game);
    else if (!g_pause && key == 39)
	key_right(game);
    else if (key == 81)
	window.location = "./../../index.html";
    else if (key == 32)
	key_space(game);
    return (0);
}

function	key_manage(game)
{
    g_pause = 0;
    g_key_stop = 0;
    game.drop(game.speed);
    mlj_key_hook(my_keyboard, game);
    mlj_loop(key_manage);
}
