

async function getmovie() {

    const res = await fetch("http://localhost:3000/api/getmovies");
    const movie=await res.json();
    console.log(movie);
    str=``
  movie.map((data)=>{

    str+=`
    <div class="carddetails">

                <div class="cards"><a href="./pages/movie.details.html?id=${data._id}"><img src="${data.pic}" alt="" width="100%"></a></div>
                <h3>${data.title}</h3>
                <p>${data.catogery}</p>

            </div>
    `
  })
  document.getElementById("cardscontainer").innerHTML=str
    

    
}
getmovie()