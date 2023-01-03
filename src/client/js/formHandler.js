//importing functions for an enhanced UX
import { isValidUrl } from './isValidUrl.js';
import { polarityEnhance } from './userExperience.js';
import { agreementEnhance } from './userExperience.js';
import { subjectivityEnhance } from './userExperience.js';
import { confidenceEnhance } from './userExperience.js';
import { ironyEnhance } from './userExperience.js';

//establishing the display div elements in the DOM
let errorLog = document.getElementById('error');
let polarity = document.getElementById('polarity');
let subjectivity = document.getElementById('subjectivity');
let agreement = document.getElementById('agreement');
let confidence = document.getElementById('confidence');
let irony = document.getElementById('irony');

//handle user input submission
function handleSubmit() {
    // check and validate user input
    let userInput = document.getElementById('url').value;
    if(isValidUrl(userInput)) {
        postData('http://localhost:8000/data', {url: userInput}).then((res) => {
            errorLog.classList.remove("errorColor");
            errorLog.innerHTML = "";
            polarity.innerHTML = 'Polarity: ' + polarityEnhance(res.score_tag);
            subjectivity.innerHTML = 'Subjectivity: ' + subjectivityEnhance(res.subjectivity);
            agreement.innerHTML = 'Agreement: ' + agreementEnhance(res.agreement);
            confidence.innerHTML = confidenceEnhance(res.confidence);
            irony.innerHTML = 'Irony: ' + ironyEnhance(res.irony);
        });
    } else {
        errorLog.classList.add("errorColor");
        errorLog.innerHTML = `Sorry, but "${userInput}" is not a valid URL.`;
        polarity.innerHTML = "";
        subjectivity.innerHTML = "";
        agreement.innerHTML = "";
        confidence.innerHTML = "";
        irony.innerHTML = "";
    }
}

//postData async function
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
            return newData;
    } catch (error) {
        console.log("Error", error);
    }
};

//export for testing...
//testing passed
export { handleSubmit };
