update(tile){
   if(tile != null && Fires.has(tile.x, tile.y)){
      Fires.extinguish(tile,10000f);
   }
}