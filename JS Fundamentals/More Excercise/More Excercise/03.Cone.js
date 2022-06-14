function cone(r, h) {
  let v = ((1 / 3) * Math.PI * Math.pow(r, 2) * h).toFixed(4);
  let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
  let l = Math.PI * r * s;
  let b = Math.PI * Math.pow(r, 2);
  let totalSurfaceArea = (l + b).toFixed(4);

  console.log(`volume = ${v} \n area = ${totalSurfaceArea}`);
}
cone(3, 5);
cone(3.3, 7.8);
