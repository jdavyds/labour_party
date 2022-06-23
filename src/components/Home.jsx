import React from 'react'
import style from './../styles/home.module.css'
import Header from './Header'
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
// import fb from './../assets/fb.png'
// import twitter from './../assets/twitter.png'
// import insta from './../assets/insta.png'
// import youtube from './../assets/youtube.png'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <div>
          <h3>A NEW LEADERSHIP</h3>
          <h2>MOMS FOR OBI</h2>
          <h1>#WorkingTogether</h1>
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
            <div>
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
            <nav>
              <img src={dot} alt="" />
              <img src={dot} alt="" />
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
            <span>INTRO</span>
            <span>EARLY YEARS</span>
            <span>1970s</span>
            <span>1980s</span>
            <span>1990s</span>
            <span>2000s</span>
            <span>2010s</span>
          </nav>
          <figure>
            <img src={dp} alt="" />
          </figure>
          <section>
            <p>
              Peter Obi was born on 19 July 1961 at Onitsha.[9] He attended
              Christ the King College, Onitsha, where he completed his secondary
              school education.[10] He was admitted to the University of
              Nigeria, in 1980, graduated with a B.A. (Hons) in philosophy in
              1984.[11] Peter Obi attended Lagos Business School,[12] where he
              completed the Chief Executive Program, Harvard Business School,
              where he completed two major programs.
            </p>
            <p>
              The London School of Economics, Columbia Business School,[13] and
              the International Institute for Management Development[14] where
              he received certificates in the Senior Executive Program and the
              Chief Executive Officer{" "}
            </p>
          </section>
        </div>
      </section>
      <section className={style.why}>
        <h3>Why We Support Peter Obi</h3>
        <div>
          <img src={whydp} alt="" />
          <p>
            <blockquote>
              Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus
              dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean
              auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.
              Integer rutrum ante eu lacus.
            </blockquote>
            <span>Frank Udome</span>
            <small>PRO</small>
          </p>
          <nav>
            <img src={whynav} alt="" />
            <img src={whynav2} alt="" />
            <img src={whynav2} alt="" />
          </nav>
        </div>
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
          <img src={team1} alt="" />
          <img src={team2} alt="" />
          <img src={team3} alt="" />
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
          <div>
            <img src={shop1} alt="" />
            <h4>
              Heat Sensitive <br /> Color Mug
            </h4>
            <small>&#8358;1,500/Piece</small>
          </div>
          <div>
            <img src={shop2} alt="" />
            <h4>
              Fashion Front <br /> Plain Face Cap
            </h4>
            <small>&#8358;2,000/Piece</small>
          </div>
          <div>
            <img src={shop3} alt="" />
            <h4>
              Normal Color <br /> Mug
            </h4>
            <small>&#8358;1,000/Piece</small>
          </div>
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
      {/* <section>
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

            <button>Follow Us On Facebook</button>
          </nav>
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
        </div>
      </section> */}
    </div>
  );
}
