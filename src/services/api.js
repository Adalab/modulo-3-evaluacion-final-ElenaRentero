function fetchData() {
    return fetch ('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.results.map((eachData) => {
            return {
                id: eachData.id,
                name: eachData.name,
                image: eachData.image,
                species: eachData.species,
                status: eachData.status,
                gender: eachData.gender,
                origin: eachData.origin.name,
                episode: eachData.episode
            };
        });
        return cleanData.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
    });
};   

export default fetchData;