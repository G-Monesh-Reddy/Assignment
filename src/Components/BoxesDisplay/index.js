import "./index.css";

const BoxesDisplay = (props) => {
    const { data, colorChange } = props;
    const { id, color } = data;

    const ChangeColor = () => {
        colorChange(id);
    };

    let Boxcolor = "box-normal";
    if (color === "green") {
        Boxcolor = "box-green";
    } else if (color === "orange") {
        Boxcolor = "box-orange";
    }

    return <div className={Boxcolor} onClick={ChangeColor}></div>;
};

export default BoxesDisplay;
