import { createRoot } from "react-dom/client";

const Ripple = ({top, left}) => (
    <span style={{top, left}} id="ripple-shape" className="ripple-shape"></span>
)

const createRipple = (e, name) => { 
    if (!document.getElementById("ripple-shape")) {
        const btn = e?.currentTarget;  
        const rect = btn.getBoundingClientRect();
        const top = `${e.clientY - rect.y}px`;
        const left = `${e.clientX - rect.x}px`;

        const container = createRoot(
            document.getElementById(`ripple-container-${name}`)
        );

        container.render(<Ripple top={top} left={left} />);
        setTimeout(() => {
            container.unmount();
        }, 500);
    }
};

export const useRipple = () => {
    return [createRipple];
};