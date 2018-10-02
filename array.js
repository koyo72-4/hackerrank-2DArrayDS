function hourglassSum(arr) {
    let hourglasses = [];
    let hourglassIndex = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++ , hourglassIndex++) {
            hourglasses[hourglassIndex] = [];
            for (let k = i; k <= i + 2; k += 2) {
                for (let l = j; l <= j + 2; l++) {
                    hourglasses[hourglassIndex].push(arr[k][l]);
                }
            }
            hourglasses[hourglassIndex].splice(3, 0, arr[i + 1][j + 1]);
        }
    }

    let hourglassSums = hourglasses.map(hourglass => {
        return hourglass.reduce((total, amount) => {
            return total + amount;
        }, 0);
    });

    return Math.max(...hourglassSums);
}