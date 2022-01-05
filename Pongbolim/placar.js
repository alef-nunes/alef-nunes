function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(210,105,30);
  rect(220, 20, 40, 20);
  fill(255);
  text(golsTime1, 240, 35);
  fill(210,105,30);
  rect(340, 20, 40, 20);
  fill(255);
  text(golsTime2, 360, 35);
  fill(220,220,220);
  noStroke();
  textSize(20);
  text("TIME 1", 180, 38);
  text("TIME 2", 420, 38);
}