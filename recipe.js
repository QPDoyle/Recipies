//MADE BY CHAT GPT
document.addEventListener('DOMContentLoaded', () => {
    // Select the form elements
    const emailInput = document.getElementById('email');
    const recipeNameInput = document.getElementById('rname');
    const dateInput = document.getElementById('today');
    const flavorSalty = document.getElementById('flavor1');
    const flavorSweet = document.getElementById('flavor2');
    const flavorBitter = document.getElementById('flavor3');
    const mealSelect = document.getElementById('meals');
    const submitButtons = document.querySelectorAll('form input[type="submit"]');
    const ul = document.querySelector('ul');

    // Function to collect form data and add to list
    function collectData(event) {
        event.preventDefault(); // Prevent form submission

        // Get the values from each input
        const email = emailInput.value;
        const recipeName = recipeNameInput.value;
        const date = dateInput.value;
        
        // Collect checked flavors
        let flavors = [];
        if (flavorSalty.checked) flavors.push(flavorSalty.value);
        if (flavorSweet.checked) flavors.push(flavorSweet.value);
        if (flavorBitter.checked) flavors.push(flavorBitter.value);
        
        // Get the selected meal
        const meal = mealSelect.value;

        // Create list item with collected data
        const listItem = document.createElement('li');
        listItem.textContent = `Email: ${email}, Recipe Name: ${recipeName}, Date: ${date}, Flavors: ${flavors.join(', ')}, Meal: ${meal}`;
        
        // Append list item to the ul element
        ul.appendChild(listItem);

        // Clear form fields
        emailInput.value = '';
        recipeNameInput.value = '';
        dateInput.value = '';
        flavorSalty.checked = false;
        flavorSweet.checked = false;
        flavorBitter.checked = false;
        mealSelect.value = 'breakfast';
    }

    // Attach the collectData function to each submit button
    submitButtons.forEach(button => {
        button.addEventListener('click', collectData);
    });
});
