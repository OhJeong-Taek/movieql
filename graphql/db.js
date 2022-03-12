export const people = [
    {   
        id:0,
        name: "JeongTaek",
        age: 31,
        gender: "Male"
    },
    {
        id:1,
        name: "Jisu",
        age: 27,
        gender: "Female"
    },
    {
        id:2,
        name: "Yoongi",
        age: 30,
        gender: "Male"
    },
    {
        id:3,
        name: "Heedong",
        age: 31,
        gender: "Male"
    },
    {
        id:4,
        name: "Rakyung",
        age: 31,
        gender: "Male"
    },
    {
        id:5,
        name: "whatever",
        age: 31,
        gender: "Male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}