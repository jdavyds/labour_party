import React, { useEffect, useState } from 'react'
import style from './../styles/home.module.css'
import Header from './Header'
import Footer from './Footer'
import hero1 from './../assets/contest.png'
import hero2 from './../assets/vote.png'
import hero3 from './../assets/vol.png'
import hero4 from './../assets/donate.png'
import policy1 from './../assets/policy1.png'
import policy2 from './../assets/policy2.png'
import policy3 from './../assets/policy3.png'
import policy4 from './../assets/policy4.png'
import policy5 from './../assets/policy5.png'
import dot from './../assets/dot.png'
import abt from './../assets/about.png'
import dp from './../assets/dp.png'
import whydp from './../assets/whydp.png'
import whynav from './../assets/whynav.png'
import whynav2 from './../assets/navdot.png'
import team1 from './../assets/team1.png'
import team2 from './../assets/team2.png'
import team3 from './../assets/team3.png'
import location from './../assets/location.png'
import calendar from './../assets/calendar.png'
import clock from './../assets/clock.png'
import arrowBack from './../assets/arrow_back.png'
import arrowNext from './../assets/arrow_next.png'
import num5 from './../assets/five.png'
import num0 from './../assets/zero.png'
import num1 from './../assets/one.png'
import memberbg from './../assets/member.png'
import shop1 from './../assets/shop1.png'
import shop2 from './../assets/shop2.png'
import shop3 from "./../assets/shop3.png";
import fb from './../assets/fb.png'
import twitter from './../assets/twitter.png'
import insta from './../assets/insta.png'
import youtube from './../assets/youtube.png'
import insta1 from './../assets/insta1.png'
import insta2 from './../assets/insta2.png'
import insta3 from './../assets/insta3.png'
import insta4 from './../assets/insta4.png'
import youtube1 from './../assets/youtube1.png'
import hero_arrback from './../assets/hero_arrback.png'
import hero_arrnext from './../assets/hero_arrnext.png'
import herobg1 from './../assets/hero.png'
import herobg2 from './../assets/meet.png'
import herobg3 from "./../assets/hero.png";
import { Link } from 'react-router-dom'
export default function Home() {

  const [current, setCurrent] = useState(1)
  const [bg, setbg] = useState(herobg1)
  const [trans, setTrans] = useState(0)
  const [pol_trans, setPolTrans] = useState(0);
  const [year1, setYear1] = useState(true)
  const [year2, setYear2] = useState(false)
  const [year3, setYear3] = useState(false)
  const [year4, setYear4] = useState(false);
  const [year5, setYear5] = useState(false);
  const [year6, setYear6] = useState(false);
  const [year7, setYear7] = useState(false);
  const [story_trans, setStoryTrans] = useState(0)
  const [why_trans, setWhyTrans] = useState(0);
  const [team_trans, setTeamTrans] = useState(0);
  const [team, setTeam] = useState(1)
  const [shop_trans, setShopTrans] = useState(0)
  const [shop, setShop] = useState(1)
// HERO
  function handleNextHero() {
    if(current === 1) {
      setCurrent(2)
      setTrans(-100)
      setbg(herobg2)
    } 
    if(current === 2) {
      setCurrent(3)
      setTrans(-200)
      setbg(herobg3)
    }
    if(current === 3) {
      setCurrent(1)
      setTrans(0)
      setbg(herobg1)
    }
  }
  function handleBackHero() {
    if (current === 1) {
      setCurrent(3);
      setTrans(-200);
      setbg(herobg3);
    }
    if (current === 2) {
      setCurrent(1);
      setTrans(0);
      setbg(herobg1);
    }
    if (current === 3) {
      setCurrent(2);
      setTrans(-100);
      setbg(herobg2);
    }
  }
  let hero_change = {
    transform: "translateX(" + trans + "% )",
  };

// POLICY
  function polOne() {
    setPolTrans(0)
  }
  function polTwo() {
    setPolTrans(-100)
  }
  let pol_style = {
    transform: "translateX(" + pol_trans + "% )",
  };

// STORY
  function storyOne() {
    setYear1(true)
    setYear2(false)
    setYear3(false);
    setYear4(false);
    setYear5(false);
    setYear6(false);
    setYear7(false);
    setStoryTrans(0)
  }
  function storyTwo() {
    setYear1(false)
    setYear2(true)
    setYear3(false);
    setYear4(false);
    setYear5(false);
    setYear6(false);
    setYear7(false);
    setStoryTrans(-100)
  }
  function storyThree() {
    setYear1(false)
    setYear2(false)
    setYear3(true);
    setYear4(false);
    setYear5(false);
    setYear6(false);
    setYear7(false);
    setStoryTrans(-200)
  }
  function storyFour() {
    setYear1(false)
    setYear2(false)
    setYear3(false);
    setYear4(true);
    setYear5(false);
    setYear6(false);
    setYear7(false);
    setStoryTrans(-300)
  }
  function storyFive() {
    setYear1(false)
    setYear2(false)
    setYear3(false);
    setYear4(false);
    setYear5(true);
    setYear6(false);
    setYear7(false);
    setStoryTrans(-400)
  }
  function storySix() {
    setYear1(false)
    setYear2(false)
    setYear3(false);
    setYear4(false);
    setYear5(false);
    setYear6(true);
    setYear7(false);
    setStoryTrans(-500)
  }
  function storySeven() {
    setYear1(false)
    setYear2(false)
    setYear3(false);
    setYear4(false);
    setYear5(false);
    setYear6(false);
    setYear7(true);
    setStoryTrans(-600)
  }
  let story = {
    transform: "translateY(" + story_trans + "% )",
  };

// WHY
  function whyOne() {
    setWhyTrans(0)
  }
  function whyTwo() {
    setWhyTrans(-100)
  }
  function whyThree() {
    setWhyTrans(-200)
  }
  let why_style = {
    transform: "translateY(" + why_trans + "% )",
  };

// TEAM
  function handleNextTeam() {
    if (team === 1) {
      setTeam(2);
      setTeamTrans(-110);
    }
    if (team === 2) {
      setTeam(3);
      setTeamTrans(-215);
    }
    if (team === 3) {
      setTeam(4);
      setTeamTrans(-325);
    }
    if (team === 4) {
      setTeam(1);
      setTeamTrans(0);
    }
  }
  function handleBackTeam() {
    if (team === 1) {
      setTeam(4);
      setTeamTrans(-325);
    }
    if (team === 2) {
      setTeam(1);
      setTeamTrans(0);
    }
    if (team === 3) {
      setTeam(2);
      setTeamTrans(-110);
    }
    if (team === 4) {
      setTeam(3);
      setTeamTrans(-215);
    }
  }
  let team_style = {
    transform: "translateX(" + team_trans + "% )",
  };

// SHOP
  function handleNextShop() {
    if (shop === 1) {
      setShop(2);
      setShopTrans(-110);
    }
    if (shop === 2) {
      setShop(3);
      setShopTrans(-215);
    }
    if (shop === 3) {
      setShop(4);
      setShopTrans(-325);
    }
    if (shop === 4) {
      setShop(1);
      setShopTrans(0);
    }
  }
  function handleBackShop() {
    if (shop === 1) {
      setShop(4);
      setShopTrans(-325);
    }
    if (shop === 2) {
      setShop(1);
      setShopTrans(0);
    }
    if (shop === 3) {
      setShop(2);
      setShopTrans(-110);
    }
    if (shop === 4) {
      setShop(3);
      setShopTrans(-215);
    }
  }
  let shop_style = {
    transform: "translateX(" + shop_trans + "% )",
  };
  useEffect(() => {
    if (window.innerWidth > 768) {
      setTimeout(() => {
        if (current === 1) {
          setCurrent(2);
          setTrans(-100);
          setbg(herobg2);
        }
        if (current === 2) {
          setCurrent(3);
          setTrans(-200);
          setbg(herobg3);
        }
        if (current === 3) {
          setCurrent(1);
          setTrans(0);
          setbg(herobg1);
        }
        if(pol_trans === 0) {
          setPolTrans(-100)
        }
        if(pol_trans === -100) {
          setPolTrans(0)
        }
        if(year1 === true) {
          storyTwo()
        }
        if(year2 === true) {
          storyThree()
        }
        if(year3 === true) {
          storyFour()
        }
        if(year4 === true) {
          storyFive()
        }
        if(year5 === true) {
          storySix()
        }
        if(year6 === true) {
          storySeven()
        }
        if(year7 === true) {
          storyOne()
        }
        if(why_trans === 0) {
          setWhyTrans(-100)
        }
        if(why_trans === -100) {
          setWhyTrans(-200)
        }
        if(why_trans === -200) {
          setWhyTrans(0)
        }
      }, 5000)
    }
  }, [current, pol_trans, year1, year2, year3, year4, year5, year6, year7, why_trans]);
  return (
    <main>
      <Header />
      <section className={style.hero} style={{ backgroundImage: `url(${bg})` }}>
        <img
          src={hero_arrback}
          onClick={handleBackHero}
          alt=""
          className={style.hero_back}
        />
        <img
          src={hero_arrnext}
          alt=""
          onClick={handleNextHero}
          className={style.hero_next}
        />
        <div className={style.hero_main}>
          <section style={hero_change}>
            <h3>A NEW LEADERSHIP</h3>
            <h2>MOMS FOR OBI</h2>
            <h1>#WorkingTogether</h1>
          </section>
          <section style={hero_change}>
            <h3>A NEW LEADERSHIP</h3>
            <h2>DADS FOR OBI</h2>
            <h1>#WorkingTogether</h1>
          </section>
          <section style={hero_change}>
            <h3>A NEW LEADERSHIP</h3>
            <h2>YOUTHS FOR OBI</h2>
            <h1>#WorkingTogether</h1>
          </section>
        </div>
        <div>
          <nav className={style.key}>
            <img src={hero1} alt="" />
            <span>CONTEST</span>
            <small>
              For An Elective Position <br /> For Party Leadership
            </small>
          </nav>
          <nav className={style.key}>
            <img src={hero2} alt="" />
            <span>VOTE</span>
            <small>
              By Proxy Outside Nigeria <br /> By Proxy without Voters Card
            </small>
          </nav>
          <nav className={style.key}>
            <img src={hero3} alt="" />
            <span>VOLUNTEER</span>
            <small>
              Skill or Time <br /> As A Unit Leader
            </small>
          </nav>
          <nav className={style.key}>
            <img src={hero4} alt="" />
            <span>DONATE</span>
            <small>
              Funds or Kind <br /> Through Your Spend
            </small>
          </nav>
        </div>
      </section>

      <section className={style.policy}>
        <h2>Our Policies</h2>
        <div>
          <div className={style.pol_statement}>
            <h3>Labour Party Priorities</h3>
            <p>
              The ideology of our Party derives from its orientation and social
              base which is people-oriented and all inclusive.
            </p>
            <Link to="/">Read more</Link>
          </div>
          <div className={style.key_pol}>
            <section>
              <div style={pol_style}>
                <nav>
                  <img src={policy1} alt="" />
                  <strong>ENERGY</strong>
                </nav>
                <nav>
                  <img src={policy2} alt="" />
                  <strong>DEBT RELIEF</strong>
                </nav>
                <nav>
                  <img src={policy3} alt="" />
                  <strong>EDUCATION</strong>
                </nav>
                <nav>
                  <img src={policy4} alt="" />
                  <strong>PRIVATIZATION</strong>
                </nav>
                <nav>
                  <img src={policy5} alt="" />
                  <strong>TRANSPORT</strong>
                </nav>
              </div>
              <div style={pol_style}>
                <nav>
                  <img src={policy4} alt="" />
                  <strong>PRIVATIZATION</strong>
                </nav>
                <nav>
                  <img src={policy2} alt="" />
                  <strong>DEBT RELIEF</strong>
                </nav>
                <nav>
                  <img src={policy3} alt="" />
                  <strong>EDUCATION</strong>
                </nav>
                <nav>
                  <img src={policy5} alt="" />
                  <strong>TRANSPORT</strong>
                </nav>
                <nav>
                  <img src={policy1} alt="" />
                  <strong>ENERGY</strong>
                </nav>
              </div>
            </section>
            <nav>
              <img src={dot} alt="" onClick={polOne} />
              <img src={dot} alt="" onClick={polTwo} />
            </nav>
          </div>
        </div>
      </section>

      <section className={style.about}>
        <h3>About Us</h3>
        <div>
          <img src={abt} alt="" />
          <div>
            <p>
              Labour Party, formerly known as Party for Social Democracy (PSD)
              is one of the parties registered by the Independent National
              Electoral Commission (INEC).
            </p>
            <p>
              However even before the registration exercise, the Labour Party
              was an organization reality. This is more o given its antecedents,
              which derive from a rich heritage of progressive and labour-based
              intervention in national politics, dating back to the struggle/or
              national independence from British Colonialism.
            </p>
            <p>
              All the same, the Party appreciated INEC’S courage in submitting
              itself to the provisions of the Nigerian constitution and the rule
              of law on registration of parties.
            </p>
            <p>
              The party hereby acknowledges that INEC’s decision has opened a
              new chapter in the nation’s politics by removing the military
              imposed selective and restrictive multi-party system.
            </p>
          </div>
        </div>
      </section>
      <section className={style.meet}>
        <h2>Meet Joy Ojo</h2>
        <p>
          Peter Gregory Obi CON[1] (born 19 July 1961) is a Nigerian politician
          and businessman, who was the vice presidential candidate in the 2019
          Nigerian general election under the People's Democratic Party
          (PDP),[2][3][4] He was the former governor of Anambra State serving
          from 17 March 2006 to 2{" "}
        </p>
        <button>Read More</button>
      </section>

      <section className={style.story}>
        <h3>Peter Obi’s Story</h3>
        <div>
          <nav>
            <span className={year1 ? style.decade : ""} onClick={storyOne}>
              INTRO
            </span>
            <span className={year2 ? style.decade : ""} onClick={storyTwo}>
              EARLY YEARS
            </span>
            <span className={year3 ? style.decade : ""} onClick={storyThree}>
              1970s
            </span>
            <span className={year4 ? style.decade : ""} onClick={storyFour}>
              1980s
            </span>
            <span className={year5 ? style.decade : ""} onClick={storyFive}>
              1990s
            </span>
            <span className={year6 ? style.decade : ""} onClick={storySix}>
              2000s
            </span>
            <span className={year7 ? style.decade : ""} onClick={storySeven}>
              2010s
            </span>
          </nav>
          <figure>
            <img src={dp} alt="" />
          </figure>
          <div className={style.story_para}>
            <section style={story}>
              <p>
                Peter Obi was born on 19 July 1961 at Onitsha.[9] He attended
                Christ the King College, Onitsha, where he completed his
                secondary school education.[10] He was admitted to the
                University of Nigeria, in 1980, graduated with a B.A. (Hons) in
                philosophy in 1984.[11] Peter Obi attended Lagos Business
                School,[12] where he completed the Chief Executive Program,
                Harvard Business School, where he completed two major programs.
              </p>
              <p>
                The London School of Economics, Columbia Business School,[13]
                and the International Institute for Management Development[14]
                where he received certificates in the Senior Executive Program
                and the Chief Executive Officer{" "}
              </p>
            </section>
            <section style={story}>
              <p>
                Peter Obi was born on 19 July 1961 at Onitsha.[9] He attended
                Christ the King College, Onitsha, where he completed his
                secondary school education.[10] He was admitted to the
                University of Nigeria, in 1980, graduated with a B.A. (Hons) in
                philosophy in 1984.[11] Peter Obi attended Lagos Business
                School,[12] where he completed the Chief Executive Program,
                Harvard Business School, where he completed two major programs.
              </p>
              <p>
                The London School of Economics, Columbia Business School,[13]
                and the International Institute for Management Development[14]
                where he received certificates in the Senior Executive Program
                and the Chief Executive Officer{" "}
              </p>
            </section>
            <section style={story}>
              <p>
                Peter Obi was born on 19 July 1961 at Onitsha.[9] He attended
                Christ the King College, Onitsha, where he completed his
                secondary school education.[10] He was admitted to the
                University of Nigeria, in 1980, graduated with a B.A. (Hons) in
                philosophy in 1984.[11] Peter Obi attended Lagos Business
                School,[12] where he completed the Chief Executive Program,
                Harvard Business School, where he completed two major programs.
              </p>
              <p>
                The London School of Economics, Columbia Business School,[13]
                and the International Institute for Management Development[14]
                where he received certificates in the Senior Executive Program
                and the Chief Executive Officer{" "}
              </p>
            </section>
            <section style={story}>
              <p>
                Peter Obi was born on 19 July 1961 at Onitsha.[9] He attended
                Christ the King College, Onitsha, where he completed his
                secondary school education.[10] He was admitted to the
                University of Nigeria, in 1980, graduated with a B.A. (Hons) in
                philosophy in 1984.[11] Peter Obi attended Lagos Business
                School,[12] where he completed the Chief Executive Program,
                Harvard Business School, where he completed two major programs.
              </p>
              <p>
                The London School of Economics, Columbia Business School,[13]
                and the International Institute for Management Development[14]
                where he received certificates in the Senior Executive Program
                and the Chief Executive Officer{" "}
              </p>
            </section>
            <section style={story}>
              <p>
                Peter Obi was born on 19 July 1961 at Onitsha.[9] He attended
                Christ the King College, Onitsha, where he completed his
                secondary school education.[10] He was admitted to the
                University of Nigeria, in 1980, graduated with a B.A. (Hons) in
                philosophy in 1984.[11] Peter Obi attended Lagos Business
                School,[12] where he completed the Chief Executive Program,
                Harvard Business School, where he completed two major programs.
              </p>
              <p>
                The London School of Economics, Columbia Business School,[13]
                and the International Institute for Management Development[14]
                where he received certificates in the Senior Executive Program
                and the Chief Executive Officer{" "}
              </p>
            </section>
            <section style={story}>
              <p>
                Peter Obi was born on 19 July 1961 at Onitsha.[9] He attended
                Christ the King College, Onitsha, where he completed his
                secondary school education.[10] He was admitted to the
                University of Nigeria, in 1980, graduated with a B.A. (Hons) in
                philosophy in 1984.[11] Peter Obi attended Lagos Business
                School,[12] where he completed the Chief Executive Program,
                Harvard Business School, where he completed two major programs.
              </p>
              <p>
                The London School of Economics, Columbia Business School,[13]
                and the International Institute for Management Development[14]
                where he received certificates in the Senior Executive Program
                and the Chief Executive Officer{" "}
              </p>
            </section>
            <section style={story}>
              <p>
                Peter Obi was born on 19 July 1961 at Onitsha.[9] He attended
                Christ the King College, Onitsha, where he completed his
                secondary school education.[10] He was admitted to the
                University of Nigeria, in 1980, graduated with a B.A. (Hons) in
                philosophy in 1984.[11] Peter Obi attended Lagos Business
                School,[12] where he completed the Chief Executive Program,
                Harvard Business School, where he completed two major programs.
              </p>
              <p>
                The London School of Economics, Columbia Business School,[13]
                and the International Institute for Management Development[14]
                where he received certificates in the Senior Executive Program
                and the Chief Executive Officer{" "}
              </p>
            </section>
          </div>
        </div>
      </section>
      <section className={style.why}>
        <h3>Why We Support Peter Obi</h3>
        <section>
          <div style={why_style}>
            <img src={whydp} alt="" />
            <p>
              <blockquote>
                Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut
                tellus dolor, dapibus eget, elementum vel, cursus eleifend,
                elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                turpis. Integer rutrum ante eu lacus.
              </blockquote>
              <span>Frank Udome</span>
              <small>PRO</small>
            </p>
            <nav>
              <img src={whynav} alt="" onClick={whyOne} />
              <img src={whynav2} alt="" onClick={whyTwo} />
              <img src={whynav2} alt="" onClick={whyThree} />
            </nav>
          </div>
          <div style={why_style}>
            <img src={whydp} alt="" />
            <p>
              <blockquote>
                Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut
                tellus dolor, dapibus eget, elementum vel, cursus eleifend,
                elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                turpis. Integer rutrum ante eu lacus.
              </blockquote>
              <span>Frank Udome</span>
              <small>PRO</small>
            </p>
            <nav>
              <img src={whynav2} alt="" onClick={whyOne} />
              <img src={whynav} alt="" onClick={whyTwo} />
              <img src={whynav2} alt="" onClick={whyThree} />
            </nav>
          </div>
          <div style={why_style}>
            <img src={whydp} alt="" />
            <p>
              <blockquote>
                Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut
                tellus dolor, dapibus eget, elementum vel, cursus eleifend,
                elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                turpis. Integer rutrum ante eu lacus.
              </blockquote>
              <span>Frank Udome</span>
              <small>PRO</small>
            </p>
            <nav>
              <img src={whynav2} alt="" onClick={whyOne} />
              <img src={whynav2} alt="" onClick={whyTwo} />
              <img src={whynav} alt="" onClick={whyThree} />
            </nav>
          </div>
        </section>
        <button>TELL US WHY YOU SUPPORT PETER OBI</button>
      </section>

      <section className={style.team}>
        <div>
          <h4>MEET THE TEAM</h4>
          <strong>
            Our Elected <br /> Representatives
          </strong>
          <p>
            Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce
            euismod consequat ante. Loremm dolor sit amet, consectetuer{" "}
          </p>
          <Link to="/">Read more</Link>
        </div>
        <nav>
          <img
            src={arrowBack}
            alt=""
            onClick={handleBackTeam}
            className={style.team_back}
          />
          <img
            src={arrowNext}
            alt=""
            onClick={handleNextTeam}
            className={style.team_next}
          />
          <figure>
            <img src={team1} alt="" style={team_style} />
            <img src={team2} alt="" style={team_style} />
            <img src={team3} alt="" style={team_style} />
            <img src={team1} alt="" style={team_style} />
            <img src={team2} alt="" style={team_style} />
            <img src={team3} alt="" style={team_style} />
          </figure>
        </nav>
      </section>
      <section className={style.events}>
        <h3>Events & Volunteer Activities</h3>
        <div>
          <div className={style.event}>
            <div>
              <section>
                <strong>
                  Pat Utomi steps down for Peter Obi to emerge LP presidential
                  candidate
                </strong>
                <span>
                  <img src={location} alt="" /> Lagos, Nigeria
                </span>
                <p>
                  <span>
                    <img src={calendar} alt="" /> 3/9/2022
                  </span>
                  <span>
                    <img src={clock} alt="" /> 10:00AM - 12:00PM
                  </span>
                </p>
                <button>View Event Details</button>
              </section>
            </div>
            <nav>
              <button>
                <img src={arrowBack} alt="" />
              </button>
              <button>23 JUNE</button>
              <button>24 JUNE</button>
              <button>26 JUNE</button>
              <button>27 JUNE</button>
              <button>29 JUNE</button>
              <button>30 JUNE</button>
              <button>
                <img src={arrowNext} alt="" />
              </button>
            </nav>
          </div>
          <div className={style.event_updates}>
            <h1>
              Get Email <br />
              Updates
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipis. Mauris accumsan
              nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla
              venenatis.
            </p>
            <label>
              <input type="tel" placeholder="Phone Number" />
              <button>Subscribe</button>
            </label>
          </div>
        </div>
      </section>
      <section className={style.member}>
        <div>
          <p>Become a Card Carrying Member Of The Labour Party</p>
          <nav>
            <img src={num5} alt="" />
            <img src={num0} alt="" />
            <img src={num0} alt="" />
            <img src={num0} alt="" />
            <img src={num1} alt="" />
          </nav>
          <button>Become A Member</button>
        </div>
        <img src={memberbg} alt="" />
        <section className={style.mobile_alert}>
          <div>
            <strong>GET MOBILE ALERT</strong>
            <label>
              <input type="tel" placeholder="Phone Number" />
              <button>Subscribe</button>
            </label>
          </div>
          <div>
            <p>
              Get periodic messages from Linda Russell. Message & data rates may
              apply
            </p>
            <p>
              Text STOP to 2233 to stop receiving messages. Terms & Conditions
            </p>
          </div>
        </section>
      </section>
      <section className={style.shop}>
        <div>
          <h4>SHOW YOUR SUPPORT</h4>
          <strong>
            Featured <br /> Products
          </strong>
          <p>
            Proin dictum elementum velit. Fusce euismod consequat ante. Lorem
            ipsum dolor sit amet, consectetuer adipis. Mauris accumsan nulla vel
            diam.
          </p>
          <Link to="/">Shop Now</Link>
        </div>
        <nav>
          <img
            src={arrowBack}
            alt=""
            onClick={handleBackShop}
            className={style.shop_back}
          />
          <img
            src={arrowNext}
            alt=""
            onClick={handleNextShop}
            className={style.shop_next}
          />
          <section>
            <div style={shop_style}>
              <img src={shop1} alt="" />
              <h4>
                Heat Sensitive <br /> Color Mug
              </h4>
              <small>&#8358;1,500/Piece</small>
            </div>
            <div style={shop_style}>
              <img src={shop2} alt="" />
              <h4>
                Fashion Front <br /> Plain Face Cap
              </h4>
              <small>&#8358;2,000/Piece</small>
            </div>
            <div style={shop_style}>
              <img src={shop3} alt="" />
              <h4>
                Normal Color <br /> Mug
              </h4>
              <small>&#8358;1,000/Piece</small>
            </div>
            <div style={shop_style}>
              <img src={shop1} alt="" />
              <h4>
                Heat Sensitive <br /> Color Mug
              </h4>
              <small>&#8358;1,500/Piece</small>
            </div>
            <div style={shop_style}>
              <img src={shop2} alt="" />
              <h4>
                Fashion Front <br /> Plain Face Cap
              </h4>
              <small>&#8358;2,000/Piece</small>
            </div>
            <div style={shop_style}>
              <img src={shop3} alt="" />
              <h4>
                Normal Color <br /> Mug
              </h4>
              <small>&#8358;1,000/Piece</small>
            </div>
          </section>
        </nav>
      </section>
      <section className={style.donate}>
        <div>
          <h3>DONATE AS A GREEN SUPPORTER TODAY!</h3>
          <p>
            Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede
            mi, aliquet sit amet, euismod in.
          </p>
          <nav>
            <button>&#8358;100</button>
            <button>&#8358;500</button>
            <button>&#8358;1,000</button>
            <button>&#8358;2,500</button>
            <button>Others</button>
            <button>Donate</button>
          </nav>
        </div>
        <div>
          <h3>DONATE AS A RED SUPPORTER TODAY!</h3>
          <p>
            Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede
            mi, aliquet sit amet, euismod in.
          </p>
          <nav>
            <button>&#8358;10,000</button>
            <button>&#8358;50,000</button>
            <button>&#8358;100,000</button>
            <button>&#8358;500,000</button>
            <button>Others</button>
            <button>Donate</button>
          </nav>
        </div>
      </section>
      <section className={style.media}>
        <h3>Social Media</h3>
        <div>
          <nav>
            <img src={fb} alt="" />
            <p>
              Donec porta diam eu massa. Quisque diam lorem, dapibus ac,
              scelerisque vitae, pede. Donec eget tellus non erat lacinia.
            </p>
            <p>
              <span>3rd June</span>
              <span>See Post</span>
              <span>Share Post</span>
            </p>
            <p>
              Donec porta diam eu massa. Quisque diam lorem, dapibus ac,
              scelerisque vitae, pede. Donec eget tellus non erat lacinia.
            </p>
            <p>
              <span>3rd June</span>
              <span>See Post</span>
              <span>Share Post</span>
            </p>
            <button>Follow Us On Facebook</button>
          </nav>
          <nav>
            <img src={twitter} alt="" />
            <p>
              Donec porta diam eu massa. Quisque diam lorem, dapibus ac,
              scelerisque vitae, pede. Donec eget tellus non erat lacinia.
            </p>
            <p>
              <span>3rd June</span>
              <span>See Post</span>
              <span>Share Post</span>
            </p>
            <p>
              Donec porta diam eu massa. Quisque diam lorem, dapibus ac,
              scelerisque vitae, pede. Donec eget tellus non erat lacinia.
            </p>
            <p>
              <span>3rd June</span>
              <span>See Post</span>
              <span>Share Post</span>
            </p>
            <button>Follow Us On Facebook</button>
          </nav>
          <nav>
            <img src={insta} alt="" />
            <div>
              <img src={insta1} alt="" />
              <img src={insta2} alt="" />
              <img src={insta3} alt="" />
              <img src={insta4} alt="" />
            </div>
            <button>Follow Us On Facebook</button>
          </nav>
          <nav>
            <img src={youtube} alt="" />
            <figure>
              <img src={youtube1} alt="" />
            </figure>
            <button>Follow Us On Facebook</button>
          </nav>
        </div>
      </section>
      <Footer />
    </main>
  );
}
