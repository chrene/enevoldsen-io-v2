import services from "@/data/services.json";

export default function About() {
  return (
    <>
      <section className="bg-yellow-400 relative h-fit">
        <div className="page-padding">
          <div className="max-w-7xl mx-auto py-24 ">
            <div className="grid grid-cols-2 gap-12">
              <div className="col-span-1">
                <h2 className="font-medium text-5xl text-gray-800 leading-tight mb-8">
                  Freelance for mindre projekter og startups.
                </h2>
                <a href="#" className="link link-secondary link-static">
                  Min baggrund
                </a>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-gray-800">
                  Jeg tilbyder webudviklings- og designløsninger på mindre
                  proejter til enkeltpersoner, startups og mindre virksomheder
                  på freelancebasis. <br />
                  <br />
                  Jeg kan hjælpe dig med at opbygge en unik og effektiv online
                  tilstedeværelse, uanset om det drejer sig om en hjemmeside, en
                  webshop eller en webbaseret applikation.
                  <br />
                  <br />
                  Jeg tilbyder en række tjenester inden for webudvikling og
                  design, inklusiv responsiv webdesign, tilpasning af CMS
                  (Content Management System), integration af e-handelsløsninger
                  og udvikling af webapplikationer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
