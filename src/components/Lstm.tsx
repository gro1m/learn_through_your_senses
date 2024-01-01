import { MathJax } from "better-react-mathjax";
import lstm1Image from "../assets/images/deep-learning/lstm1.png";
import lstm2Image from "../assets/images/deep-learning/lstm2.png";
import lstm3Image from "../assets/images/deep-learning/lstm3.png";
import gruImage from "../assets/images/deep-learning/GRU.png";
import lstmprocess1Image from "../assets/images/deep-learning/charlstmprocess_1.png";
import lstmprocess2Image from "../assets/images/deep-learning/charlstmprocess_1.png";

export default function Lstm() {
  return (
    <>
      <h1>LSTM neuron</h1>
      <p>
        <img src={lstm1Image} alt="LSTM neuron explicit version" width="70%" height="70%"/>
      </p>
      <p>
        Using
        <MathJax>
          {
            "\\( \\begin{bmatrix} STM_{t-1} & x_t \\end{bmatrix}W_f + b_f = \\begin{bmatrix} STM_{t-1} & x_t & 1\\end{bmatrix}\\begin{bmatrix} W_f \\\\ b_f^T \\end{bmatrix} \\)"
          }
        </MathJax>
        , the diagram can be simplified to:
        <p>
          <img src={lstm2Image} alt="LSTM neuron more summarized version" width="70%" height="70%" />
        </p>
      </p>
      <ul>
        In the following:
        <li>
          <i>c</i> denotes <i>cell state</i> or <i>LTM</i> (long-term memory)
        </li>
        <li>
          <i>h</i> denotes <i>hidden state</i> or <i>STM</i> (short-term memory)
        </li>
      </ul>
      A simplified and summarized schematic of the diagram above with the
      notation as just introduced, reads as:
      <p>
        <img src={lstm3Image} alt="LSTM summarized version" width="70%" height="70%"/>
      </p>
      <h2>Formulas</h2>
      <p>
        combine factor{" "}
        <MathJax>
          {"\\(\\vec{N}_t = \\tanh(W_n[\\text{STM}_{t-1}, \\vec{x}_t]+b_n) \\)"}
        </MathJax>
      </p>
      <p>
        ignore factor{" "}
        <MathJax>
          {
            "\\(\\vec{i}_t = \\sigma(W_i[\\text{STM}_{t-1}, \\vec{x}_t]+b_i) \\)"
          }
        </MathJax>
      </p>
      <p>
        forget factor{" "}
        <MathJax>
          {"\\(\\vec{f}_t = \\sigma(W_f[\\text{STM}_{t-1}, \\vec{x}_t]+b_f) \\)"}
        </MathJax>
      </p>
      <p>
        use factor{" "}
        <MathJax>
          {
            "\\(\\vec{U}_t = \\tanh(W_u[\\text{LTM}_{t-1}] \\cdot \\vec{f}_t+b_u) \\)"
          }
        </MathJax>
      </p>
      <p>
        output factor{" "}
        <MathJax>
          {"\\(\\vec{v}_t = \\sigma(W_v[\\text{STM}_{t-1}, \\vec{x}_t]+b_v)\\)"}
        </MathJax>
      </p>
      <h2>Long Short-Term Memory with Peephole Connections</h2>
      Add Long Short-Term Memory information to calculate the ignore factors,
      forget factors and output factors, i.e.:
      <p>
        {" "}
        <MathJax>
          {
            "\\(\\vec{i}_t = \\sigma(W_i[\\text{LTM}_{t-1}, \\text{STM}_{t-1}, \\vec{x}_t]+b_i)\\)"
          }
        </MathJax>
      </p>
      <p>
        <MathJax>
          {
            "\\(\\vec{f}_t = \\sigma(W_f[\\text{LTM}_{t-1}, \\text{STM}_{t-1}, \\vec{x}_t]+b_f)\\)"
          }
        </MathJax>
      </p>
      <p>
        <MathJax>
          {
            "\\(\\vec{v}_t = \\sigma(W_v[\\text{LTM}_{t-1}, \\text{STM}_{t-1}, \\vec{x}_t]+b_v)\\)"
          }
        </MathJax>
      </p>
      <h2>Gated Recurrent Unit (GRU)</h2>
      Combines LSTM's forget gate and learn gate into an update gate and then
      runs this through a combine gate.
      <p>
        <img src={gruImage} alt="Gated Recurrent Unit" width="70%" height="70%"/>
      </p>
      <h2>Character-wise LSTM</h2>
      In the following, <MathJax>{"\\(\\ell \\in \\{1,2\\}\\)"}</MathJax> will
      represent the layer number and{" "}
      <MathJax>{"\\(t \\in \\{0, 1, \\dots, M\\}\\)"}</MathJax> represents the time.
      <h3>Definitions</h3>
      <ul>
        <li>
          {" "}
          <MathJax>{"\\(N\\): batch size."}</MathJax>
        </li>
        <li>
          {" "}
          <MathJax>{"\\(N\\): number of time steps"}</MathJax>
        </li>
        <li>
          {" "}
          <MathJax>{"\\(V\\): vocabulary size"}</MathJax>
        </li>
        <li>
          {" "}
          <MathJax>{"\\(L_\\ell\\): number of hidden nodes in layer \\(\\ell\\) per gate."}</MathJax>
        </li>
        <li>
          <MathJax>{"\\(W_f^\\ell\\): weights of \\(\\textit{forget}\\) gate layer \\(\\ell\\)."}</MathJax>
        </li>
        <li>
          <MathJax>{"\\(W_n^\\ell\\): weights of \\(\\textit{new}\\) gate in layer \\(\\ell\\)."}</MathJax>
        </li>
        <li>
          <MathJax>{"\\(W_i^\\ell\\): weights of \\(\\textit{input}\\) gate in layer \\(\\ell\\)."}</MathJax> 
        </li>
        <li>
          <MathJax>{"\\(W_o^\\ell\\): weights of \\(\\textit{output}\\) gate in layer \\(\\ell\\)."}</MathJax>
        </li>
        <li>
          <MathJax>{"\\(x_t\\): input at time \\(t\\)."}</MathJax>
        </li>
        <li>
          <MathJax>{"\\(h_t^\\ell\\): hidden state at time \\(t\\) in layer \\(\\ell\\) - short-term memory."}</MathJax>
        </li>
        <li>
          <MathJax>{"\\(c_t^\\ell\\): cell state at time \\(t\\) in layer \\(\\ell\\) - long-term memory."}</MathJax>
        </li>
        <li>
          <MathJax>{"\\(\\mathbb{1}_N\\): \\(N \\times N\\)-matrix filled with all ones."}</MathJax>
        </li>
      </ul>
      Inferred measures:
      <ul>
        <li><MathJax>{"number of characters per batch = \\(N \\cdot M\\)"}</MathJax></li>
        <li>
        <MathJax>{"hidden state tensor output size in layer \\(k = N \\cdot M \\cdot L_k\\)"}</MathJax>
        </li>
      </ul>
      Important note:
      <ul>
        <li>
          Tensorflow LSTM cell corresponds to (termed correctly) an LSTM layer.
        </li>
      </ul>
      <h3>Process</h3>
      <p>
        <img
          src={lstmprocess1Image}
          alt="Characterwise LSTM 2layer full part 1" width="70%" height="70%"
        />
        <img
          src={lstmprocess2Image}
          alt="Characterwise LSTM 2layer full part 2" width="70%" height="70%"
        />
      </p>
    </>
  );
}
