import Logo from "/chef.png"
export default function Header() {
    return (
        <header>
            <img src={Logo} alt="logo"/>
            <h1>
                Chef Claud
            </h1>
        </header>
    );
}