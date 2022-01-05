function desenhaCampo() {
  //linhas laterais
  rect(10, 5, 580, 2);
  rect(10, 395, 580, 2);
  // linhas de fundo
  rect(9, 5, 2, 390);
  rect(589, 5, 2, 390); 
  // meio de campo
  rect(299, 5, 2, 390);
  fill(255);  
  circle(300, 200, 3);
  noFill();
  ellipse(300, 200, 120);  
  noFill();
  strokeWeight(2);
  
  // área time 1 
  rect(10, 120, 60, 1);
  rect(70, 120, 1, 160);
  rect(10, 280, 60, 1);
  rect(10, 150, 30, 1);
  rect(40, 150, 1, 100);
  rect(10, 250, 30, 1);
  arc(70, 200, 50, 90, (PI * 3)/2, PI/2);
  fill(255);
  circle(55, 200, 5);
  noFill();
  //escanteios
  arc(9, 9, 20, 20, 0, PI/2);
  arc(591, 9, 20, 20, PI/2, PI);
  
  // área time 2
  rect(530, 120, 60, 1);
  rect(530, 120, 1, 160);
  rect(530, 280, 60, 1);
  rect(560, 150, 30, 1);
  rect(560, 150, 1, 100);
  rect(560, 250, 30, 1);
  arc(530, 200, 50, 90, PI/2, (PI * 3)/2);
  fill(255);
  circle(545, 200, 5);
  noFill();
  //escanteios
  arc(591, 393, 20, 20, PI, 3*PI/2);
  arc(9, 393, 20, 20, 3*PI/2, PI*2);
}