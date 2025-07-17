import Kyla_Ma_Img from "../assets/lead_headshots/no_bg/Kyle_Ma.jpg"
import Will_LaCroix_Img from "../assets/lead_headshots/no_bg/Will_LaCroix.jpg"
import Alex_Nealey_Img from "../assets/lead_headshots/no_bg/Alex_Nealey.jpg"
import Amit_Hegde_Img from "../assets/lead_headshots/no_bg/Amit_Hegde.jpg"

// import Matthew_Latz_Img from "../assets/lead_headshots/no_bg/Matthew_Latz.jpg"
// import Aditya_Yellapuntula_Venkata_Img from "../assets/lead_headshots/no_bg/Aditya_Yellapuntula_Venkata.jpg"
import Kai_Tsimpidis_Img from "../assets/lead_headshots/no_bg/Kai_Tsimpidis.jpg"
// import Yoann_Hoy_Img from "../assets/lead_headshots/no_bg/Yoann_Hoy.jpg"
import Jaron_Ruland_Img from "../assets/lead_headshots/no_bg/Jaron_Ruland.jpg"
import Shobhin_Basu_Img from "../assets/lead_headshots/no_bg/Shobhin_Basu.jpg"
// import Jesse_Schmolze_Img from "../assets/lead_headshots/no_bg/Jesse_Schmolze.jpg"

import Nate_Reiff_Img from "../assets/lead_headshots/no_bg/Nate_Reiff.jpg"
import Lucas_Stanford_Img from "../assets/lead_headshots/no_bg/Lucas_Stanford.jpg"
import Ryan_King_Img from "../assets/lead_headshots/no_bg/Ryan_King.jpg"
// import Devansh_Kumaria_Img from "../assets/lead_headshots/no_bg/Devansh_Kumaria.jpg"
import Owen_Wagner_Img from "../assets/lead_headshots/no_bg/Owen_Wagner.jpg"
import Audric_Buslim_Img from "../assets/lead_headshots/no_bg/Audric_Buslim.jpg"
import Landen_Heim_Img from "../assets/lead_headshots/no_bg/Landen_Heim.jpg"

import Neel_Shah_Img from "../assets/lead_headshots/no_bg/Neel_Shah.jpg"
import Emma_Hellen_Img from "../assets/lead_headshots/no_bg/Emma_Hellen.jpg"
import Maanik_Chawla_Img from "../assets/lead_headshots/no_bg/Maanik_Chawla.jpg"

import Placeholder_Img from "../assets/lead_headshots/Portrait_Placeholder.jpg"

import About_2_Img from "../assets/about_back_2.jpeg"
import About_3_Img from "../assets/about_back_3.jpeg"
import About_4_Img from "../assets/about_back_4.jpeg"



export enum TeamName {
    Operations = "operations",
    Mechanical = "mechanical",
    Electrical = "electrical",
}

export enum MemberRole {
    President = "President",
    Operations_Director = "Operations Director",
    Mechanical_Director = "Mechanical Director",
    Electrical_Director = "Electrical Director",
    Battery = "Battery",
    Firmware = "Firmware",
    Powertrain = "Powertrain",
    Low_Voltage = "Low Voltage",
    Solar_Array = "Solar Array",
    Software = "Software",
    Race_Strategy = "Race Strategy",
    Body = "Body",
    Braking = "Braking",
    Composites = "Composites",
    Structures = "Structures",
    Vehicle_Dynamics = "Vehicle Dynamics",
    Mechatronics = "Mechatronics",
    Suspension = "Suspension",
    Race_Ops = "Race Ops",
    Finance = "Finance",
    Industry_Relations = "Industry Relations",
}

const MemberName: Record<MemberRole, Lead> = {
    [MemberRole.President]: { name: "Kyle Ma", email: "", photo: Kyla_Ma_Img, year: 4, position: MemberRole.President },
    [MemberRole.Electrical_Director]: { name: "Will LaCroix", email: "", photo: Will_LaCroix_Img, year: 4, position: MemberRole.Electrical_Director },
    [MemberRole.Mechanical_Director]: { name: "Alex Nealey", email: "", photo: Alex_Nealey_Img, year: 4, position: MemberRole.Mechanical_Director },
    [MemberRole.Operations_Director]: { name: "Amit Hegde", email: "", photo: Amit_Hegde_Img, year: 3, position: MemberRole.Operations_Director },

    [MemberRole.Battery]: { name: "Matthew Latz", email: "", photo: Placeholder_Img, year: 4, position: MemberRole.Battery },
    [MemberRole.Firmware]: { name: "Aditya Yellapuntula Venkata", email: "", photo: Placeholder_Img, year: 4, position: MemberRole.Firmware },
    [MemberRole.Powertrain]: { name: "Kai Tsimpidis", email: "", photo: Kai_Tsimpidis_Img, year: 4, position: MemberRole.Powertrain },
    [MemberRole.Low_Voltage]: { name: "Yoann Hoy", email: "", photo: Placeholder_Img, year: 4, position: MemberRole.Low_Voltage },
    [MemberRole.Solar_Array]: { name: "Jaron Ruland", email: "", photo: Jaron_Ruland_Img, year: 4, position: MemberRole.Solar_Array },
    [MemberRole.Software]: { name: "Shobhin Basu", email: "", photo: Shobhin_Basu_Img, year: 4, position: MemberRole.Software },
    [MemberRole.Race_Strategy]: { name: "Jesse Schmolze", email: "", photo: Placeholder_Img, year: 4, position: MemberRole.Race_Strategy },

    [MemberRole.Body]: { name: "Nate Reiff", email: "", photo: Nate_Reiff_Img, year: 4, position: MemberRole.Body },
    [MemberRole.Braking]: { name: "Lucas Stanford", email: "", photo: Lucas_Stanford_Img, year: 4, position: MemberRole.Braking },
    [MemberRole.Composites]: { name: "Ryan King", email: "", photo: Ryan_King_Img, year: 4, position: MemberRole.Composites },
    [MemberRole.Structures]: { name: "Devansh Kumaria", email: "", photo: Placeholder_Img, year: 4, position: MemberRole.Structures },
    [MemberRole.Vehicle_Dynamics]: { name: "Owen Wagner", email: "", photo: Owen_Wagner_Img, year: 4, position: MemberRole.Vehicle_Dynamics },
    [MemberRole.Mechatronics]: { name: "Audric Buslim", email: "", photo: Audric_Buslim_Img, year: 4, position: MemberRole.Mechatronics },
    [MemberRole.Suspension]: { name: "Landen Heim", email: "", photo: Landen_Heim_Img, year: 4, position: MemberRole.Suspension },

    [MemberRole.Race_Ops]: { name: "Neel Shah", email: "", photo: Neel_Shah_Img, year: 4, position: MemberRole.Race_Ops },
    [MemberRole.Finance]: { name: "Emma Hellen", email: "", photo: Emma_Hellen_Img, year: 4, position: MemberRole.Finance },
    [MemberRole.Industry_Relations]: { name: "Maanik Chawla", email: "", photo: Maanik_Chawla_Img, year: 4, position: MemberRole.Industry_Relations },
};

export interface Lead {
    name: string;
    email: string;
    photo: ImageMetadata;
    year: number;
    position: MemberRole;
}

export interface Team {
    backgroundImg: ImageMetadata
    lead: Lead,
    description: string,
    location: string,
    times: string,
    subteamLeads: Lead[]
}

export const presName: Lead = MemberName.President

export const leadsByTeam: Record<TeamName, Team> = {
    [TeamName.Operations]: {
        backgroundImg: About_2_Img,
        lead: MemberName["Operations Director"],
        description: "The Operations sub-team manages outreach, logistics, and team sustainability. From fundraising and sponsor relations to media and competition planning, they keep the team on track and growing, both on and off the road.",
        location: "Mech E",
        times: "1pm",
        subteamLeads: [MemberName["Race Ops"], MemberName.Finance, MemberName["Industry Relations"]]
    },
    [TeamName.Mechanical]: {
        backgroundImg: About_3_Img,
        lead: MemberName["Mechanical Director"],
        description: "The Mechanical sub-team designs and builds the car’s frame, suspension, steering, and braking systems. With a focus on lightweight materials and aerodynamic performance, they ensure the solar car is safe, efficient, and race-ready.",
        location: "Mech E",
        times: "1pm",
        subteamLeads: [MemberName.Body, MemberName.Braking, MemberName.Composites, MemberName.Structures, MemberName["Vehicle Dynamics"], MemberName.Mechatronics, MemberName.Suspension]
    },
    [TeamName.Electrical]: {
        backgroundImg: About_4_Img,
        lead: MemberName["Electrical Director"],
        description: "The Electrical sub-team powers the vehicle—literally. They handle everything from solar panel integration to battery systems and motor control. Their goal is to maximize efficiency and reliability while managing complex circuitry and embedded systems.",
        location: "Mech E",
        times: "1pm",
        subteamLeads: [MemberName.Battery, MemberName.Firmware, MemberName.Powertrain, MemberName["Low Voltage"], MemberName["Solar Array"], MemberName.Software, MemberName["Race Strategy"]]
    }
}