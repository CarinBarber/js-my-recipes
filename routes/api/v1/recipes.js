const router = require('express').Router()
const recipes = require('../../../data/recipes.json')
let nextId = recipes.length + 1

router.get('/', (request, response) => {
    const listData = recipes.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        prepTime: recipe.prepTime,
        difficulty: recipe.difficulty
    }))
    response.json(listData)
})

router.get('/recipe/:id', (request, response) => {
    const recipeId = parseInt(request.params.id, 10)
    const recipe = recipes.find(r => r.id === recipeId)

    response.json(recipe)
})


router.post('/recipe/add', (request, response) => {
    const newRecipe = request.body
    newRecipe.id = nextId++
    recipes.push(newRecipe)
    response.json(newRecipe)
})

module.exports = router