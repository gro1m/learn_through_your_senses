import { MathJax } from "better-react-mathjax";
import simplernnImage from "../assets/images/deep-learning/simple_rnn.png";
import smanalogyImage from "../assets/images/deep-learning/state_machine_analogy.png";
import rnnmodelImage from "../assets/images/deep-learning/rnn_model.png";
import rnnexampleImage from "../assets/images/deep-learning/example_many_to_one.png";
import bpttrnnImage from "../assets//images/deep-learning/bptt_rnn.png";
import rnnneuronImage from "../assets//images/deep-learning/rnn_neuron.png";


export default function SimpleRNN(){
    return (
    <>
    <h1>Simple RNN</h1>
        <img src={simplernnImage} alt="Elman network: Simple RNN" />

        <h2>State Machine Analogy</h2>
        <img src={smanalogyImage} alt="State Machine Analogy for simple RNN"/>

        <h2>RNN model</h2>
        <img src={rnnmodelImage} alt="Folded and unfolded RNN"/>

        <h2>RNN example</h2>
        <img src={rnnexampleImage} alt="Example: Many-to-One"/>

        <h1>Training RNNs: Backpropagation through Time (BPTT)</h1>
        <p>
            Most popular loss functions:
            <ul>
                <li>regression task: Mean Squared Error</li>
                <li>classification: cross-entropy</li>
            </ul>
        </p>
        <p>
            Notation to explain BPTT:
            <ul>
                <li>\(\vec{d}_i\): \(i\)-th desired output, \(i \in {1,2,3}\). - given to the network.</li>
                <li> \(\vec{y}_i\): \(i\)-th calculated output, \(i \in {1,2,3}\). - extracted from the network.</li>
                <li>\(\mathcal{E}\): Expected value</li>
                <li>\(\mathcal{L}\): loss function</li>
                <li>\(E\): error</li>
            </ul>
        </p>

        <h2>Unfolded RNN model for first 3 timesteps</h2>
        <img src={bpttrnnImage} alt="Unfolded RNN for the first 3 timesteps"/>

        <h3>Update weight matrices \(W_y, W_s\) and \(W_x\) at time \(t=3\)</h3>
        NOTE: \(E_3 = E_3(\vec{y}_3(W_y, \vec{s}_3(\vec{x}_3, W_x,W_s, \vec{s}_2(W_x, \vec{x}_2, W_s, \vec{s}_1(\vec{x}_1, W_x, W_s, 0)))))\).

        <h4>Update output weight matrix \(W_y\)</h4>
        \(\Delta W_y := \dfrac{\partial E_3}{\partial W_y} =   \dfrac{\partial E_3}{\partial \vec{y}_3} \dfrac{\partial \vec{y}_3}{\partial W_y}\)

        <h4>Update state weight matrix \(W_s\)</h4>
        <p>    \(\Delta W_s := \dfrac{\partial E_3}{\partial W_s} =   
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_3} \dfrac{\partial \vec{s}_3}{\partial W_s} + 
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_3}\dfrac{\partial \vec{s}_3}{\partial \vec{s}_2} \dfrac{\partial \vec{s}_2}{\partial W_s} +
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_3}\dfrac{\partial \vec{s}_3}{\partial \vec{s}_2} \dfrac{\partial \vec{s}_2}{\partial \vec{s}_1} \dfrac{\partial \vec{s}_1}{\partial W_s}
            = \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_3} \dfrac{\partial \vec{s}_3}{\partial W_s} + 
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_2} \dfrac{\partial \vec{s}_2}{\partial W_s} +
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_2} \dfrac{\partial \vec{s}_2}{\partial \vec{s}_1} \dfrac{\partial \vec{s}_1}{\partial W_s}
            \) </p>
        <p>\(\Rightarrow\) <b>General equation for updating \(W_s\): </b>
            \(\dfrac{\partial E_N}{\partial W_s} = \sum\limits_{i=1}^N \dfrac{\partial E_N}{\partial \vec{y}_N}\dfrac{\partial y_N}{\partial \vec{s}_i}\dfrac{\partial \vec{s}_i}{\partial W_s}\)
        </p>

        <h4>Update state weight matrix \(W_x\)</h4>
        <p>
            \(\Delta W_x := \dfrac{\partial E_3}{\partial W_x} =   
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_3} \dfrac{\partial \vec{s}_3}{\partial W_x} + 
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_3}\dfrac{\partial \vec{s}_3}{\partial \vec{s}_2} \dfrac{\partial \vec{s}_2}{\partial W_x} +
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_3}\dfrac{\partial \vec{s}_3}{\partial \vec{s}_2} \dfrac{\partial \vec{s}_2}{\partial \vec{s}_1} \dfrac{\partial \vec{s}_1}{\partial W_x}
            = \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_3} \dfrac{\partial \vec{s}_3}{\partial W_x} + 
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_2} \dfrac{\partial \vec{s}_2}{\partial W_x} +
            \dfrac{\partial E_3}{\partial \vec{y}_3}\dfrac{\partial \vec{y}_3}{\partial \vec{s}_2} \dfrac{\partial \vec{s}_2}{\partial \vec{s}_1} \dfrac{\partial \vec{s}_1}{\partial W_x}
            \)
        </p>
        <p>\(\Rightarrow\) <b>General equation for updating \(W_x\): </b> \(\\\)
            \(\dfrac{\partial E_N}{\partial W_x} = \sum\limits_{i=1}^N \dfrac{\partial E_N}{\partial \vec{y}_N}\dfrac{\partial y_N}{\partial \vec{s}_i}\dfrac{\partial \vec{s}_i}{\partial W_x}\)
        </p>

        <h3>On the Vanishing Gradient Problem</h3>
        <p>The formula above show that for more than a small number of timesteps a lot of multiplications will have to be performed; if the multiplied values are small, the resulting gradient weight update will be very close to 0. This is also referred to as vanishing gradient problem.</p>

        <h3>Gradient Clipping</h3>
        <p>
            The formula above show that for more than a small number of timesteps a lot of multiplications will have to be performed; if the multiplied values are big, the resulting gradient weight update will explode over time. To avoid an exploding gradient, so-called gradient clipping can be used, i.e.
            weight update at timestep 
        \(t: \delta = 
        \begin{cases} 
        \dfrac{\partial y}{\partial W_{ij}} & \dfrac{\partial y}{\partial W_{ij}} \leq threshold \\
        \dfrac{\dfrac{\partial y}{\partial W_{ij}}}{\left\lVert \dfrac{\partial y}{\partial W_{ij}} \right\rVert_2} & \dfrac{\partial y}{\partial W_{ij}} > threshold 
        \end{cases}\)
        </p>

        <h2>Update rule for weight matrix \(U\) at timestep \(t+1\) over \(2\) timesteps</h2>
        <img src="/images/deep-learning/2layer_folded_RNN.png" alt="example of two layer folded RNN model"/>
        <p>
            <MathJax>
            {
                "\\(\\dfrac{\\partial E_{t+1}}{\\partial U} = \\\\ \\dfrac{\\partial E_{t+1}}{\partial \vec{y}_{t+1}}\\dfrac{\partial \vec{y}_{t+1}}{\\partial \vec{z}_{t+1}}\dfrac{\partial \vec{z}_{t+1}}{\partial \vec{s}_{t+1}}\dfrac{\partial \vec{s}_{t+1}}{\partial U} + \\dfrac{\\partial E_{t+1}}{\\partial \\vec{y}_{t+1}}\\dfrac{\\partial \\vec{y}_{t+1}}{\\partial \\vec{z}_{t+1}}\\dfrac{\\partial \\vec{z}_{t+1}}{\\partial \\vec{z}_t}\\dfrac{\\partial \\vec{z}_{t}}{\\partial \\vec{s}_{t}}\\dfrac{\\partial \\vec{s}_{t}}{\\partial U}+ \\dfrac{\\partial E_{t+1}}{\\partial \\vec{y}_{t+1}}\\dfrac{\\partial \\vec{y}_{t+1}}{\\partial \\vec{z}_{t+1}}\\dfrac{\\partial \\vec{z}_{t+1}}{\\partial \\vec{s}_{t+1}}\\dfrac{\\partial \\vec{s}_{t+1}}{\\partial \\vec{s}_{t}}\\dfrac{\\partial \\vec{s}_{t}}{\\partial U}. \\)"
                }        
            </MathJax>
        </p>    

        <h1>RNN neuron</h1>
        <img src={rnnneuronImage} alt="RNN neuron"/>

        </>
    )
}
