export let movies = [
    {   
        id:0,
        name: "JeongTaek",
        score: 98
    },
    {
        id:1,
        name: "Jisu",
        score: 70
    },
    {
        id:2,
        name: "Yoongi",
        score: 72
    },
    {
        id:3,
        name: "Heedong",
        score: 24
    },
    {
        id:4,
        name: "Rakyung",
        score: 68
    },
    {
        id:5,
        name: "whatever", 
        score: 38
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredPeople = movies.filter(movie => id === movie.id);
    return filteredPeople[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
} 