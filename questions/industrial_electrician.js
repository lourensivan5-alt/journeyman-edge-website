const industrial_electrician = [
    // --- Knowledge and Recall (Approx 30%) ---
    {
        question: "What is the primary function of a Variable Frequency Drive (VFD)?",
        options: [
            "To increase the voltage supplied to a motor.",
            "To control the speed of an AC induction motor by varying the frequency and voltage.",
            "To provide overload protection only.",
            "To reverse the direction of a DC motor."
        ],
        answer: "To control the speed of an AC induction motor by varying the frequency and voltage."
    },
    {
        question: "In a Programmable Logic Controller (PLC) ladder logic diagram, what does a symbol with two parallel vertical lines represent?",
        options: [
            "A normally open contact.",
            "A normally closed contact.",
            "An output coil.",
            "A timer."
        ],
        answer: "A normally open contact."
    },
    {
        question: "According to the Canadian Electrical Code, what is the purpose of a 'pothead' in high-voltage cable terminations?",
        options: [
            "To protect the cable from physical damage.",
            "To provide a stress cone and seal the cable end from moisture.",
            "To increase the ampacity of the cable.",
            "To ground the cable shield."
        ],
        answer: "To provide a stress cone and seal the cable end from moisture."
    },
    {
        question: "What does the 'NEMA' rating on an electrical enclosure (e.g., NEMA 4X) signify?",
        options: [
            "The enclosure's voltage rating.",
            "The manufacturer's name.",
            "The level of protection it provides against environmental conditions like water and corrosion.",
            "The number of circuits it can contain."
        ],
        answer: "The level of protection it provides against environmental conditions like water and corrosion."
    },
    {
        question: "A 'lockout/tagout' procedure is performed for what primary reason?",
        options: [
            "To prevent theft of equipment.",
            "To track equipment maintenance schedules.",
            "To ensure a machine is de-energized and cannot be started while it is being serviced.",
            "To identify the person responsible for the equipment."
        ],
        answer: "To ensure a machine is de-energized and cannot be started while it is being serviced."
    },
    // --- Procedural and Application (Approx 40%) ---
    {
        question: "You need to measure the current draw of a 100 HP, 600V three-phase motor while it is running. What is the safest and most appropriate tool to use?",
        options: [
            "A multimeter with the leads connected in series with the motor.",
            "A clamp-on ammeter.",
            "An ohmmeter.",
            "A megohmmeter (Megger)."
        ],
        answer: "A clamp-on ammeter."
    },
    {
        question: "When connecting a new three-phase motor, you find it is running in the reverse direction. What is the correct procedure to change its direction of rotation?",
        options: [
            "Reverse the polarity of the control circuit.",
            "Swap any two of the three main power leads (e.g., L1 and L2).",
            "Change the settings on the motor's VFD.",
            "Rewire the motor's internal windings."
        ],
        answer: "Swap any two of the three main power leads (e.g., L1 and L2)."
    },
    {
        question: "What is the purpose of performing an insulation resistance test with a megohmmeter on a motor's windings?",
        options: [
            "To measure the motor's running current.",
            "To check for continuity in the windings.",
            "To detect any breakdown or contamination in the insulation between the windings and ground.",
            "To determine the motor's horsepower."
        ],
        answer: "To detect any breakdown or contamination in the insulation between the windings and ground."
    },
    {
        question: "In a 'star-delta' motor starter, what is the initial connection configuration of the motor windings during startup?",
        options: [
            "Delta configuration.",
            "Series configuration.",
            "Star (or Wye) configuration.",
            "Parallel configuration."
        ],
        answer: "Star (or Wye) configuration."
    },
    // --- Critical Thinking (Approx 30%) ---
    {
        question: "A motor is tripping on its thermal overload relay, but a clamp-on ammeter shows the current is below the motor's Full Load Amp (FLA) rating. What is a possible cause?",
        options: [
            "The overload heater element is incorrectly sized or faulty.",
            "The motor is running too fast.",
            "The supply voltage is too high.",
            "The motor bearings are in perfect condition."
        ],
        answer: "The overload heater element is incorrectly sized or faulty."
    },
    {
        question: "A PLC-controlled conveyor system fails to start. The 'RUN' light on the PLC is on, and the logic shows the output for the motor starter should be energized. However, the motor starter coil is not pulling in. What is the most likely fault?",
        options: [
            "The PLC program has a bug.",
            "The motor itself has failed.",
            "A fault exists in the physical output module of the PLC or the wiring between the module and the starter coil.",
            "The main disconnect for the conveyor is off."
        ],
        answer: "A fault exists in the physical output module of the PLC or the wiring between the module and the starter coil."
    },
    {
        question: "You measure the voltages between the three phases of a supply and get the following readings: A-B = 600V, B-C = 600V, A-C = 520V. This indicates what condition?",
        options: [
            "A normal, balanced three-phase supply.",
            "A complete loss of one phase.",
            "A significant voltage imbalance, possibly due to a poor connection or a utility issue.",
            "The meter is faulty."
        ],
        answer: "A significant voltage imbalance, possibly due to a poor connection or a utility issue."
    },
    {
        question: "An AC motor is making a loud humming noise and is slow to start. A clamp-on reading shows abnormally high current. This is a classic symptom of:",
        options: [
            "The motor being over-lubricated.",
            "A single-phasing condition (the loss of one of the three phases).",
            "The motor running unloaded.",
            "Low ambient temperature."
        ],
        answer: "A single-phasing condition (the loss of one of the three phases)."
    }
]
