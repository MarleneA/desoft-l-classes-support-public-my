function getBreedDog(weight: number): string {
    if (weight < 10) {
        return "Small";
    }
    else if (weight < 25) {
        return "Average";
    }
    else if (weight < 45) {
        return "Big";
    }
    else {
        return "Giant";
    }
}
export function smallRaceQuantityOfFeed(foodQuantity: number): number {
    if (foodQuantity == 100) {
        return 0;
    }
    if (foodQuantity > 100) {
        return 1;
    }
    return -1;
}

export function mediumRaceQuantityOfFeed(foodQuantity: number): number {
    if (foodQuantity == 250) {
        return 0;
    }
    if (foodQuantity > 250) {
        return 1;
    }
    return -1;
}

export function bigRaceQuantityOfFeed(foodQuantity: number): number {
    if (foodQuantity == 300) {
        return 0;
    }
    if (foodQuantity > 300) {
        return 1;
    }
    return -1;
}

export function giantRaceQuantityOfFeed(foodQuantity: number): number {
    if (foodQuantity == 500) {
        return 0;
    }
    if (foodQuantity > 500) {
        return 1;
    }
    return -1;
}

export function measureTheProperAmountOfFeed(weight: number, foodQuantity: number): number {
    let race: string = getBreedDog(weight);
    let value: number = 50;

    switch (race) {
        case "Small": {
            value = smallRaceQuantityOfFeed(foodQuantity);
            break;
        } case "Medium": {
            value = mediumRaceQuantityOfFeed(foodQuantity);
            break;
        } case "Big": {
            value = bigRaceQuantityOfFeed(foodQuantity);
            break;
        } case "Giant": {
            value = giantRaceQuantityOfFeed(foodQuantity);
            break;
        } default: {
            throw new Error("Unknown Race");
        }
    };
    return value;
}
