const skills = [
    {id: 145894, skill: 'Javascript', level: 'beginner'},
    {id: 126743, skill: 'C#', level: 'intermediate'},
    {id: 129076, skill: 'HTML', level: 'beginner'},
    {id: 135874, skill: 'CSS', level: 'beginner'}
]

function getAll(){
    return skills
}

function getOne(id){
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

module.exports = {
    getAll,
    getOne
}