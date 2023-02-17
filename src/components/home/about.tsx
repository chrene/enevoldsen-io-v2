import services from "@/data/services.json";

export default function About() {
  return (
    <>
      <section className="bg-yellow-400 relative h-fit">
        <div className="page-padding">
          <div className="max-w-7xl mx-auto py-8 pb-24">
            <div className="h-16 w-full sticky top-0 bg-gradient-to-b from-yellow-400 to-yellow-400/0 z-10"></div>
            <div className="grid grid-cols-2 gap-12 relative">
              <div className="col-span-1">
                <div className="sticky top-8">
                  <h2 className="font-medium text-5xl text-gray-800 leading-tight mb-8">
                    Uddannet datalog fra Københavns Universitet med passion for
                    webudvikling og product management.
                  </h2>
                  <a href="#" className="link link-secondary link-static">
                    Min baggrund
                  </a>
                </div>
              </div>
              <div className="col-span-1 relative">
                <p className="text-base leading-relaxed text-gray-800">
                  Som uddannet datalog fra Københavns Universitet har jeg altid
                  haft en passion for teknologi og digital innovation. Gennem
                  mine studier opbyggede jeg en stærk teknisk baggrund og fik
                  erfaring med en bred vifte af programmeringssprog og
                  teknologier.
                  <br />
                  <br />
                  Det var dog først, da jeg begyndte at arbejde med webudvikling
                  og product management, at jeg virkelig fandt min passion. Jeg
                  elsker at skabe digitale løsninger, der hjælper folk med at
                  løse problemer og optimere deres dagligdag. Som webudvikler
                  kan jeg bruge min tekniske viden og kreativitet til at designe
                  og implementere komplekse webapplikationer og sikre, at de
                  fungerer optimalt.
                  <br />
                  <br />
                  På samme tid giver product management mig mulighed for at
                  kombinere mine tekniske færdigheder med mine kommunikative
                  evner og ledelsesmæssige erfaringer. Som product manager hos
                  SOFACOMPANY har jeg ansvaret for at lede udviklingen af nye
                  digitale produkter og tjenester fra start til slut. Jeg
                  arbejder tæt sammen med mine teammedlemmer og
                  samarbejdspartnere for at sikre, at vores produkter lever op
                  til kundernes behov og forventninger.
                  <br />
                  <br />
                  Som datalog har jeg en stærk forståelse for, hvordan teknologi
                  kan anvendes til at optimere forretninger og løse komplekse
                  problemer. Det betyder, at jeg er i stand til at oversætte
                  teknisk jargon og komplekse teknologiske processer til et
                  sprog, der kan forstås af alle. Samtidig har jeg også erfaring
                  med at arbejde med både frontend og backend teknologi, så jeg
                  kan navigere i hele udviklingsprocessen og sikre, at vores
                  produkter er både teknisk solide og brugervenlige.
                  <br />
                  <br />
                  Jeg ser mig selv som en passioneret og engageret teknolog, der
                  altid er på udkig efter nye måder at forbedre og optimere
                  digitale løsninger på. Jeg er en teamplayer, der arbejder tæt
                  sammen med mine kolleger og samarbejdspartnere for at sikre,
                  at vores produkter er i overensstemmelse med kundernes behov
                  og krav.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
