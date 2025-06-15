# LESSON 02
1. ## Version Control System (VCS)
### 1.1 Definition:
VCS is a tool that helps user manage their changes to code or files over time.
It allows multiple people to work on a project together , keep a history of changes, and go back to previous version when needed
### 1.2 Types of VCS:
There are 3 types:
- **Local:** Keeps track of changes only on the computer.
- **Centralized:** There is one main server that stores the project. Everyone needs to connect to that server to work. If the server is down, no one can work. (Must be online).
For example: work on Google Driver.
- **Distributed:** Everyone has their own copy of the project. Everyone can work offline and any changes made locally can be sent (pushed) later.
For example: work on GitHub


2. ## Git
### 2.1 Definition:
- Git is a tool that helps user track changes in code and work with others on the same project.
- There are three states:
    + **Working Directory**: This is where you create, edit, or delete files on the computer.
    + **Staging Area**: Files go into the staging area before committing, which saves a snapshot of the changes.
    + **Repository**: The place where Git saves the full history of commits.
### 2.2 Git flow:
- **git init**: Start a new Git repository in the current folder.
- **git status**: Show the current state of files.
- **git add < filename >**: Move changes from Working Directory to Staging Area. (git add . to move all changed files to the Staging Area).
- **git commit -m < message >**: Saves the changes and add a message to describe what changes.
- **git push**: push commits from the local repository to a remote repository.
- Git convention:
    + chore: small change, optimize code,..
    + feat: new feature, new test case
    + fix: fix a bug or correct an existing test

3. ## Javascript
- Javascript is a programming language used to make websites interactive. User can run Node.js to execute Javascript code outside browser.
- We can declare variables using var or let. For example:
var firstName = "Sun";
let lastName = "Auto";
- Data type: string, number, bigint, boolean, undefined, null, symbol, and object.
- Comparison operator: >, <, <=, >=, ==, ===, !=, !==
- Unary operator:
    i++ is equal to i=i+1
    i-- is equal to i=i-1
- Conditional: if(condition){
    //execute code
}
- Loops: for(initialization; condition; increment){
    //execute code
}
