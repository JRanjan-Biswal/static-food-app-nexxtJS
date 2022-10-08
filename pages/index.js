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
import meetingMain from "../public/meeting-main.png";
import dishMain from "../public/dish-main-logo.png";
import leftArrow from "../public/arrow-left.png";
import rightArrow from "../public/arroow-right.png";
import scooterMain from "../public/scooter-main.png";
import line from "../public/line.png"
import googlePlay from "../public/google-play-bad.png";
import appStore from "../public/app-store.png";
import mobile from "../public/mobile.png";


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
    // currentActive[newIndex].classList.add('slide-out-image');
    currentActive[newIndex].classList.add('show-single-image');
    currentActive[indexToRemove].classList.remove('show-single-image');
    setNewIndex(newIndex)
  }

  return (
    <>
      <div>
        <div className='first-page-wrapper'>

          {/* navigation / Header */}
          <nav className='header-wrapper'>

            <div className='navigation-wrapper'>
              <div><Image src={logo} alt="logo" /></div>
              <div><a>Menu One</a></div>
              <div><a>Menu Two</a></div>
              <div><a>Menu Three</a></div>
              <div><a>Menu Four</a></div>
            </div>

            <div className='user-profile-wrapper'>
              <div>
                <Image src={mask} alt="mask" />
                <span>User</span>
              </div>
            </div>
          </nav>

          <div className='search-bar-and-slider-wrapper'>

            <div className='phrase-and-search-bar-container'>
              <div>Discover Restaurant & Delicious Food</div>
              <div className='search-bar-container'>
                <div><input placeholder='search restaurant and food' /></div>
                <div><button>Go</button></div>
              </div>
              <div className='location-bar'>
                <div>
                  <Image src={geoAltFill} objectFit='contain' objectPosition={"center"} />
                </div>
                <div>
                  Hyderabad
                </div>
              </div>
            </div>

            <div className='slider-image-container'>
              <div className='polka-dot-background'></div>
              <div className='slider-images'>
                <div>
                  <ul data-slider-image>
                    <li className='slide-single-image show-single-image'><Image src={food1} width={600} height={600} /></li>
                    <li className='slide-single-image' ><Image src={food2} width={600} height={600} /></li>
                    <li className='slide-single-image'><Image src={food3} width={600} height={600} /></li>
                  </ul>
                </div>
                <div className='slider-button'>
                  <Image src={prevArrow} data-slider-button-prev onClick={() => sliderClick('prev')} />
                  <Image src={nextArrow} data-slider-button-next onClick={() => sliderClick('next')} />
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

          <div className='second-page-child-two'>

            <div className='meeting-dish-image-container'>
              <div className='meeting-container'>
                <div>
                  <Image src={meetingMain} objectFit={'contain'} />
                </div>
                <div>
                  <Image src={leftArrow} width={100}/>
                </div>

                <div>
                  <div>
                    <p>advanced table</p>
                    <p>booking<Image src={line} width={100} /></p>
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                  <p> amet, consectetur </p>
                  <p>adipiscing elit, sed do </p>
                </div>

              </div>
              <div className='dish-container'>
                <div>
                  <div>
                    <p>Food for Free</p>
                    <p><Image src={line} width={150} />24/7</p>
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                  <p> amet, consectetur </p>
                  <p>adipiscing elit, sed do </p>
                </div>
                <div>
                  <Image src={rightArrow} width={100}/>
                </div>
                <div>
                  <Image src={dishMain} objectFit={'contain'} />
                </div>
              </div>
            </div>

            <div className='scooter-container'>
              <div>
                <Image src={scooterMain} objectFit="contain" />
                <div>
                  <div>
                    <p>free Home Delivery</p>
                  </div>
                  <p>Lorem ipsum dolor sit </p>
                  <p> amet, consectetur </p>
                  <p>adipiscing elit, sed do </p>
                  <p><Image src={line} width={250} /></p>
                </div>
              </div>
            </div>

          </div>

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
                <div><Image src={googlePlay}/></div>
                <div><Image src={appStore} /></div>
              </div>
            </div>
            <div className='mobile-display-wrapper'>
              <Image src={mobile} objectFit="contain" />
            </div>

          </div>

        </div>


      </div>
    </>
  )
}
