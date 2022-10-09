const form = document.querySelector('#searchForm');
// const buttonEl = document.querySelector("#submit");

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;

    const config = {params : {q:searchTerm}}
    const res =await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // console.log(res.data);
    // console.log(res.data.image.medium);
    // console.log(searchTerm)

    // const img = document.createElement('IMG');
    // img.src = res.data.image.medium;
    // document.body.append(img);
    // form.elements.query.value = '';
    makeImages(res.data)

})

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image){
        const img = document.createElement("IMG");
        img.src = result.show.image.medium;
        document.body.append(img)
        }
    }
}


// function reload(){
//     reload = location.reload();
// }
// buttonEl.addEventListener('click', reload, true)



