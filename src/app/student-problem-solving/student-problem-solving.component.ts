import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-problem-solving',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-problem-solving.component.html',
  styleUrl: './student-problem-solving.component.css'
})
export class StudentProblemSolvingComponent {
  modalTitle: string = '';
  modalLines: string[] = [];
  displayedLines: string[] = []; 
  showModal: boolean = false; 

  openModal(problemId: number): void {

    if (problemId === 1) {
      this.modalTitle = 'Problem 1 Result';
      const code = `
    def reverse_string():  
    # Ask the user to input a string
    string = input("Enter a string: ")  

    # Reverse the string using slicing
    reversed_string_slice = string[::-1]  
    print("The reversed string (using slicing) is:", reversed_string_slice)  

    # Reverse the string using a loop
    reversed_string_loop = ''  
    for char in string:  
        reversed_string_loop = char + reversed_string_loop  

    # Display the reversed string
    print("The reversed string (using loop) is:", reversed_string_loop)

    # Call the function
    reverse_string()
      `;
      this.modalLines = code.trim().split('\n'); 
      this.displayedLines = []; 
      this.showModal = true; 
      this.displayLinesOneByOne(); 
    }

    if (problemId === 2) {
      this.modalTitle = 'Problem 2 Result';
      const code = `
    def factorial_simple():  
    number = int(input("Enter an integer: "))  
    factorial = 1  
    for i in range(1, number + 1):  
        factorial *= i  
    print("The factorial of", number, "is:", factorial)
      `;
      this.modalLines = code.trim().split('\n'); 
      this.displayedLines = []; 
      this.showModal = true; 
      this.displayLinesOneByOne(); 
    }

    if (problemId === 3) {
      this.modalTitle = 'Problem 3 Result';
      const code = `
    def bookstore_purchase():
    # Ask if the user is an IEEE member
    member = input("Are you an IEEE member? (Yes/No): ").lower()

    # Initialize total to 0
    total = 0

    # Ask the number of books purchased in each category
    total += int(input("Programming books (20 dinars each): ")) * 20
    total += int(input("Math books (15 dinars each): ")) * 15
    total += int(input("Electronics books (30 dinars each): ")) * 30

    # Apply a 10% discount if the user is an IEEE member
    if member == "yes":
        total *= 0.9

    # Display the final total
    print(f"The total amount to pay is: {total:.2f} dinars")

    # Call the function
    bookstore_purchase()
      `;
      this.modalLines = code.trim().split('\n'); 
      this.displayedLines = []; 
      this.showModal = true; 
      this.displayLinesOneByOne(); 
    }

    if (problemId === 4) {
      this.modalTitle = 'Problem 4 Result';
      const code = `
    def find_perfect_numbers():
    # Function to check if a number is perfect
    def is_perfect(number):
        divisors_sum = 0
        for i in range(1, number):
            if number % i == 0:
                divisors_sum += i
        return divisors_sum == number

    # Find and display the first 4 perfect numbers
    perfect_numbers_found = 0
    number = 2  # Start checking from 2
    while perfect_numbers_found < 4:
        if is_perfect(number):
            print(number)
            perfect_numbers_found += 1
        number += 1

    # Call the function
    find_perfect_numbers()
      `;
      this.modalLines = code.trim().split('\n'); 
      this.displayedLines = []; 
      this.showModal = true; 
      this.displayLinesOneByOne(); 
    }
  }

  
  displayLinesOneByOne(): void {
    let index = 0;

    const interval = setInterval(() => {
      if (index < this.modalLines.length) {
        this.displayedLines.push(this.modalLines[index]); 
        index++;
      } else {
        clearInterval(interval); 
      }
    }, 200); 
  }

  // Méthode pour fermer le modal
  closeModal(): void {
    this.showModal = false;
  }
}
