const navbarComponent = (page) => {
    return `<div class="container">
        <div class="navlogo-for-small d-block d-lg-none"><img role="button" src="./navbar/navbarImages/shrine-black.svg" alt="Shrine Black"></div>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 w-100 d-lg-flex justify-content-lg-between align-items-lg-center">
                <div class="d-lg-flex gap-3 gap-xl-4 align-items-lg-center">
                    <li class="nav-item position-relative">
                        <a class="nav-link" href="#">HOME</a>
                        <span class="hover-long-line nav-hover-lines position-absolute "></span>
                        <span class="hover-short-line nav-hover-lines position-absolute "></span>
                    </li>
                    <li class="nav-item position-relative">
                        <a class="nav-link" href="#">PAGES</a>
                        <span class="hover-long-line nav-hover-lines position-absolute "></span>
                        <span class="hover-short-line nav-hover-lines position-absolute "></span>
                    </li>
                    <li class="nav-item position-relative">
                        <a class="nav-link" href="#">BLOG</a>
                        <span class="hover-long-line nav-hover-lines position-absolute "></span>
                        <span class="hover-short-line nav-hover-lines position-absolute "></span>
                    </li>
                    <li class="nav-item position-relative">
                        <a class="nav-link" href="#">DONATION</a>
                        <span class="hover-long-line nav-hover-lines position-absolute "></span>
                        <span class="hover-short-line nav-hover-lines position-absolute "></span>
                    </li>
                </div>
                <div class="navlogo-for-large d-none d-lg-flex  bg-white align-items-lg-center position-absolute px-2 px-xl-5">
                    <img role="button" src="./navbar/navbarImages/shrine-black.svg" alt="Shrine Black">
                </div>
                <div class="d-lg-flex gap-3 gap-xl-4 align-items-lg-center">
                    <li class="nav-item position-relative">
                        <a class="nav-link" href="#">SHOP</a>
                        <span class="hover-long-line nav-hover-lines position-absolute "></span>
                        <span class="hover-short-line nav-hover-lines position-absolute "></span>
                    </li>
                    <li class="nav-item position-relative">
                        <a class="nav-link" href="#">CONTACTS</a>
                        <span class="hover-long-line nav-hover-lines position-absolute "></span>
                        <span class="hover-short-line nav-hover-lines position-absolute "></span>
                    </li>
                    <div class="search-icon">
                        <a href="#"><img src="./navbar/navbarImages/search.svg" alt="search"></a>
                    </div>
                    <div class="bag-icon position-relative">
                        <a href="#"><img class="mt-3 mt-lg-auto" src="./navbar/navbarImages/bag.svg" alt="Bag"></a>
                        <span
                            class="d-none d-lg-inline-block text-white text-center  position-absolute bag-number">2</span>
                    </div>
                </div>
            </ul>
        </div>
    </div>`
};

export default navbarComponent;