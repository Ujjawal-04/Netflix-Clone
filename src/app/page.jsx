import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <><div className={styles.body}>
      <div className={styles.header} >
        <nav className={styles.nav}>
          <img src="5.jpg.png" className={styles.logo}></img>
          <div>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
             <select className={styles.select}>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <button className={styles.btn}>Sign In</button>
          </div>
        </nav>
      </div>
       <div className={styles.headercontent}>
        <h1 className={styles.headercontenth1}>Unlimited movies, TV shows and more</h1>
        <h3 className={styles.headercontenth3}>Watch anywhere. Cancel anytime.</h3>
        <p className={styles.headercontentp}>Ready to watch? Enter your email to create or restart your membership.</p>
        <form className={styles.emailsignup}>
          <input className={styles.emailinput}type="email" placeholder="Email Address" required />
          <button className={styles.emailbutton} type="submit">
            Get Started 
          </button>
         </form>
         </div>
         </div>
        <div className={styles.features}>
         <div className={styles.row}>
          <div className={styles.textcol}>
            <h2 className={styles.h2}>Enjoy on your TV</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
        <div className={styles.imgcol}>
        <img className={styles.img} src="ist.png"></img>
       </div>
       </div>
       <div className={styles.row}>
        <div className={styles.imgcol}>
          <img src="st.png"></img>
          </div>
        <div className={styles.textcol}>

          <h2 className={styles.h2}>Download your shows to watch offline</h2>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
         </div><div className={styles.row}>
          <div className={styles.textcol}>
            <h2 className={styles.h2}>Watch everywhere</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className={styles.imgcol}>
            <img className={styles.img} src="third.png"></img>
            </div>
        </div>
      <div className={styles.row}> 
        <div className={styles.imgcol}>
          <img className={styles.img} src="AAAAB.png"></img>
        </div>
        <div className={styles.textcol}>
          <h2 className={styles.h2}>Create profiles for kids</h2>
          <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
      </div>
      <div className={styles.faq}>
     <h2 className={styles.faqh2}>Frequently Asked Questions</h2>
      <ul className={styles.accordion}>
        <li className={styles.accordionli}>
          <input className={styles.input} type="radio" name="accordion" id="first"/>
          <label className={styles.label} for="first">What is Netflix?</label>
          <div className={styles.content}>
          <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
        </li>
        <li className={styles.accordionli}>
          <input className={styles.input} type="radio" name="accordion" id="second"/>
          <label className={styles.label} for="second">How much does Netflix cost?</label>
          <div className={styles.content}>
          <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
        </div>
        </li>
        <li className={styles.accordionli}>
          <input className={styles.input}type="radio" name="accordion" id="third"/>
          <label className={styles.label} for="third">Where can I watch?</label>
          <div className={styles.content}>
            <div className={styles.content}>
          <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere</p>
          </div>
          </div>
        </li>
        <li className={styles.accordionli}>
          <input className={styles.input}type="radio" name="accordion" id="fourth"/>
          <label className={styles.label} for="fourth">How do I cancel?</label>
          <div className={styles.content}>
          <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
        </div>
        </li>
        <li className={styles.accordionli}>
          <input className={styles.input}type="radio" name="accordion" id="fifth"/>
          <label className={styles.label} for="fifth">What can i watch on Netflix?</label>
          <div className={styles.content}>
          <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
        </div>
        </li>
        <li className={styles.accordionli}>
          <input className={styles.input} type="radio" name="accordion" id="sixth"/>
          <label className={styles.label} for="sixth">Is Netflix good for kids?</label>
          <div className={styles.content}>
          <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
          </div>
        </li>
       </ul>
       <small className={styles.small}>
        Ready to watch? Enter your email to create or restart your membership.
       </small>
       <form className={styles.emailsignup}>
          <input className={styles.emailinput}type="email" placeholder="Email Address" required />
          <button className={styles.emailbutton} type="submit">
            Get Started 
          </button>
         </form>
        </div>
        <div className={styles.footer}>
    <h2 className={styles.footerh2}>Questions? Call <a className={styles.footerh2a}href="#"> 000-800-919-1694</a></h2>
    <div className={styles.row}>
      <div className={styles.col}>
        <a className={styles.cola} href="#">FAQ</a>
        <a className={styles.cola} href="#">Media Centre</a>
        <a  className={styles.cola} href="#">Ways to Watch</a>
        <a className={styles.cola} href="#">Cookie Preferences</a>
        <a className={styles.cola} href="#">Speed Test</a>
      </div>
      <div className={styles.col}>
        <a className={styles.cola} href="#">Help Centre</a>
        <a className={styles.cola} href="#">Investor Relations</a>
        <a  className={styles.cola} href="#">Terms of Use</a>
        <a  className={styles.cola} href="#">Corporate Information</a>
        <a  className={styles.cola} href="#">Legal Notices</a>
      </div>
      <div className={styles.col}>
        <a  className={styles.cola} href="#">Account</a>
        <a className={styles.cola} href="#">Jobs</a>
        <a className={styles.cola}  href="#">TPrivacy</a>
        <a  className={styles.cola} href="#">Contact Us</a>
        <a className={styles.cola}  href="#">Only on Netflix</a>
      </div>
    </div>
    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <select className={styles.select}>
      <option value="english">English</option>
      <option value="hindi">Hindi</option>
    </select>
    <p className={styles.copyrighttext}>Netflix India</p>
  </div>
           </>
  );
}
