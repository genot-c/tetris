function	c_piece()
{
    var		elem;

    this.id = 0;
    this.dir = 0;
    this.origin = new c_origin(0, 0);
    elem = [];
    elem[0] = new c_elem_0();
    elem[1] = new c_elem_1();
    elem[2] = new c_elem_2();
    elem[3] = new c_elem_3();
    elem[4] = new c_elem_4();
    elem[5] = new c_elem_5();
    elem[6] = new c_elem_6();
    this.elem = elem;
}
