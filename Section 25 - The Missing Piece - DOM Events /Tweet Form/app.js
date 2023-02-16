const form = document.querySelector('#tweetForm')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const usernameItem = form.elements.user
    const tweetItem = form.elements.tweet

    createTweet(usernameItem, tweetItem)
})

const createTweet = (usernameItem, tweetItem) => {
    const userBold = document.createElement('b')
    userBold.innerText = usernameItem.value;

    const newTweet = document.createElement('li')
    newTweet.append(userBold)
    newTweet.append(' - ' + tweetItem.value)

    const list = document.querySelector('#tweetList')
    tweetList.append(newTweet)

    usernameItem.value = ""
    tweetItem.value = ""
}