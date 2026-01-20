import random

class PythonProgrammingQuiz:
    def __init__(self):
        """Initialize Python programming quiz with 10+ questions"""
        self.questions = [
            {
                "question": "Which keyword is used to define a function in Python?",
                "options": ["func", "def", "function", "define"],
                "answer": 1,
                "explanation": "'def' is the keyword used to define functions in Python."
            },
            {
                "question": "What is the output of print(2 + 3 * 4)?",
                "options": ["20", "14", "24", "Error"],
                "answer": 1,
                "explanation": "Follows operator precedence: 3*4=12, then 2+12=14"
            },
            {
                "question": "Which data type is mutable in Python?",
                "options": ["Tuple", "String", "List", "Integer"],
                "answer": 2,
                "explanation": "Lists are mutable, meaning they can be changed after creation."
            },
            {
                "question": "How do you create a comment in Python?",
                "options": ["// comment", "# comment", "/* comment */", "-- comment"],
                "answer": 1,
                "explanation": "Python uses # for single-line comments."
            },
            {
                "question": "Which method adds an element to the end of a list?",
                "options": ["add()", "push()", "append()", "insert()"],
                "answer": 2,
                "explanation": "append() adds an element to the end of a list."
            },
            {
                "question": "What does the range(5) function return?",
                "options": ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "5"],
                "answer": 0,
                "explanation": "range(5) generates numbers from 0 to 4 (5 numbers)."
            },
            {
                "question": "How do you open a file for reading in Python?",
                "options": ["open('file.txt', 'r')", "open('file.txt', 'read')", 
                           "open('file.txt', 'readonly')", "open('file.txt')"],
                "answer": 0,
                "explanation": "'r' mode is for reading files (default mode if not specified)."
            },
            {
                "question": "Which operator is used for exponentiation?",
                "options": ["^", "**", "^^", "pow"],
                "answer": 1,
                "explanation": "** is the exponentiation operator in Python."
            },
            {
                "question": "What does len('Python') return?",
                "options": ["5", "6", "7", "Error"],
                "answer": 1,
                "explanation": "The string 'Python' has 6 characters."
            },
            {
                "question": "How do you handle exceptions in Python?",
                "options": ["try-catch", "try-except", "error-handle", "catch-block"],
                "answer": 1,
                "explanation": "Python uses try-except blocks for exception handling."
            },
            {
                "question": "Which method removes the last element from a list?",
                "options": ["remove()", "pop()", "delete()", "cut()"],
                "answer": 1,
                "explanation": "pop() removes and returns the last element by default."
            },
            {
                "question": "What is the output of bool('False')?",
                "options": ["False", "True", "Error", "None"],
                "answer": 1,
                "explanation": "Any non-empty string is True in boolean context."
            },
            {
                "question": "Which module is used for random numbers?",
                "options": ["math", "random", "numpy", "rand"],
                "answer": 1,
                "explanation": "The random module provides functions for random numbers."
            },
            {
                "question": "How do you create a set in Python?",
                "options": ["{1, 2, 3}", "set(1, 2, 3)", "[1, 2, 3]", "(1, 2, 3)"],
                "answer": 0,
                "explanation": "Sets are created with curly braces { }."
            },
            {
                "question": "What does 'Hello' + 'World' produce?",
                "options": ["HelloWorld", "Hello World", "Error", "Hello+World"],
                "answer": 0,
                "explanation": "String concatenation joins strings without spaces."
            }
        ]
        self.score = 0
        self.total_questions = 10  # Default number of questions per quiz
    
    def start_quiz(self):
        """Start the quiz"""
        print("\n" + "="*60)
        print("PYTHON PROGRAMMING QUIZ".center(60))
        print("="*60)
        print(f"Total Questions: {self.total_questions}")
        print("="*60)
        
        # Shuffle and select questions
        shuffled_questions = random.sample(self.questions, self.total_questions)
        
        for i, q in enumerate(shuffled_questions, 1):
            print(f"\n📝 Question {i}/{self.total_questions}")
            print("-" * 60)
            print(f"Q: {q['question']}")
            print("-" * 60)
            
            # Display options
            for idx, option in enumerate(q['options']):
                print(f"  [{idx+1}] {option}")
            
            # Get user answer
            while True:
                try:
                    user_answer = input("\nYour answer (1-4) or 'quit' to exit: ").strip()
                    
                    if user_answer.lower() == 'quit':
                        print("\n🚪 Quiz cancelled!")
                        return
                    
                    if user_answer.lower() == 'skip':
                        print("⏭️  Skipped!")
                        print(f"✅ Correct answer: {q['options'][q['answer']]}")
                        print(f"📚 Explanation: {q.get('explanation', 'No explanation available')}")
                        break
                    
                    user_choice = int(user_answer) - 1
                    
                    if 0 <= user_choice <= 3:
                        # Check if correct
                        if user_choice == q['answer']:
                            print("✅ Correct!")
                            self.score += 1
                        else:
                            correct_option = q['options'][q['answer']]
                            print(f"❌ Wrong! The correct answer was: {correct_option}")
                        
                        # Show explanation
                        if 'explanation' in q:
                            print(f"📚 Explanation: {q['explanation']}")
                        
                        break
                    else:
                        print("⚠️  Please enter a number between 1 and 4, 'skip', or 'quit'")
                
                except ValueError:
                    print("⚠️  Please enter a valid number, 'skip', or 'quit'")
            
            print(f"\n📊 Current Score: {self.score}/{i}")
            print("="*60)
        
        # Show final results
        self.show_results(len(shuffled_questions))
    
    def show_results(self, total_questions):
        """Display final results"""
        percentage = (self.score / total_questions) * 100
        
        print("\n" + "="*60)
        print("📊 QUIZ RESULTS".center(60))
        print("="*60)
        print(f"\n🏆 Final Score: {self.score}/{total_questions}")
        print(f"📈 Percentage: {percentage:.1f}%")
        
        # Grade
        if percentage == 100:
            grade = "A+ 🎉 Perfect Score!"
            emoji = "🏆"
        elif percentage >= 90:
            grade = "A 🎉 Excellent!"
            emoji = "⭐"
        elif percentage >= 80:
            grade = "B 👍 Very Good!"
            emoji = "👍"
        elif percentage >= 70:
            grade = "C 🙂 Good!"
            emoji = "🙂"
        elif percentage >= 60:
            grade = "D 😕 Fair"
            emoji = "📚"
        elif percentage >= 50:
            grade = "E 😞 Needs Improvement"
            emoji = "💪"
        else:
            grade = "F 😞 Keep Practicing"
            emoji = "🐍"
        
        print(f"📝 Grade: {grade} {emoji}")
        
        # Feedback
        print("\n" + "-"*60)
        if percentage >= 90:
            print("Outstanding! You're a Python pro! 🐍✨")
        elif percentage >= 75:
            print("Great job! You have strong Python skills!")
        elif percentage >= 60:
            print("Good effort! Keep practicing to improve further.")
        else:
            print("Don't get discouraged! Practice makes perfect.")
            print("Try reviewing Python basics and try again!")
        
        print("\n" + "="*60)
    
    def set_quiz_length(self):
        """Allow user to choose quiz length"""
        print("\n" + "="*60)
        print("QUIZ SETTINGS".center(60))
        print("="*60)
        print("\nChoose number of questions:")
        print("1. Short Quiz (5 questions)")
        print("2. Standard Quiz (10 questions)")
        print("3. Full Quiz (15 questions)")
        print("4. Custom (Choose your own)")
        print("="*60)
        
        while True:
            try:
                choice = input("\nEnter choice (1-4): ").strip()
                
                if choice == "1":
                    self.total_questions = 5
                    break
                elif choice == "2":
                    self.total_questions = 10
                    break
                elif choice == "3":
                    self.total_questions = 15
                    break
                elif choice == "4":
                    while True:
                        try:
                            custom = int(input("Enter number of questions (1-15): "))
                            if 1 <= custom <= 15:
                                self.total_questions = custom
                                break
                            else:
                                print("Please enter between 1 and 15")
                        except ValueError:
                            print("Please enter a valid number")
                    break
                else:
                    print("Invalid choice! Please enter 1-4")
            except:
                print("Invalid input!")
    
    def view_questions_bank(self):
        """Display all questions in the bank"""
        print("\n" + "="*70)
        print("PYTHON QUIZ QUESTION BANK".center(70))
        print("="*70)
        print(f"Total Questions: {len(self.questions)}")
        print("="*70)
        
        for i, q in enumerate(self.questions, 1):
            print(f"\nQ{i}: {q['question']}")
            print("Options:")
            for idx, option in enumerate(q['options']):
                print(f"  {idx+1}. {option}")
            print(f"✅ Correct Answer: {q['options'][q['answer']]}")
            if 'explanation' in q:
                print(f"📚 Explanation: {q['explanation']}")
            print("-" * 70)
        
        input("\nPress Enter to continue...")
    
    def view_statistics(self):
        """Display quiz statistics"""
        print("\n" + "="*60)
        print("QUIZ STATISTICS".center(60))
        print("="*60)
        print(f"\n📚 Total Questions in Bank: {len(self.questions)}")
        print("📊 Topics Covered:")
        print("  • Python Syntax & Keywords")
        print("  • Data Types & Structures")
        print("  • Functions & Methods")
        print("  • Operators & Expressions")
        print("  • File Handling")
        print("  • Exception Handling")
        print("\n🎯 Best Score Possible: 100%")
        print("📝 To improve: Practice regularly and review explanations!")
        print("="*60)
        input("\nPress Enter to continue...")
    
    def run(self):
        """Main program loop"""
        while True:
            print("\n" + "="*60)
            print("🐍 PYTHON PROGRAMMING QUIZ".center(60))
            print("="*60)
            print("1. Start New Quiz")
            print("2. Set Quiz Length")
            print("3. View Question Bank")
            print("4. View Statistics")
            print("5. Exit")
            print("="*60)
            
            choice = input("\nEnter your choice (1-5): ").strip()
            
            if choice == "1":
                if self.total_questions > len(self.questions):
                    print(f"⚠️  Only {len(self.questions)} questions available.")
                    self.total_questions = len(self.questions)
                
                self.score = 0  # Reset score
                self.start_quiz()
                
                # Ask if user wants to play again
                play_again = input("\n🔄 Play again? (y/n): ").lower()
                if play_again != 'y':
                    print("\n👋 Goodbye! Keep coding! 🐍")
            
            elif choice == "2":
                self.set_quiz_length()
            
            elif choice == "3":
                self.view_questions_bank()
            
            elif choice == "4":
                self.view_statistics()
            
            elif choice == "5":
                print("\n" + "="*60)
                print("👋 Thank you for playing!".center(60))
                print("Happy Coding! 🐍".center(60))
                print("="*60)
                break
            
            else:
                print("⚠️  Invalid choice. Please enter 1-5")

# Run the quiz
# Run the quiz
if __name__ == "__main__":
    try:
        print("\n" + "="*60)
        print("WELCOME TO PYTHON PROGRAMMING QUIZ".center(60))
        print("="*60)
        print("\nTest your Python knowledge with 15+ questions!")
        print("Topics: Functions, Data Types, Operators, and more!")
        print("="*60)
        
        quiz = PythonProgrammingQuiz()
        quiz.run()
    
    except KeyboardInterrupt:
        print("\n\n⚠️  Quiz interrupted by user.")
        print("Goodbye! 👋")
    
    except Exception as e:
        print(f"\n❌ An error occurred: {e}")
        print("Please try running the program again.")
