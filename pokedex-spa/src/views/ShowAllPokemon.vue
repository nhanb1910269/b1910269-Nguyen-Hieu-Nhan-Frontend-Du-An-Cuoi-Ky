<template>
    <div class="container">
        <h1>Pokedex</h1>
        <ul id="pokedex"></ul>
    </div>
</template>

<style scoped>
body {
    background-color: orangered;
    color: white;
    margin: 0;
    font-family: rubik;
}

.container {
    padding: 40px;
    margin: 0 auto;
}

h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 54px;
}

#pokedex {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;
    padding-inline-start: 0;
}

.card {
    list-style: none;
    padding: 40px;
    background-color: #f4f4f4;
    color: #222;
    text-align: center;
}

.card:hover {
    animation: bounce 0.5s linear;
}

.card-title {
    text-transform: capitalize;
    margin-bottom: 0px;
    font-size: 32px;
    font-weight: normal;
}

.card-subtitle {
    margin-top: 5px;
    color: #666;
    font-weight: lighter;
}

.card-image {
    height: 180px;
}

@keyframes bounce {
    20% {
        transform: translateY(-6px);
    }

    40% {
        transform: translateY(0px);
    }

    80% {
        transform: translateY(-2px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>

<script>
const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();
</script>
