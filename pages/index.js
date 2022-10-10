import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from "../public/logo.png";
import mask from "../public/Mask.png"
import UseWindowWidth from "./hooks/WindowWidth";
import food1 from "../public/food1.png"
import food2 from "../public/food2.png"
import food3 from "../public/food3.png"
import prevArrow from "../public/prevArrow.png"
import nextArrow from "../public/nextArrow.png"
import { useEffect, useState } from 'react';
import geoAltFill from "../public/geo-alt-fill.svg"
import meetingMain from "../public/meeting.png";
import dishMain from "../public/dish.png";
import leftArrow from "../public/arrow-left.png";
import rightArrow from "../public/arrow-right.png";
import scooterMain from "../public/scooter.png";
import line from "../public/line.png"
import googlePlay from "../public/google-play-bad.png";
import appStore from "../public/app-store.png";
import mobile from "../public/mobile.png";
import menu from "../public/list.svg"


export default function Home() {
  const width = UseWindowWidth();
  const [currentIndex, setNewIndex] = useState(0)


  function sliderClick(text) {
    let newIndex = 0;
    if (text == 'prev') {
      if (currentIndex == 0) {
        newIndex = 2;
      } else {
        newIndex = currentIndex - 1;
      }
    }
    else {
      if (currentIndex == 2) {
        newIndex = 0;
      } else {
        newIndex = currentIndex + 1;
      }
    }
    const currentActive = Array.from(document.querySelector('[data-slider-image]').children)
    const indexToRemove = currentActive.findIndex((ele, index) =>
      ele.classList.contains('show-single-image')
    );
    currentActive[newIndex].classList.add('show-single-image');
    currentActive[indexToRemove].classList.remove('show-single-image');
    setNewIndex(newIndex)
  }

  const handleMenu = () => {
    let element = document.getElementsByClassName('navigation-wrapper')[0];
    if (element.classList.contains('navigation-wrapper-small-screen')) {
      element.classList.remove('navigation-wrapper-small-screen')
      element.classList.add('navigation-wrapper-small-screen-hide')
    }
    else {
      element.classList.add('navigation-wrapper-small-screen');
      element.classList.remove('navigation-wrapper-small-screen-hide')
    }
    let timer = setTimeout(() => {
      element.classList.remove('navigation-wrapper-small-screen-hide')
      clearTimeout(timer)
    }, 201);
  }

  useEffect(() => {
    let time = setTimeout(() => {
      sliderClick('next')
    }, 5000);
    return () => clearTimeout(time)
  }, [currentIndex])


  function headerColorChanger() {
    let header = document.getElementsByClassName('header-wrapper')[0]
    if (window.scrollY > 10) {
      if (header.classList.contains('header-color-change')) {
        return;
      }
      header.classList.add('header-color-change')
    }
    if (window.scrollY == 0) {
      header.classList.remove('header-color-change')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => headerColorChanger())

    return () => window.removeEventListener('scroll', () => headerColorChanger)
  })



  return (
    <>
      <div>
        {/* navigation / Header */}
        <nav className='header-wrapper'>

          <div className="menu" onClick={handleMenu}>
            <img src="/list.svg" />
          </div>

          <div style={{ padding: "2rem" }}>
            <Image src={logo} alt="logo" height={50} width={100} />
          </div>
          <div className='navigation-wrapper'>
            <div><a>Menu One</a></div>
            <div><a>Menu Two</a></div>
            <div><a>Menu Three</a></div>
            <div><a>Menu Four</a></div>
          </div>



          <div className='user-profile-wrapper'>
            <div>
              <Image src={mask} alt="user" />
              <span>User</span>
            </div>

          </div>
        </nav>


        {/* /////////////// first page wrapper /////////// */}
        <div className='first-page-wrapper'>

          <div className='search-bar-and-slider-wrapper'>

            <div className='phrase-and-search-bar-container'>
              <div>Discover Restaurant & Delicious Food</div>
              <div className='search-bar-container'>
                <div><input placeholder='search restaurant and food' /></div>
                <div><button>Go</button></div>
              </div>

            </div>

            <div className='location-bar'>
              <div>
                <Image src={geoAltFill} objectFit='contain' objectPosition={"center"} />
              </div>
              <div>
                Hyderabad
              </div>
            </div>

            <div className='slider-image-container'>
              <div className='polka-dot-background'></div>
              <div className='slider-images'>
                <div>
                  <ul data-slider-image>
                    <li className='slide-single-image show-single-image'><Image src={food1} layout='responsive' /></li>
                    <li className='slide-single-image' ><Image src={food2}
                      layout='responsive' /></li>
                    <li className='slide-single-image'><Image src={food3} layout="responsive" /></li>
                  </ul>
                </div>
                <div className='slider-button'>
                  <img src="/prevArrow.png" data-slider-button-prev onClick={() => sliderClick('prev')} />
                  <img src='/nextArrow.png' data-slider-button-next onClick={() => sliderClick('next')} />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='second-page-wrapper'>

          <div className='second-page-child-one'>
            <div className='our-services'>
              <div></div>
              <div><p>Our Services</p></div>
            </div>
            <div className='para-container'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className='second-page-child-two second-page-grid-wrapper'>

            {/* /////  Meeting /////// */}

            <div className='second-page-meeting-wrapper'>
              <div className='meeting-container-flex  second-page-child-container-background'>
                <div className='main-image'>
                  <Image src={meetingMain} alt="people-in-meeting" />
                </div>
                <div className='arrow'>
                  <img src="/arrow-left.png" alt="left-arrow" />
                </div>
                <div className='para'>
                  <div className='para-header'>
                    <div>advanced table</div>
                    booking <img src="/line.png" alt="line" width={100} />
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </div>
              </div>
            </div>

            {/* ///// scooter ///// */}

            <div className='second-page-scooter-wrapper grid-child'>
              <div className='scooter-container-flex  second-page-child-container-background'>
                <div className='main-image'>
                  <Image src={scooterMain} alt="scooter" />
                </div>
                <div className='para'>
                  <div className='para-header'>
                    free home deliveryat your door steps
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  <img src="/line.png" alt="line" width={200} />
                </div>
              </div>
            </div>


            {/* ////// dish ///////  */}

            <div className='second-page-dish-container'>
              <div className='dish-container-flex  second-page-child-container-background'>
                <div className='para'>
                  <div className='para-header'>
                    <div>Food for Free</div>
                    <img src="/line.png" alt="line" width={150} /> 24/7
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

                </div>
                <div className='arrow'>
                  <img src="/arrow-right.png" alt="right-arrow" />
                </div>
                <div className='main-image'>
                  <Image src={dishMain} alt="dish-plate" />
                </div>
              </div>
            </div>

          </div>


        </div>
        {/*
        <div className='third-page-wrapper'>

          <div>
            <div className='heading-wrapper'>
              <p>Download App for</p>
              <p>Exciting  Deals</p>
            </div>
            <div className='phrase-wrapper'>
              <p>Lorem ipsum dolor sit </p>
              <p> amet, consectetur </p>
              <p>adipiscing elit, sed do </p>
            </div>
            <div className='button-wrapper'>
              <div><Image src={googlePlay} /></div>
              <div><Image src={appStore} /></div>
            </div>
          </div>
          <div className='mobile-display-wrapper'>
            <Image src={mobile} objectFit="contain" />
          </div>

        </div>
 */}

      </div>
    </>
  )
}
