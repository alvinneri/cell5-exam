import { Button } from "antd";
import IconInterface from "./icon.interface";

const IconComponent = ({ icon, styles, description, onClick }: IconInterface) => {
    return (
        <Button
            shape="circle"
            icon={icon}
            style={{ border: "1px solid black", ...styles }}
            onClick={onClick}
        >
            {description}
        </Button>
    );
};

export default IconComponent;
