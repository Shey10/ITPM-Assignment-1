# IT3040 – Assignment 1  
## Singlish to Sinhala Transliteration Testing using Playwright


This repository contains the automated testing solution for *IT3040 – IT Project Management (Assignment 1)*.  
The project evaluates the *functional accuracy, robustness, and UI behavior* of a real-world web-based transliteration system that converts *Singlish input into Sinhala output*.


## 📌 System Under Test

- *Application Name:* Swift Translator  
- *Application URL:* https://www.swifttranslator.com/  
- *Conversion Type:* Singlish → Sinhala  

### Testing Scope
- Functional accuracy of transliteration  
- Sentence structure handling  
- Mixed Singlish + English inputs  
- Formatting and robustness behavior  
- Real-time UI output updates  


## 🧪 Test Coverage Summary

The test cases were designed strictly according to *Appendix 1 and Appendix 2* of the assignment specification.

### Functional Test Cases
- *Positive functional test cases:* 24  
- *Negative functional test cases:* 10  

Covered areas include:
- Simple, compound, and complex sentences  
- Interrogative and imperative forms  
- Positive and negative sentence structures  
- Past, present, and future tense variations  
- Pronoun and plural usage  
- Daily conversational language  
- Polite and informal phrasing  
- Slang and colloquial expressions  
- Mixed Singlish + English terms (brands, places, abbreviations)  
- Formatting issues (spaces, line breaks, long text inputs)  
- Robustness against incorrect or unexpected input  

### UI Test Case
- *1 UI test case* verifying:
  - Real-time Sinhala output generation while typing Singlish input


## 🛠️ Technology Stack

- *Automation Framework:* Playwright  
- *Programming Language:* JavaScript  
- *Runtime Environment:* Node.js  
- *Browser Used:* Chromium  
- *Operating System:* Windows  




## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (included with Node.js)

Verify installation:
```bash
node -v
npm -v

## ▶️ Running the Tests

##Run all Playwright tests: npx playwright test tests/excelTranslator.spec.js
