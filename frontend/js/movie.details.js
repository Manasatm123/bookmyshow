const url = window.location.href;
console.log(url);
const urlParams = new URLSearchParams(url.split("?")[1]);
console.log(urlParams);
const id=urlParams.get("id");
console.log(id);

async function getmovies() {

    const res = await fetch(`http://localhost:3000/api/details/${id}`);
    const movie=await res.json();
    console.log(movie);
document.getElementById("mainside").innerHTML=`
    
        <div class="main2">
            <div class="leftside">
                <div style="background-color: black; border-radius: 10px;"><img
                        src="${movie.poster}" alt="" height="385"
                        style="border-radius: 10px 10px 0px 0px;">
                    <div style="color: aliceblue; background-color: black; text-align: center;">In Cinemas</div>
                </div>
                <div class="All">
                    <div>
                        <h2>${movie.title} </h2>
                        <div class="rating">
                            <div><img src="${movie.pic1}" alt=""></div>
                            <p>${movie.rating}</p><button>Rate Now</button>
                        </div>
                        <div class="lang">
                            
                            <div>${movie.language}</div>
                            
                        </div>
                        <br>
                        <div style="color: white;">${movie.duration}
                        •
                        ${movie.catogery}
                        •
                        ${movie.certificate}
                        •
                        ${movie.releaseDate}</div>
                        <br>
                        <button class="Tickets">Book Tickets</button>
                    </div>

                </div>

            </div>
        </div>
    

`
    

    
}
getmovies()