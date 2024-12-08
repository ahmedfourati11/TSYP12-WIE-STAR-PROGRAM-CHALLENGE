import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-student-quizzes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-quizzes.component.html',
  styleUrl: './student-quizzes.component.css'
})
export class StudentQuizzesComponent {
  currentTechnology: string = 'AI'; // Default technology
  currentQuestionIndex: number = 0;
  selectedAnswers: any[] = [];
  selectedAnswerIndex: number | null = null;  
  quizCompleted: boolean = false;
  blocquiz:boolean = true;
  showNextButton: boolean = false;
  score: number = 0;
  totalQuestions: number = 0;

  quizzes: { 
    [key: string]: { question: string; options: string[]; answer: number }[] 
  } = {
    AI: [
      { question: "What does AI stand for?", options: ["Automatic Integration", "Artificial Intelligence", "Automated Internet", "Advanced Information"], answer: 1 },
      { question: "Which is a type of AI?", options: ["Supervised Learning", "Binary Code", "Spreadsheet", "Browser"], answer: 0 },
      { question: "Which language is commonly used for AI programming?", options: ["Python", "JavaScript", "C++", "Ruby"], answer: 0 },
      { question: "What is machine learning?", options: ["A method of data analysis", "A subset of AI", "A hardware component", "A web development technique"], answer: 1 },
      { question: "Which of the following is an AI application?", options: ["Facial recognition", "Photoshop", "Windows OS", "Google Chrome"], answer: 0 }
    ],
    IoT: [
      { question: "Which of these is an IoT device?", options: ["Smart Fridge", "Television (old models)", "Wired Telephone", "Typewriter"], answer: 0 },
      { question: "Which protocol is commonly used in IoT?", options: ["HTTP", "MQTT", "FTP", "SMTP"], answer: 1 },
      { question: "What is a primary feature of IoT devices?", options: ["Connectivity", "Memory", "Speed", "Storage"], answer: 0 },
      { question: "Which of these is NOT an IoT device?", options: ["Smartphone", "Smartwatch", "Microwave Oven", "Printer"], answer: 3 },
      { question: "What is IoT short for?", options: ["Information of Things", "Internet of Technology", "Internet of Things", "Internet of Tools"], answer: 2 }
    ],
    Blockchain: [
      { question: "What does blockchain primarily store?", options: ["Cryptocurrency", "Smart Contracts", "Data in blocks", "Databases"], answer: 2 },
      { question: "What is the key feature of blockchain?", options: ["Decentralization", "Centralization", "Encryption only", "High speed"], answer: 0 },
      { question: "Which of these uses blockchain technology?", options: ["Bitcoin", "Twitter", "Facebook", "Instagram"], answer: 0 },
      { question: "What does a blockchain consist of?", options: ["Blocks", "Chains", "Transactions", "All of the above"], answer: 3 },
      { question: "Which type of blockchain is public?", options: ["Permissioned Blockchain", "Private Blockchain", "Public Blockchain", "All of the above"], answer: 2 }
    ],
    CSS: [
      { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Custom Style Sheets"], answer: 0 },
      { question: "Which property changes text color in CSS?", options: ["color", "background", "font-color", "text-style"], answer: 0 },
      { question: "Which tag is used to include an external CSS file?", options: ["<link>", "<style>", "<css>", "<script>"], answer: 0 },
      { question: "What is the correct syntax for a CSS comment?", options: ["/* comment */", "// comment", "<!-- comment -->", "/* comment"], answer: 0 },
      { question: "Which of these is a CSS unit of measurement?", options: ["px", "em", "%", "All of the above"], answer: 3 }
    ],
    JavaScript: [
      { question: "What is JavaScript primarily used for?", options: ["Adding interactivity to webpages", "Designing websites", "Building databases", "Creating 3D models"], answer: 0 },
      { question: "Which symbol is used for comments in JavaScript?", options: ["//", "<!-->", "/* */", "#"], answer: 0 },
      { question: "Which of these is NOT a JavaScript data type?", options: ["Number", "String", "Boolean", "ArrayList"], answer: 3 },
      { question: "Which event is used to validate a form in JavaScript?", options: ["onsubmit", "onfocus", "onchange", "onblur"], answer: 0 },
      { question: "What does DOM stand for?", options: ["Document Object Model", "Digital Object Model", "Dynamic Online Model", "Document Orientation Model"], answer: 0 }
    ],
    Python: [
      { question: "What is Python?", options: ["A programming language", "A snake", "An IDE", "A framework"], answer: 0 },
      { question: "What symbol starts a Python comment?", options: ["#", "//", "/* */", "<!-->"], answer: 0 },
      { question: "Which function is used to output data in Python?", options: ["print()", "echo()", "output()", "write()"], answer: 0 },
      { question: "What type of language is Python?", options: ["Compiled", "Interpreted", "Assembly", "Machine"], answer: 1 },
      { question: "Which of these is a Python library?", options: ["numpy", "bootstrap", "jQuery", "angular"], answer: 0 }
    ],
    Java: [
      { question: "What is Java?", options: ["A programming language", "A web browser", "A database", "An operating system"], answer: 0 },
      { question: "Which type of applications can Java develop?", options: ["Web applications", "Mobile applications", "Enterprise applications", "All of the above"], answer: 3 },
      { question: "Which method is used to start a thread in Java?", options: ["start()", "run()", "execute()", "begin()"], answer: 0 },
      { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Memory", "Java Video Manager", "Java Value Mode"], answer: 0 },
      { question: "Which of these is NOT a Java feature?", options: ["Object-oriented", "Platform-independent", "Scripting", "Distributed"], answer: 2 }
    ]
  };  

  currentQuestion: any = {};

  constructor() {}

  ngOnInit(): void {
    this.loadQuiz();
  }

  loadQuiz() {
   
    if (this.quizzes.hasOwnProperty(this.currentTechnology)) {
      const quiz = this.quizzes[this.currentTechnology];
      this.totalQuestions = quiz.length;
      
      if (this.currentQuestionIndex < quiz.length) {
        this.currentQuestion = quiz[this.currentQuestionIndex];
        this.selectedAnswerIndex = null;  
        this.showNextButton = false;
      } else {
        this.quizCompleted = true;
        this.blocquiz = false;
      }
    } else {
      // Si la technologie n'existe pas dans les quiz, gérez cette situation
      console.error('Quiz not found for the selected technology:', this.currentTechnology);
    }
  }

  selectAnswer(selectedIndex: number) {
    const correctIndex = this.currentQuestion.answer;
    const isCorrect = selectedIndex === correctIndex;
    const selectedOption = this.currentQuestion.options[selectedIndex];
    const correctOption = this.currentQuestion.options[correctIndex];

    this.selectedAnswers.push({
      question: this.currentQuestion.question,
      selectedOption,
      correctOption,
      isCorrect
    });

    if (isCorrect) {
      this.score++;
    }

    this.selectedAnswerIndex = selectedIndex;  // Save selected answer index
    this.showNextButton = true;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.loadQuiz();
  }

  reloadPage() {
    location.reload();
  }
}
