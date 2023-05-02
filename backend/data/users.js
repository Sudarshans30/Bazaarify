import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email : 'sudarshan@test.com',
        password: bcrypt.hashSync('abcdef',10),
        isSeller: true

    },
    {
        name: 'Majid',
        email : 'Majid@test.com',
        password: bcrypt.hashSync('abcdef',10),
        

    },
    {
        name: 'John Doe',
        email : 'john@test.com',
        password: bcrypt.hashSync('abcdef',10),
        

    }
]

export default users