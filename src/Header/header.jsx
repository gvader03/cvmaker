import cvLogo from '../assets/cv.png'
import './header.css'

export default function Header() {
    return (
        <div className='header-body'>
            <img src={cvLogo} className="logo react" alt="React logo" />
            <h1>CV MAKER</h1>
        </div>
    )
}

