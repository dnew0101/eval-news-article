//I'm using a sequence of Switch/Case protocols to create a more meaningful user experience
//the different definitions were pulled from MeaningCloud's website, nearly verbatim
const polarityEnhance = (scoreTag) => {
    let result;
    switch (scoreTag){
        case 'P+':
            result = 'Strong Positive';
            break;
        case 'P':
            result = 'Positive';
            break;
        case 'NEW':
            result = 'Neutral';
            break;
        case 'N':
            result = 'Negative';
            break;
        case 'N+':
            result = 'Strong Negative';
            break;
        case 'NONE':
            result = 'Without Polarity';
    }
    return result;
}

const agreementEnhance = (agreement) => {
    let result;
    switch (agreement) {
        case 'AGREEMENT':
            result = 'The different elements have the same polarity...';
            break;
        case 'DISAGREEMENT':
            result = `There is disagreement between the different elements' polarity...`
            break;
    }
    return result;
}

const subjectivityEnhance = (subjectivity) => {
    let result;
    switch (subjectivity) {
        case 'OBJECTIVE':
            result = `The text does not have any subjectivity marks...`;
            break;
        case 'SUBJECTIVE':
            result = `The text has subjective marks...`;
            break;
    }
    return result;
}

//returned 'undefined' as a Switch/Case protocol, so changed it to if statements
const confidenceEnhance = (confidence) => {
    let result;
    if (confidence <= 25) {
        result = `Confidence Score: ${confidence}, the Sentiment Analysis is not very confident in its findings...`;
    }
    if (confidence >= 26 && confidence <= 50) {
        result = `Confidence Score: ${confidence}, the Sentiment Analysis is uncertain of its findings...`;
    }
    if (confidence >= 51 && confidence <= 75) {
        result = `Confidence Score: ${confidence}, the Sentiment Analysis is somewhat confident in its findings...`;
    }
    if (confidence >= 76 && confidence < 90) {
        result = `Confidence Score: ${confidence}, the Sentiment Analysis is confident in its findings...`;
    }
    if (confidence >= 90) {
        result = `Confidence Score: ${confidence}, the Sentiment Analysis is very confident in its findings...`;
    }
    return result;
}

const ironyEnhance = (irony) => {
    let result;
    switch (irony) {
        case 'NONIRONIC':
            result = `The text does not have any irony marks...`;
        case 'IRONIC':
            result = `The text has irony marks...`
    }
    return result;
}

export { polarityEnhance }
export { agreementEnhance }
export { subjectivityEnhance }
export { confidenceEnhance }
export { ironyEnhance }