const distanciaTotal = 100;
const velocidade_carro = 110;
const velocidade_cam = 80;
const num_pedagios = 2;
const tempo_pedagio_cam = 5 / 60;

const tempo_car = distanciaTotal / (velocidade_carro + velocidade_cam);
const tempo_cam = tempo_car + num_pedagios * tempo_pedagio_cam;

const dist_car = tempo_car * velocidade_carro;
const dist_cam = tempo_cam * velocidade_cam;

if (dist_car < (distanciaTotal / 2)) {
  console.log("O carro está mais próximo de Ribeirão Preto.");
} else {
  console.log("O caminhão está mais próximo de Ribeirão Preto.");
}

/* Podemos calcular a distância percorrida pelo carro, usando a fórmula de distância.

distancia do carro = tempo * velocidade do carro ou caminhão 

mas para isso precisamoscalcular o tempo que o carro leva para chegar ao ponto de cruzamento, usando a fórmula de tempo 

tempo do carro = 100km / (velocidade do carro + velocidade do caminhão)

Para calcular a distancia percorrida pelo caminhão até o momento do cruzamento, podemos usar a mesma fórmula de distância

distancia do caminhão = tempo * velocidade 

mas para isso precisamoscalcular o tempo que o caminhão leva para chegar ao ponto de cruzamento, usando a fórmula de tempo 

como o caminhão gastou mais tempo no pedagio podemos adicionar esse tempo extra ao tempo de viagem total do caminhão, que é dado pela fórmula

tempo do caminhão = 100km / (velocidade do carro + velocidade do caminhão) + (5/60)

dessa forma podemos calcular as distâncias percorridas pelo carro e pelo caminhão até o momento do cruzamento e verificar qual dos dois está mais próximo de Ribeirão Preto.


*/