import Header from "@/components/Header";
import Footer from "@/components/Footer";

const historyEntries: { year: string; body: React.ReactNode }[] = [
  {
    year: "1907",
    body: (
      <>
        The first moving pictures shown in Three Oaks appeared at the Acorn Opera House,
        located where the parking lot now sits beside the present-day Vickers Theatre.
        In the spring of 1909, Melvin Smith of Three Rivers pitched a tent in the Three
        Oaks business district, presenting movies and vaudeville acts. The venture was
        an immediate success. Within two years, three dedicated "movie houses" opened in
        town, bearing the enchanting names <em>The Princess</em>, <em>The Idle Hour</em>,
        and <em>The Fairyland</em> — the latter of which would eventually become the
        Vickers Theatre.
      </>
    ),
  },
  {
    year: "1911",
    body: (
      <>
        The Fairyland Theatre (located where Alapash is currently) was originally owned
        by Frank Lee and Clarence Perham. After Lee purchased his partner's share, the
        theatre became known as <strong>Lee's Theatre</strong>. The Lee family played an
        active role in its daily operation. Before the era of sound films, Bea McGrath
        (Lee's daughter) ran the box office and played in the orchestra, her brother
        Eldon Lee played the cornet, and their mother, Ada Lee, played the drums and
        occasionally the player piano. Les Lee, Frank Lee's grandson, fondly recalled
        tearing tickets at the theatre as an 11-year-old boy.
      </>
    ),
  },
  {
    year: "1929",
    body: (
      <>
        The first "sound" film shown at the theatre was <em>The Pagan</em>, starring
        Ramon Navarro. Rather than synchronized sound, the film relied on a series of
        special records played alongside the projection — a common transitional solution
        for small-town theatres at the time.
      </>
    ),
  },
  {
    year: "1939",
    body: (
      <>
        Lee's Theatre moved to its current location at <strong>6 N. Elm Street</strong>.
        The first film screened in the new space was <em>At the Circus</em>, starring
        the Marx Brothers. The building itself dates back to before 1880, when it served
        as a livery and feed store known as Fisher's. For more than 50 years, successive
        generations of the Lee family continued to operate the theatre.
      </>
    ),
  },
  {
    year: "1970–1990",
    body: (
      <>
        During this period, the theatre changed hands several times. It ultimately
        closed in 1990 and remained vacant for four years.
      </>
    ),
  },
  {
    year: "1994",
    body: (
      <>
        The theatre was purchased by <strong>Jon and Jennifer Vickers</strong>. After
        two and a half years of meticulous restoration, the building reopened in June
        1996 as the <strong>Vickers Theatre</strong>, with <em>Citizen Kane</em> as its
        opening film. The Vickers also introduced the beloved outdoor "Sound of Silents
        Film Festival," an annual event that became a highlight for the community. Since
        reopening, the theatre has also served as a rotating art gallery, featuring
        monthly exhibitions by local artists.
      </>
    ),
  },
  {
    year: "2010–2022",
    body: (
      <>
        <strong>Judy and Joe Scully</strong> purchased the Vickers Theatre in June 2010.
        In November 2012, the Vickers transitioned from film to digital projection, a
        necessary step to continue screening new releases. The first digital film shown
        at the theatre was <em>Beasts of the Southern Wild</em>. That same year marked
        the launch of <strong>First Tuesdays</strong>, a film and discussion series
        presented in partnership with Harbor Country Progress, offering free community
        screenings of documentary films followed by monthly discussion forums. Film
        professor Judd Chesler also led film discussion groups connected to select
        Vickers screenings.
        <br />
        <br />
        During this time, the Vickers expanded its role as a multidisciplinary arts
        venue. The Three Oaks Theatre Festival presented a staged reading of Larry
        Kramer's <em>The Normal Heart</em> at the Vickers as part of its second season,
        performed by the original Chicago cast from the TimeLine Theatre Company. In its
        third season, the festival returned with <em>Chapatti</em>, starring Penny
        Slusher and John Mahoney. The Vickers continued to host post-screening Q&As with
        actors, directors, producers, and editors, and regularly premiered films with
        local connections. The theatre also became home to annual festivals including
        the Coastline Children's Film Festival, the Fernwood Environmental Festival, and
        the much-loved Manhattan Short Film Festival, which sells out each year. In
        2019, the Vickers obtained a liquor license for beer and wine, further enhancing
        the moviegoing experience for its patrons.
        <br />
        <br />
        Over its long history, the theatre has operated under five names:{" "}
        <strong>The Fairyland</strong>, <strong>Lee's Theatre</strong>,{" "}
        <strong>The Family Theater</strong>, <strong>The Oak Theater</strong>, and
        finally, <strong>The Vickers Theatre</strong>.
      </>
    ),
  },
  {
    year: "2022–Present",
    body: (
      <>
        <strong>A New Chapter.</strong> In December 2022, <strong>Zach Hackett</strong>{" "}
        purchased the Vickers Theatre, ushering in a new chapter grounded in
        preservation, community, and a deep love of cinema.
        <br />
        <br />
        Building on the theatre's long history, the current ownership has expanded
        programming to include first-run films, carefully curated classics through{" "}
        <strong>Throwback Thursdays</strong>, and a growing slate of special events,
        live performances, and filmmaker conversations. The Vickers has strengthened its
        role as a cultural gathering place for Harbor Country through festivals,
        community partnerships, and one-of-a-kind screenings that bring people together
        beyond the screen.
        <br />
        <br />
        Ongoing investments in programming, presentation, and the guest experience
        reflect a commitment to keeping the Vickers vibrant, welcoming, and sustainable
        for years to come. Today, the Vickers Theatre remains a proudly independent,
        community-supported cinema, honoring its past while continuing to evolve as a
        home for great films, meaningful conversations, and shared experiences.
      </>
    ),
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl gold-text-gradient font-semibold tracking-wider mb-6">
            About the Vickers Theatre
          </h1>
          <div className="h-px w-24 mx-auto bg-primary/50 mb-8" />

          <div className="font-body text-base md:text-lg text-foreground/80 space-y-6 text-left">
            <p>
              <strong>Welcome to the Vickers Theatre in Three Oaks, Michigan</strong>, a
              classic art house and cinema. Experience our intimate theatre and enjoy a
              unique movie-going experience of independent, documentary, popular,
              foreign, and foreign-language films that we hope will open your minds,
              enrich your lives, and entertain your spirit. The theatre seats 126 at
              maximum capacity, including café seating and limited private balcony
              seating. We are handicapped accessible.
            </p>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl gold-text-gradient font-semibold tracking-wider mt-16 mb-6">
            Our Mission
          </h2>
          <div className="h-px w-24 mx-auto bg-primary/50 mb-8" />
          <div className="font-body text-base md:text-lg text-foreground/80 space-y-5 text-left">
            <p>
              We believe that we have a responsibility as a business to be a good
              neighbor to the community of Three Oaks and beyond.
            </p>
            <p>
              We believe that really good movies enrich people's lives and that sharing
              that experience with others fosters a sense of community.
            </p>
            <p>
              We believe that film encourages dialogue. It has the power to not only
              entertain, but to increase our understanding and challenge our thinking on
              diverse issues.
            </p>
            <p>
              We believe that our vintage theatre — with old-fashioned candies, real
              butter popcorn, and wine & beer — provides a total movie experience for
              our patrons.
            </p>
            <p className="italic text-foreground/90">
              Our promise to you: We will endeavor to select the best independent,
              documentary, foreign, and popular movies, so that every time you leave our
              theatre, you will want to return soon.
            </p>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl gold-text-gradient font-semibold tracking-wider mt-16 mb-6">
            Our History
          </h2>
          <div className="h-px w-24 mx-auto bg-primary/50 mb-10" />

          <div className="text-left space-y-10">
            {historyEntries.map((entry) => (
              <div key={entry.year} className="border-l border-primary/40 pl-6">
                <h3 className="font-heading text-2xl text-primary tracking-wider mb-3">
                  {entry.year}
                </h3>
                <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
                  {entry.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
