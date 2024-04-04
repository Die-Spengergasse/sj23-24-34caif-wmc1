'use strict';
const j = 17;
for (let i = 0; i < 10; i++) {
    const j = i * i;
    console.log(
        `Das Quadrat von ${i} ist ${j} und die Wurzel ist ${Math.sqrt(
            i
        ).toFixed(3)}`
    );
}
