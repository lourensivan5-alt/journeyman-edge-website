const electrician_construction = [
    // --- Knowledge and Recall (Approx 30%) ---
    {
        question: "According to the Canadian Electrical Code (CEC), what is the minimum bending radius for an armored cable (BX/AC90) from the inner edge of the bend?",
        options: [
            "3 times the overall diameter of the cable.",
            "5 times the overall diameter of the cable.",
            "6 times the overall diameter of the cable.",
            "12 times the overall diameter of the cable."
        ],
        answer: "6 times the overall diameter of the cable."
    },
    {
        question: "What does a red-colored octagon-shaped tag on electrical equipment signify in Canadian safety standards?",
        options: [
            "The equipment is new.",
            "The equipment is out of service and must not be operated.",
            "The equipment is operating at high voltage.",
            "The equipment requires inspection."
        ],
        answer: "The equipment is out of service and must not be operated."
    },
    {
        question: "In a standard 120V Canadian residential circuit, what are the colors for the hot, neutral, and ground wires respectively?",
        options: [
            "White, Black, Green",
            "Black, White, Bare/Green",
            "Red, White, Black",
            "Black, Blue, Green"
        ],
        answer: "Black, White, Bare/Green"
    },
    {
        question: "What is the primary purpose of a Ground Fault Circuit Interrupter (GFCI)?",
        options: [
            "To protect equipment from voltage surges.",
            "To protect people from electrical shock by detecting imbalances in current.",
            "To prevent circuit overloads like a standard breaker.",
            "To regulate the voltage on a circuit."
        ],
        answer: "To protect people from electrical shock by detecting imbalances in current."
    },
    {
        question: "The term 'ampacity' refers to the:",
        options: [
            "Voltage rating of a conductor.",
            "Maximum current a conductor can carry continuously without exceeding its temperature rating.",
            "Resistance of a conductor per meter.",
            "Total power capacity of a circuit."
        ],
        answer: "Maximum current a conductor can carry continuously without exceeding its temperature rating."
    },
    {
        question: "What does the 'T' rating on a conductor's insulation (e.g., T90) indicate?",
        options: [
            "It is suitable for underground burial.",
            "It has a thermoplastic insulation.",
            "It is approved for temporary wiring.",
            "It is a tracer wire."
        ],
        answer: "It has a thermoplastic insulation."
    },
    // --- Procedural and Application (Approx 40%) ---
    {
        question: "You are required to install a 15A, 120V receptacle in a location where it may be exposed to rain. According to the CEC, what type of receptacle and cover must be used?",
        options: [
            "A standard receptacle with a weatherproof cover for use in dry locations only.",
            "A GFCI receptacle with a weatherproof cover marked 'Extra-Duty' and 'Wet Locations'.",
            "A twist-lock receptacle.",
            "Any receptacle as long as it is installed under an overhang."
        ],
        answer: "A GFCI receptacle with a weatherproof cover marked 'Extra-Duty' and 'Wet Locations'."
    },
    {
        question: "When terminating an aluminum wire on a device (receptacle or switch) what is a critical step to ensure a safe connection?",
        options: [
            "Use a device marked 'CU-AL' or 'CO/ALR' and apply an anti-oxidant compound to the wire.",
            "Use any standard copper-only device.",
            "Twist the aluminum wire together with a short copper pigtail.",
            "Sand the aluminum wire until it is shiny."
        ],
        answer: "Use a device marked 'CU-AL' or 'CO/ALR' and apply an anti-oxidant compound to the wire."
    },
    {
        question: "How many insulated #12 AWG copper conductors are permitted in a standard 4\" x 2 1/8\" deep octagonal box according to the CEC box fill calculations?",
        options: [
            "6",
            "8",
            "10",
            "12"
        ],

        answer: "8"
    },
    {
        question: "What is the correct procedure for bonding the metallic water piping system in a residential building?",
        options: [
            "Connect the ground wire to the hot water pipe only.",
            "Connect a bond wire from the panel's ground bus to the cold water pipe near where it enters the building, before any plastic meters or valves.",
            "A bond is not required if the plumbing is all copper.",
            "Attach the ground wire to an exterior hose bibb."
        ],
        answer: "Connect a bond wire from the panel's ground bus to the cold water pipe near where it enters the building, before any plastic meters or valves."
    },
    {
        question: "You are installing a three-way switch circuit. How many current-carrying conductors are typically required in the cable running between the two switches?",
        options: [
            "Two (a hot and a neutral)",
            "Three (two travelers and a common)",
            "Four (two travelers, a common, and a neutral)",
            "Two (two travelers)"
        ],
        answer: "Three (two travelers and a common)"
    },
    // --- Critical Thinking (Approx 30%) ---
    {
        question: "A homeowner reports that the lights in their bedroom dim significantly whenever the hairdryer is turned on in the bathroom on the same circuit. What is the most likely electrical issue?",
        options: [
            "The light bulbs are old.",
            "A poor or loose neutral connection at the panel or a receptacle on the circuit.",
            "The circuit breaker is oversized for the wire.",
            "The hairdryer is faulty."
        ],
        answer: "A poor or loose neutral connection at the panel or a receptacle on the circuit."
    },
    {
        question: "You measure 120V from hot to neutral, 120V from hot to ground, but only 30V from neutral to ground on an active circuit. What does this indicate?",
        options: [
            "A perfectly normal and safe circuit.",
            "A lost or open neutral connection.",
            "An open ground connection.",
            "The circuit is overloaded."
        ],
        answer: "A lost or open neutral connection."
    },
    {
        question: "A new motor is tripping its breaker instantly upon startup. The breaker and wire size are correct for the motor's full load amps. What is a possible cause?",
        options: [
            "The motor is not properly grounded.",
            "A short circuit (ground fault or phase-to-phase fault) exists in the motor windings or the wiring to it.",
            "The ambient temperature is too high.",
            "The supply voltage is too low."
        ],
        answer: "A short circuit (ground fault or phase-to-phase fault) exists in the motor windings or the wiring to it."
    },
    {
        question: "To connect a subpanel in a detached garage, how must the neutral and ground conductors be configured inside the subpanel according to the CEC?",
        options: [
            "The neutral bus and ground bus must be bonded together.",
            "The neutral bus must be isolated from the ground bus, which is bonded to the panel enclosure.",
            "The ground wire is not required for a subpanel.",
            "The neutral conductor is bonded directly to the panel enclosure."
        ],
        answer: "The neutral bus must be isolated from the ground bus, which is bonded to the panel enclosure."
    },
    {
        question: "While troubleshooting, you find that a GFCI breaker trips, but a standard breaker in the same position does not. What is the most probable fault?",
        options: [
            "A circuit overload.",
            "A short circuit between hot and neutral.",
            "A ground fault, where a small amount of current is leaking to ground.",
            "The supply voltage is unstable."
        ],
        answer: "A ground fault, where a small amount of current is leaking to ground."
    }
]
