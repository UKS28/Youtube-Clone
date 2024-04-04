const nameList = [
    "Aarav", "Aarohi", "Aashi", "Aayush", "Advik", "Agastya", "Ahana", "Aisha", "Akshara", "Amaira",
    "Ananya", "Anika", "Aniket", "Ansh", "Anvi", "Arjun", "Arya", "Avani", "Avi", "Ayush",
    "Chetan", "Chirag", "Darsh", "Dev", "Devansh", "Dhruv", "Divya", "Esha", "Gaurav", "Hansa",
    "Ishaan", "Ishani", "Ishita", "Jai", "Kabir", "Kaira", "Kavya", "Krish", "Kriti", "Kush",
    "Mahi", "Mehak", "Mira", "Mohit", "Myra", "Nakul", "Naman", "Neha", "Nikita", "Nikhil",
    "Nisha", "Nitya", "Parth", "Prisha", "Rahul", "Raj", "Riya", "Rohan", "Ruhi", "Riyaan",
    "Rudra", "Saisha", "Samaira", "Samar", "Samira", "Sanya", "Sarika", "Shiv", "Shreya", "Sia",
    "Siddharth", "Simran", "Sneha", "Soham", "Tanisha", "Tanvi", "Tanya", "Tara", "Trisha", "Uday",
    "Vaishnavi", "Vansh", "Varun", "Ved", "Veer", "Vidhi", "Vihaan", "Yash", "Yuvraj", "Zoya"
  ];
  
 
export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
  }
  
  export function makeRandomMessage(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }