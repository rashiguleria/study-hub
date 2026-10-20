const schoolResource = 'https://ncert.nic.in/textbook.php';

export const studyLevels = [
  {
    id: 'class-10',
    label: 'Class 10',
    group: 'School',
    subjects: [
      {
        id: 'mathematics',
        name: 'Mathematics',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/math',
        topics: ['Real Numbers and Polynomials', 'Linear Equations and Quadratic Equations', 'Triangles and Trigonometry']
      },
      {
        id: 'science',
        name: 'Science',
        source: 'NCERT',
        url: schoolResource,
        topics: ['Chemical Reactions and Equations', 'Life Processes', 'Light and Electricity']
      },
      {
        id: 'social-science',
        name: 'Social Science',
        source: 'NCERT',
        url: schoolResource,
        topics: ['Resources and Development', 'Nationalism in India', 'Democratic Politics']
      },
      {
        id: 'english',
        name: 'English',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/ela',
        topics: ['Reading Comprehension', 'Grammar and Writing', 'Literature and Analysis']
      }
    ]
  },
  {
    id: 'class-11',
    label: 'Class 11',
    group: 'School',
    subjects: [
      {
        id: 'mathematics',
        name: 'Mathematics',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/math',
        topics: ['Sets and Functions', 'Trigonometry', 'Sequences and Series']
      },
      {
        id: 'physics',
        name: 'Physics',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/science/physics',
        topics: ['Units and Measurements', 'Motion in a Straight Line', 'Laws of Motion']
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/science/chemistry',
        topics: ['Atomic Structure', 'Chemical Bonding', 'Thermodynamics']
      },
      {
        id: 'biology',
        name: 'Biology',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/science/biology',
        topics: ['Cell Structure', 'Plant Physiology', 'Human Physiology']
      },
      {
        id: 'economics',
        name: 'Economics',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/economics-finance-domain',
        topics: ['Introduction to Economics', 'Statistics for Economics', 'Indian Economic Development']
      },
      {
        id: 'accountancy',
        name: 'Accountancy',
        source: 'NCERT',
        url: schoolResource,
        topics: ['Introduction to Accounting', 'Recording Transactions', 'Bank Reconciliation']
      }
    ]
  },
  {
    id: 'class-12',
    label: 'Class 12',
    group: 'School',
    subjects: [
      {
        id: 'mathematics',
        name: 'Mathematics',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/math',
        topics: ['Relations and Functions', 'Matrices and Determinants', 'Calculus']
      },
      {
        id: 'physics',
        name: 'Physics',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/science/physics',
        topics: ['Electric Charges and Fields', 'Current Electricity', 'Optics']
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/science/chemistry',
        topics: ['Solutions', 'Electrochemistry', 'Organic Chemistry']
      },
      {
        id: 'biology',
        name: 'Biology',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/science/biology',
        topics: ['Reproduction', 'Genetics and Evolution', 'Biotechnology']
      },
      {
        id: 'economics',
        name: 'Economics',
        source: 'Khan Academy',
        url: 'https://www.khanacademy.org/economics-finance-domain',
        topics: ['National Income', 'Money and Banking', 'Government Budget']
      },
      {
        id: 'accountancy',
        name: 'Accountancy',
        source: 'NCERT',
        url: schoolResource,
        topics: ['Partnership Accounts', 'Company Accounts', 'Cash Flow Statements']
      }
    ]
  },
  {
    id: 'undergraduate',
    label: 'Undergraduate',
    group: 'College',
    subjects: [
      {
        id: 'mathematics',
        name: 'Mathematics',
        source: 'OpenStax',
        url: 'https://openstax.org/subjects/math',
        topics: ['Calculus', 'Linear Algebra', 'Probability and Statistics']
      },
      {
        id: 'physics',
        name: 'Physics',
        source: 'OpenStax',
        url: 'https://openstax.org/subjects/science',
        topics: ['Classical Mechanics', 'Electromagnetism', 'Modern Physics']
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        source: 'OpenStax',
        url: 'https://openstax.org/subjects/science',
        topics: ['Chemical Principles', 'Organic Chemistry', 'Analytical Chemistry']
      },
      {
        id: 'computer-science',
        name: 'Computer Science',
        source: 'GeeksforGeeks',
        url: 'https://www.geeksforgeeks.org/computer-science/',
        topics: ['Data Structures and Algorithms', 'Database Management Systems', 'Operating Systems']
      },
      {
        id: 'economics',
        name: 'Economics',
        source: 'OpenStax',
        url: 'https://openstax.org/subjects/business',
        topics: ['Microeconomics', 'Macroeconomics', 'Econometrics']
      },
      {
        id: 'psychology',
        name: 'Psychology',
        source: 'OpenStax',
        url: 'https://openstax.org/subjects/social-sciences',
        topics: ['Introduction to Psychology', 'Cognition and Learning', 'Research Methods']
      }
    ]
  },
  {
    id: 'postgraduate',
    label: 'Postgraduate',
    group: 'College',
    subjects: [
      {
        id: 'computer-science',
        name: 'Computer Science',
        source: 'GeeksforGeeks',
        url: 'https://www.geeksforgeeks.org/computer-science/',
        topics: ['Advanced Algorithms', 'Distributed Systems', 'Artificial Intelligence']
      },
      {
        id: 'data-science',
        name: 'Data Science',
        source: 'Kaggle Learn',
        url: 'https://www.kaggle.com/learn',
        topics: ['Data Cleaning', 'Machine Learning', 'Data Visualization']
      },
      {
        id: 'management',
        name: 'Business Management',
        source: 'OpenStax',
        url: 'https://openstax.org/subjects/business',
        topics: ['Strategic Management', 'Organizational Behaviour', 'Financial Management']
      },
      {
        id: 'research-methods',
        name: 'Research Methods',
        source: 'USC Libraries',
        url: 'https://libguides.usc.edu/writingguide/researchdesign',
        topics: ['Research Design', 'Literature Review', 'Data Collection and Analysis']
      }
    ]
  }
];

export const studyMaterials = studyLevels.flatMap((level) => level.subjects.flatMap((subject) => (
  subject.topics.map((topic, index) => ({
    id: `${level.id}-${subject.id}-${index}`,
    levelId: level.id,
    levelLabel: level.label,
    subjectId: subject.id,
    subjectName: subject.name,
    topic,
    source: subject.source,
    url: subject.url
  }))
)));
