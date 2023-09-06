// complete the given function

function isPalindrome(s) {
            // Remove non-alphanumeric characters and convert to lowercase
            s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

            // Compare the original string with its reverse
            return s === s.split('').reverse().join('');
        }

        function checkPalindrome() {
            const inputString = document.getElementById('inputString').value;
            const resultElement = document.getElementById('result');

            if (isPalindrome(inputString)) {
                resultElement.textContent = '"' + inputString + '" is a palindrome.';
            } else {
                resultElement.textContent = '"' + inputString + '" is not a palindrome.';
            }
		}