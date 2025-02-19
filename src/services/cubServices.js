const uniqid = require("uniqid");

const cubes = [
        {
          id: 'yasc7km7bq35br',
          name: 'dfx',
          description: 'xfdvcx',
          imageUrl: 'https://logicbg.com/wp-content/uploads/2019/05/%D0%BA%D1%83%D0%B1-6%D1%856%D1%856-%D1%80%D0%B0%D0%B7%D0%B1%D1%8A%D1%80%D0%BA%D0%B0%D0%BD-YJ-Toys.jpg',
          difficultyLevel: 3
        },

        {
          id: 'yasc7km7bq35br',
          name: 'dpx',
          description: 'xfdvcx',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik%27s_cube.svg/1200px-Rubik%27s_cube.svg.png',
          difficultyLevel: 1
        },
      
        {
          id: 'yasc7km7bq35br',
          name: 'dfx',
          description: 'xfdvcx',
          imageUrl: 'https://logicbg.com/wp-content/uploads/2019/04/rubik-kub-Mirror-Cube-silver-ogledalen-kub-podreden-430x430.jpg',
          difficultyLevel: 2
        },
        
        {
          id: 'yasc7km7bq4hdk',
          name: 'gfcgb',
          description: 'bgbv',
          imageUrl: 'https://podaraci.bg/uploaded-files/z3_55a8b6cfa8ecc8be71f775e14bacf051.jpeg',
          difficultyLevel: 6
        }
];

exports.create = (cubeData) => {
    const newCube = {
      id: uniqid(),
      ...cubeData,
    };

    cubes.push(newCube);
    return newCube;
}


exports.getAll = (search, from, to) => {
    let filterCubes = [...cubes]

    if(search){
        filterCubes = filterCubes.filter((cube) => cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(from){
        filterCubes = filterCubes.filter((cube) => cube.difficultyLevel >= Number(from));
    }
    if(to){
        filterCubes = filterCubes.filter((cube) => cube.difficultyLevel <= Number(to));
    }
    return filterCubes;
};


exports.getSingleCube = (id) => {
    return cubes.find((cube) => cube.id === id);
}
