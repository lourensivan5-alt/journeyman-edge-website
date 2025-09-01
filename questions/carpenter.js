const carpenter = [
    // --- Knowledge and Recall (Approx 30%) ---
    {
        question: "In standard Canadian residential wood framing, what is the typical on-center spacing for wall studs?",
        options: [
            "12 inches",
            "16 inches",
            "20 inches",
            "24 inches"
        ],
        answer: "16 inches"
    },
    {
        question: "According to the National Building Code of Canada, what is the minimum required headroom clearance for a residential staircase?",
        options: [
            "1950 mm (approx. 6' 5\")",
            "2000 mm (approx. 6' 7\")",
            "2050 mm (approx. 6' 9\")",
            "2100 mm (approx. 6' 11\")"
        ],
        answer: "2050 mm (approx. 6' 9\")"
    },
    {
        question: "The vertical framing member that forms the side of a rough window opening is called a:",
        options: [
            "King stud",
            "Cripple stud",
            "Jack (or trimmer) stud",
            "Header stud"
        ],
        answer: "Jack (or trimmer) stud"
    },
    {
        question: "What is the name of the triangular cutout in a roof rafter that allows it to sit flat on the top plate of a wall?",
        options: [
            "Plumb cut",
            "Seat cut",
            "Heel cut",
            "Bird's mouth"
        ],
        answer: "Bird's mouth"
    },
    {
        question: "In floor framing, what are the pieces of solid lumber installed between joists to prevent them from twisting called?",
        options: [
            "Bridging",
            "Blocking (or solid bridging)",
            "Strongbacks",
            "Ledgers"
        ],
        answer: "Blocking (or solid bridging)"
    },
    {
        question: "What does the 'A' in 'A-grade' plywood signify?",
        options: [
            "It is for above-ground use only.",
            "It has a smooth, paintable surface with no more than 18 neatly made repairs.",
            "It is rated for agricultural applications.",
            "It is an exterior grade glue."
        ],
        answer: "It has a smooth, paintable surface with no more than 18 neatly made repairs."
    },
     {
        question: "What type of square is primarily used for laying out rafters and stairs?",
        options: [
            "Combination square",
            "Try square",
            "Framing square (or Steel square)",
            "Speed square"
        ],
        answer: "Framing square (or Steel square)"
    },
    // --- Procedural and Application (Approx 40%) ---
    {
        question: "You are framing a standard 8-foot high wall. What is the correct length to cut the regular (common) studs to account for a single bottom plate and a double top plate?",
        options: [
            "96 inches",
            "93 inches",
            "92 5/8 inches",
            "94 1/8 inches"
        ],
        answer: "92 5/8 inches"
    },
    {
        question: "When installing a pre-hung exterior door, what is the first step after placing the unit in the rough opening?",
        options: [
            "Shim the strike-side jamb.",
            "Nail the exterior brickmoulding.",
            "Shim and fasten the hinge-side jamb first, ensuring it is plumb.",
            "Install the lockset."
        ],
        answer: "Shim and fasten the hinge-side jamb first, ensuring it is plumb."
    },
    {
        question: "To lay out a wall for framing, what is the correct procedure for pulling the first stud measurement on the bottom plate to maintain the 16\" on-center spacing for sheathing?",
        options: [
            "Measure 16 inches from the end and mark both sides of the stud.",
            "Measure 15 1/4 inches from the end and mark a line for the edge of the first stud.",
            "Measure 16 3/4 inches from the end and mark a line for the center of the first stud.",
            "Measure 3/4\" in from the end and mark a line for the center of the first stud."
        ],
        answer: "Measure 15 1/4 inches from the end and mark a line for the edge of the first stud."
    },
    {
        question: "You need to calculate the total rise for a new staircase. How is this measurement correctly determined?",
        options: [
            "By measuring from the top of the subfloor on the lower level to the top of the subfloor on the upper level.",
            "By measuring from the finished floor on the lower level to the finished floor on the upper level.",
            "By counting the number of stairs and multiplying by the standard riser height.",
            "By measuring the length of the stringer."
        ],
        answer: "By measuring from the finished floor on the lower level to the finished floor on the upper level."
    },
    {
        question: "When installing asphalt shingles, what is the proper way to fasten them to the roof deck in a standard application?",
        options: [
            "Staples above the sealing strip.",
            "Four nails per shingle, placed below the sealing strip.",
            "Two nails per shingle, placed at the very top edge.",
            "Six nails per shingle in high-wind areas, placed just below the sealing strip."
        ],
        answer: "Four nails per shingle, placed below the sealing strip."
    },
    {
        question: "What is the correct method for checking a rectangular foundation for square?",
        options: [
            "Measure the length of all four sides to ensure they are equal.",
            "Use a framing square on all four corners.",
            "Measure the two diagonal distances; they must be equal.",
            "Ensure all angles are precisely 90 degrees using a protractor."
        ],
        answer: "Measure the two diagonal distances; they must be equal."
    },
     {
        question: "When creating a hip rafter, how many cheeks (sides) of the bird's mouth require a compound miter cut?",
        options: [
            "Zero, only plumb and seat cuts are needed.",
            "One cheek.",
            "Both cheeks.",
            "Four cheeks."
        ],
        answer: "Both cheeks."
    },
    // --- Critical Thinking (Approx 30%) ---
    {
        question: "A floor you are framing has a span of 16 feet using 2x10 joists. The plans call for a large opening in the middle of the floor for a staircase. What framing members are required to support the joists that are cut short by the opening?",
        options: [
            "A single header and a single trimmer joist on each side.",
            "Double headers and double trimmer joists.",
            "A series of cripple joists.",
            "Support posts directly underneath the opening."
        ],
        answer: "Double headers and double trimmer joists."
    },
    {
        question: "You are building a short retaining wall with pressure-treated lumber. To ensure longevity and proper drainage, what is a critical design element that must be included behind the wall?",
        options: [
            "A layer of standard plywood sheathing.",
            "A waterproof membrane, granular backfill (like gravel), and a weeping tile at the base.",
            "Compacted topsoil to provide support.",
            "A concrete parge coat."
        ],
        answer: "A waterproof membrane, granular backfill (like gravel), and a weeping tile at the base."
    },
    {
        question: "While framing a roof, you notice the ridge board is sagging between the supporting rafters. What is the most likely cause?",
        options: [
            "The rafters are cut too long.",
            "The bird's mouth cuts are too deep.",
            "The ridge board is undersized for the span or is not properly supported by collar ties or structural members.",
            "The top plates of the walls are not level."
        ],
        answer: "The ridge board is undersized for the span or is not properly supported by collar ties or structural members."
    },
    {
        question: "A client wants to remove a wall in their house. You discover it is a load-bearing wall. What is the correct and safe procedure to do this?",
        options: [
            "Remove the wall and then add a new beam in the ceiling.",
            "Build temporary support walls on both sides of the wall to be removed, then install a properly sized header or beam before removing the old wall.",
            "Cut a doorway in the wall first, then slowly remove the remaining sections.",
            "Advise the client it cannot be done."
        ],
        answer: "Build temporary support walls on both sides of the wall to be removed, then install a properly sized header or beam before removing the old wall."
    },
    {
        question: "After hanging a new interior door, you find it swings open on its own. What is the most likely issue?",
        options: [
            "The door is too heavy for the hinges.",
            "The hinge-side jamb is not plumb.",
            "The lockset is installed incorrectly.",
            "The door stop is too tight."
        ],
        answer: "The hinge-side jamb is not plumb."
    },
    {
        question: "You are installing hardwood flooring in a large room. To prevent the floor from buckling during humid summer months, what must you do?",
        options: [
            "Glue every board directly to the subfloor.",
            "Leave an expansion gap around the perimeter of the room.",
            "Install the boards as tightly as possible against each other.",
            "Acclimatize the wood by storing it outside before installation."
        ],
        answer: "Leave an expansion gap around the perimeter of the room."
    },
     {
        question: "You've built a deck that is 7 feet above the ground. According to the NBC, the guardrail posts are required to be spaced no more than how far apart?",
        options: [
            "8 feet (2.4 m)",
            "6 feet (1.8 m)",
            "5 feet (1.5 m)",
            "4 feet (1.2 m)"
        ],
        answer: "6 feet (1.8 m)"
    },
    {
        question: "A set of stairs feels awkward to walk on; the treads feel too short for the height of the risers. This violates which common carpentry rule of thumb for stair design?",
        options: [
            "The '36-inch width' rule.",
            "The 'Two Risers + One Tread = 24 to 25 inches' rule.",
            "The '7-11' rule (7 inch rise, 11 inch run).",
            "The 'headroom clearance' rule."
        ],
        answer: "The 'Two Risers + One Tread = 24 to 25 inches' rule."
    },
    {
        question: "A homeowner complains of a squeaky floor you recently installed. The subfloor is 3/4\" plywood. What is the most common cause of this issue?",
        options: [
            "Joists are spaced too far apart.",
            "The wrong type of wood was used for the joists.",
            "The subfloor was nailed down instead of being glued and screwed.",
            "The finished flooring was installed too soon."
        ],
        answer: "The subfloor was nailed down instead of being glued and screwed."
    },
    {
        question: "You need to cut a perfect circle with a 24-inch diameter out of a sheet of plywood. Which tool and method is most appropriate for this task?",
        options: [
            "A jigsaw, following a carefully drawn line.",
            "A router with a circle-cutting jig.",
            "A circular saw, making a series of straight cuts (kerf cutting).",
            "A handsaw, carefully rotating the plywood."
        ],
        answer: "A router with a circle-cutting jig."
    }
]

