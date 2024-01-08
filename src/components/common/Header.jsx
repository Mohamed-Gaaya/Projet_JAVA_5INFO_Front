
const Header = ({ title }) => {
    return (
        <header className="header">
            <div className="overlay"></div>
            <div className="container">
                <h1 className="header-title text-center" style={{    color: 'white',
    position: 'absolute',
    left:' 50%',
    top: '50%',
    width: '100%',
    transform: 'translate(-50%,-50%)' }}>
                    {title}
                </h1>
            </div>
        </header>
    );
};

export default Header;
