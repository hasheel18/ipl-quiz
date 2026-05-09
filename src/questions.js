const base = import.meta.env.BASE_URL;

const iplQuestions = [
    {
        question: "Which team won the first IPL trophy in 2008?",
        options: [
            "Mumbai Indians",
            "Chennai Super Kings",
            "Rajasthan Royals",
            "Royal Challengers Bangalore"
        ],
        answer: "Rajasthan Royals",
        images: {
            "Mumbai Indians": `${base}images/teams/mi_logo.avif`,
            "Chennai Super Kings": `${base}images/teams/csk_logo.avif`,
            "Rajasthan Royals": `${base}images/teams/rr_logo.png`,
            "Royal Challengers Bangalore": `${base}images/teams/rcb_logo.avif`
        }
    },

    {
        question: "Who is the highest run-scorer in IPL history?",
        options: [
            "Virat Kohli",
            "Suresh Raina",
            "David Warner",
            "Rohit Sharma"
        ],
        answer: "Virat Kohli",
        images: {
            "Virat Kohli": `${base}images/players/virat_kohli.avif`,
            "Suresh Raina": `${base}images/players/suresh_raina.avif`,
            "David Warner": `${base}images/players/david_warner.avif`,
            "Rohit Sharma": `${base}images/players/rohit_sharma.avif`
        }
    },

    {
        question: "Which captain has won the most IPL titles?",
        options: [
            "MS Dhoni",
            "Rohit Sharma",
            "Gautam Gambhir",
            "Hardik Pandya"
        ],
        answer: "MS Dhoni",
        images: {
            "MS Dhoni": `${base}images/players/ms_dhoni.avif`,
            "Rohit Sharma": `${base}images/players/rohit_sharma.avif`,
            "Gautam Gambhir": `${base}images/players/gautam_gambhir.avif`,
            "Hardik Pandya": `${base}images/players/hardik_pandya.avif`
        }
    },

    {
        question: "Who has the most ducks in IPL history?",
        options: [
            "Dinesh Karthik",
            "Sunil Narine",
            "Rohit Sharma",
            "Glenn Maxwell"
        ],
        answer: "Glenn Maxwell",
        images: {
            "Dinesh Karthik": `${base}images/players/dinesh_karthik.avif`,
            "Sunil Narine": `${base}images/players/sunil_narine.avif`,
            "Rohit Sharma": `${base}images/players/rohit_sharma.avif`,
            "Glenn Maxwell": `${base}images/players/glenn_maxwell.avif`
        }
    },

    {
        question: "Who has taken the most wickets in IPL history?",
        options: [
            "Lasith Malinga",
            "Yuzvendra Chahal",
            "Bhuvneshwar Kumar",
            "Dwayne Bravo"
        ],
        answer: "Yuzvendra Chahal",
        images: {
            "Lasith Malinga": `${base}images/players/lasith_malinga.avif`,
            "Yuzvendra Chahal": `${base}images/players/yuzvendra_chahal.avif`,
            "Bhuvneshwar Kumar": `${base}images/players/bhuvneshwar_kumar.avif`,
            "Dwayne Bravo": `${base}images/players/dwayne_bravo.webp`
        }
    },

    {
        question: "Which team has reached the most IPL finals?",
        options: [
            "Gujarat Titans",
            "Kolkata Knight Riders",
            "Chennai Super Kings",
            "Mumbai Indians"
        ],
        answer: "Chennai Super Kings",
        images: {
            "Gujarat Titans": `${base}images/teams/gt_logo.avif`,
            "Kolkata Knight Riders": `${base}images/teams/kkr_logo.avif`,
            "Chennai Super Kings": `${base}images/teams/csk_logo.avif`,
            "Mumbai Indians": `${base}images/teams/mi_logo.avif`
        }
    },

    {
        question: "Who scored the fastest century in IPL history?",
        options: [
            "AB de Villiers",
            "Chris Gayle",
            "Jos Buttler",
            "Andre Russell"
        ],
        answer: "Chris Gayle",
        images: {
            "AB de Villiers": `${base}images/players/ab_de_villiers.avif`,
            "Chris Gayle": `${base}images/players/chris_gayle.avif`,
            "Jos Buttler": `${base}images/players/jos_buttler.avif`,
            "Andre Russell": `${base}images/players/andre_russell.avif`
        }
    },

    {
        question: "Who is the most expensive player in IPL history?",
        options: [
            "Rishabh Pant",
            "Shreyas Iyer",
            "Cameron Green",
            "Mitchell Starc"
        ],
        answer: "Rishabh Pant",
        images: {
            "Rishabh Pant": `${base}images/players/rishabh_pant.avif`,
            "Shreyas Iyer": `${base}images/players/shreyas_iyer.avif`,
            "Cameron Green": `${base}images/players/cameron_green.avif`,
            "Mitchell Starc": `${base}images/players/mitchell_starc.avif`
        }
    },

    {
        question: "Which team has never won an IPL title?",
        options: [
            "Royal Challengers Bangalore",
            "Sunrisers Hyderabad",
            "Punjab Kings",
            "Kolkata Knight Riders"
        ],
        answer: "Punjab Kings",
        images: {
            "Royal Challengers Bangalore": `${base}images/teams/rcb_logo.avif`,
            "Sunrisers Hyderabad": `${base}images/teams/srh_logo.avif`,
            "Punjab Kings": `${base}images/teams/pbks_logo.avif`,
            "Kolkata Knight Riders": `${base}images/teams/kkr_logo.avif`
        }
    },

    {
        question: "Which captain has never won an IPL title?",
        options: [
            "Hardik Pandya",
            "David Warner",
            "Shreyas Iyer",
            "Pat Cummins"
        ],
        answer: "Pat Cummins",
        images: {
            "Hardik Pandya": `${base}images/players/hardik_pandya.avif`,
            "David Warner": `${base}images/players/david_warner.avif`,
            "Shreyas Iyer": `${base}images/players/shreyas_iyer.avif`,
            "Pat Cummins": `${base}images/players/pat_cummins.avif`
        }
    },

    {
        question: "Which ground has hosted the most IPL matches?",
        options: [
            "Eden Gardens",
            "Wankhede Stadium",
            "M Chinnaswamy Stadium",
            "Narendra Modi Stadium"
        ],
        answer: "Eden Gardens",
        images: {
            "Eden Gardens": `${base}images/venues/eden_gardens.webp`,
            "Wankhede Stadium": `${base}images/venues/wankhede.webp`,
            "M Chinnaswamy Stadium": `${base}images/venues/chinnaswamy.webp`,
            "Narendra Modi Stadium": `${base}images/venues/narendra_modi.webp`
        }
    },

    {
        question: "Who has the best bowling figures in an IPL match?",
        options: [
            "Alzarri Joseph",
            "Jasprit Bumrah",
            "Adam Zampa",
            "Ishant Sharma"
        ],
        answer: "Alzarri Joseph",
        images: {
            "Alzarri Joseph": `${base}images/players/alzarri_joseph.avif`,
            "Jasprit Bumrah": `${base}images/players/jasprit_bumrah.avif`,
            "Adam Zampa": `${base}images/players/adam_zampa.avif`,
            "Ishant Sharma": `${base}images/players/ishant_sharma.avif`
        }
    },

    {
        question: "Which team has the highest team total in an IPL match?",
        options: [
            "Delhi Capitals",
            "Royal Challengers Bangalore",
            "Sunrisers Hyderabad",
            "Mumbai Indians"
        ],
        answer: "Sunrisers Hyderabad",
        images: {
            "Delhi Capitals": `${base}images/teams/dc_logo.avif`,
            "Royal Challengers Bangalore": `${base}images/teams/rcb_logo.avif`,
            "Sunrisers Hyderabad": `${base}images/teams/srh_logo.avif`,
            "Mumbai Indians": `${base}images/teams/mi_logo.avif`
        }
    },

    {
        question: "Who scored the most runs in a single IPL season?",
        options: [
            "Shubman Gill",
            "Jos Buttler",
            "David Warner",
            "Virat Kohli"
        ],
        answer: "Virat Kohli",
        images: {
            "Shubman Gill": `${base}images/players/shubman_gill.avif`,
            "Jos Buttler": `${base}images/players/jos_buttler.avif`,
            "David Warner": `${base}images/players/david_warner.avif`,
            "Virat Kohli": `${base}images/players/virat_kohli.avif`
        }
    },

    {
        question: "Who has represented the most number of teams in IPL history?",
        options: [
            "Yuvraj Singh",
            "Aaron Finch",
            "Jaydev Unadkat",
            "Manish Pandey"
        ],
        answer: "Aaron Finch",
        images: {
            "Yuvraj Singh": `${base}images/players/yuvraj_singh.avif`,
            "Aaron Finch": `${base}images/players/aaron_finch.avif`,
            "Jaydev Unadkat": `${base}images/players/jaydev_unadkat.avif`,
            "Manish Pandey": `${base}images/players/manish_pandey.avif`
        }
    }
];

export default iplQuestions;