function isPalindrome(text) {
    // Ubah semua huruf menjadi huruf kecil
    text = text.toLowerCase();
  
    for (let i = 0; i < Math.floor(text.length / 2); i++) {
      if (text[i] !== text[text.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Masukkan kata: ', (kata) => {
    if (isPalindrome(kata)) {
      console.log(`${kata} ini adalah palindrome`);
    } else {
      console.log(`${kata} bukan palindrome`);
    }
    rl.close();
  });
  