import Card from "@/components/Card";
import Carousel from "@/components/Carousel";

function page() {
  const contestants = [
    {
      picture:
        "https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg",
      title: "Thor: Ragnarok",
      desc: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela",
    },
    {
      picture: "https://carousel-slider.uiinitiative.com/images/dr-strange.jpg",
      title: "Doctor Strange",
      desc: "America Chavez and a version of Stephen Strange are chased by a demon in the space between universes while searching for the Book of Vishanti",
    },
    {
      picture: "https://carousel-slider.uiinitiative.com/images/eternals.jpg",
      title: "Eternals",
      desc: "In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris, Kingo, Sprite, Phastos, Makkari, Druig, Gilgamesh, and Thena—are sent by the Celestial Arishem to Earth on their starship, the Domo, to exterminate the invasive Deviants.",
    },
    {
      picture:
        "https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg",
      title: "Guardians Of The Galaxy",
      desc: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    },
    {
      picture:
        "https://carousel-slider.uiinitiative.com/images/justice-league.jpg",
      title: "Justice League",
      desc: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    },
    {
      picture:
        "https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg",
      title: "The Suicide Squad",
      desc: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
    },
  ];

  return (
    <div className="w-full pt-16 flex flex-col items-center justify-center h-[500px]">
      {" "}
      <Carousel>
        {contestants.map((e, i) => (
          <Card title={e.title} desc={e.desc} src={e.picture} />
        ))}
      </Carousel>
    </div>
  );
}

export default page;
