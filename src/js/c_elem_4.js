function	c_elem_4_push1(dir)
{
    dir[0] = [
	[0, 0, 0, 0],
	[0, 5, 5, 5],
	[0, 5, 0, 0],
	[0, 0, 0, 0]
    ];
    dir[1] = [
	[0, 0, 5, 0],
	[0, 0, 5, 0],
	[0, 0, 5, 5],
	[0, 0, 0, 0]
    ];
}

function	c_elem_4_push2(dir)
{
    dir[2] = [
	[0, 0, 0, 5],
	[0, 5, 5, 5],
	[0, 0, 0, 0],
	[0, 0, 0, 0]
    ];
    dir[3] = [
	[0, 5, 5, 0],
	[0, 0, 5, 0],
	[0, 0, 5, 0],
	[0, 0, 0, 0]
    ];
}

function	c_elem_4()
{
    var		dir;

    dir = [];
    c_elem_4_push1(dir);
    c_elem_4_push2(dir);
    this.dir = dir;
}
