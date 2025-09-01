const instrumentation_and_control_technician = [
    // --- Knowledge and Recall (Approx 30%) ---
    {
        question: "What does a standard 4-20 mA analog signal represent in a process control loop?",
        options: [
            "A live zero at 4 mA and 100% of the process variable at 20 mA.",
            "A dead zero at 4 mA and the maximum value at 20 mA.",
            "The signal is 4 to 20 volts.",
            "The signal is only used for temperature measurement."
        ],
        answer: "A live zero at 4 mA and 100% of the process variable at 20 mA."
    },
    {
        question: "What type of instrument is a Rosemount 3051?",
        options: [
            "A control valve",
            "A pressure transmitter",
            "A level switch",
            "A PLC"
        ],
        answer: "A pressure transmitter"
    },
    {
        question: "In a PID controller, what does the 'D' stand for?",
        options: [
            "Differential",
            "Derivative",
            "Direct",
            "Dwell"
        ],
        answer: "Derivative"
    },
    {
        question: "What is the primary purpose of an I/P transducer?",
        options: [
            "To convert a current signal (I) to a pneumatic signal (P).",
            "To convert a pneumatic signal (P) to a current signal (I).",
        "To measure input pressure.",
            "To isolate an electrical circuit."
        ],
        answer: "To convert a current signal (I) to a pneumatic signal (P)."
    },
    {
        question: "Which process variable is typically measured using a differential pressure transmitter and an orifice plate?",
        options: [
            "Temperature",
            "Level",
            "Flow",
            "Pressure"
        ],
        answer: "Flow"
    },
    {
        question: "A thermocouple works on what principle?",
        options: [
            "The Seebeck effect, where a voltage is produced when two dissimilar metals are joined at a temperature junction.",
            "The principle of thermal expansion.",
            "The change in electrical resistance with temperature.",
            "The Doppler effect."
        ],
        answer: "The Seebeck effect, where a voltage is produced when two dissimilar metals are joined at a temperature junction."
    },
    // --- Procedural and Application (Approx 40%) ---
    {
        question: "You are performing a 5-point calibration on a pressure transmitter with a range of 0-200 psi. What are the correct input pressures to check?",
        options: [
            "0, 25, 50, 75, 100 psi",
            "0, 50, 100, 150, 200 psi",
            "0, 40, 80, 120, 160, 200 psi",
            "10, 50, 100, 150, 190 psi"
        ],
        answer: "0, 50, 100, 150, 200 psi"
    },
    {
        question: "When terminating a shielded instrument cable at a field device, what is the standard practice for the shield wire?",
        options: [
            "Connect it to the ground terminal at both the field device and the control system.",
            "Leave it disconnected at both ends.",
            "Connect it to the ground terminal at the control system end and leave it insulated and disconnected (floating) at the field device end.",
            "Connect it to the negative signal wire."
        ],
        answer: "Connect it to the ground terminal at the control system end and leave it insulated and disconnected (floating) at the field device end."
    },
    {
        question: "To configure a 'smart' HART transmitter, what tool must be connected to the loop?",
        options: [
            "A standard multimeter.",
            "An oscilloscope.",
            "A HART communicator.",
            "A laptop with PLC software."
        ],
        answer: "A HART communicator."
    },
    {
        question: "A control valve is 'fail-closed'. What does this mean?",
        options: [
            "The valve will close if it loses its control signal (e.g., air pressure).",
            "The valve will stay in its last position if it loses power.",
            "The valve can only be operated manually.",
            "The valve is designed to leak when closed."
        ],
        answer: "The valve will close if it loses its control signal (e.g., air pressure)."
    },
    // --- Critical Thinking (Approx 30%) ---
    {
        question: "A process control loop for temperature is oscillating, swinging consistently above and below the setpoint. The controller is P+I only. What is a likely cause?",
        options: [
            "The proportional gain is set too low.",
            "The integral action (reset) is too slow.",
            "The proportional gain or the integral action is set too high (too aggressive), causing instability.",
            "The thermocouple is installed backwards."
        ],
        answer: "The proportional gain or the integral action is set too high (too aggressive), causing instability."
    },
    {
        question: "A flow meter is reading 0 kg/h, but you can visually see fluid moving through the sight glass. The transmitter is sending a 4.0 mA signal. This indicates:",
        options: [
            "The process has stopped.",
            "The flow meter is working perfectly.",
            "A fault with the flow meter itself or its configuration, as it is reading zero flow when there is actual flow.",
            "The output is saturated high."
        ],
        answer: "A fault with the flow meter itself or its configuration, as it is reading zero flow when there is actual flow."
    },
    {
        question: "You connect a multimeter in series with a 4-20 mA loop and get a reading of 2.5 mA. The valve in the loop is fully closed. What is the most likely problem?",
        options: [
            "The loop is operating normally.",
            "There is an open circuit or a broken wire somewhere in the loop.",
            "The power supply is faulty.",
            "The transmitter is not calibrated."
        ],
        answer: "There is an open circuit or a broken wire somewhere in the loop."
    },
    {
        question: "A pH analyzer in a wastewater stream is giving erratic readings. The probe was recently cleaned and calibrated. What is a probable external cause?",
        options: [
            "The temperature of the water is too high.",
            "A nearby VFD is creating electrical noise that is interfering with the high-impedance pH signal.",
            "The PLC is offline.",
            "The reagent tank is empty."
        ],
        answer: "A nearby VFD is creating electrical noise that is interfering with the high-impedance pH signal."
    }
]
