const Skill = require('../models/skill')

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
}

function show(req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    })
}

function newSkill(req, res){
    res.render('skills/new', { title: 'New Skill' })
}

function create(req, res){
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res){
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill: Skill.getOne(req.params.id)
    })
}

function update(req, res){
    Skill.update(req.params.id, req.body)
    res.redirect(`/skills`)
}

module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteSkill,
    edit,
    update,
}