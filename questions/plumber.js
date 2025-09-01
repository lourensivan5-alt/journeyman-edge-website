const plumber = [
    // --- Knowledge and Recall (Approx 30%) ---
    {
        question: "According to the National Plumbing Code of Canada (NPCC), what is the minimum size of a residential drainage pipe serving a single water closet (toilet)?",
        options: [
            "1 1/2 inches",
            "2 inches",
            "3 inches",
            "4 inches"
        ],
        answer: "3 inches"
    },
    {
        question: "What is the primary purpose of a P-trap in a drainage system?",
        options: [
            "To increase water pressure.",
            "To filter out debris from the wastewater.",
            "To create a water seal that prevents sewer gases from entering the building.",
            "To connect pipes of different sizes."
        ],
        answer: "To create a water seal that prevents sewer gases from entering the building."
    },
    {
        question: "The term 'DWV' in plumbing refers to:",
        options: [
            "Drinking Water Valve",
            "Drainage, Waste, and Vent",
            "Direct Water Volume",
            "Double Wye Valve"
        ],
        answer: "Drainage, Waste, and Vent"
    },
    {
        question: "What type of pipe is identified by its distinctive black color and is commonly used for natural gas distribution in Canada?",
        options: [
            "PEX (Cross-linked polyethylene)",
            "Copper Type L",
            "ABS (Acrylonitrile Butadiene Styrene)",
            "CSST (Corrugated Stainless Steel Tubing) with a polyethylene jacket"
        ],
        answer: "CSST (Corrugated Stainless Steel Tubing) with a polyethylene jacket"
    },
    {
        question: "In a plumbing system, what device is installed to prevent the reverse flow of contaminated water into the potable water supply?",
        options: [
            "A pressure regulator",
            "An expansion tank",
            "A backflow preventer",
            "A check valve"
        ],
        answer: "A backflow preventer"
    },
    {
        question: "What does the term 'fixture unit' represent in the NPCC?",
        options: [
            "The cost of a plumbing fixture.",
            "The physical weight of a fixture.",
            "A standardized measure of the probable discharge from a fixture into the drainage system.",
            "The number of fixtures a single plumber can install per day."
        ],
        answer: "A standardized measure of the probable discharge from a fixture into the drainage system."
    },
    {
        question: "What is the required minimum slope or grade for a 3-inch horizontal drainage pipe?",
        options: [
            "1/8 inch per foot (1%)",
            "1/4 inch per foot (2%)",
            "1/2 inch per foot (4%)",
            "1 inch per foot (8%)"
        ],
        answer: "1/4 inch per foot (2%)"
    },
    {
        question: "Which type of copper pipe, marked with a green stripe, is the heaviest-duty and approved for underground water service lines?",
        options: [
            "Type M (Red)",
            "Type L (Blue)",
            "Type K (Green)",
            "Type DWV (Yellow)"
        ],
        answer: "Type K (Green)"
    },
    // --- Procedural and Application (Approx 40%) ---
    {
        question: "You are installing a new dishwasher. According to code, how must the drainage hose be configured to prevent backflow from the sink drain?",
        options: [
            "It must be connected directly to the garbage disposal.",
            "It must be looped up as high as possible under the countertop to create an air gap.",
            "It must have its own dedicated P-trap.",
            "It must connect to the drainage pipe below the P-trap."
        ],
        answer: "It must be looped up as high as possible under the countertop to create an air gap."
    },
    {
        question: "When joining ABS pipe and fittings, what is the correct two-step process?",
        options: [
            "Apply primer to the pipe, then cement to the fitting.",
            "Apply cement to both the pipe and fitting, then twist a quarter turn.",
            "Apply primer to both surfaces, then apply cement to both surfaces before joining.",
            "Apply ABS cement to both the pipe and fitting; primer is not required."
        ],
        answer: "Apply ABS cement to both the pipe and fitting; primer is not required."
    },
    {
        question: "What is the proper procedure for soldering a copper water pipe joint?",
        options: [
            "Heat the fitting until it glows red, then apply solder.",
            "Clean and flux both pipe and fitting, heat the fitting until the flux sizzles, then apply solder to the joint.",
            "Apply solder to the cold pipe, then heat the joint until it melts.",
            "Flux the pipe only, insert it into the fitting, and heat the pipe."
        ],
        answer: "Clean and flux both pipe and fitting, heat the fitting until the flux sizzles, then apply solder to the joint."
    },
    {
        question: "A customer complains of a 'rotten egg' smell from their hot water. What is the most likely cause and the standard plumbing solution?",
        options: [
            "The P-trap has dried out; solution is to run water.",
            "The main sewer line is blocked; solution is to auger the line.",
            "A reaction with the anode rod in the hot water tank; solution is to replace the magnesium rod with an aluminum one.",
            "The water pressure is too low; solution is to install a booster pump."
        ],
        answer: "A reaction with the anode rod in the hot water tank; solution is to replace the magnesium rod with an aluminum one."
    },
    {
        question: "When installing a new water closet, what is the final step after setting the bowl and bolting it down?",
        options: [
            "Connect the water supply line.",
            "Install the toilet seat.",
            "Caulk the base of the toilet to the floor, leaving a small gap at the back.",
            "Test flush the toilet multiple times."
        ],
        answer: "Caulk the base of the toilet to the floor, leaving a small gap at the back."
    },
    {
        question: "You need to connect a PEX water line to a copper pipe. What type of fitting is required to make this transition?",
        options: [
            "A standard compression fitting.",
            "A PEX-to-copper transition fitting (e.g., sweat x barb, or push-to-connect).",
            "A dielectric union.",
            "A flare fitting."
        ],
        answer: "A PEX-to-copper transition fitting (e.g., sweat x barb, or push-to-connect)."
    },
    {
        question: "What is the standard procedure for pressure testing a new residential natural gas line in most Canadian jurisdictions?",
        options: [
            "Use air or an inert gas to pressurize the system to 15 psi for a minimum of 15 minutes.",
            "Use water to pressurize the system to 50 psi for 30 minutes.",
            "Use the appliance's own gas to test for leaks with a soap solution.",
            "Pressurize to 100 psi for 5 minutes."
        ],
        answer: "Use air or an inert gas to pressurize the system to 15 psi for a minimum of 15 minutes."
    },
    {
        question: "When installing a tub/shower valve body inside a standard 2x4 wall, what is the typical rough-in depth from the front face of the studs?",
        options: [
            "Flush with the front of the studs.",
            "Centered in the wall cavity.",
            "Set back so the valve's plaster guard is flush with the planned finished wall surface.",
            "Flush with the back of the studs."
        ],
        answer: "Set back so the valve's plaster guard is flush with the planned finished wall surface."
    },
    // --- Critical Thinking (Approx 30%) ---
    {
        question: "After installing new faucets in a bathroom, the homeowner complains of very low water pressure only at those fixtures. The rest of the house is fine. What is the most likely cause?",
        options: [
            "The main water valve for the house is partially closed.",
            "Debris from the installation has clogged the faucet's aerator or supply lines.",
            "The PEX piping used is too small for the application.",
            "The new faucets are not compatible with the home's water pressure."
        ],
        answer: "Debris from the installation has clogged the faucet's aerator or supply lines."
    },
    {
        question: "You are tracing a blockage in a residential drain. You've confirmed the fixtures are clogged, but the main sewer cleanout in the basement is clear. Where is the blockage most likely located?",
        options: [
            "In the municipal sewer main on the street.",
            "In a branch line between the fixtures and the main building drain.",
            "In the vent stack on the roof.",
            "In the P-trap of a single fixture."
        ],
        answer: "In a branch line between the fixtures and the main building drain."
    },
    {
        question: "A loud 'hammering' noise occurs in the walls whenever a washing machine or dishwasher shuts off. What is the cause of this 'water hammer' and what device should be installed to fix it?",
        options: [
            "Cause is air in the pipes; solution is to install air vents.",
            "Cause is loose pipes; solution is to add more pipe straps.",
            "Cause is a sudden stop in water flow; solution is to install water hammer arrestors.",
            "Cause is excessive water pressure; solution is to install a new pressure reducing valve (PRV)."
        ],
        answer: "Cause is a sudden stop in water flow; solution is to install water hammer arrestors."
    },
    {
        question: "A home's plumbing system is entirely vented through a single 3-inch stack that terminates at the roof. No other vents are present. This type of system is known as:",
        options: [
            "A wet vent system.",
            "A circuit vent system.",
            "A stack vent system.",
            "An illegal and non-compliant system."
        ],
        answer: "A stack vent system."
    },
    {
        question: "In a cold Canadian climate, what is a critical installation requirement for an exterior hose bibb (outdoor faucet) to prevent it from freezing and bursting in the winter?",
        options: [
            "It must be made of brass.",
            "It must be a 'frost-free' type, which has a long stem that shuts the water off inside the heated part of the house.",
            "It must be wrapped in insulation.",
            "It must have a dedicated shut-off valve located directly behind it."
        ],
        answer: "It must be a 'frost-free' type, which has a long stem that shuts the water off inside the heated part of the house."
    },
    {
        question: "A customer's toilet runs continuously. You've confirmed the flapper is sealing correctly. What is the next most likely component to have failed?",
        options: [
            "The wax ring.",
            "The fill valve (ballcock assembly) is not shutting off.",
            "The flush handle is stuck.",
            "The toilet bowl has a crack."
        ],
        answer: "The fill valve (ballcock assembly) is not shutting off."
    },
    {
        question: "You notice that when an upstairs toilet is flushed, a downstairs sink gurgles. What does this indicate?",
        options: [
            "A properly functioning drainage system.",
            "The water pressure in the house is too high.",
            "A partial blockage or an issue with the vent system is causing a vacuum.",
            "The sink's P-trap has lost its water seal."
        ],
        answer: "A partial blockage or an issue with the vent system is causing a vacuum."
    },
    {
        question: "A hot water tank's T&P relief valve is constantly weeping. The valve was recently replaced. What is the most probable underlying issue?",
        options: [
            "The water temperature is set too low.",
            "The incoming water pressure is too low.",
            "The home's water pressure is too high, or the thermal expansion tank has failed.",
            "The dip tube inside the tank is broken."
        ],
        answer: "The home's water pressure is too high, or the thermal expansion tank has failed."
    },
    {
        question: "A multi-story building has weak water pressure on the top floors, but adequate municipal pressure at the entrance. What is the most likely cause?",
        options: [
            "The pipes on the top floor are too large.",
            "There are too many fixtures in the building.",
            "Head loss due to the vertical height is reducing the effective pressure.",
            "The main shutoff valve is partially closed."
        ],
        answer: "Head loss due to the vertical height is reducing the effective pressure."
    }
]
