class Exercise1Service {
    print(limit) {
        let index = 1
        while (index <= limit) {
            if (index % 3 == 0 && index % 5 == 0) {
                console.log("Visual Nuts");
            } else if (index % 5 == 0) {
                console.log("Nuts");
            } else if (index % 3 == 0) {
                console.log("Visual");
            }
            index++;
        }
    }

    
}

module.exports = { Exercise1Service };
