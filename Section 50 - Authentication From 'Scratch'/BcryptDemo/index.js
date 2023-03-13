const bcrypt = require('bcrypt');

// const hashPassword = async(pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hashedPw = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hashedPw);
// }

const hashPassword = async(pw) => {
    const hashedPw = await bcrypt.hash(pw, 12);
    //console.log(salt);
    console.log(hashedPw);
}

const login = async(pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log('SUCCESSFULLY LOGGED YOU IN!')
    } else {
        console.log('INCORRECT!')
    }
}

hashPassword('monkey');
login('monkey', '$2b$12$RM2M8QEG68KSiqV5.E4v/euN3UgmF5/.5myCNXqOwtjiKNGCRmiRa')