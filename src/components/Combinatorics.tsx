import { MathJax, MathJaxContext } from "better-react-mathjax";
import withoutReplacementImage from "../assets/images/combinatorics/without_replacement.svg";
import withReplacementImage from "../assets/images/combinatorics/unordered_with_replacement.svg";

export default function Combinatorics() {
  const mathJaxConfig = {
    tex: {
      tags: "all",
    },
  };
  return (
    <MathJaxContext version={3} config={mathJaxConfig}>
      <div className="grid">
        <div className="row">
          <div className="col-12">
            <h1>Introduction to drawing marbles</h1>
            <p>
              Intro Text
              <table border="1" cellpadding="5" cellspacing="5">
                <caption> Formulas </caption>
                <tr>
                  <td></td>
                  <th scope="col">Ordered</th>
                  <th scope="col">Unordered</th>
                </tr>
                <tr>
                  <th scope="row">Without replacement</th>
                  <td align="center">
                    {" "}
                    <MathJax>{"\\(\\frac{n!}{(n-k)!}\\)"}</MathJax>
                  </td>
                  <td align="center">
                    {" "}
                    <MathJax>{"\\(\\binom{n}{k}\\)"}</MathJax>{" "}
                  </td>
                </tr>
                <tr>
                  <th scope="row">With replacement </th>
                  <td align="center">
                    {" "}
                    <MathJax>{"\\(n^k\\)"}</MathJax>{" "}
                  </td>
                  <td align="center">
                    {" "}
                    <MathJax>{"\\(\\binom{n+k-1}{k}\\)"}</MathJax>
                  </td>
                </tr>
              </table>
            </p>
            <h1>Draws without replacement</h1>
            <img
              src={withoutReplacementImage}
              alt="Photo for drawing without replacement"
            />
            <h2>Ordered draw without replacement</h2>
            <p>
              <MathJax>
                {
                  "Ordered draw without replacement immediately implies that the number of draws \\(k\\) has to be smaller or equal to the number of items \\(n\\) drawn."
                }
              </MathJax>
              <MathJax>
                {
                  "You realize in the figure above that for the \\(k\\)-th draw you have \\(n-(k-1)\\) choices and after the the \\(k\\)-th draw draw you have \\(n-k\\) balls left. "
                }
              </MathJax>
              This means that the total number of combinations you can make is:
              <p>
                <MathJax>
                  {
                    "\\(n \\cdot (n-1) \\cdot \\ldots \\cdot (n-(k-1)) = \\frac{n \\cdot (n-1) \\cdot \\ldots \\cdot (n-(k-1)) \\cdot (n-k) \\cdot \\ldots \\cdot 2 \\cdot 1}{(n-k) \\cdot (n-k-1) \\cdot \\ldots \\cdot 2 \\cdot 1} = \\frac{n!}{(n-k)!}.\\)"
                  }
                </MathJax>
              </p>
              <MathJax>
                {
                  "For the special case \\(k=n\\) the expression simplifies to: \\(n!\\)"
                }
              </MathJax>
            </p>
            <h2>Unordered Draw without replacement</h2>
            <p>
              <MathJax>
                {
                  "Here it is very important to note that we only count unique combinations of balls, which means that for \\(k=n\\) there is only \\(\\textit{one}\\) combination."
                }
              </MathJax>
              <MathJax>
                {
                  "For \\(k\\) draws of balls there are exactly \\(k \\cdot (k-1) \\cdots 2 \\cdot 1 = k!\\) permutations, which is exactly the logic that applies to the \\(\\textit{ordered draw without replacement}\\)"
                }
              </MathJax>

              <MathJax>
                {
                  "This means that we need to divide the formula for the ordered draw by \\(k!\\) to obtain the formula for the unordered case: "
                }
              </MathJax>
              <MathJax>
                {"\\(\\frac{n!}{k! \\cdot (n-k)!} := \\binom{n}{k}\\)."}
              </MathJax>
            </p>
            <h1>Draws with replacement</h1>
            <p>Here the same item can be drawn multiple times.</p>
            <h2>Ordered Draw with replacement</h2>
            <p>
              This case is rather simple, as in every draw n balls are available
              and so the amount of different draws is:
              <p>
                <MathJax>{"\\(n^k\\)."}</MathJax>
              </p>
            </p>
            <h2>Unordered Draw with replacement</h2>
            <p>
              In case the draw is unordered, one can obtain a formula by using
              an analogy (which essentially tries to refer to the case without
              replacement), which I want to explain with the help of the
              following figure:
            </p>
            <img
              src={withReplacementImage}
              alt="Photo explaining unordered draw with replacement"
            />
            <p>
              <MathJax>
                {
                  "Imagine you have \\(k\\) buckets to place your marbles into and you also have at least \\(k\\) objects of each kind of marble. As the order does not count, you can imagine that you have a slider or separator for each kind of marble: for \\(n\\) marbles you need \\(n-1\\) separations. Now each unique arrangement will have different slider positions. In principle,each slider has \\(k\\) positions to select from. "
                }
              </MathJax>
              <MathJax>
                {
                  "Here comes the crux: As multiple sliders can occupy the same position, the positions you draw from equals the number of bucketsplus the number of sliders = \\(k+(n-1)\\). We have to place \\(n-1\\) sliders, therefore the number of arrangements are:"
                }
              </MathJax>

              <p>
                <MathJax>
                  {"\\(\\binom{k+(n-1)}{n-1} = \\binom{k+(n-1)}{k}\\)"}
                </MathJax>
                .
              </p>
            </p>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
}
