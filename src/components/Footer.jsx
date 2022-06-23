import React from 'react'
import style from './../styles/footer.module.css'
import hero1 from "./../assets/contest.png";
import hero2 from "./../assets/vote.png";
import hero3 from "./../assets/vol.png";
import hero4 from "./../assets/donate.png";
import app_store from './../assets/app_store.png'
import play_store from './../assets/play_store.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <section className={style.major_keys}>
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
      </section>
      <section className={style.nav_links}>
        <nav>
          <Link to="/">The Party</Link>
          <Link to="/">The Issues</Link>
          <Link to="/">Membership</Link>
          <Link to="/">Unions and Groups</Link>
          <Link to="/">LP Women</Link>
          <Link to="/">LP KIds & Teens</Link>
          <Link to="/">Community</Link>
          <Link to="/">Jobs</Link>
          <Link to="/">Resource Centre</Link>
        </nav>
        <nav>
          <Link to="/">Run For Effective Position</Link>
          <Link to="/">Politics School</Link>
          <Link to="/">Shadow Cabinet</Link>
          <Link to="/">Volunteer Groups</Link>
          <Link to="/">Presence Map</Link>
          <Link to="/">Keep Safe</Link>
          <Link to="/">Unit Leaders</Link>
          <Link to="/">Ambassadors</Link>
          <Link to="/">Donations</Link>
        </nav>
        <nav>
          <Link to="/">Campaign Hub</Link>
          <Link to="/">Challenge</Link>
          <Link to="/">LP 24</Link>
          <Link to="/">Election Corner</Link>
          <Link to="/">Time Table</Link>
          <Link to="/">Events</Link>
          <Link to="/">Trainings and Webinar</Link>
          <Link to="/">Download Center</Link>
          <Link to="/">Store</Link>
        </nav>
        <nav>
          <Link to="/">Gallery</Link>
          <Link to="/">Nationhood Blog</Link>
          <Link to="/">Media Press</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Affiliate</Link>
          <Link to="/">News</Link>
          <Link to="/">Live Chat</Link>
          <Link to="/">Support & Complaints</Link>
          <Link to="/">Contact</Link>
        </nav>
      </section>
      <section className={style.footer_btm}>
        <div className={style.rights}>
          <nav>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Submission Terms</Link>
            <Link to="/">Disability Access</Link>
            <Link to="/">GDPR</Link>
            <Link to="/">NDPR</Link>
          </nav>
          <nav>
            <b>Paid For By Labour Party Supporters</b>
            <small>(c) 2022 Labour Party. All Rights Reserved</small>
          </nav>
        </div>
        <div className={style.app}>
          <p>LP MOBILE APP COMING SOON!</p>
          <nav>
            <button>
              <img src={app_store} alt="" />
            </button>
            <button>
              <img src={play_store} alt="" />
            </button>
          </nav>
        </div>
      </section>
    </footer>
  );
}
