const input = document.getElementById('userinput') as HTMLInputElement;
const button = document.getElementById('adduser') as HTMLElement;
const result = document.getElementById('result') as HTMLElement;

let users: string[] = [];

function addUser(inputValue: string): void {
    users.push(inputValue);
}

function updateResult(): void {
    result.innerHTML = ''; 

    users.forEach((user, index) => {
        const userElement = document.createElement('p');
        userElement.textContent = `${index + 1}. ${user}`;
        result.appendChild(userElement);
    });
}

function handleButtonClick(): void {
    const inputValue = input.value.trim(); 

    if (inputValue === '') {
        alert("Belum menginputkan apapun!");
        return;
    }

    addUser(inputValue);   
    updateResult();        
    console.log(users);    

    input.value = '';      
}

function setupEventListeners(): void {
    button.addEventListener('click', handleButtonClick);
}

setupEventListeners();
