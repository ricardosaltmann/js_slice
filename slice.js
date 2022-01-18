const nomes = ['João', 'Juliana', 'Ana', 'caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius',
 'Rhenan', 'Renata', 'Dayse', 'Camilo' ]


 // o slice precida de 2 parametros o primeiro termo, que no caso é o 0 e o segundo a quantidade que sera dividido
 // no exemplo abaixo utilizamos o length para calcular o tamanho total, e depois dividimos por 2, com isso conseguimos a metade do array
 const sala1 = nomes.slice(0, nomes.length/2)
 const sala2 = nomes.slice(nomes.length/2)

 console.log(`A sala tem ${nomes.length} pessoas`)
 console.log(`Dividindo ela, os alunos da sala 1 serão: ${sala1}`)
 console.log(`E os alunos da sala 2: ${sala2} `)

 