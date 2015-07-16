function	c_elem_6_push1(dir)
{
    dir[0] = [
	[0, 0, 0, 0],
	[0, 7, 7, 7],
	[0, 0, 7, 0],
	[0, 0, 0, 0]
    ];
    dir[1] = [
	[0, 0, 7, 0],
	[0, 0, 7, 7],
	[0, 0, 7, 0],
	[0, 0, 0, 0]
    ];
}

function	c_elem_6_push2(dir)
{
    dir[2] = [
	[0, 0, 7, 0],
	[0, 7, 7, 7],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
    ];
    dir[3] = [
	[0, 0, 7, 0],
	[0, 7, 7, 0],
	[0, 0, 7, 0],
	[0, 0, 0, 0]
    ];
}

function	c_elem_6()
{
    var		dir;

    dir = [];
    c_elem_6_push1(dir);
    c_elem_6_push2(dir);
    this.dir = dir;
}
