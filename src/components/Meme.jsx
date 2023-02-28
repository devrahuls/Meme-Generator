import React from 'react'
import './components.css'

function Meme(){

    const [memeImg , setMemeImg] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImg(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMemeImg( prevMeme =>({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleClick(event){
        const{name , type, value} = event.target
        setMemeImg(prevMemeImg => {return{
            ...prevMemeImg,
            [name] : value
        }})
    }

    return(
        <>

            <main>
            
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name='topText'
                    value={memeImg.topText}
                    onChange = {handleClick}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name='bottomText'
                    value={memeImg.bottomText}
                    onChange = {handleClick}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImg}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className='meme'>
                <img src={memeImg.randomImage} className = "meme--image"/>
                <h2 className='meme--text top'>{memeImg.topText}</h2>
                <h2 className='meme--text bottom'>{memeImg.bottomText}</h2>
            </div>
        </main>
        </>
    )
}

export default Meme