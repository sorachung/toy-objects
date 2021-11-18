const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {
    let availableForPurchase = false

    for (const toy of currentInventory) {

        if (toy === "Perry Scope") {
            availableForPurchase = true
        }
    }

    if (availableForPurchase) {
        console.log("Enjoy your new Perry Scope")
    }
}

sellPerryScope()
