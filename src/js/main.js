c_game.prototype.change_level = function(level_url)
{
    if (level_url == 3)
	this.speed = 80;
    else if (level_url == 2)
	this.speed = 125;
    else
	this.speed = 250;
}

function	check_error_url(level_url)
{
    if (level_url == '7')
    {
	location.href = "https://www.youtube.com/watch?v=wZZ7oFKsKzY";
	return (1);
    }
    else if (level_url < '1' || level_url > '3')
    {
	alert('/!\\ Problem in the url.');
	window.location = "./../../index.html";
	return (1);
    }
    return (0);
}

function	main()
{
    var		level_url;

    level_url = window.location.search.charAt(7)
    if (check_error_url(level_url))
	return (1);
    piece = new c_piece();
    display = new c_display(new c_screen(480, 12, 840, 21));
    game = new c_game(piece, display, new c_score());
    game.change_level(level_url);
    game.piece.init(game.display);
    game.piece.add(game.display.map);
    game.display.show_map();
    key_manage(game);
}
