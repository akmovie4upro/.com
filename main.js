
function searchMovies() {
  var inputted = document.getElementById("inputted").value;
  inputted = inputted.toLowerCase();

  var search_Form = document.getElementById("searchForm");
  search_Form.action = "#" + inputted;
  search_Form.submit();
}



// Navigation bar------------------------

//const navTag = document.getElementById("navTag");
//navTag.innerHTML = ``



// Animated slider -------------------------


const aniSlide = document.getElementById("aniSlide");
aniSlide.innerHTML = ` <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="/img/5.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="/img/7.jpg" class="d-block w-100" alt="...">
        </div>
         <div class="carousel-item">
           <img src="/img/2.jpg" class="d-block w-100" alt="...">
         </div>
          <div class="carousel-item">
            <img src="/img/3.jpg" class="d-block w-100" alt="...">
          </div>
           <div class="carousel-item">
             <img src="/img/4.jpg" class="d-block w-100" alt="...">
           </div>
            <div class="carousel-item">
              <img src="/img/6.jpg" class="d-block w-100" alt="...">
            </div>
      </div>


      
      
    
        
        
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
`;


//navigation bar---------------------------------------------


const navTag = document.getElementById("navTag");
navTag.innerHTML = `  <div class="container-fluid">
      <a class="navbar-brand" href="/.com">AKMovies4U <img src="/img/1.png" alt="" width="30" height="24"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/.com/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/.com/about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/.com/contact.html">Contact Us</a>
          </li>

   	<li class="nav-item">
            <a class="nav-link" href="/liveCricketMatches/liveCricketMatches.html">Live Cricket Matches</a>
          </li>

         <!-- <li class="nav-item">
            <a class="nav-link" href="/blog.html">Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blog.html">Support Us</a>
          </li>-->
        </ul>
        <form class="d-flex" role="search" method="GET" id="searchForm">
          <input class="form-control me-2" value="" type="search" placeholder="Search" aria-label="Search" id="inputted">
          <button class="btn btn-outline-dark" type="submit" onclick="searchMovies()">Search</button>
        </form>
      </div>
    </div>`;
