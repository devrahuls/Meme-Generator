import './components.css'

function Header(){
    return(
        <>
            <header className='header'>
                <img src='./trollFace.svg' className='header--image'></img>
                <h1 className='header--title'>Meme Generator</h1>
                <h4 className='header--project'>React Project 4</h4>
            </header>
        </>
    )
}

export default Header