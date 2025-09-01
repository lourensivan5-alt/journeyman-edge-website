const welder = [
    // --- Knowledge and Recall (Approx 30%) ---
    {
        question: "In welding symbols according to CSA standards, where is the information for the 'other side' of the joint located?",
        options: [
            "Above the reference line.",
            "Below the reference line.",
            "To the right of the weld symbol.",
            "In the tail of the symbol."
        ],
        answer: "Above the reference line."
    },
    {
        question: "What does the acronym SMAW stand for in the context of welding?",
        options: [
            "Submerged Metal Arc Welding",
            "Shielded Metal Arc Welding",
            "Semiautomatic Metal Arc Welding",
            "Superior Metal Arc Welding"
        ],
        answer: "Shielded Metal Arc Welding"
    },
    {
        question: "According to Canadian safety standards, what is the maximum safe working pressure for acetylene gas in its free state?",
        options: [
            "15 psi",
            "30 psi",
            "50 psi",
            "100 psi"
        ],
        answer: "15 psi"
    },
    {
        question: "In the electrode classification E7018, what does the '1' indicate?",
        options: [
            "The electrode has an iron powder coating.",
            "The electrode is for flat position only.",
            "The electrode is suitable for all welding positions.",
            "The electrode requires an AC current only."
        ],
        answer: "The electrode is suitable for all welding positions."
    },
    {
        question: "What is the primary role of the Canadian Welding Bureau (CWB)?",
        options: [
            "To manufacture welding consumables.",
            "To set the prices for welding services across Canada.",
            "To administer Canada's national welding standards, certifying companies, and personnel.",
            "To exclusively train welders for government projects."
        ],
        answer: "To administer Canada's national welding standards, certifying companies, and personnel."
    },
    {
        question: "A weld defect characterized by gas pockets or voids within the weld metal is known as:",
        options: [
            "Undercut",
            "Slag inclusion",
            "Porosity",
            "Lack of fusion"
        ],
        answer: "Porosity"
    },
    {
        question: "What type of polarity is most commonly used for the GMAW process when welding steel with solid wire?",
        options: [
            "Alternating Current (AC)",
            "Direct Current Electrode Negative (DCEN)",
            "Direct Current Electrode Positive (DCEP)",
            "Variable Polarity (VP)"
        ],
        answer: "Direct Current Electrode Positive (DCEP)"
    },
    // --- Procedural and Application (Approx 40%) ---
    {
        question: "You are preparing to weld two 1/2-inch thick carbon steel plates for a structural beam, as per CSA W59. Which of the following electrodes is most suitable for an all-position weld requiring high toughness?",
        options: [
            "E6010",
            "E6013",
            "E7024",
            "E7018"
        ],
        answer: "E7018"
    },
    {
        question: "When setting up an oxy-acetylene torch for cutting, what is the correct first step after cracking the cylinder valves?",
        options: [
            "Ignite the acetylene with a striker.",
            "Set the working pressure for oxygen.",
            "Briefly open each torch valve to purge the lines.",
            "Attach the regulators to the cylinders."
        ],
        answer: "Briefly open each torch valve to purge the lines."
    },
    {
        question: "To prevent hydrogen-induced cracking, how must E7018 electrodes be properly stored on a job site according to manufacturer and code requirements?",
        options: [
            "In their original sealed container until use.",
            "In a heated rod oven at a specified temperature.",
            "In a dry, cool toolbox.",
            "Coated in a thin layer of oil to repel moisture."
        ],
        answer: "In a heated rod oven at a specified temperature."
    },
    {
        question: "A welding procedure requires a 3G (vertical up) open root butt weld on a pipe using SMAW. What is the generally accepted technique for the root pass?",
        options: [
            "A fast, straight drag technique.",
            "A wide weaving motion covering both sides of the joint.",
            "A slight side-to-side oscillation or 'whip and pause' technique.",
            "A series of circular motions."
        ],
        answer: "A slight side-to-side oscillation or 'whip and pause' technique."
    },
    {
        question: "A blueprint shows a fillet weld symbol below the reference line with '1/4' to its left and '6-12' to its right. What does this specify?",
        options: [
            "A 1/4\" fillet weld on the 'other' side, 6\" long with 12\" spacing.",
            "A 1/4\" fillet weld on the 'arrow' side, made of 6 to 12 passes.",
            "A 1/4\" intermittent fillet weld on the 'arrow' side, with 6\" long segments spaced 12\" apart center-to-center.",
            "A continuous 1/4\" fillet weld, 6\" to 12\" long."
        ],
        answer: "A 1/4\" intermittent fillet weld on the 'arrow' side, with 6\" long segments spaced 12\" apart center-to-center."
    },
    {
        question: "After connecting new regulators to oxy-acetylene cylinders, what is the correct method for checking for leaks at the connections?",
        options: [
            "Use a lit torch to carefully listen for a 'hissing' sound.",
            "Apply a soapy water or approved leak-detection solution and look for bubbles.",
            "Pressurize the system and submerge the regulators in water.",
            "Briefly smell the connections for any gas odor."
        ],
        answer: "Apply a soapy water or approved leak-detection solution and look for bubbles."
    },
    {
        question: "When performing a multi-pass fillet weld in the horizontal (2F) position, how should the slag be removed between passes?",
        options: [
            "It should be left in place to insulate the next pass.",
            "It must be completely removed using a chipping hammer, wire brush, or grinder.",
            "Only loose pieces of slag need to be chipped away.",
            "It can be melted into the next pass by increasing the amperage."
        ],
        answer: "It must be completely removed using a chipping hammer, wire brush, or grinder."
    },
    // --- Critical Thinking (Approx 30%) ---
    {
        question: "A welder using GMAW with a 75% Argon / 25% CO2 shielding gas is producing welds with excessive spatter and a convex, rope-like bead. What is the most likely cause of this issue?",
        options: [
            "Travel speed is too fast.",
            "Voltage setting is too low for the wire feed speed.",
            "Shielding gas flow rate is too high.",
            "The work clamp has a poor connection."
        ],
        answer: "Voltage setting is too low for the wire feed speed."
    },
    {
        question: "While performing a GTAW (TIG) weld on 1/8\" aluminum, the welder notices the tungsten electrode is quickly eroding and the arc is unstable and difficult to control. The machine is set to DCEP. What is the fundamental error?",
        options: [
            "The travel angle is incorrect.",
            "The shielding gas flow is too low.",
            "The polarity is wrong; GTAW on aluminum requires AC for its cleaning action.",
            "The tungsten is the wrong type for aluminum."
        ],
        answer: "The polarity is wrong; GTAW on aluminum requires AC for its cleaning action."
    },
    {
        question: "An inspector uses dye penetrant testing on a root pass of a groove weld and finds a series of linear indications. This suggests which type of critical weld defect?",
        options: [
            "Porosity",
            "Cracks",
            "Slag inclusions",
            "Undercut"
        ],
        answer: "Cracks"
    },
    {
        question: "A structural column is welded to a base plate. After cooling, a visual inspection reveals a shallow groove melted into the base metal at the toe of the weld, which was not filled by weld metal. What is this defect and how could it be prevented?",
        options: [
            "Overlap; prevented by increasing travel speed.",
            "Undercut; prevented by pausing longer at the weld toe or reducing amperage/travel speed.",
            "Lack of fusion; prevented by increasing amperage.",
            "Concavity; prevented by using a smaller electrode."
        ],
        answer: "Undercut; prevented by pausing longer at the weld toe or reducing amperage/travel speed."
    },
    {
        question: "A welder is working inside a large steel tank and finds the SMAW arc deflects unpredictably, making it hard to control the puddle. What phenomenon is causing this, and what is a practical solution?",
        options: [
            "Arc flash; solution is to use a darker helmet lens.",
            "Magnetic arc blow; solution is to move the work clamp to a different location or switch to AC.",
            "Gas interference; solution is to build a shelter around the work area.",
            "Voltage drop; solution is to use shorter welding cables."
        ],
        answer: "Magnetic arc blow; solution is to move the work clamp to a different location or switch to AC."
    },
    {
        question: "A critical pipe weld made with E6010 for the root and E7018 for the fill passes fails an X-ray inspection, showing a dark, straight line at the fusion line between the weld and base metal. What is the most likely defect?",
        options: [
            "Incomplete penetration.",
            "Porosity.",
            "Lack of side-wall fusion.",
            "Excessive reinforcement."
        ],
        answer: "Lack of side-wall fusion."
    },
    {
        question: "A welder is asked to join a 1-inch thick plate to a 1/4-inch thick plate. What is a critical consideration to avoid cracking or distortion?",
        options: [
            "Focusing the arc primarily on the thinner plate to prevent burn-through.",
            "Using the highest possible amperage to ensure deep penetration on the thick plate.",
            "Applying preheat to the thicker plate to slow the cooling rate and reduce thermal stresses.",
            "Using a small diameter electrode to keep the heat input low."
        ],
        answer: "Applying preheat to the thicker plate to slow the cooling rate and reduce thermal stresses."
    },
    {
        question: "During an FCAW-S (self-shielded) weld outdoors, the resulting weld bead is riddled with porosity. The wind is moderate. What is the most probable cause?",
        options: [
            "The wire feed speed is too slow.",
            "The voltage is too high.",
            "The self-shielding gas generated by the flux is being blown away by the wind.",
            "The base metal is contaminated with oil."
        ],
        answer: "The self-shielding gas generated by the flux is being blown away by the wind."
    }
]
