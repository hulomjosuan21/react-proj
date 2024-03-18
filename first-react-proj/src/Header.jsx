import Food from "./Food";

function Header(){
    return(
        <header>
            <h1>My First Website using React</h1>
            <nav>
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="./">About</a></li>
                    <li><a href="./">Services</a></li>
                    <li><a href="./">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
            <Food/>
        </header>
    );
}

export default Header;