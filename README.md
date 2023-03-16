# Bigbang- Generate Array of bigbang
To Run this script, should follow these steps:

1. Install Node.js on your device if it is not already installed. Can download it from the official Node.js website: https://nodejs.org/en/download/

// The compiler is written in TypeScript. Hence need a JavaScript runtime that gives access to the file system if want to create files and update files, which is why  need node. js

2. Create a new file in text editor such as Notepad++ , website: https://notepad-plus-plus.org/downloads/ and copy the code above into it.
3. Save the file with a .ts extension, for example bigbang.ts.
4. Open a terminal or command prompt and navigate to the directory where you saved the file.

//Can open the properties of the file and copy the location. After that need to add cd infront of the location that you copied. For example: cd C:\Users\szhee\Downloads

5. Install the required dependencies by running the following command: npm init -y && npm install typescript
6. Compile the TypeScript code into JavaScript by running the following command: npx tsc bigbang.ts
7. Run the script by running the following command:node bigbang.js

After that, this will generate an output.json file in the same directory, containing the array of numbers and words. 
