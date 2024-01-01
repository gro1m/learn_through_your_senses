export default function Blog(){
    return (
        <main>
            <nav>
                <input type="checkbox" id="menu" />
                <label htmlFor="menu" id="nav-icon">&#9776; My Blogs...</label>
                <div className="nav-main">
                    <div className="nav-item">
                        <input type="checkbox" id="prob" />
                        <img alt="Navigation Arrow Down" src="/images/Arrow.png" className="arrow"/>
                            <label htmlFor="prob">Probability Theory and Statistics</label>
                        <ul>
                            <li>
                                <a href="/combinatorics">Combinatorics</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-item">
                        <input type="checkbox" id="ml" />
                        <img alt="Navigation Arrow Down" src="/images/Arrow.png" className="arrow"/>
                            <label htmlFor="ml">Machine Learning</label>
                        <ul>
                            <input type="checkbox" id="dl" />
                            <img alt="Navigation Arrow Down" src="/images/Arrow.png" className="arrow-ul"/>
                                <label htmlFor="dl">Deep Learning</label>
                            <ul>
                                <li><a href="/lstm">Long Short-Term Memory</a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="nav-item">
                        <input type="checkbox" id="comp" />
                        <img alt="Navigation Arrow Down" src="/images/Arrow.png" className="arrow"/>
                            <label htmlFor="comp">Computing</label>
                        <ul>
                            <input type="checkbox" id="build_computer_intro" />
                            <img alt="Navigation Arrow Down" src="/images/Arrow.png" className="arrow-ul" />
                                <label htmlFor="build_computer_intro">Build 8-bit Computer</label>
                            <ul>
                                <li>
                                    <a href="/build_computer_intro">Introduction</a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </main>
    )
}

