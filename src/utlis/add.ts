export function add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /,|\\n/;


    const numArray = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
