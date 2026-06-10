// Part 1 Exercises (use Copilot inline suggestions)

// Exercise 1: Comment-Driven Development
// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


// Exercise 2: Array Operations
const numList = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = numList.filter(num => num % 2 === 0)
console.log(numList, evenNumbers);

// Exercise 3: Function from Signature
// Type this on a new line and press Enter:
// function reverseString(str)
function reverseString(str) {
		return str.split('').reverse().join('');
}	

// Exercise 4: Process User Data 
const processUserData = (user) => {
	if (!user) {
		throw new Error('User data cannot be null or undefined');
	}
	if (!Array.isArray(user)) {
		throw new Error('User data must be an array');
	}
	return user
		.filter(u => u && u.age >= 18)
		.map(u => ({ name: u.name, email: u.email }));
};
