function	c_elem_5_push1(dir)
{
    dir[0] = [
	[0, 0, 0, 0],
	[0, 6, 6, 6],
	[0, 0, 0, 6],
	[0, 0, 0, 0]
    ];
    dir[1] = [
	[0, 0, 6, 6],
	[0, 0, 6, 0],
	[0, 0, 6, 0],
	[0, 0, 0, 0]
    ];
}

function	c_elem_5_push2(dir)
{
    dir[2] = [
	[0, 6, 0, 0],
	[0, 6, 6, 6],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
    ];
    dir[3] = [
	[0, 0, 6, 0],
	[0, 0, 6, 0],
	[0, 6, 6, 0],
	[0, 0, 0, 0]
    ];
}

function	c_elem_5()
{
    var		dir;

    dir = [];
    c_elem_5_push1(dir);
    c_elem_5_push2(dir);
    this.dir = dir;
}
