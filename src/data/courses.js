// Central course data — edit this file to update all course information site-wide.

export const COURSES = [
  {
    id: 1,
    slug: 'python-programming',
    title: 'Python Programming',
    shortIntro: 'Start your programming journey with Python — one of the most beginner-friendly and widely used languages in the world.',
    icon: 'Code2',
    color: 'blue',
    audience: 'Classes 8–12 (all boards)',
    availability: 'Online & Offline Home Tuition',
    topics: [
      'Introduction to Python and setting up the environment',
      'Variables, data types and input/output',
      'Conditional statements (if, elif, else)',
      'Loops (for and while)',
      'Functions and reusable code',
      'Lists, tuples, dictionaries and sets',
      'Practical programming exercises and mini-projects',
    ],
    outcomes: [
      'Write and run Python programs independently',
      'Understand core programming concepts clearly',
      'Solve simple problems using code',
      'Build a solid foundation for advanced topics like AI',
    ],
    description: `Python is one of the most popular programming languages today and a great first language for students. 
In this course, you will learn how to write programs step by step — starting from the absolute basics. 
Each topic is explained simply, with examples you can relate to. 
By the end, you will be able to write your own programs and understand how programming logic works.`,
    whatsappMessage: 'Hello Raj, I am interested in learning more about the Python Programming course.',
  },
  {
    id: 2,
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    shortIntro: 'Discover the exciting world of Artificial Intelligence and Machine Learning through simple explanations and beginner-friendly examples.',
    icon: 'Brain',
    color: 'purple',
    audience: 'Classes 8–12 (all boards)',
    availability: 'Online & Offline Home Tuition',
    topics: [
      'Introduction to Artificial Intelligence — what it is and how it is used',
      'Understanding Machine Learning concepts',
      'Types of Machine Learning: supervised, unsupervised, reinforcement',
      'What are datasets and how models learn from them',
      'Introduction to real-world AI applications',
      'Beginner-friendly practical examples',
    ],
    outcomes: [
      'Understand what AI and Machine Learning actually mean',
      'Recognise AI applications in everyday life',
      'Grasp the basic concepts behind how machines learn',
      'Feel confident exploring AI topics further',
    ],
    description: `Artificial Intelligence is one of the most talked-about topics in technology today — and this course makes it approachable for school students. 
You do not need any prior experience to start. Everything is explained from the basics, using simple language and practical examples. 
Whether you are curious about how AI works or want to prepare for future studies in this field, this course is a great starting point.`,
    whatsappMessage: 'Hello Raj, I am interested in learning more about the AI & Machine Learning course.',
  },
  {
    id: 3,
    slug: 'c-programming',
    title: 'C Programming',
    shortIntro: 'Build a strong programming foundation with C — a classic language that teaches you how computers truly work.',
    icon: 'Terminal',
    color: 'orange',
    audience: 'Classes 8–12 (all boards)',
    availability: 'Online & Offline Home Tuition',
    topics: [
      'Programming fundamentals and how C programs work',
      'Variables, data types and operators',
      'Conditional statements and decision-making',
      'Loops and repetition in programs',
      'Functions and modular programming',
      'Arrays and strings',
      'Basic problem-solving with C',
    ],
    outcomes: [
      'Understand how programming fundamentally works',
      'Write clean, logical C programs',
      'Develop problem-solving skills through code',
      'Build a strong base for Data Structures and other subjects',
    ],
    description: `C is one of the oldest and most important programming languages. Learning C helps students understand how programs communicate with a computer at a deeper level. 
It builds strong logical thinking and problem-solving skills. 
This course starts from zero — no prior programming knowledge is needed — and gradually covers all the core concepts with clear explanations and practical exercises.`,
    whatsappMessage: 'Hello Raj, I am interested in learning more about the C Programming course.',
  },
  {
    id: 4,
    slug: 'data-structures-algorithms',
    title: 'Data Structures & Algorithms',
    shortIntro: 'Learn how to organise data efficiently and solve problems smartly — skills every programmer needs.',
    icon: 'GitBranch',
    color: 'teal',
    audience: 'Classes 8–12 (all boards)',
    availability: 'Online & Offline Home Tuition',
    topics: [
      'Introduction to data structures and why they matter',
      'Arrays and their operations',
      'Linked lists — singly and doubly linked',
      'Stacks and queues',
      'Searching algorithms (linear and binary search)',
      'Sorting algorithms (bubble, selection, insertion)',
      'Basic algorithmic thinking and problem-solving',
    ],
    outcomes: [
      'Understand how data is stored and managed in programs',
      'Choose the right data structure for a given problem',
      'Implement and analyse basic algorithms',
      'Think logically and solve problems more efficiently',
    ],
    description: `Data Structures and Algorithms is one of the most important subjects in computer science. 
It teaches you how to store data efficiently and how to solve problems in the smartest way possible. 
This course covers the essential data structures and algorithms in a clear, step-by-step manner — with plenty of practice problems to build confidence.`,
    whatsappMessage: 'Hello Raj, I am interested in learning more about the Data Structures & Algorithms course.',
  },
  {
    id: 5,
    slug: 'dbms-sql',
    title: 'DBMS and SQL',
    shortIntro: 'Understand how data is stored in databases and learn to query it using SQL — a skill used in almost every technology career.',
    icon: 'Database',
    color: 'indigo',
    audience: 'Classes 8–12 (all boards)',
    availability: 'Online & Offline Home Tuition',
    topics: [
      'Introduction to databases and Database Management Systems',
      'Tables, rows, columns and relationships',
      'Primary keys and foreign keys',
      'Writing SQL queries (SELECT, WHERE, ORDER BY)',
      'CRUD operations: Create, Read, Update, Delete',
      'Joins and combining data from multiple tables',
      'Basic database design and management concepts',
    ],
    outcomes: [
      'Understand what databases are and how they work',
      'Write SQL queries to retrieve and manage data',
      'Design simple and well-structured databases',
      'Understand real-world applications of databases',
    ],
    description: `Almost every application — from school management systems to social media platforms — uses a database. 
In this course, you will learn what databases are, how they are structured and how to interact with them using SQL (Structured Query Language). 
Concepts are explained simply and practised hands-on, so you understand databases by actually working with them.`,
    whatsappMessage: 'Hello Raj, I am interested in learning more about the DBMS and SQL course.',
  },
  {
    id: 6,
    slug: 'computer-fundamentals',
    title: 'Computer Fundamentals',
    shortIntro: 'Understand how computers work — from hardware to software to the internet — and build a solid digital foundation.',
    icon: 'Monitor',
    color: 'cyan',
    audience: 'Classes 8–12 (all boards)',
    availability: 'Online & Offline Home Tuition',
    topics: [
      'What is a computer and how it works',
      'Hardware components: CPU, RAM, storage, input/output devices',
      'Software — operating systems and applications',
      'Memory and storage explained simply',
      'How the internet works and internet safety',
      'Basic digital literacy and practical computer skills',
    ],
    outcomes: [
      'Understand how a computer functions at a fundamental level',
      'Identify and explain key hardware and software components',
      'Use a computer confidently for everyday tasks',
      'Understand the basics of the internet and online safety',
    ],
    description: `This course is the perfect starting point for students who are new to computers or want to strengthen their foundational knowledge. 
It covers everything from how a computer works internally to how the internet connects the world. 
Topics are explained in plain, everyday language — no jargon, no confusion. By the end, students will feel comfortable and confident using technology.`,
    whatsappMessage: 'Hello Raj, I am interested in learning more about the Computer Fundamentals course.',
  },
  {
    id: 7,
    slug: 'school-academic-syllabus',
    title: 'School Academic Syllabus',
    shortIntro: 'Get personalised support for your school Computer Science subject — covering all boards, Classes 8–12.',
    icon: 'BookOpen',
    color: 'emerald',
    audience: 'Classes 8–12 (all boards)',
    availability: 'Online & Offline Home Tuition',
    topics: [
      'Computer Science topics as per the school curriculum',
      'CBSE, ICSE and State Board syllabus coverage',
      'Concept explanations aligned with your textbook',
      'Practical exercises and programming tasks',
      'Chapter-wise revision and doubt clearing',
      'School examination preparation and practice',
    ],
    outcomes: [
      'Understand your school computer science syllabus clearly',
      'Perform confidently in school tests and examinations',
      'Clear concept-related doubts with personalised attention',
      'Build a strong foundation for higher studies in computer science',
    ],
    description: `This course is designed specifically to support students with their school Computer Science subject. 
Whether your board is CBSE, ICSE or a State Board, topics are explained in a way that makes your textbook easy to understand. 
Doubt clearing is a big part of every session — students are always encouraged to ask questions until they feel completely comfortable with the topic.`,
    whatsappMessage: 'Hello Raj, I am interested in learning more about the School Academic Syllabus course.',
  },
]

export const COURSE_COLORS = {
  blue:    { bg: 'bg-blue-50',    icon: 'text-blue-600',    border: 'border-blue-100',   badge: 'bg-blue-100 text-blue-700'   },
  purple:  { bg: 'bg-purple-50',  icon: 'text-purple-600',  border: 'border-purple-100', badge: 'bg-purple-100 text-purple-700' },
  orange:  { bg: 'bg-orange-50',  icon: 'text-orange-600',  border: 'border-orange-100', badge: 'bg-orange-100 text-orange-700' },
  teal:    { bg: 'bg-teal-50',    icon: 'text-teal-600',    border: 'border-teal-100',   badge: 'bg-teal-100 text-teal-700'   },
  indigo:  { bg: 'bg-indigo-50',  icon: 'text-indigo-600',  border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-700' },
  cyan:    { bg: 'bg-cyan-50',    icon: 'text-cyan-600',    border: 'border-cyan-100',   badge: 'bg-cyan-100 text-cyan-700'   },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-100',badge: 'bg-emerald-100 text-emerald-700' },
}

export const CONTACT = {
  whatsapp: 'https://wa.me/919748132517',
  defaultWhatsappMessage: 'Hello Raj, I am interested in learning more about your computer science courses.',
  phone: 'tel:+919748132517',
  phoneDisplay: '+91 97481 32517',
  email: 'mailto:rajarshimalo749@gmail.com',
  emailDisplay: 'rajarshimalo749@gmail.com',
}

