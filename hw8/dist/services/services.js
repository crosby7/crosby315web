import { initFormListeners, initRecipesListeners, userName } from '../../src/index.js';

export var lastPageLoaded = 'home';
var navCollection = document.getElementsByClassName("loginLogout");
export var loginNav = [];
export var loginStatus = false;

var recipes = [];
var initialIngredCount = 3;
var initialInstructCount = 3;

var modelUserName = userName;

for (let i = 0; i < navCollection.length; i++) {
    loginNav[i] = navCollection[i];
}
export function toggleMenu(btn)
{
    console.log("class toggle now v");
    btn.classList.toggle("open");
    console.log(btn);
}


export function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');

    setTimeout(() => {
        switch (pageID) {
            case '':
            case 'home':
                $.get(`pages/home.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                       alert("Error 404, page not found");
                      });
                lastPageLoaded = 'home';
                break;
            case 'signUp':
            case 'login':
                console.log("services: attempting now");
                authenticate.accountHandler(pageID);
                break;
            case 'loginPage':
                authenticate.accountHandler(pageID);
                $.get(`pages/loginPage.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                       alert("Error 404, page not found");
                      });
                break;
            case 'create':
                $.get(`pages/${pageID}.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                    alert("Error 404, page not found");
                   });
                lastPageLoaded = pageID;
                setTimeout(preparePage, 50);
                break;
            case 'recipes':
                $.get(`pages/${pageID}.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                    alert("Error 404, page not found");
                   });
                   console.log('recipe length: ' + recipes.length);
                if (recipes.length != 0)
                {
                    setModal();
                    setTimeout(placeRecipes, 100);
                }
                setTimeout(initRecipesListeners, 100);
                lastPageLoaded = pageID;
            default:
                $.get(`pages/${pageID}.html`, function (data) {
                    $('#app').html(data);
                   })
                   .fail(function () {
                    alert("Error 404, page not found");
                   });
                lastPageLoaded = pageID;
                break;
        }
    }, 500);
    console.log("lastPage: " + lastPageLoaded);
}

function preparePage() {
    let createHeader = document.getElementById("createHeader");
    if (userName != null && userName != undefined)
    {
        createHeader.innerHTML = `Hey ${userName}, create your recipe today!`;
    }
    else
    {
        createHeader.innerHTML = "Hey Jungle Cook, create your recipe today!"
    }
    initFormListeners();
}

export function addRow(divSrc) {
    if (divSrc === ".formIngredients")
    {
        $(divSrc).append(`<input type="text" id="ingred${initialIngredCount}" placeholder="Ingredient #${++initialIngredCount}" />`)
    }
    else if (divSrc === ".formInstructions")
    {
        $(divSrc).append(`<input type="text" id="instruct${initialInstructCount}" placeholder="Instruction #${++initialInstructCount}" />`)
    }
}

export function addRecipe() {
    let newRecipe = {};

    let imagePath = $("#imagePath").val();
    let recipeName = $("#recipeName").val();
    let recipeDesc = $("#recipeDescription").val();
    let recipeTime = $("#totalTime").val();
    let recipeServings = $("#servingSize").val();

    newRecipe.imagePath = imagePath;
    newRecipe.recipeName = recipeName;
    newRecipe.recipeDesc = recipeDesc;
    newRecipe.recipeTime = recipeTime;
    newRecipe.recipeServings = recipeServings;

    newRecipe.ingredients = [];
    $(".formIngredients input").each(function (index, data) {
        var value = $(this).val();
        if (value != "")
        {
            let keyName = "ingredient" + index;
            let ingredObj = {};
            ingredObj[keyName] = value;

            newRecipe.ingredients.push(ingredObj);
        }
    });

    newRecipe.instructions = [];
    $(".formInstructions input").each(function (index, data) {
        var value = $(this).val();
        if (value != "")
        {
            let keyName = "instruction" + index;
            let instructObj = {};
            instructObj[keyName] = value;

            newRecipe.instructions.push(instructObj);
        }
    })

    if (newRecipe.recipeName != "")
    {
        console.log("newRecipe ", newRecipe);

        window.location.hash = "recipes";
        recipes.push(newRecipe);
        console.log(recipes);
    }
}

function setModal() {
    $(".recipeModal").toggleClass("hide");
}

function placeRecipes() {
    console.log("placing recipes: ", recipes);
    $("#noRecipes").remove();
    $.each(recipes, (index, recipe) => {
        $(".cardHolder").append(
            `<div class="recipeCard" data-index="${index}" >
            <div class="cardImage">
                <img src="${recipe.imagePath}" alt="${recipe.recipeName}">
            </div>
            <div class="cardInfo">
                <h3>${recipe.recipeName}</h3>
                <p>${recipe.recipeDesc}</p>
                    <div class="cardDetails">
                        <img src="images/time.svg" alt="Time to Make">
                        <p>${recipe.recipeTime}</p>
                    </div>
                    <div class="cardDetails">
                        <img src="images/servings.svg" alt="Servings made">
                        <p>${recipe.recipeServings} servings</p>
                    </div>
            </div>
        </div>`
        )
        console.log($(".cardHolder").html());
        if (index == recipes.length - 1)
        {
            setModal();
            $(".cardHolder").append(`<div id="noRecipes">
            <div class="createButton">+</div>
            <h3>Click here to add more recipes!</h3>
        </div>`);
            initRecipesListeners();
        }
    })
    
}