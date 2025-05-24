import NavBar from "./NavBar";
import Landing from "../assets/WB-Cropped.png"

export default function LandingPage() {
  const Gallery: {name: string, achievement: string, img: string}[] = [
    {
      name: "Hi",
      achievement: "Hello",
      img:"test"
    },
    {
      name: "Hi",
      achievement: "Hello",
      img:"test"
    },
  ]

  const userData: { name: string, message: string, desc: string, img: string }[] = [
    {
      name: "Kamala",
      message: "This is a wonderful app. I am a self-learner and this app has allowed me to boost my productivity.",
      desc: "-Web Developer, Adobe",
      img: "https://randomuser.me/api/portraits/women/85.jpg"
    },
    {
      name: "Alex",
      message: "I have been using this app since my Second year of University. And since then it has been a great bonus for me.",
      desc: "-Security Researcher, Google",
      img: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Kamal Deep",
      message: "This is a wonderful app. I am a self-learner and this app has allowed me to boost my productivity.",
      desc: "-UI/UX Engineer, Microsoft",
      img: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      name: "Raja",
      message: "This is a wonderful app. I am a self-learner and this app has allowed me to boost my productivity.",
      desc: "-Security Researcher, Urban Monkey",
      img: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Sridevi",
      message: "This is a wonderful app. I am a self-learner and this app has allowed me to boost my productivity.",
      desc: "-Full Stack Developer, TCS",
      img: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      name: "Shwetha",
      message: "This is a wonderful app. I am a self-learner and this app has allowed me to boost my productivity.",
      desc: "-HR, Wipro",
      img: "https://randomuser.me/api/portraits/women/82.jpg"
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <header>
        <NavBar />
      </header>
      <main>
        <section id="home" className="flex flex-col items-center mt-17 px-4 md:px-12 mb-12">
          <img src={Landing} className="w-60 h-auto md:h-150 md:w-150 lg:w-[36rem]"/>
          <h1 className="text-3xl text-primary-text mt-2 text-center mb-3 md:text-5xl lg:text-7xl md:mb-3">
            Elevate Your Badminton Excellence!
          </h1>
          <div className="h-27 w-75 mb-4 lg:w-250 lg:mb-3 m-3 md:w-180 md:mb-7">
            <h3 className="text-sm text-secondary-text mt-2 text-center md:text-2xl">
              Badminton is a science and we’ve mastered the formula. Our programs fuse tech, biomechanics, and performance strategy to unlock your full potential.
            </h3>
          </div>
          <div className="flex space-x-8 space-y-4 flex-col pl-10 md:flex-row md:space-y-0 md:pl-0">
            <a href="#contact" className="flex items-center justify-center h-10 w-40 p-2 text-center rounded-3xl bg-primary-button md:h-13 md:w-43 md:font-bold">Join The Squad!</a>
            <a href="#timeline" className="flex items-center justify-center h-10 w-40 p-2 text-center rounded-3xl border-2 border-primary-button text-primary-button md:h-13 md:w-43 md:font-bold">Our Progress!</a>
          </div>
        </section>

        <section id="gallery" className="px-4 md:px-12">
          <h1 className="text-primary text-2xl font-extrabold text-center mb-6">Gallery</h1>
          <div className="flex gap-6 overflow-x-auto px-4 py-4 scrollbar-hidden">
            {Gallery.map((value, idx) => (
              <div key={idx} className="flex flex-col p-4 border rounded-md w-64 flex-shrink-0 items-center bg-primary-background">
                <img src={value.img} className="h-24 w-24 md:h-36 md:w-36 rounded-full mb-4" />
                <p className="mb-3 text-center text-sm md:text-base">{value.achievement}</p>
                <h2 className="text-text-primary font-bold">{value.name}</h2>
              </div>
            ))}
          </div>
          <h1 className="text-primary text-2xl font-extrabold text-center mb-6">Reviews</h1>
          <div className="flex gap-6 overflow-x-auto px-4 py-4 scrollbar-hidden">
            {userData.map((value) => (
              <div key={value.name} className="flex flex-col p-4 border rounded-md w-64 flex-shrink-0 items-center bg-primary-background">
                <p className="mb-3 text-center text-sm md:text-base">{value.message}</p>
                <h2 className="text-text-primary font-bold">{value.name}</h2>
              </div>
            ))}
          </div>

        </section>
      </main>
    </div>
  );
}
