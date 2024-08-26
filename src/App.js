import { Component } from "react";
import "./App.css";
import BoxesDisplay from "./Components/BoxesDisplay";

const boxes = [
    { id: 1, color: "normal" },
    { id: 2, color: "normal" },
    { id: 3, color: "normal" },
    { id: 4, color: "normal" },
    { id: 5, color: "normal" },
    { id: 6, color: "normal" },
    { id: 7, color: "normal" },
    { id: 8, color: "normal" },
    { id: 9, color: "normal" },
];

class App extends Component {
    state = { gridBoxes: boxes, subSequent: [], count: 0 };

    colorChange = (id) => {
        console.log(id);

        const updatedGridBoxes = this.state.gridBoxes.map((box) =>
            box.id === id ? { ...box, color: "green" } : box
        );

        const updatedSubSequent = [...this.state.subSequent, id];

        const updatedCount = this.state.count + 1;

        this.setState({
            gridBoxes: updatedGridBoxes,
            subSequent: updatedSubSequent,
            count: updatedCount,
        });
    };

    ChangeColorToOrange = (order) => {
        order.forEach((id, index) => {
            setTimeout(() => {
                const updatedGridBoxes = this.state.gridBoxes.map((box) =>
                    box.id === id ? { ...box, color: "orange" } : box
                );
                this.setState({ gridBoxes: updatedGridBoxes });
            }, index * 500);
        });
    };

    render() {
        const { gridBoxes, count, subSequent } = this.state;
        if (count === 9) {
            this.ChangeColorToOrange(subSequent);
        }

        return (
            <ul className="grid">
                {gridBoxes.map((box) => (
                    <BoxesDisplay
                        key={box.id}
                        data={box}
                        colorChange={this.colorChange}
                    />
                ))}
            </ul>
        );
    }
}

export default App;
