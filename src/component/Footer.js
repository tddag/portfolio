import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer class="page-footer font-small special-color-dark pt-4">
                <div class="container">
                <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                    <a class="btn-floating btn-gplus mx-1" href="mailto: danhtam0509@gmail.com">
                        <i class="fab fa-google-plus-g"> </i>
                    </a>
                    </li>
                    <li class="list-inline-item">
                    <a class="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/tam-dang-35ab63118/">
                        <i class="fab fa-linkedin-in"> </i>
                    </a>
                    </li>
                    <li class="list-inline-item">
                    <a class="btn-floating btn-dribbble mx-1"  href="https://github.com/tddag">
                        <i class="fab fa-github"> </i>
                    </a>
                    </li>
                </ul>

                </div>
                <div class="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="#"> tamdang-portfolio.herokuapp.com</a>
                </div>

            </footer>
        )
    }
}

export default Footer
