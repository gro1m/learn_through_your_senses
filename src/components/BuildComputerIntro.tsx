import timerImage from "../assets/images/build_computer/IMG_6807.png";
import breadboardcircuitImage from "../assets/images/build_computer/IMG_6743.png";
import timerVideo from "../assets/videos/IMG_6742.mov";

export default function BuildComputerIntro() : JSX.Element {
    return (
        <main>
            <h1> Introduction </h1>
            
            {/* TODO: refer to ben eater website: https://eater.net/8bit
                TODO: show general overview of the parts */}
           
            <h1> Computer modules </h1>
            <h2> Clock circuit: Timer </h2>

            <div className="container">
                <figure>
                    <img src={timerImage} alt="Schematics of timer" width="100%" height="100%"/>
                    <figcaption> Electronic circuit schematic </figcaption>
                </figure>

                <figure>
                    <img src={breadboardcircuitImage} alt="Breadboard circuit" width="100%" height="100%"/>
                    <figcaption>Bread-board circuit</figcaption>
                </figure>

            </div>


            <figure>
                <video width="50%" height="50%" controls={true}>
                    <source src={timerVideo} />
                </video>
                <figcaption> Timer in action </figcaption>
            </figure>
            <h1> List of ordered components </h1>
            <h2> Arithmetic Logic Unit (ALU) </h2>
            <h3> 4-bit full adder design </h3>
            <h2> Planned </h2>
            <h3> improvements</h3>
            <h3> components </h3>
            <h4> Registers </h4>
            <h4> Random access memory modules (RAM) </h4>
            <h4> Program counter </h4>
            <h4> Output register </h4>
            <h4> CPU control register </h4>
        </main>
    )
}

