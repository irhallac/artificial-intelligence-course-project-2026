window.COURSE_DATA = {
  announcements: [
    {
      date: "2026-11-17",
      title: "Course project",
      body: "The optional course project is now available. Read the project options and method, then complete the project plan before producing the full test set. The deadline, submission link, and bonus conversion will be discussed and announced in class."
    }
  ],
  faq: [
    {
      question: "May more than one group choose the same project?",
      answer: "Yes. Several groups may choose the same project area. Each group must prepare its own test cases, state its own main question, and carry out its own experiment."
    },
    {
      question: "May we propose a different project?",
      answer: "Yes. Submit the project plan no later than 1 December 2026. The proposal must test a specific LLM or VLM reasoning ability using checkable answers, controlled matched conditions, automatic scoring, and error analysis. Approval is required before producing the full test set."
    },
    {
      question: "Do we need to develop another AI system?",
      answer: "No. You will test existing LLMs or VLMs. The small answer program uses ordinary fixed rules to create or check the answer key; it does not learn from data or interpret language."
    },
    {
      question: "Must we test both Turkish and English?",
      answer: "Yes. Every base case must have matched Turkish and English versions containing the same facts and the same correct answer."
    },
    {
      question: "How many test cases are required?",
      answer: "The default minimum is 50 base cases. Every condition must use those same cases. A different test-set size requires approval in the project plan."
    },
    {
      question: "How many models must we use?",
      answer: "Choose a small number that the group can run consistently. A Turkish or Turkish-adapted model and a multilingual model form a useful text comparison, but another combination may be proposed. The visual presentation conditions must use the same VLM."
    },
    {
      question: "Is testing a few prompts enough?",
      answer: "No. Examples help explain the task, but the result must come from the full fixed test set. Report correct and total counts, accuracy, invalid answers, and repeated error types."
    },
    {
      question: "What happens to an invalid model answer?",
      answer: "Missing, invalid, and unscorable answers remain in the total and are scored as incorrect. Keep the original response and report the invalid count separately."
    },
    {
      question: "Is the README the final report?",
      answer: "Yes. The repository README is a concise paper-style report. A separate PDF is not required."
    },
    {
      question: "What is required in the video?",
      answer: "The video must be 5–10 minutes. Every group member must appear on camera and explain part of the project. Show the research question, answer program, main result, one error, and conclusion."
    },
    {
      question: "Do we have to improve the model?",
      answer: "No. The main experiment and error analysis form a complete project. An improvement study is optional. If conducted, it must be motivated by the observed errors and evaluated on the same unchanged test set."
    },
    {
      question: "May we use AI assistants while building the project?",
      answer: "Yes, but the group remains responsible for the test cases, code, results, and claims. State how AI assistants were used, and never commit API keys or personal data."
    },
    {
      question: "Does completing the project guarantee a publication?",
      answer: "No. A careful project may produce results or data worth developing further, but publication requires additional validation and a separate decision."
    }
  ]
};
