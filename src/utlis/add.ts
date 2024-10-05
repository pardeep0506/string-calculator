export function add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /,|\\n/;  // Default delimiters: comma or new line

    // Check if the string contains a custom delimiter (starting with "//")
    if (numbers.startsWith("//")) {
        const delimiterSection = numbers.split("\\n", 2); // Split into [delimiter section, numbers]
        if (delimiterSection.length > 1) {
            const customDelimiter = delimiterSection[0].substring(2);  // Extract custom delimiter after "//"
            // Escape any special characters in the custom delimiter for RegExp
            delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            numbers = delimiterSection[1];  // Use the remaining part of the string after the delimiter
        }
    }

    const numArray = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
