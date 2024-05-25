// Calculate age year in days using function


function ageDays(ageYear){
    const daysInyear = 365
    const ageIndays = ageYear * daysInyear

    return Math.floor(ageIndays)
}

const ageYear = 1
const ageInDays = ageDays(ageYear)

console.log(`Age in days : ${ageInDays}`);
