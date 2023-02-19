const form = document.querySelector("#search")

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = await getData(form.elements.query.value)
    displayImages(data)
    form.elements.query.value = ''
})

const getData = async (searchTerm) => {
    const config = { params: { q: searchTerm } }
    const res = await axios.get("https://api.tvmaze.com/search/shows", config)
    return res.data
}

const displayImages = (data) => {
    for (let tvshow of data) {
        if (tvshow.show.image) {
            const newIMG = document.createElement("img")
            newIMG.setAttribute("src", tvshow.show.image.medium)
            document.body.append(newIMG)
        }
    }
}