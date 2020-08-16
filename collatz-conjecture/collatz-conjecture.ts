class CollatzConjecture {
    static steps( num: number, step: number = 0 ): number {
        if (num < 1) {
            throw new Error("Only positive numbers are allowed");
        } else if (num === 1) {
            return step;
        } else if (num % 2 === 0) {
            return CollatzConjecture.steps(num / 2, ++step);
        } else {
            return CollatzConjecture.steps(3 * num + 1, ++step)
        }
    }
}

export default CollatzConjecture