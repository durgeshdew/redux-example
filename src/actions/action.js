//birthdayGreeting  = > action creator
// annonymos object is the action
//action has type payload
export const birthDayGreeting = (text) => {
    return {
        type: 'BIRTHDAY',
        text
    }
}
export const weddingGreeting = (text) => {
    return {
        type: 'WEDDING',
        text
    }
}