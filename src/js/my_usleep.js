function	my_usleep(microseconds)
{
    var		start;

    start = new Date().getTime();
    while (new Date() < (start + microseconds / 1000));
    return (0);
}
