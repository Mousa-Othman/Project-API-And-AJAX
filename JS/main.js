var myHttp=new XMLHttpRequest();
var myHttp2=new XMLHttpRequest();
var allPost=[];
var allMovieTrend=[];
var buttGetDtat=document.getElementById('getdata');
var buttMovTrend=document.getElementById('movtrend');
buttGetDtat.onclick=getData;
buttMovTrend.onclick=getMoviesTrend;

function getData(){
    myHttp.open('GET','https://jsonplaceholder.typicode.com/posts');
    myHttp.send();

    myHttp.addEventListener('readystatechange',function(){

        if(myHttp.readyState==4&& myHttp.status==200){

            allPost=JSON.parse(myHttp.response);
            displayPost();
        }

    })

}
function getMoviesTrend(){
    myHttp2.open('GET','https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50');
    myHttp2.send();

    myHttp2.addEventListener('readystatechange',function(){

        if(myHttp2.readyState==4&& myHttp2.status==200){

            allMovieTrend=JSON.parse(myHttp2.response).results;
            displayMoviesTrend()
        }

    })

}

function displayPost(){
    var cartoona=``;
    for (var i = 0; i < allPost.length; i++) {
        cartoona+=`  <div class="col-md-3 bg-white">
                <din class="post">
                    <h3>${allPost[i].title}</h3>
                    <p>${allPost[i].body}</p>
                </din>
            </div>
        `
    }
    document.getElementById('postsRow').innerHTML=cartoona;
}

function displayMoviesTrend(){
    var cartoona=``;
    for (var i = 0; i < allMovieTrend.length; i++) {
        cartoona+=`  <div class="col-md-3 bg-white">
                <din class="post">
                    <img class="w-100" src='https://image.tmdb.org/t/p/w500${allMovieTrend[i].poster_path}'/>
                    <h3>${allMovieTrend[i].title}</h3>
                    <p>${allMovieTrend[i].overview}</p>
                </din>
            </div>
        `
    }
    document.getElementById('postsRow').innerHTML=cartoona;
}


