import hoffmanLogo from "../assets/sponsor_logos/hoffman.png";
import maxeonLogo from "../assets/sponsor_logos/maxeon.png";
import fsiLogo from "../assets/sponsor_logos/fsi.png";
import altiumLogo from "../assets/sponsor_logos/altium.png";
import leonardoLogo from "../assets/sponsor_logos/leonardo.png";
import depmeLogo from "../assets/sponsor_logos/dept_me.png";
import generacLogo from "../assets/sponsor_logos/generac.png";
import xesLogo from "../assets/sponsor_logos/X-ES.png";
import twindiscLogo from "../assets/sponsor_logos/twin-disc.png";
import airtechLogo from "../assets/sponsor_logos/airtech.png";
import milwaukeeLogo from "../assets/sponsor_logos/milwaukee.png";
import cinconLogo from "../assets/sponsor_logos/cincon.png";
import analogdevicesLogo from "../assets/sponsor_logos/Analog_Devices.png";
import bvvLogo from "../assets/sponsor_logos/BVV.png";
import noctuaLogo from "../assets/sponsor_logos/noctua.png";
import mercuryLogo from "../assets/sponsor_logos/mercury.png";


export enum SponsorTier {
    Varsity = "varsity",
    Gold = "gold",
    Silver = "silver",
    Bronze = "bronze",
    Friend = "friend"
}

export interface SponsorTierInfo {
    tier: SponsorTier;
    label: string;
    color: string;
    className: string;
}

export const SponsorTiers: SponsorTierInfo[] = [
    {
        tier: SponsorTier.Varsity,
        label: "Varsity",
        color: "#800000",
        className: "bg-[#800000] text-white"
    },
    {
        tier: SponsorTier.Gold,
        label: "Gold",
        color: "#9a8405ff",
        className: "bg-yellow-400 text-black"
    },
    {
        tier: SponsorTier.Silver,
        label: "Silver",
        color: "#a5a5a5ff",
        className: "bg-gray-300 text-black"
    },
    {
        tier: SponsorTier.Bronze,
        label: "Bronze",
        color: "#CD7F32",
        className: "bg-amber-700 text-white"
    },
    {
        tier: SponsorTier.Friend,
        label: "Friend",
        color: "#ff3967ff",
        className: "bg-gray-500 text-white"
    }
];

export function getTierInfo(tier: SponsorTier): SponsorTierInfo {
    return SponsorTiers.find((t) => t.tier === tier)!;
}

export interface SponsorEntry {
    name: string;
    link: string;
    logo: ImageMetadata;
    info: string;
}

export const sponsorsByTier: Record<SponsorTier, SponsorEntry[]> = {
    [SponsorTier.Varsity]: [
        {
            name: "Hoffeman",
            link: "https://www.hoffmanev.com/",
            logo: hoffmanLogo,
            info: `Hoffman EV, based in Madison, Wisconsin, converts carefully vetted classic cars into bespoke
electric “restomods.” The team performs all metal fabrication, battery integration and quality
testing in-house, giving vintage vehicles zero-emission drivetrains and modern reliability without
sacrificing their timeless looks.`,
        }
    ],
    [SponsorTier.Gold]: [
        {
            name: "Maxeon",
            link: "https://www.maxeon.com/",
            logo: maxeonLogo,
            info: `Maxeon Solar Technologies is a Singapore-headquartered spin-off from SunPower that designs
and manufactures ultra-high-efficiency Maxeon® and SunPower® solar panels. With 35 years of R&D,
three global factories and sales in 100 + countries, the company backs its products with 40-year
performance warranties for residential, commercial and utility projects.`,
        },
        {
            name: "FSI",
            link: "https://fsi.co/",
            logo: fsiLogo,
            info: `FSI is a global polyurethane “systems house” that develops custom, sustainable PU chemistries
for automotive, furniture, marine, construction and many other industries. Its in-house chemists
create advanced foams, elastomers and adhesives that help customers hit weight, durability and
environmental targets.`,
        },
        {
            name: "Altium",
            link: "https://www.altium.com/",
            logo: altiumLogo,
            info: `Altium Limited, founded in Australia in 1985, is a pioneer in electronic-design-automation
software. Its flagship Altium Designer® and cloud-native Altium 365® platforms unify PCB layout,
supply-chain data and manufacturing hand-off, empowering engineers in aerospace, automotive and
consumer electronics to bring products to market faster.`,
        }
    ],
    [SponsorTier.Silver]: [
        {
            name: "Leonardo DRS",
            link: "https://www.leonardodrs.com/",
            logo: leonardoLogo,
            info: `Leonardo DRS is the U.S. defense subsidiary of Leonardo S.p.A. The company supplies the U.S.
military and allied forces with integrated electric-propulsion systems, advanced EO/IR sensors and
networked computing solutions, plus full lifecycle logistics and sustainment services.`,
        },
        {
            name: "UW-Mechanical Engineering Department",
            link: "https://engineering.wisc.edu/departments/mechanical-engineering/",
            logo: depmeLogo,
            info: `The University of Wisconsin–Madison Department of Mechanical Engineering is a top-ranked,
research-intensive program whose faculty tackle advanced manufacturing, energy systems, biomechanics,
robotics and data-driven engineering. More than 6,000 students benefit from its state-of-the-art
labs and strong industry partnerships.`,
        },
        {
            name: "Generac",
            link: "https://www.generac.com/",
            logo: generacLogo,
            info: `Generac, headquartered in Waukesha, Wisconsin since 1959, revolutionized home standby
generators and has evolved into a diversified energy-technology company. Its portfolio now spans
backup generators, solar-plus-battery storage, microgrid controls, EV chargers and large-scale
data-center power systems.`,
        },
        {
            name: "XES",
            link: "https://www.xes-inc.com/",
            logo: xesLogo,
            info: `Extreme Engineering Solutions (X-ES) designs and manufactures rugged embedded computing
        hardware—including SBCs, FPGAs, Ethernet switches and fully integrated systems—qualified for harsh
        military, aerospace and industrial environments. All design, fabrication and test are performed in
        its Verona, Wisconsin facilities.`,
        },
        {
            name: "Twin Disc",
            link: "https://twindisc.com/",
            logo: twindiscLogo,
            info: `Twin Disc has been converting engine power into controlled motion since 1918. The company’s
        marine and off-highway transmissions, torque converters, clutches and propulsion controls power
        equipment ranging from tractors and mining trucks to workboats and luxury yachts around the world.`,
        },
        {
            name: "Airtech Advanced Materials",
            link: "https://airtech.com/",
            logo: airtechLogo,
            info: `Airtech Advanced Materials Group, founded nearly 50 years ago, is the world’s largest
        privately held manufacturer of vacuum-bagging films, composite tooling materials and 3D-printed
        tooling. Its products support aerospace, wind-energy, automotive and glass-lamination customers
        seeking high-performance composites.`,
        }
    ],
    [SponsorTier.Bronze]: [
        {
            name: "Milwaukee Tool",
            link: "https://www.milwaukeetool.com/",
            logo: milwaukeeLogo,
            info: `Milwaukee Tool, celebrating over a century of innovation, engineers power tools, hand tools
and job-site solutions by working directly with professional users. Flagship platforms like M18™,
M12™ and ONE-KEY™ have set industry benchmarks for cordless performance, safety and productivity.`,
        },
        {
            name: "Cincon",
            link: "https://www.cincon.com/",
            logo: cinconLogo,
            info: `Cincon Electronics is a Taiwan-based manufacturer of high-efficiency AC-DC power supplies and
DC-DC converters for medical, industrial, telecom, railway and lighting markets. All products are
RoHS-compliant and designed to meet stringent global safety standards.`,
        },
        {
            name: "Analog Devices",
            link: "https://www.analog.com/en/index.html",
            logo: analogdevicesLogo,
            info: `Analog Devices Inc. (ADI) is a leading semiconductor company that delivers high-performance
analog, mixed-signal and power-management ICs plus software that “empower the intelligent edge.” Its
portfolio—expanded through the Maxim Integrated acquisition—serves industrial, automotive,
communications, healthcare and sustainable-energy sectors worldwide.`,
        }
    ],
    [SponsorTier.Friend]: [
        {
            name: "BVV",
            link: "https://shopbvv.com/",
            logo: bvvLogo,
            info: `BVV (Better Value Vac) supplies laboratories and processors with extraction, purification and
solvent-recovery equipment, including vacuum chambers, ovens, pumps and turnkey botanical extraction
systems. The Illinois-based firm is known for reliable, cost-effective gear that delivers consistent,
high-purity results at scale.`,
        },
        {
            name: "Noctua",
            link: "https://noctua.at/",
            logo: noctuaLogo,
            info: `Noctua, founded in Vienna in 2005, designs premium CPU coolers, fans and thermal compounds
renowned for near-silent operation and engineering quality. Loved by PC enthusiasts and data-center
integrators alike, Noctua pairs meticulous acoustics R&D with industry-leading customer support.`,
        },
        {
            name: "Mercury Marine",
            link: "https://www.mercurymarine.com/us/en",
            logo: mercuryLogo,
            info: `Mercury Marine, a $3 billion division of Brunswick Corporation based in Fond du Lac,
Wisconsin, is the world’s largest producer of recreational marine propulsion. Its outboards,
sterndrives, digital controls and propellers deliver quiet, efficient and reliable power for
recreational, commercial and government vessels worldwide.`,
        }
    ]
};






//   <h2>Varsity Sponsors</h2>
//   <p>
//     Varsity sponsors are our highest tier, providing essential financial or
//     in-kind support. Their logos are prominently featured on our solar
//     vehicle, team uniforms, and all outreach materials. These sponsors have
//     the opportunity to be highlighted in race-day media, social campaigns,
//     and alumni newsletters. Recent Varsity sponsors include Siemens, Altium,
//     and Hoffman Manufacturing.
//   </p>
//   <h2>Gold Sponsors</h2>
//   <p>
//     Gold sponsors are vital to our vehicle manufacturing, covering key
//     components and operations. They receive significant logo placement on
//     the car and are acknowledged in team presentations, social media
//     features, and select apparel. Maxeon Solar Technologies is one of our
//     2025 Gold partners.
//   </p>
//   <h2>Bronze Sponsors</h2>
//   <p>
//     Our Bronze sponsors fuel the day-to-day operations — materials, tooling,
//     and testing. They receive logo placement on our website and media kits,
//     and are highlighted in our sponsor recap reports. Current Bronze
//     sponsors include Generac, X-ES, and the UW College of Engineering.
//   </p>