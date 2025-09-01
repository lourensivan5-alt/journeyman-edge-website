const automotive_service_technician = [
    // --- Knowledge and Recall (Approx 30%) ---
    {
        question: "What is the primary function of an engine's Positive Crankcase Ventilation (PCV) valve?",
        options: [
            "To increase fuel pressure.",
            "To vent unburned fuel vapours from the crankcase back into the intake manifold.",
            "To regulate engine coolant temperature.",
            "To adjust the air-fuel mixture."
        ],
        answer: "To vent unburned fuel vapours from the crankcase back into the intake manifold."
    },
    {
        question: "In a modern vehicle with a CAN bus system, what does 'CAN' stand for?",
        options: [
            "Computerized Automotive Network",
            "Controller Area Network",
            "Car Accessory Network",
            "Central Actuator Node"
        ],
        answer: "Controller Area Network"
    },
    {
        question: "What is the standard firing order for a typical inline 4-cylinder engine?",
        options: [
            "1-2-3-4",
            "1-4-3-2",
            "1-3-4-2",
            "1-2-4-3"
        ],
        answer: "1-3-4-2"
    },
    {
        question: "The term 'hygroscopic' when referring to brake fluid means that it:",
        options: [
            "Resists high temperatures.",
            "Absorbs moisture from the air.",
            "Lubricates rubber seals.",
            "Is synthetic."
        ],
        answer: "Absorbs moisture from the air."
    },
    {
        question: "What does the 'W' in 5W-30 motor oil stand for?",
        options: [
            "Weight",
            "Warm",
            "Winter",
            "Water-resistant"
        ],
        answer: "Winter"
    },
    {
        question: "What component in the exhaust system is responsible for converting toxic gases into less harmful emissions?",
        options: [
            "Muffler",
            "Resonator",
            "Catalytic converter",
            "Oxygen sensor"
        ],
        answer: "Catalytic converter"
    },
    {
        question: "In a conventional differential, what allows the outside wheel to turn faster than the inside wheel during a turn?",
        options: [
            "The ring and pinion gears.",
            "The axle shafts.",
            "The spider and side gears.",
            "The carrier bearings."
        ],
        answer: "The spider and side gears."
    },
    // --- Procedural and Application (Approx 40%) ---
    {
        question: "You are performing a wheel alignment. What angle adjustment corrects the inward or outward tilt of the top of the tire when viewed from the front?",
        options: [
            "Caster",
            "Toe",
            "Thrust angle",
            "Camber"
        ],
        answer: "Camber"
    },
    {
        question: "When replacing a timing belt, what is the most critical procedural step to ensure the engine runs correctly after reassembly?",
        options: [
            "Replacing the water pump at the same time.",
            "Aligning the crankshaft and camshaft timing marks precisely before removing the old belt.",
            "Setting the correct tension on the belt tensioner.",
            "Disconnecting the battery."
        ],
        answer: "Aligning the crankshaft and camshaft timing marks precisely before removing the old belt."
    },
    {
        question: "A customer's vehicle is pulling to the right. A tire pressure check and alignment check show no issues. What is the next logical diagnostic step?",
        options: [
            "Replace the front struts.",
            "Perform a 'cross-rotation' of the front tires to check for a radial tire pull.",
            "Bleed the brake system.",
            "Check the rear axle for damage."
        ],
        answer: "Perform a 'cross-rotation' of the front tires to check for a radial tire pull."
    },
    {
        question: "What is the correct procedure for evacuating and recharging a vehicle's A/C system that uses R-134a refrigerant?",
        options: [
            "Vent the old refrigerant to the atmosphere and add new refrigerant.",
            "Use a certified recovery/recycling/recharging machine to recover the old refrigerant, pull a vacuum, and recharge with the specified amount.",
            "Top up the existing refrigerant until the system blows cold.",
            "Flush the system with compressed air before recharging."
        ],
        answer: "Use a certified recovery/recycling/recharging machine to recover the old refrigerant, pull a vacuum, and recharge with the specified amount."
    },
    {
        question: "When diagnosing a 'Check Engine' light, what is the first tool a technician should use?",
        options: [
            "A multimeter",
            "A test light",
            "An OBD-II scan tool",
            "A wiring diagram"
        ],
        answer: "An OBD-II scan tool"
    },
    {
        question: "You are servicing a brake caliper and need to push the piston back into its bore to accommodate new pads. On many rear calipers with integrated parking brakes, what special step is required?",
        options: [
            "The piston must be hammered back in.",
            "The piston must be turned (screwed) back into the caliper while applying pressure.",
            "The bleeder screw must be opened first.",
            "The parking brake must be engaged."
        ],
        answer: "The piston must be turned (screwed) back into the caliper while applying pressure."
    },
    // --- Critical Thinking (Approx 30%) ---
    {
        question: "A vehicle with an automatic transmission shudders when shifting from 2nd to 3rd gear, but all other shifts are smooth. The fluid level and condition are good. What is a likely cause?",
        options: [
            "Low tire pressure.",
            "A failing engine mount.",
            "A faulty shift solenoid or clutch pack specific to the 2-3 shift.",
            "The transmission filter is clogged."
        ],
        answer: "A faulty shift solenoid or clutch pack specific to the 2-3 shift."
    },
    {
        question: "An engine has a parasitic electrical draw that is draining the battery overnight. After isolating circuits by pulling fuses, you find the draw disappears when the 'Interior Lights' fuse is pulled. However, all interior lights are off. What is a probable cause?",
        options: [
            "A faulty alternator.",
            "A stuck relay or a module on that circuit that is not 'going to sleep'.",
            "The battery is old and needs replacement.",
            "The ignition switch is faulty."
        ],
        answer: "A stuck relay or a module on that circuit that is not 'going to sleep'."
    },
    {
        question: "A vehicle's engine cranks normally but will not start. You confirm there is fuel pressure and spark. What is the next most likely component to test?",
        options: [
            "The battery.",
            "The starter motor.",
            "The crankshaft position sensor.",
            "The oxygen sensor."
        ],
        answer: "The crankshaft position sensor."
    },
    {
        question: "A customer complains of a sweet, syrupy smell and a green fluid leaking from the front of their vehicle. This is almost certainly a leak from which system?",
        options: [
            "The power steering system.",
            "The engine cooling system (antifreeze/coolant).",
            "The brake system.",
            "The air conditioning system."
        ],
        answer: "The engine cooling system (antifreeze/coolant)."
    },
    {
        question: "An engine is running rough and the scan tool shows a code P0302 - 'Cylinder 2 Misfire Detected'. To determine if the cause is a faulty spark plug or a faulty ignition coil, what is the quickest and most effective diagnostic step?",
        options: [
            "Replace the spark plug in cylinder 2.",
            "Replace the ignition coil on cylinder 2.",
            "Swap the ignition coil from cylinder 2 with another cylinder (e.g., cylinder 1) and see if the misfire code moves to that cylinder.",
            "Perform a compression test on cylinder 2."
        ],
        answer: "Swap the ignition coil from cylinder 2 with another cylinder (e.g., cylinder 1) and see if the misfire code moves to that cylinder."
    },
    {
        question: "A modern gasoline direct injection (GDI) engine is known to have issues with carbon buildup on the back of the intake valves. Why does this occur?",
        options: [
            "The fuel quality in Canada is poor.",
            "Because the fuel is injected directly into the cylinder, it no longer washes over and cleans the intake valves.",
            "The PCV system is inefficient.",
            "The engine oil is not being changed frequently enough."
        ],
        answer: "Because the fuel is injected directly into the cylinder, it no longer washes over and cleans the intake valves."
    }
]
