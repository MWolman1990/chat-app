const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // Clean the data
    usernameClean = username.trim().toLowerCase()
    roomClean = room.trim().toLowerCase()

    // Validate the data
    if (!usernameClean || !roomClean) {
        return {
            error: 'Username and room are required'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room.trim().toLowerCase() === roomClean && user.username.trim().toLowerCase() === usernameClean
    })
    console.log(existingUser)
    // Validate username
    if (existingUser) {
        console.log('Test')
        return {
            error: 'Username is already taken.'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const existingUser = users.find((user) => user.id === id)

    if (!existingUser) {
        return {
            error: 'There is no user with that id.'
        }
    }

    return existingUser
}

const getUsersInRoom = (room) => {
    roomClean = room.trim().toLowerCase()
    const allUsers = users.filter((user) => user.room.trim().toLowerCase() === roomClean)

    if (allUsers.length === 0) {
        return {
            error: 'There are no users in that room.'
        }
    }

    return allUsers
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}