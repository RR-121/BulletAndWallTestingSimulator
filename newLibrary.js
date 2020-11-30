function collided(obj1, obj2) {
    if(obj1.x-obj2.x < (obj1.width+obj2.width)/2) {
        return true;
    }
    else {
        return false;
    }
}