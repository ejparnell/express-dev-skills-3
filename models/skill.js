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

function create(skill){
    skill.id = Date.now() % 1000000
    skill.level = 'beginner'
    skills.push(skill)
}

function deleteOne(id){
    id = parseInt(id)

    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function update(id, updatedSkill){
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
}