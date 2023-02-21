// not optimised code
const t1 = performance.now();

for(let i=1; i<=100; i++){
    const p = document.createElement("p");
    p.textContent = `This is para ${i}`;
    document.body.appendChild(p);
}

const t2 = performance.now();
console.log(`This code took ${t2-t1}ms`);


// optimised code
const t5 = performance.now();

const fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++){
    const p = document.createElement("p");
    p.textContent = `This is para ${i}`;
    fragment.appendChild(p);
}
document.body.appendChild(fragment);

const t6 = performance.now();
console.log(`This code took ${t6-t5}5ms`);


// more optimised code
const t3 = performance.now();

const div = document.createElement("div");
for(let i=1; i<=100; i++){
    const p = document.createElement("p");
    p.textContent = `This is para ${i}`;
    div.appendChild(p);
}
document.body.appendChild(div);

const t4 = performance.now();
console.log(`This code took ${t4-t3}ms`);
