export const quizLevels = [
  {
    id: 'class-10',
    label: 'Class 10',
    subjects: [
      { id: 'mathematics', name: 'Mathematics' },
      { id: 'science', name: 'Science' },
      { id: 'social-science', name: 'Social Science' },
      { id: 'english', name: 'English' }
    ]
  },
  {
    id: 'class-11',
    label: 'Class 11',
    subjects: [
      { id: 'mathematics', name: 'Mathematics' },
      { id: 'physics', name: 'Physics' },
      { id: 'chemistry', name: 'Chemistry' },
      { id: 'biology', name: 'Biology' },
      { id: 'economics', name: 'Economics' },
      { id: 'accountancy', name: 'Accountancy' }
    ]
  },
  {
    id: 'class-12',
    label: 'Class 12',
    subjects: [
      { id: 'mathematics', name: 'Mathematics' },
      { id: 'physics', name: 'Physics' },
      { id: 'chemistry', name: 'Chemistry' },
      { id: 'biology', name: 'Biology' },
      { id: 'economics', name: 'Economics' },
      { id: 'accountancy', name: 'Accountancy' }
    ]
  },
  {
    id: 'undergraduate',
    label: 'Undergraduate',
    subjects: [
      { id: 'mathematics', name: 'Mathematics' },
      { id: 'physics', name: 'Physics' },
      { id: 'chemistry', name: 'Chemistry' },
      { id: 'computer-science', name: 'Computer Science' },
      { id: 'economics', name: 'Economics' },
      { id: 'psychology', name: 'Psychology' }
    ]
  },
  {
    id: 'postgraduate',
    label: 'Postgraduate',
    subjects: [
      { id: 'computer-science', name: 'Computer Science' },
      { id: 'data-science', name: 'Data Science' },
      { id: 'management', name: 'Business Management' },
      { id: 'research-methods', name: 'Research Methods' }
    ]
  }
];

export const quizQuestionBank = {
  mathematics: [
    {
      prompt: 'What is the value of 3² + 4²?',
      options: ['7', '12', '25', '49'],
      answer: 2
    },
    {
      prompt: 'Which of these is a prime number?',
      options: ['21', '27', '29', '33'],
      answer: 2
    },
    {
      prompt: 'What is the slope of a horizontal line?',
      options: ['0', '1', 'Undefined', '-1'],
      answer: 0
    }
  ],
  science: [
    {
      prompt: 'Which gas is released when an acid reacts with a metal?',
      options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon dioxide'],
      answer: 1
    },
    {
      prompt: 'What is the basic structural unit of life?',
      options: ['Atom', 'Tissue', 'Cell', 'Organ'],
      answer: 2
    },
    {
      prompt: 'Which component of blood carries oxygen?',
      options: ['Platelets', 'Red blood cells', 'Plasma', 'White blood cells'],
      answer: 1
    }
  ],
  'social-science': [
    {
      prompt: 'What is the main purpose of a constitution?',
      options: ['To set rules for governing a country', 'To list every citizen', 'To control weather', 'To set market prices'],
      answer: 0
    },
    {
      prompt: 'Which of these is a renewable resource?',
      options: ['Coal', 'Petroleum', 'Solar energy', 'Natural gas'],
      answer: 2
    },
    {
      prompt: 'A government elected by citizens is known as a:',
      options: ['Monarchy', 'Democracy', 'Dictatorship', 'Colony'],
      answer: 1
    }
  ],
  english: [
    {
      prompt: 'Choose the correctly punctuated sentence.',
      options: ['Where are you going.', 'Where are you going?', 'Where are you going,', 'Where are you going!'],
      answer: 1
    },
    {
      prompt: 'Which word is a synonym for “brief”?',
      options: ['Lengthy', 'Concise', 'Distant', 'Careless'],
      answer: 1
    },
    {
      prompt: 'Identify the verb: “The students read quietly.”',
      options: ['The', 'students', 'read', 'quietly'],
      answer: 2
    }
  ],
  physics: [
    {
      prompt: 'What is the SI unit of force?',
      options: ['Joule', 'Watt', 'Newton', 'Pascal'],
      answer: 2
    },
    {
      prompt: 'Speed is calculated as:',
      options: ['Distance × time', 'Distance ÷ time', 'Time ÷ distance', 'Mass × acceleration'],
      answer: 1
    },
    {
      prompt: 'Which quantity is conserved in an isolated system during a collision?',
      options: ['Momentum', 'Temperature', 'Volume', 'Density'],
      answer: 0
    }
  ],
  chemistry: [
    {
      prompt: 'What is the atomic number of carbon?',
      options: ['4', '6', '8', '12'],
      answer: 1
    },
    {
      prompt: 'A solution with pH 3 is:',
      options: ['Acidic', 'Neutral', 'Basic', 'A metal'],
      answer: 0
    },
    {
      prompt: 'Which particle has a negative charge?',
      options: ['Proton', 'Neutron', 'Electron', 'Nucleus'],
      answer: 2
    }
  ],
  biology: [
    {
      prompt: 'Which organelle is known as the cell’s energy-producing center?',
      options: ['Nucleus', 'Mitochondrion', 'Ribosome', 'Vacuole'],
      answer: 1
    },
    {
      prompt: 'Which molecule carries genetic information?',
      options: ['DNA', 'Glucose', 'Starch', 'Water'],
      answer: 0
    },
    {
      prompt: 'Photosynthesis primarily occurs in the:',
      options: ['Mitochondria', 'Chloroplasts', 'Nucleus', 'Cell membrane'],
      answer: 1
    }
  ],
  economics: [
    {
      prompt: 'What usually happens to demand when a product’s price falls, all else equal?',
      options: ['Quantity demanded tends to rise', 'Quantity demanded tends to fall', 'Supply disappears', 'Demand becomes zero'],
      answer: 0
    },
    {
      prompt: 'GDP measures the value of:',
      options: ['All goods ever produced', 'Final goods and services produced within a country over a period', 'Only exported goods', 'A country’s natural resources'],
      answer: 1
    },
    {
      prompt: 'Inflation is a sustained increase in the:',
      options: ['General price level', 'Value of one company', 'Population only', 'Quantity of exports'],
      answer: 0
    }
  ],
  accountancy: [
    {
      prompt: 'The accounting equation is:',
      options: ['Assets = Liabilities + Equity', 'Assets = Revenue - Expenses', 'Equity = Assets + Liabilities', 'Liabilities = Assets + Equity'],
      answer: 0
    },
    {
      prompt: 'A cash book records:',
      options: ['Only credit sales', 'Cash and bank transactions', 'Only inventory', 'Employee attendance'],
      answer: 1
    },
    {
      prompt: 'Which account represents amounts owed by a business?',
      options: ['Asset', 'Liability', 'Revenue', 'Drawings'],
      answer: 1
    }
  ],
  'computer-science': [
    {
      prompt: 'Which data structure follows the First In, First Out principle?',
      options: ['Stack', 'Queue', 'Tree', 'Graph'],
      answer: 1
    },
    {
      prompt: 'Which SQL command retrieves records from a table?',
      options: ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
      answer: 0
    },
    {
      prompt: 'What is the average time complexity of binary search on a sorted list?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1) always'],
      answer: 1
    }
  ],
  psychology: [
    {
      prompt: 'The study of observable behavior and mental processes is called:',
      options: ['Geology', 'Psychology', 'Ecology', 'Sociolinguistics'],
      answer: 1
    },
    {
      prompt: 'In classical conditioning, learning occurs through:',
      options: ['Association between stimuli', 'Trial balance', 'Random sampling only', 'Genetic mutation'],
      answer: 0
    },
    {
      prompt: 'A hypothesis is best described as:',
      options: ['A testable proposed explanation', 'A final result', 'A list of references', 'A type of survey response'],
      answer: 0
    }
  ],
  'data-science': [
    {
      prompt: 'Which measure is the arithmetic average of a set of values?',
      options: ['Median', 'Mode', 'Mean', 'Range'],
      answer: 2
    },
    {
      prompt: 'What is the purpose of a test dataset in machine learning?',
      options: ['To evaluate model performance on unseen data', 'To increase the number of labels', 'To replace training data', 'To remove all features'],
      answer: 0
    },
    {
      prompt: 'Which chart is commonly used to show the distribution of a numeric variable?',
      options: ['Histogram', 'Network diagram', 'Flowchart', 'Gantt chart'],
      answer: 0
    }
  ],
  management: [
    {
      prompt: 'Which activity is part of strategic management?',
      options: ['Setting long-term organizational direction', 'Recording daily attendance only', 'Formatting a single invoice', 'Scheduling one meeting'],
      answer: 0
    },
    {
      prompt: 'A SWOT analysis examines strengths, weaknesses, opportunities, and:',
      options: ['Targets', 'Threats', 'Turnover', 'Technology only'],
      answer: 1
    },
    {
      prompt: 'Delegation means:',
      options: ['Assigning responsibility and authority to another person', 'Removing all team goals', 'Avoiding decisions', 'Combining unrelated budgets'],
      answer: 0
    }
  ],
  'research-methods': [
    {
      prompt: 'A literature review primarily helps a researcher to:',
      options: ['Understand existing work and identify gaps', 'Guarantee a result', 'Replace collecting evidence', 'Choose a paper size'],
      answer: 0
    },
    {
      prompt: 'A representative sample should:',
      options: ['Reflect important characteristics of the population', 'Always include every person', 'Be chosen only for convenience', 'Exclude variation'],
      answer: 0
    },
    {
      prompt: 'In an experiment, the variable deliberately changed is the:',
      options: ['Dependent variable', 'Independent variable', 'Control result', 'Sample size'],
      answer: 1
    }
  ]
};
