import HeaderCard from "./HeaderCard"
import './Header.css'


function Header() {

    return(
        <>
        <div className='topnav'>
            <HeaderCard name={'Alistar Stefan'}/>
            <HeaderCard name={'Home'}/>
            <HeaderCard name={'About me'}/>
            <HeaderCard name={'Experience and Education'}/>
            <HeaderCard name={'Contact'}/>
        </div>
        </>
    )

}

export default Header